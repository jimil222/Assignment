import { Plus } from "lucide-react"

interface BottomTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function BottomTabs({ activeTab, setActiveTab }: BottomTabsProps) {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"]

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    console.log(`Bottom tab clicked: ${tab}`)
  }

  const handleAddTab = () => {
    console.log("Add bottom tab clicked")
  }

  return (
    <div className="flex items-center px-6 py-0 border-t border-gray-200 bg-white">
      <div className="flex items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-3 text-sm font-medium border-t-2 ${
              activeTab === tab
                ? "border-[#4B6A4F] text-[#3E5741] font-semibold bg-[#E8F0E9]"
                : "border-transparent text-[#757575] hover:text-gray-900 hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}

        <button onClick={handleAddTab} className="p-3 hover:bg-gray-100 rounded text-gray-400 ml-2">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
