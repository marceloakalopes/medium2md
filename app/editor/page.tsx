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
import { EditorContext } from "@/context/EditorContext";

export default function EditorPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");

  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (url) {
      setLoading(true);
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
        } catch (error: unknown) {
          if (error instanceof Error) {
            setMarkdown(error.message);
          } else {
            setMarkdown("An unexpected error occurred.");
          }
        } finally {
          setLoading(false);
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
                {loading ? (
                  // Loading Spinner
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    className="markdown-body"
                  >
                    {markdown}
                  </ReactMarkdown>
                )}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

      </div>
    </EditorContext.Provider>
  );
}
