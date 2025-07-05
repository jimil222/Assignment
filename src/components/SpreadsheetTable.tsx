import type React from "react"
import hashtag from "../assets/hashtag.svg"
import bagicon from "../assets/bagicon.png"
import submitted from "../assets/submitted.png"
import circlearrow from "../assets/circlearrow.png"
import profileicon from "../assets/profileicon.png"
import internet from "../assets/internetimg.png"
import assigned from "../assets/assigned.png"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface Column {
  id: string
  header: string
  icon?: React.ComponentType<{ className?: string }>
  sortable?: boolean
  width?: number
  minWidth?: number
}

interface DataRow {
  id: number
  jobRequest: string
  submitted: string
  status: string
  submitter: string
  url: string
  assigned: string
  priority: string
  dueDate: string
  estValue: string
}

export default function SpreadsheetTable() {
  const [data] = useState<DataRow[]>([
    {
      id: 1,
      jobRequest: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000 ₹",
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhang...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000 ₹",
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohns...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000 ₹",
    },
    {
      id: 4,
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000 ₹",
    },
    {
      id: 6,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 7,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 8,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 9,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 10,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 11  ,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 12,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 13,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
    {
      id: 14,
      jobRequest: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      dueDate: "",
      estValue: "",
    },
  ])

  const columns: Column[] = [
    { id: "id", header: "#", width: 40, minWidth: 30 },
    { id: "jobRequest", header: "Job Request", sortable: true, width: 200, minWidth: 150 },
    { id: "submitted", header: "Submitted", sortable: true, width: 100, minWidth: 80 },
    { id: "status", header: "Status", sortable: true, width: 100, minWidth: 80 },
    { id: "submitter", header: "Submitter", sortable: true, width: 142, minWidth: 142 },
    { id: "url", header: "URL", sortable: true, width: 120, minWidth: 100 },
    { id: "assigned", header: "Assigned", sortable: true, width: 126, minWidth: 126 },
    { id: "priority", header: "Priority", width: 80, minWidth: 70 },
    { id: "dueDate", header: "Due Date", width: 100, minWidth: 80 },
    { id: "estValue", header: "Est. Value", width: 126, minWidth: 126 },
    { id: "add", header: "", width: 100, minWidth: 80 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In-process":
        return "bg-[#FFF3D6] text-[#85640B]"
      case "Need to start":
        return "bg-[#E2E8F0] text-[#475569]"
      case "Complete":
        return "bg-[#D3F2E3] text-[#0A6E3D]"
      case "Blocked":
        return "bg-[#FFE1DE] text-[#C22219]"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-[#EF4D44]"
      case "Medium":
        return "text-[#C29210]"
      case "Low":
        return "text-[#1A8CFF]"
    }
  }

  return (
    <div className="flex-1 overflow-auto bg-white" tabIndex={0}>
      <table className="w-full border-collapse">
        <thead className="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th className="flex items-center justify-center px-3 py-3 font-medium text-gray-500 border-r border-[#FFFFFF] text-center bg-[#EEEEEE]">
              <img src={hashtag} className="w-[13.33px] h-[13.44px]" />
            </th>
            {columns.slice(1).map((column) => (
              <th
                key={column.id}
                className={`px-3 py-2 text-xs font-medium text-gray-500 text-left border-r border-gray-200 relative 
                  ${column.id === "priority" ? "bg-[#EAE3FC]" :
                    column.id === "dueDate" ? "bg-[#EAE3FC]" :
                      column.id === "estValue" ? "bg-[#FFE9E0]" :
                        column.id === "add" ? "bg-[#FFFFFF]" :
                          "bg-[#EEEEEE]"}`}
                style={{ width: column.width }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    {column.id === "jobRequest" && <img src={bagicon} className="w-3 h-3" />}
                    {column.id === "submitted" && <img src={submitted} className="w-3 h-3" />}
                    {column.id === "status" && <img src={circlearrow} className="w-3 h-3" />}
                    {column.id === "submitter" && <img src={profileicon} className="w-3 h-3" />}
                    {column.id === "url" && <img src={internet} className="w-3 h-3" />}
                    {column.id === "assigned" && <img src={assigned} className="w-3 h-3" />}
                    <span className="text-[#655C80] text-[12px] font-semibold">{column.header}</span>
                  </div>
                  {column.sortable && (
                    <button onClick={() => console.log(`Sort column: ${column.id}`)} className="hover:text-gray-700">
                      <ChevronDown className="w-3 h-3 text-[#AFAFAF]" />
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-200">
              <td className="w-10 px-2 py-2 text-sm text-gray-500 border-r border-gray-200 text-center">{row.id}</td>
              <td className="text-sm px-3 py-2 truncate">{row.jobRequest}</td>
              <td className="text-sm px-3 py-2">{row.submitted}</td>
              <td className="text-sm px-3 py-2">
                <span className={`inline-flex px-[8px] py-[4px] text-xs font-medium rounded-[100px] ${getStatusColor(row.status)}`}>{row.status}</span>
              </td>
              <td className="text-sm px-3 py-2">{row.submitter}</td>
              <td className="text-sm px-3 py-2 text-black underline">{row.url}</td>
              <td className="text-sm px-3 py-2">{row.assigned}</td>
              <td className={`text-sm px-3 py-2 font-medium ${getPriorityColor(row.priority)}`}>{row.priority}</td>
              <td className="text-sm px-3 py-2">{row.dueDate}</td>
              <td className="text-sm px-3 py-2">{row.estValue}</td>
              <td className="px-2 py-2 border-r"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
