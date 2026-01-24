"use client";

import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from "lucide-react";
import { IconFile, IconDownload, IconCopy } from "nucleo-arcade";
import { addBold } from "@/lib/utils";
import { addItalic } from "@/lib/utils";
import { addOrderedList } from "@/lib/utils";
import { addUnorderedList } from "@/lib/utils";
import { copyMarkdownToClipboard } from "@/lib/utils";
import { downloadMarkdown } from "@/lib/utils";
import { useEditorContext } from "@/context/EditorContext";

export function ReviewToolbar() {
  const [title, setTitle] = useEditorContext();

  return (
    <div className="flex flex-col bg-[#161616] text-white border-b border-zinc-700">
      <div className="flex items-center justify-between h-14">
        <div className="flex items-center gap-4 ml-6">
          <div className="flex items-center gap-2">
            <IconFile
              className="w-[18px] h-[18px] mr-2"
              style={
                {
                  "--nc-arcade-color-1": "#ffffff" as string,
                } as React.CSSProperties
              }
            />
            <h3 className="font-bold">{`${title}.md`}</h3>
          </div>
        </div>

        <div className="flex items-center h-full">
          <button
            onClick={() => {
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              copyMarkdownToClipboard(textarea.value);
            }}
            className="flex items-center justify-center h-full px-6 gap-1 text-white border-l border-zinc-700 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"
          >
            <IconCopy
              className="w-4 h-4 mr-2"
              style={
                {
                  "--nc-arcade-color-1": "#ffffff" as string,
                } as React.CSSProperties
              }
            />
            <span className="uppercase font-semibold text-sm">copy</span>
          </button>

          <button
            onClick={() => {
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              downloadMarkdown(textarea.value, `${title}`);
            }}
            className="flex items-center justify-center bg-white h-full px-6 gap-1 text-[#161616] hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <IconDownload
              className="w-4 h-4 mr-2"
              style={
                {
                  "--nc-arcade-color-1": "#161616" as string,
                } as React.CSSProperties
              }
            />
            <span className="font-semibold uppercase text-sm">Download</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between h-12 border-t border-zinc-700">
        <div className="flex items-center">
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addBold(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border-x border-zinc-700"
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addItalic(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border-r border-zinc-700"
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-none border-r border-zinc-700">
            <Underline className="w-4 h-4" />
          </Button>

          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addUnorderedList(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border-r border-zinc-700"
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea",
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addOrderedList(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-none border-r border-zinc-700"
          >
            <ListOrdered className="w-4 h-4" />
          </Button>

        </div>

        <div className=" max-sm:hidden flex items-center gap-2"></div>
      </div>
    </div>
  );
}
