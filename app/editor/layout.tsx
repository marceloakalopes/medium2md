import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/toaster"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex flex-row w-screen h-screen overflow-hidden">
        <AppSidebar >
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          {children}
          <Toaster /> 
        </main>
        </AppSidebar>
      </div>
      {/* <SidebarTrigger /> */}
    </SidebarProvider>
  )
}
