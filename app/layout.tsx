import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interTight = localFont({
  src: "./fonts/InterTight.ttf",
});

export const metadata: Metadata = {
  title: {
    default: "Medium to Markdown — Free Online Converter | medium2md",
    template: "%s | medium2md",
  },
  description:
    "Convert Medium articles to Markdown instantly for free. Paste any Medium URL and get clean, formatted Markdown in seconds. No signup required. Open source.",
  keywords: [
    "medium to markdown",
    "medium to md",
    "medium article to markdown",
    "convert medium to markdown",
    "medium markdown converter",
    "medium article converter",
    "markdown converter",
    "medium md",
    "md medium",
    "markdown to medium",
    "medium to markdown tool",
    "medium to markdown converter",
    "free markdown converter",
    "online markdown converter",
    "medium export markdown",
  ],
  authors: [{ name: "Marcelo Lopes", url: "https://marcel0.com" }],
  creator: "Marcelo Lopes",
  publisher: "medium2md",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://medium2md.com",
  },
  openGraph: {
    title: "Medium to Markdown — Free Online Converter",
    description:
      "Convert any Medium article to clean Markdown in seconds. Free, open source, no signup required.",
    url: "https://medium2md.com",
    siteName: "medium2md",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medium to Markdown — Free Online Converter | medium2md",
    description:
      "Convert any Medium article to clean Markdown in seconds. Free, open source, no signup.",
  },
  other: {
    "application-name": "medium2md",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "medium2md — Medium to Markdown Converter",
      url: "https://medium2md.com",
      description:
        "Free online tool to convert Medium articles to Markdown format. Paste a Medium URL and get clean, formatted Markdown instantly.",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Convert Medium articles to Markdown",
        "Split-screen Markdown editor and preview",
        "Preserves images, links, and code blocks",
        "One-click clipboard paste",
        "Free and open source",
      ],
      author: {
        "@type": "Person",
        name: "Marcelo Lopes",
        url: "https://marcel0.com",
      },
    },
    {
      "@type": "WebSite",
      name: "medium2md",
      url: "https://medium2md.com",
      description: "Convert Medium articles to Markdown",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I convert a Medium article to Markdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply paste the Medium article URL into the input field on medium2md.com and click Convert. Your article will be instantly converted to clean Markdown format that you can edit and copy.",
          },
        },
        {
          "@type": "Question",
          name: "Is medium2md free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, medium2md is completely free and open source. There are no usage limits, no signup required, and no hidden costs.",
          },
        },
        {
          "@type": "Question",
          name: "What Medium URL formats are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "medium2md supports all Medium URL formats including medium.com/@username/article, medium.com/publication/article, and custom domain formats like username.medium.com/article.",
          },
        },
        {
          "@type": "Question",
          name: "Does medium2md preserve images and code blocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, medium2md preserves images with proper alt text and captions, maintains all hyperlinks, and correctly formats code blocks with syntax highlighting in the Markdown output.",
          },
        },
        {
          "@type": "Question",
          name: "Can I edit the Markdown after conversion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, after conversion you get a split-screen editor where you can edit the Markdown on the left and see a live preview on the right. You can then copy the final result to your clipboard.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${interTight.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
