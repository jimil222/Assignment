import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import TabSection from "./components/TabSection"
import SpreadsheetTable from "./components/SpreadsheetTable"

function App() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Toolbar />
      <div className="bg-white">
        <TabSection />
        <SpreadsheetTable />
      </div>
    </div>
  )
}

export default App
