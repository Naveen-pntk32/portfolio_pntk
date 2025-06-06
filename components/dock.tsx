"use client"

import { Home, User, FolderOpen, Mail, FileText } from "lucide-react"

const dockItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
  { icon: FileText, label: "Resume", href: "#", isResume: true },
]

export function Dock() {
  const handleClick = (href: string, isResume?: boolean) => {
    if (isResume) {
      // Open resume in new tab - replace with your actual resume URL
      window.open("/resume.pdf", "_blank")
      return
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/30 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg border border-white/20">
        <div className="flex items-center space-x-6">
          {dockItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href, item.isResume)}
              className="group flex flex-col items-center space-y-1 transition-all duration-200 hover:scale-110"
            >
              <div className="p-3 rounded-xl bg-white/20 group-hover:bg-white/30 transition-colors duration-200">
                <item.icon className="w-5 h-5 text-[#111439] group-hover:text-[#111439] transition-colors duration-200" />
              </div>
              <span className="text-xs text-[#111439]/70 group-hover:text-[#111439] font-medium transition-colors duration-200">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
