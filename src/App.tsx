import { useState } from "react"
import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import TabSection from "./components/TabSection"
import BottomTabs from "./components/BottomTabs"
import SpreadsheetTable from "./components/SpreadsheetTable"

function App() {
  const [activeBottomTab, setActiveBottomTab] = useState("All Orders")

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Toolbar />
      <div className="bg-white">
        <TabSection />
        <SpreadsheetTable />
      </div>
      <BottomTabs activeTab={activeBottomTab} setActiveTab={setActiveBottomTab} />
    </div>
  )
}

export default App
