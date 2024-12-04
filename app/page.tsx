"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, ClipboardPaste } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleConvert = () => {
    if (url.trim() !== "") {
      router.push(`/editor?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <main className="px-4 z-0">
        {/* Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        {/* Main Content */}
        <div className="flex gap-10  flex-col items-center justify-center max-w-3xl text-center">
          <Link
            target="_blank"
            href="https://github.com/marceloakalopes/medium2md"
          >
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                Open Source ⚡️
                <span className="inline-flex items-center pl-2 text-black dark:text-white">
                  Read more{" "}
                  <ArrowRight
                    className="pl-0.5 text-black dark:text-white"
                    size={16}
                  />
                </span>
              </div>
            </span>
          </Link>
          <h1 className="text-6xl font-medium tracking-tight text-gray-900">
            The easiest way to convert medium articles to markdown
          </h1>
          <p className="text-lg max-w-xl font-medium text-gray-600">
            Convert medium articles to markdown in seconds. Just paste the URL
            of the article and click convert. It's that simple.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input
              className="min-w-96 bg-white border-gray-400 text-black h-10"
              type="email"
              placeholder="Enter Medium Article URL"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {
                      setUrl("");
                      navigator.clipboard.readText().then((text) => {
                        setUrl(text);
                      });
                    }}
                    className="w-full h-10 border border-zinc-300 active:scale-95 transition-all duration-200"
                  >
                    <ClipboardPaste />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Paste</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              onClick={handleConvert}
              variant="secondary"
              className="h-10"
            >
              Convert
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
