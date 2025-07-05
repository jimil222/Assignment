import { useState } from "react"
import { Search, MoreHorizontal } from "lucide-react"
import bell from "../assets/bell.svg"
import topleftgreen from "../assets/navbartopleft.png"
import arrows from "../assets/arrows.png"
import profileimg from "../assets/profieleimg.png"

export default function Header() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="flex items-center justify-between px-5 h-14 border-b border-gray-200 bg-white">
      {/* Left Side*/}
      <div className="flex items-center space-x-1 text-sm text-gray-600">
        {/* Workspace + Green Icon */}
        <div className="flex items-center space-x-1.5 gap-[8px]">
          <img src={topleftgreen} className="w-4 h-4 rounded-sm" />
          <button onClick={() => console.log("Workspace clicked")} className="hover:text-black text-[#AFAFAF] font-medium">
            Workspace
          </button>
        </div>
        <img src={arrows} className="text-[#AFAFAF] w-[12px] h-[12px]" />
        <button onClick={() => console.log("Folder 2 clicked")} className="hover:text-black  text-[#AFAFAF] font-medium">
          Folder 2
        </button>
        <img src={arrows} className="text-[#AFAFAF] w-[12px] h-[12px]" />
        <button onClick={() => console.log("Spreadsheet 3 clicked")} className="text-black font-medium">
          Spreadsheet 3
        </button>
        <button onClick={() => console.log("More options clicked")} className="ml-1 hover:text-black text-gray-400">
          <MoreHorizontal className="w-4 h-4 text-[#AFAFAF]" />
        </button>
      </div>

      {/* Right Side: Search, Bell, Profile */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AFAFAF]" />
          <input
            type="text"
            placeholder="Search within sheet"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value)
              console.log("Search:", e.target.value)
            }}
            className="pl-9 pr-3 py-[6px] w-[168px] h-[40px] text-sm bg-[#F6F6F6] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:text-[#AFAFAF]"
          />
        </div>

        {/* Bell with badge */}
        <div className="relative">
          <button
            onClick={() => console.log("Notifications clicked")}
            className="p-1 hover:bg-gray-100 rounded relative"
          >
            <img
              src={bell}
              className="w-[24px] h-[24px] object-contain"
              alt="bell-icon"
            />

            {/* Badge */}
            <span
              className="absolute -top-[2px] -right-[2px] w-[18px] h-[18px] bg-[#4B6A4F] rounded-full text-white text-[10px] font-semibold leading-none flex items-center justify-center border-[1.5px] border-white"
            >
              2
            </span>
          </button>
        </div>


        {/* Profile */}
        <button onClick={() => console.log("Profile clicked")} className="flex items-center space-x-2 hover:bg-gray-100 rounded p-1 pr-2">
          <img src={profileimg} className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-white text-xs font-medium" />
          <div className="leading-tight text-left">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">john.doe...</div>
          </div>
        </button>
      </div>
    </div>
  )
}
