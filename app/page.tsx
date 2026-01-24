"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IconClone, IconOctopus } from "nucleo-arcade";
import { ChevronRight } from "lucide-react";
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
    <div className="relative flex justify-center items-center h-[100dvh] bg-gray-50 w-screen overflow-hidden">
      {/* grids */}
      <div className="absolute z-0 grid grid-cols-4 left-48 bottom-24 max-md:hidden [mask-image:radial-gradient(circle,black_40%,transparent_70%)]">
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

      <div className="absolute z-0 grid grid-cols-4 -right-12 top-24 [mask-image:radial-gradient(circle,black_40%,transparent_70%)]">
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

      <nav className="fixed z-10 top-0 max-w-2xl flex items-center justify-between w-full h-16 text-black border-x max-md:border-x-0 border-b border-zinc-200">
        <div className="pl-6">
          <IconOctopus />
        </div>
        <Link
          className="h-full"
          href="https://github.com/marceloakalopes/medium2md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center justify-center gap-1 pr-4 pl-5 h-full cursor-pointer text-white bg-[#161616] hover:opacity-90 transition-opacity duration-200">
            <p className="font-semibold text-sm uppercase">Contribute</p>
            <ChevronRight className="w-4 h-4" />
          </button>
        </Link>
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
            <div className="flex items-center justify-center gap-2 text-black font-semibold text-sm max-md:text-xs uppercase">
              <span>Open Source</span>
              <span className="text-zinc-300">/</span>
              <span>Learn More</span>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1
              id="heading"
              className="text-5xl max-sm:text-3xl max-sm:px-4 font-medium tracking-tight text-gray-900"
            >
              The easiest way to convert <br /> medium articles to markdown
            </h1>
            <p
              id="paragraph"
              className="text-md max-sm:px-4 max-sm:text-sm max-w-xl font-medium text-gray-500"
            >
              Convert Medium articles to markdown in seconds. <br /> Just paste
              the URL of the article and click convert. It&apos;s that simple.
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
              placeholder="Enter medium article URL"
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

      {/* footer */}
      <footer></footer>
    </div>
  );
}
