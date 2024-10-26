import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import './style.css'
import { CamSec } from "./components/cam-sec"
import { SearchBar } from "./components/search-bar"
import { ModeToggle } from './components/mode-toggle';
import ReportCounter from "./components/report-counter"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4 z-10">
          <ModeToggle />
        </div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <SearchBar />
          <CamSec />
          <ReportCounter count={0} />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}
export default App