"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/atom-one-dark.css";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { ReviewToolbar } from "@/components/toolbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { RefreshCcw } from "lucide-react";
import { EditorContext } from "@/context/EditorContext";

export default function EditorPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { dateStyle: "full" }));
  }, []);

  useEffect(() => {
    if (url) {
      (async () => {
        try {
          const res = await fetch(`/api/convert?url=${encodeURIComponent(url)}`);
          const data = await res.json();
          if (data.error) {
            setMarkdown(data.markdown);
          } else {
            setMarkdown(data.markdown);
            setTitle(data.title || "Medium2Markdown");
          }
        } catch (error: any) {
          setMarkdown(error?.message || "Error fetching the article.");
        }
      })();
    }
  }, [url]);

  return (
    <EditorContext.Provider value={[title, setTitle]}>
      <div className="flex flex-col h-full overflow-hidden">
        {/* Toolbar at the top */}
        <ReviewToolbar />

        {/* Main content area: fill available space */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden">
            {/* Left Panel with textarea */}
            <ResizablePanel defaultSize={50} className="relative w-full overflow-hidden">
              <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Your markdown here..."
                className="bg-[#0E1117] text-white h-full w-full p-4 font-mono font-semibold text-sm outline-none overflow-auto"
              ></textarea>
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-gray-700" />

            {/* Right Panel with markdown preview */}
            <ResizablePanel defaultSize={50} className="bg-[#0E1117] w-full overflow-hidden">
              <div className="p-4 h-full overflow-auto">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  className="markdown-body"
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        {/* Footer at the bottom */}
        <footer className="flex items-center pl-6 py-2 bg-zinc-900 gap-3">
          <RefreshCcw className="w-3 h-3" color="white" />
          <p className="text-[#e8eaed] text-xs">
            Last updated on {date} by <span className="font-bold">{title}</span>
          </p>
        </footer>
      </div>
    </EditorContext.Provider>
  );
}
