"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link2,
  Unlink,
  Copy,
  Download,
  FileX2,
  Lock,
  Pencil,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { addBold } from "@/lib/utils";
import { addItalic } from "@/lib/utils";
import { addOrderedList } from "@/lib/utils";
import { addUnorderedList } from "@/lib/utils";
import { copyMarkdownToClipboard } from "@/lib/utils";
import { downloadMarkdown } from "@/lib/utils";
import { addMakdownLink } from "@/lib/utils";
import { useEditorContext } from "@/context/EditorContext";
import { removeMarkdownLink } from "@/lib/utils";

export function ReviewToolbar() {
  const [title, setTitle] = useEditorContext();

  const { toast } = useToast();
  const [rename, setRename] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="flex flex-col bg-zinc-900 text-white border-b border-zinc-700">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileX2 className="w-4 h-4 ml-2 mr-1" />
            <h3 className="font-bold">{`${title}.md`}</h3>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Pencil className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Rename File</DialogTitle>
                </DialogHeader>
                <div className="flex items-end gap-1">
                  <Input
                    value={rename}
                    id="filename"
                    placeholder="Enter a new name"
                    className="w-full"
                    onChange={(event) => setRename(event.target.value)}
                  />
                  <span className="text-xs font-bold">.md</span>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      onClick={() => {
                        setTitle(rename);
                        setRename("");
                      }}
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            className="outline-none shadow-lg transform active:scale-75 transition-all"
            onClick={() => {
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              copyMarkdownToClipboard(textarea.value);
              toast({
                title: "Copied to clipboard",
                description:
                  "The markdown content has been copied to the clipboard",
              });
            }}
            variant="ghost"
            size="sm"
          >
            <Copy className="w-4 h-4" />
            Copy
          </Button>

          <Button
            onClick={() => {
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              downloadMarkdown(textarea.value, `${title}`);
            }}
            className="max-sm:hidden outline-none shadow-lg transform active:scale-75 transition-all"
            variant="ghost"
            size="sm"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-2 border-t border-zinc-700">
        <div className="flex items-center gap-1">
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addBold(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-8 h-8"
          >
            <Bold className="w-4 h-4" />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addItalic(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-8 h-8"
          >
            <Italic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Underline className="w-4 h-4" />
          </Button>

          <Separator orientation="vertical" className="mx-1 h-6 bg-zinc-700" />

          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addUnorderedList(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-8 h-8"
          >
            <List className="w-4 h-4" />
          </Button>
          <Button
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              addOrderedList(textarea);
            }}
            variant="ghost"
            size="icon"
            className="w-8 h-8"
          >
            <ListOrdered className="w-4 h-4" />
          </Button>

          <Separator orientation="vertical" className="mx-1 h-6 bg-zinc-700" />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Link2 className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4 ">
                <div className="space-y-2 w-full justify-center items-center">
                  <h4 className="font-semibold text-sm leading-none">Create Link</h4>
                </div>
                <div className="grid gap-2">
    
                  <div className="grid grid-cols-3 items-center gap-1">
                    <Input
                      id="maxHeight"
                      placeholder="Insert URL"
                      className="col-span-2 h-8 w-full text-sm"
                      value={link}
                      onChange={(event) => setLink(event.target.value)}
                    />
                    <Button
                      onClick={() => {
                        const textarea = document.querySelector(
                          "textarea"
                        ) as HTMLTextAreaElement;
                        addMakdownLink(textarea, link);
                        setLink("");
                      }}
                    size="icon" className="w-full h-8">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button 
            onClick={(event) => {
              event.preventDefault();
              const textarea = document.querySelector(
                "textarea"
              ) as HTMLTextAreaElement;
              // console.log(textarea);
              removeMarkdownLink(textarea);
            }}
          variant="ghost" size="icon" className="w-8 h-8">
            <Unlink className="w-4 h-4" />
          </Button>
          {/* <Button variant="ghost" size="icon" className="w-8 h-8">
            <Lightbulb className="w-4 h-4" />
          </Button> */}
        </div>

        <div className=" max-sm:hidden flex items-center gap-2">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700 dark:text-white font-bold opacity-75 cursor-not-allowed">
                    <Lock className="w-4 h-4" />
                    Save Changes
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white border border-gray-800 text-black m-1 rounded-lg">
                  <p>Sign in to save your changes</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
