import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import TabSection from "./components/TabSection"


function App() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Toolbar />
      <div className="bg-white">
        <TabSection />
      </div>
    </div>
  )
}

export default App
