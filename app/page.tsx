"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconClone, IconOctopus } from "nucleo-arcade";
import { ChevronRight, Zap, SplitSquareHorizontal, Image, Link2, Code, Copy } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const [hoverCopyButton, setHoverCopyButton] = useState(false);
  const router = useRouter();

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();

    if (url.trim() !== "") {
      router.push(`/editor?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center bg-gray-50 w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex justify-center items-center min-h-dvh w-full">
        {/* grids */}
        <div className="absolute z-0 grid grid-cols-4 left-48 bottom-24 max-md:hidden mask-[radial-gradient(circle,black_40%,transparent_70%)]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>
        </div>

        <div className="absolute z-0 grid grid-cols-4 -right-12 top-24 mask-[radial-gradient(circle,black_40%,transparent_70%)]">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
            <div className="w-16 h-16 border border-zinc-200" />
          </div>
        </div>

        <nav className="fixed z-10 top-0 max-w-2xl flex items-center justify-between w-full h-16 text-black border-x max-md:border-x-0 border-b border-zinc-200 bg-gray-50">
          <div className="pl-8">
            <Link href="/" aria-label="medium2md home">
              <IconOctopus />
            </Link>
          </div>
          <div className="flex items-center justify-center h-full">
            <Link
              className="h-full"
              href="https://buymeacoffee.com/marceloakalopes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center gap-2 px-5 border-l border-zinc-200 h-full cursor-pointer text-black hover:opacity-90 transition-opacity duration-200">
                <p className="font-semibold text-sm uppercase">Support</p>
              </button>
            </Link>
            <Link
              className="h-full"
              href="https://github.com/marceloakalopes/medium2md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group flex items-center justify-center gap-2 pr-4 pl-5 h-full cursor-pointer text-white bg-[#161616] hover:opacity-90 transition-opacity duration-200 max-md:hidden">
                <p className="font-semibold text-sm uppercase">Contribute</p>
                <ChevronRight className="p-0 group-hover:p-0.5 group-hover:bg-white w-4 h-4 group-hover:text-black transition-all duration-200" />
              </button>
            </Link>
          </div>
        </nav>

        <main className="z-10">
          {/* Main Content */}
          <div className="flex gap-10 max-sm:gap-5 flex-col items-center justify-center max-w-3xl text-center">
            <Link
              id="github"
              target="_blank"
              href="https://github.com/marceloakalopes/medium2md"
              aria-label="Open Source GitHub Repository"
            >
              <div className="group flex items-center justify-center gap-2 text-black font-semibold text-sm max-md:text-xs uppercase">
                <span>Open Source</span>
                <span className="group-hover:-rotate-30 transition-transform duration-200 text-zinc-300">
                  /
                </span>
                <span>Learn More</span>
              </div>
            </Link>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1
                id="heading"
                className="text-5xl max-sm:text-3xl max-sm:px-4 font-medium tracking-tight text-gray-900"
              >
                The easiest way to convert <br /> Medium articles to Markdown
              </h1>
              <p
                id="paragraph"
                className="text-md max-sm:px-4 max-sm:text-sm max-w-xl font-medium text-gray-500"
              >
                Convert Medium articles to Markdown in seconds. <br /> Just
                paste the URL of the article and click convert. It&apos;s that
                simple.
              </p>
            </div>
            <form
              onSubmit={handleConvert}
              id="urlDiv"
              className="max-w-md flex items-center justify-center h-14 max-md:flex-col max-md:h-28"
            >
              <input
                className="px-6 h-full min-w-96 max-sm:min-w-80 bg-white border border-zinc-200 text-black focus:outline-none focus:border-2"
                type="url"
                name="url"
                placeholder="Enter Medium article URL"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                aria-label="Medium article URL input"
                required
              />

              <button
                type="submit"
                className="text-white px-6 h-full max-md:w-full font-semibold uppercase border bg-[#161616] cursor-pointer hover:opacity-90 transition-opacity duration-200"
                aria-label="Convert URL to Markdown"
              >
                Convert
              </button>

              <button
                onMouseEnter={() => setHoverCopyButton(true)}
                onMouseLeave={() => setHoverCopyButton(false)}
                onClick={(e) => {
                  e.preventDefault();
                  setUrl("");
                  navigator.clipboard.readText().then((text) => {
                    setUrl(text);
                  });
                }}
                className="relative z-20 w-full px-6 h-full border border-zinc-200 cursor-pointer active:scale-95 transition-all duration-200 max-md:hidden"
                aria-label="Paste URL from Clipboard"
              >
                <IconClone
                  className="w-[18px] h-[18px]"
                  style={
                    {
                      "--nc-arcade-color-1": "#161616" as string,
                    } as React.CSSProperties
                  }
                />

                <span
                  className={`absolute top-[120%] left-1/2 -translate-x-1/2 w-max uppercase font-bold text-xs text-white bg-[#161616] px-3 py-1.5 z-0 pointer-events-none ${hoverCopyButton ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-50"} transition-all duration-200`}
                >
                  paste
                </span>
              </button>
            </form>
          </div>
        </main>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl max-sm:text-2xl font-medium tracking-tight text-gray-900 text-center mb-4">
          How to convert Medium to Markdown
        </h2>
        <p className="text-center text-gray-500 font-medium mb-12 max-w-xl mx-auto">
          Three simple steps to turn any Medium article into clean, portable Markdown.
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="flex flex-col items-center text-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-[#161616] text-white font-bold text-sm">
              1
            </span>
            <h3 className="font-semibold text-gray-900">Paste the URL</h3>
            <p className="text-sm text-gray-500 font-medium">
              Copy the Medium article URL and paste it into the input field above.
            </p>
          </li>
          <li className="flex flex-col items-center text-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-[#161616] text-white font-bold text-sm">
              2
            </span>
            <h3 className="font-semibold text-gray-900">Click Convert</h3>
            <p className="text-sm text-gray-500 font-medium">
              Our converter fetches the article and transforms it into clean Markdown format instantly.
            </p>
          </li>
          <li className="flex flex-col items-center text-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 bg-[#161616] text-white font-bold text-sm">
              3
            </span>
            <h3 className="font-semibold text-gray-900">Edit &amp; Copy</h3>
            <p className="text-sm text-gray-500 font-medium">
              Fine-tune the output in the split-screen editor, then copy the Markdown to your clipboard.
            </p>
          </li>
        </ol>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl max-sm:text-2xl font-medium tracking-tight text-gray-900 text-center mb-4">
          Why use medium2md?
        </h2>
        <p className="text-center text-gray-500 font-medium mb-12 max-w-xl mx-auto">
          A free, open-source Medium to Markdown converter built for speed and accuracy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "Instant Conversion",
              description:
                "Convert any Medium article to Markdown in seconds. No waiting, no signup required.",
            },
            {
              icon: SplitSquareHorizontal,
              title: "Split-Screen Editor",
              description:
                "Edit Markdown on the left, see a live preview on the right. Fine-tune your output easily.",
            },
            {
              icon: Image,
              title: "Image Preservation",
              description:
                "All images are preserved with proper alt text and captions in the Markdown output.",
            },
            {
              icon: Link2,
              title: "Link Preservation",
              description:
                "Hyperlinks, references, and embeds are maintained accurately in the converted Markdown.",
            },
            {
              icon: Code,
              title: "Code Block Support",
              description:
                "Code snippets and blocks are correctly formatted with syntax highlighting.",
            },
            {
              icon: Copy,
              title: "One-Click Copy",
              description:
                "Paste a URL from your clipboard with one click, and copy the result just as easily.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col gap-3 p-5 border border-zinc-200 bg-white"
            >
              <Icon className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl max-sm:text-2xl font-medium tracking-tight text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <dl className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
          {[
            {
              q: "How do I convert a Medium article to Markdown?",
              a: "Simply paste the Medium article URL into the input field on medium2md.com and click Convert. Your article will be instantly converted to clean Markdown format that you can edit and copy.",
            },
            {
              q: "Is medium2md free to use?",
              a: "Yes, medium2md is completely free and open source. There are no usage limits, no signup required, and no hidden costs.",
            },
            {
              q: "What Medium URL formats are supported?",
              a: "medium2md supports all Medium URL formats including medium.com/@username/article, medium.com/publication/article, and custom domain formats like username.medium.com/article.",
            },
            {
              q: "Does medium2md preserve images and code blocks?",
              a: "Yes, medium2md preserves images with proper alt text and captions, maintains all hyperlinks, and correctly formats code blocks with syntax highlighting in the Markdown output.",
            },
            {
              q: "Can I edit the Markdown after conversion?",
              a: "Yes, after conversion you get a split-screen editor where you can edit the Markdown on the left and see a live preview on the right. You can then copy the final result to your clipboard.",
            },
            {
              q: "Do I need to create an account?",
              a: "No. medium2md requires no registration or login. Just paste a URL and convert — it works instantly in your browser.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="font-semibold text-gray-900 mb-2">{q}</dt>
              <dd className="text-gray-500 font-medium text-sm leading-relaxed">
                {a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl mx-auto px-6 pb-12 pt-6 border-t border-zinc-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 font-medium">
          <p>
            medium2md — Free Medium to Markdown converter.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/marceloakalopes/medium2md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://buymeacoffee.com/marceloakalopes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
