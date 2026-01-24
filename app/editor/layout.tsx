import { Suspense } from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="flex flex-row w-screen h-screen overflow-hidden">
        <main className="flex-1 flex flex-col h-full overflow-hidden">
            <Suspense fallback={<div className="p-10 text-center">Loading editor...</div>}>
              {children}
            </Suspense>
        </main>
      </div>
  )
}
