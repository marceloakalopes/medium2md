import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interTight = localFont({
  src: "./fonts/InterTight.ttf"
})

export const metadata: Metadata = {
  title: "Medium to Markdown - The Easiest Way to Convert Medium Articles to Markdown",
  description:
    "Convert Medium posts to Markdown instantly and for free. Paste your Medium article URL and get a clean Markdown version in seconds.",
  keywords: ["Medium to Markdown", "Markdown converter", "Medium article converter", "Markdown tool", "Convert medium articles to markdown free"],
  authors: [{ name: "Marcelo Lopes", url: "https://marcel0.dev" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://medium2md.com/",
  },
  openGraph: {
    title: "Medium to Markdown - Free Online Converter",
    description: "Easily convert Medium articles to Markdown format with a single click.",
    url: "https://medium2md.com/",
    siteName: "Medium to Markdown Converter",
    images: [
      {
        url: "https://github.com/marceloakalopes/medium2md/blob/main/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Medium to Markdown Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medium to Markdown",
    description: "Convert Medium articles to Markdown quickly and easily.",
    images: ["https://github.com/marceloakalopes/medium2md/blob/main/images/banner.png"], // Placeholder; add your Twitter share image
  },
  other: {
    "application-name": "Medium to Markdown Converter",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
