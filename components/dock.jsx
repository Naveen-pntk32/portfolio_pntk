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
  const handleClick = (href, isResume) => {
    if (isResume) {
      // Open resume in new tab
      window.open(encodeURI("/Naveen - Dev Resume.pdf"), "_blank", "noopener,noreferrer")
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
    <div className="fixed bottom-3 sm:bottom-6 md:bottom-8 lg:bottom-9 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)] sm:max-w-max">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl px-3 py-2 sm:px-6 sm:py-3.5 md:px-7 md:py-4 shadow-2xl border border-white/30">
        <div className="flex items-center space-x-1.5 sm:space-x-4 md:space-x-6 lg:space-x-8">
          {dockItems.map((item) =>
            item.isResume ? (
              <a
                key={item.label}
                href={encodeURI("/Naveen - Dev Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-1 sm:space-y-1.5 transition-all duration-200 hover:scale-110 active:scale-95 px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-xl"
                aria-label={item.label}
              >
                <div className="p-2 sm:p-2.5 md:p-3.5 rounded-xl bg-white/30 group-hover:bg-white/50 transition-colors duration-200 shadow-sm">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#111439] group-hover:text-[#111439] transition-colors duration-200" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-[13px] text-[#111439]/80 group-hover:text-[#111439] font-bold tracking-tight transition-colors duration-200">
                  {item.label}
                </span>
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => handleClick(item.href, false)}
                className="group flex flex-col items-center space-y-1 sm:space-y-1.5 transition-all duration-200 hover:scale-110 active:scale-95 px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-xl"
                aria-label={item.label}
              >
                <div className="p-2 sm:p-2.5 md:p-3.5 rounded-xl bg-white/30 group-hover:bg-white/50 transition-colors duration-200 shadow-sm">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#111439] group-hover:text-[#111439] transition-colors duration-200" />
                </div>
                <span className="text-[10px] sm:text-xs md:text-[13px] text-[#111439]/80 group-hover:text-[#111439] font-bold tracking-tight transition-colors duration-200">
                  {item.label}
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
