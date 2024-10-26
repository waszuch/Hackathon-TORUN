import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.css'
import { CamSec } from "./components/cam-sec"
import { SearchBar } from "./components/search-bar"
import { ModeToggle } from './components/mode-toggle'
import Header from "./components/header"
import { PanelInfo } from "./components/panel-info"
import { useState } from "react"

function App() {
  const [showCamSec, setShowCamSec] = useState(false)

  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="absolute top-4 right-4 z-10">
          <ModeToggle />
        </div>
        <SidebarProvider>
          <AppSidebar />
          <main >
            
            <Header />
            <SidebarTrigger />
            <Routes>
              <Route path="/" element={
                <>
                  <SearchBar onLocationConfirmed={setShowCamSec} />
                  {showCamSec && <CamSec />}
                </>
              } />
              <Route path="/panel-info" element={<PanelInfo />} />
            </Routes>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App