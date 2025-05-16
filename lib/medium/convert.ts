import TurndownService from "turndown";
import axios from "axios";
import * as cheerio from "cheerio";

const turndownService = new TurndownService();

turndownService.addRule("code blocks", {
  filter: "pre",
  replacement: function (content) {
    return "```\n" + content + "\n```";
  },
});

turndownService.addRule("line breaks", {
  filter: "br",
  replacement: function () {
    return "\n";
  },
});

turndownService.addRule("mediumInlineLink", {
  filter: function (node, options) {
    return (
      options.linkStyle === "inlined" &&
      node.nodeName === "A" &&
      (node as HTMLElement).getAttribute("href") != null
    );
  },
  replacement: function (content, node) {
    let href = (node as HTMLElement).getAttribute("href");
    if (href?.startsWith("/")) {
      href = "https://medium.com" + href;
    }
    const title = (node as HTMLElement).title
      ? ' "' + (node as HTMLElement).title + '"'
      : "";
    return "[" + content + "](" + href + title + ")";
  },
});

turndownService.addRule("mediumFigure", {
  filter: "figure",
  replacement: function (_, node) {
    const source = node.querySelector("source");
    const srcset = source ? source.getAttribute("srcset") : "";
    let caption = node.querySelector("figcaption")?.textContent;
    caption = caption || "captionless image";

    if (srcset) {
      const srcList = srcset.split(" ");
      const bestQualityImgSrc = srcList[srcList.length - 2];
      return "![" + caption + "](" + bestQualityImgSrc + ")";
    } else {
      return "<b>[other]" + caption + "[/other]</b>";
    }
  },
});

turndownService.keep(["iframe"]);

export async function convertMediumArticleToMarkdown(
  url: string
): Promise<
  | { error: false; markdown: string; title: string }
  | { error: true; markdown: string }
> {
  try {
    const hostname = new URL(url).hostname;
    if (hostname !== "medium.com") {
      return {
        error: true,
        markdown:
          "# Invalid URL: Please use a medium.com URL. \
        \
        \
          ![image](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG5ycjh2MncxaXkzcW45aHd2dXI4YWM0ZTRmdXloMjJseXl2b2VoZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xdLH51eNWZAHrwy5mf/giphy.webp)",
      };
    }

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const articleHtml = $("article").html();

    if (!articleHtml) {
      return { error: true, markdown: "Error: No article found on the page." };
    }

    // Extract title
    const title = $("article h1").first().text().trim() || "Untitled Article";

    // Extract author info
    const authorElement = $("[data-testid='authorName']").first();
    const authorName = authorElement.text().trim() || "Unknown Author";
    let authorProfileLink = authorElement.attr("href") || "";
    if (authorProfileLink.startsWith("/")) {
      authorProfileLink = "https://medium.com" + authorProfileLink;
    }

    // Remove the third (last) child of div.speechify-ignore.ab.cp
    const speechifyDiv = $("div.speechify-ignore.ab.cp").first();
    const childrenCount = speechifyDiv.children().length;
    if (childrenCount >= 3) {
      speechifyDiv.children().eq(2).remove();
    }

    // Add target="_blank" to all anchors
    $("a").attr("target", "_blank");

    // Find the main figure (banner)
    const mainFigure = $("figure.paragraph-image").first();

    // Move main figure right after the h1 title
    const titleElement = $("article h1").first();
    if (mainFigure.length > 0 && titleElement.length > 0) {
      titleElement.after(mainFigure);
    }

    // Insert the reference and by author lines after the figure (or title if no figure)
    const insertAfterElement =
      mainFigure.length > 0 ? mainFigure : titleElement;
    insertAfterElement.after(`
      <p><br></p>
      <p><a href="${url}" target="_blank">Reference</a></p>
      <p><br></p>
      <p>by <a href="${authorProfileLink}" target="_blank">${authorName}</a></p>
      <p><br></p>
    `);

    // *** Additional Cleanup Steps ***
    // Remove author and publication images
    $("img[data-testid='authorPhoto']").closest("a").remove();
    $("img[data-testid='publicationPhoto']").closest("a").remove();

    // Remove signin/follow links
    $("a[href*='/m/signin']").remove();

    // Remove publication info, 'Published in', read time, date
    // These are often inside elements with data-testid="publicationName" or siblings
    $("[data-testid='publicationName']").closest("div").remove();
    $("[data-testid='storyReadTime']").closest("span").remove();
    $("[data-testid='storyPublishDate']").closest("span").remove();
    $("[data-testid='authorName']").remove();
    $("[data-testid='headerClapButton']").remove();

    // Also remove isolated "·" lines or any leftover empty elements
    $("p:contains('·')").each(function () {
      // If the paragraph only contains the dot or whitespace, remove it
      if ($(this).text().trim() === "·") {
        $(this).remove();
      }
    });

    // Remove any empty paragraphs created by removals
    $("p").each(function () {
      if (!$(this).text().trim()) {
        $(this).remove();
      }
    });

    // Convert the final cleaned HTML to Markdown
    const rawMarkdown = turndownService.turndown($("article").html() || "");

    // Clean up the markdown
    let markdownCleaned = rawMarkdown.replace(/\\([^a-zA-Z0-9\s])/g, "$1");
    markdownCleaned = markdownCleaned.replace(/\[\n+/g, "[");
    markdownCleaned = markdownCleaned.replace(/\n+\]\(/g, "](");
    markdownCleaned = markdownCleaned.replace(/\[\]\(/g, "[nameless link](");

    // Convert into lines
    let lines = markdownCleaned.split("\n");

    // Define the lines you want to remove (exact matches)
    const undesiredLines = new Set([
      "·",
      "Published in",
      "--",
      "1",
      "Listen",
      "Share",
    ]);

    // Filter out undesired lines in the first 40 lines
    lines = lines.filter((line, index) => {
      if (index < 40 && undesiredLines.has(line.trim())) {
        return false; // remove this line
      }
      return true;
    });

    markdownCleaned = lines.join("\n");

    return { error: false, markdown: markdownCleaned, title };
  } catch (error: unknown) {
    return {
      error: true,
      markdown: (error as Error).message || "Error fetching the article",
    };
  }
}
