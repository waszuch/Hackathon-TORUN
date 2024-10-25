import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import './style.css'
import { CamSec } from "./components/cam-sec"
import { SearchBar } from "./components/search-bar"



function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <SearchBar />
        <div className="mt-1">
        <CamSec />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App
