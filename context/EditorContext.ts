import { createContext, useContext } from "react";

export const EditorContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);

export function useEditorContext() {
  return useContext(EditorContext);
}