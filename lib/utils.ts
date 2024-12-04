import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Add bold markdown to the textarea at the current selection
 * @param textarea The textarea element to add bold markdown to
 * @returns void
 */
export function addBold(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);

  const newText = `${text.slice(
    0,
    selectionStart
  )}**${selectedText}**${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

/**
 * Add italic markdown to the textarea at the current selection
 * @param textarea The textarea element to add italic markdown to
 * @returns void
 */
export function addItalic(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);

  const newText = `${text.slice(
    0,
    selectionStart
  )}_${selectedText}_${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

/**
 * Add underline markdown to the textarea at the current selection
 * @param textarea The textarea element to add underline markdown to
 * @returns void
 */
export function addUnderline(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);

  const newText = `${text.slice(
    0,
    selectionStart
  )}<u>${selectedText}</u>${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

/**
 * Create an ordered list from the selected text in the textarea
 * @param textarea The textarea element to add the ordered list to
 * @returns void
 */
export function addOrderedList(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);
  const lines = selectedText.split("\n");

  const newText = `${text.slice(0, selectionStart)}${lines
    .map((line, index) => `${index + 1}. ${line}`)
    .join("\n")}${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

/**
 * Create an unordered list from the selected text in the textarea
 * @param textarea The textarea element to add the unordered list to
 * @returns void
 */
export function addUnorderedList(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);
  const lines = selectedText.split("\n");

  const newText = `${text.slice(0, selectionStart)}${lines
    .map((line) => `- ${line}`)
    .join("\n")}${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

/**
 * Copy the markdown content to the clipboard
 * @param text The markdown content to copy to the clipboard
 * @returns void
 */
export function copyMarkdownToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

/**
 * Download the markdown content as a file
 * It prompts the user the file name and downloads the content as a markdown file
 * @param text The markdown content to download as a file
 * @param filename The name of the file to download
 * @returns void
 */
export function downloadMarkdown(text: string, filename: string) {
  const blob = new Blob([text], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  //remove special characters and spaces from the filename
  a.download = filename.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".md";
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Add a markdown link to the textarea at the current selection
 * @param textarea The textarea element to add the markdown link to
 * @returns void
 */
export function addMakdownLink(textarea: HTMLTextAreaElement, url: string) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);

  const newText = `${text.slice(
    0,
    selectionStart
  )}[${selectedText}](${url})${text.slice(selectionEnd)}`;
  textarea.value = newText;
}

export function removeMarkdownLink(textarea: HTMLTextAreaElement) {
  const { selectionStart, selectionEnd } = textarea;
  const text = textarea.value;
  const selectedText = text.substring(selectionStart, selectionEnd);

  const newText = `${text.slice(
    0,
    selectionStart
  )}${selectedText.replace(/\[|\]|\(|\)/g, "")}${text.slice(selectionEnd)}`;
  textarea.value = newText;
}