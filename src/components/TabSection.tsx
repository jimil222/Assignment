import { useState } from "react"
import anchoricon from "../assets/anchoricon.svg"
import loopshape from "../assets/loopshape.svg"
import doublearrow from "../assets/downarrow.svg"
import doublearrowans from "../assets/doublearrowans.svg"
import plusicon from "../assets/plusicon.svg"
import {MoreHorizontal } from "lucide-react"

export default function TabSection() {
  const [activeActionTab, setActiveActionTab] = useState("ABC")

  const handleOverviewClick = () => {
    console.log("Q3 Financial Overview clicked")
  }

  const handleWarningClick = () => {
    console.log("Warning icon clicked")
  }

  const handleActionTabClick = (tab: string) => {
    setActiveActionTab(tab)
    console.log(`Action tab clicked: ${tab}`)
  }

  const handleAddTab = () => {
    console.log("Add tab clicked")
  }

  return (
    <div className="flex items-center px-[47px] bg-white">
      <div className="flex items-center space-x-5 min-w-[713px]">
        <div className="h-[32px] flex items-center justify-between bg-[#E2E2E2] px-6 py-2 top-0 flex-grow">
          <div className="flex items-center space-x-2">
            <span className="flex items-center justify-center bg-[#EEEEEE] w-[158px] h-[24px] ml-[-12px] rounded-[4px] gap-[5px]">
              <img src={anchoricon} className="w-4 h-4" />
              <button onClick={handleOverviewClick} className=" text-[12px] text-[#545454] font-normal">
                Q3 Financial Overview
              </button>
            </span>
            <button onClick={handleWarningClick}>
              <img src={loopshape} className="w-[11.67px] h-[14.33px] text-[#FA6736]" />
            </button>
          </div>
        </div>

      </div>


      <div className="flex items-center ml-[150px]">
        {/* ABC tab */}
        <button
          onClick={() => handleActionTabClick("ABC")}
          className={`flex items-center justify-center min-w-[147px] gap-2 px-4 py-1.5 text-sm font-medium ${activeActionTab === "ABC"
            ? "bg-[#D2E0D4] "
            : "bg-green-10 hover:bg-green-200"
            }`}
        >
          <img className="w-3 h-3" src={doublearrow} alt="" />
          <span className="truncate text-[#505450] text-[14px]">ABC</span>
          <MoreHorizontal className="w-4 h-4 text-[#AFAFAF]" />
        </button>

        {/* Answer tab */}
        <button
          onClick={() => handleActionTabClick("Answer a question")}
          className={`flex items-center min-w-[217px] justify-center gap-2 px-4 py-1.5 text-sm font-medium ${activeActionTab === "Answer a question"
            ? "bg-[#DCCFFC] text-purple-800"
            : "bg-[#DCCFFC] text-purple-700 hover:bg-purple-200"
            }`}
        >
          <img className="w-3 h-3" src={doublearrowans} alt="" />
          <span className="truncate text-[#463E59]">Answer a question</span>
          <MoreHorizontal className="w-4 h-4 text-[#AFAFAF]" />

        </button>

        {/* Extract tab */}
        <button
          onClick={() => handleActionTabClick("Extract")}
          className={`flex items-center min-w-[146px] justify-center gap-2 px-4 py-1.5 text-sm font-medium ${activeActionTab === "Extract"
            ? "bg-[#FAC2AF] text-[#695149]"
            : "bg-[#FAC2AF] text-[#695149] hover:bg-orange-200"
          }`}
        >
          <img className="w-3 h-3" src={doublearrowans} alt="" />
          <span className="truncate">Extract</span>
          <MoreHorizontal className="w-4 h-4 text-[#AFAFAF]" />
        </button>

        {/* Add Tab */}
        <button
          onClick={handleAddTab}
          className="flex items-center justify-center px-4 py-[8.5px] text-sm font-medium min-w-[114px] bg-[#EEEEEE] text-black hover:bg-orange-200"
        >
          <img src={plusicon} className="w-[14.58px] h-[14.59px]" alt="" />
        </button>

      </div>




    </div>
  )
}
