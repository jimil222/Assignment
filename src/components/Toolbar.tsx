import doublearrow from "../assets/doublearrow.svg"
import eyeicon from "../assets/eyeicon.svg"
import updownarrow from "../assets/updownarrow.svg"
import filter from "../assets/filter.svg"
import cellview from "../assets/cellview.svg"
import importicon from "../assets/import.svg"
import exporticon from "../assets/export.svg"
import share from "../assets/share.svg"
import newaction from "../assets/newaction.svg"

export default function Toolbar() {
  return (
    <div className="flex items-center justify-between px-5 py-2 border-b border-gray-200 bg-white">
      {/* Left Side*/}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center text-sm space-x-2 mr-4" onClick={() => console.log("Tool bar clicked")}>
          <span className="flex items-center gap-[4px]">
            Tool bar
            <img className="w-[8.6px] h-[9.8px] mt-[1px]" src={doublearrow} alt="" />
          </span>
        </div>

        <div className="w-[1px] h-[24px] bg-[#EEEEEE]">
        </div>

        <button onClick={() => console.log("Hide fields")} className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
          <img src={eyeicon} className="w-4 h-4" />
          <span>Hide fields</span>
        </button>
        <button onClick={() => console.log("Sort")} className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
          <img src={updownarrow} className="w-4 h-4" />
          <span>Sort</span>
        </button>
        <button onClick={() => console.log("Filter")} className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
          <img src={filter} className="w-4 h-4" />
          <span>Filter</span>
        </button>
        <button onClick={() => console.log("Cell view")} className="flex items-center gap-1 hover:bg-gray-100 px-2 py-1 rounded">
          <img src={cellview} className="w-4 h-4" />
          <span>Cell view</span>
        </button>
      </div>

      {/* Right Side: Import, Export, Share, New Action */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <button onClick={() => console.log("Import")} className="flex items-center gap-1 hover:bg-gray-100 py-[8px] pl-[8px] pr-[12px] rounded-[6px] border-[1px] border-[#EEEEEE]">
          <img src={importicon} className="w-[12.08px] h-[16.67px] text-[#545454]" />
          <span className="font-normal text-[#545454]">Import</span>
        </button>
        <button onClick={() => console.log("Export")} className="flex items-center gap-1 hover:bg-gray-100 py-[8px] pl-[8px] pr-[12px] rounded-[6px] border-[1px] border-[#EEEEEE]">
          <img src={exporticon} className="w-[12.08px] h-[16.67px] text-[#545454]" />
          <span className="font-normal text-[#545454]">Export</span>
        </button>
        <button onClick={() => console.log("Share")} className="flex items-center gap-[4px] hover:bg-gray-100 py-[8px] pl-[8px] pr-[12px] rounded-[6px] border-[1px] border-[#EEEEEE]">
          <img src={share} className="w-[15.83px] h-[15px] text-[#545454]" />
          <span className="font-normal text-[#545454]">Share</span>
        </button>
        <button onClick={() => console.log("New Action")} className="flex items-center justify-center gap-1 bg-[#4B6A4F] hover:bg-[#3d573f] text-white text-sm font-medium px-4 py-1.5 w-[150px] h-[36px] rounded-[6px]">
          <img src={newaction} className="w-[15px] h-[15px]" />
          <span className="font-normal">New Action</span>
        </button>
      </div>
    </div>
  )
}
