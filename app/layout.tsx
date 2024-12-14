import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Medium to Markdown - The Easiest Way to Convert Medium Articles",
  description:
    "Convert Medium posts to Markdown instantly and for free. Paste your Medium article URL and get a clean Markdown version in seconds.",
  keywords: ["Medium to Markdown", "Markdown converter", "Medium article converter", "Markdown tool", "Convert medium articles to markdown free"],
  authors: [{ name: "Marcelo Lopes", url: "https://marcel0.dev" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://medium2md.com/", // Update with your actual domain
  },
  openGraph: {
    title: "Medium to Markdown - Free Online Converter",
    description: "Easily convert Medium articles to Markdown format with a single click.",
    url: "https://medium2md.com/",
    siteName: "Medium to Markdown Converter",
    images: [
      {
        url: "https://github.com/marceloakalopes/medium2md/blob/main/images/banner.png", // Placeholder; add your OG image
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
      <head>
        {/* JSON-LD Structured Data for a Website / Tool */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Medium to Markdown Converter",
              "url": "https://yourwebsite.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://yourwebsite.com/editor?url={url}",
                "query-input": "required name=url"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
