"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleConvert = () => {
    if (url.trim() !== "") {
      router.push(`/editor?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-[#0E1117] text-white p-4">
      <h1 className="text-2xl mb-4 font-bold">Medium to Markdown Converter</h1>
      <input
        type="url"
        placeholder="Enter a medium.com article URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 w-full max-w-md bg-zinc-800 border border-zinc-700 rounded text-sm"
      />
      <button
        onClick={handleConvert}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded"
      >
        Convert
      </button>
    </div>
  );
}
