"use client"

import React, { useState, useRef, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"
import clsx from "clsx"

const projects = [
  {
    title: "Signature Sentry",
    description: "A secure system for managing digital signatures.",
    image: "/images/Sign-sentry.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://signature-sentry.onrender.com/",
  },
  {
    title: "Productive Pro",
    description: "A productivity application designed to help users manage tasks and stay organized.",
    image: "/images/Productive-Pro.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://productive-pro-flame.vercel.app/",
  },
  {
    title: "ResuMate",
    description: "Create professional resumes in minutes with easy-to-use templates and step-by-step guidance.",
    image: "/images/Resumate.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://resu-mate-sigma.vercel.app/",
  },
  {
    title: "Bugatti Landing Page",
    description: "A captivating landing page showcasing the ultimate Bugatti hypercars and models.",
    image: "/images/buggati.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveUrl: "https://buggati-landingpage.vercel.app/",
  },
]

const ITEM_HEIGHT = 90 + 16; // height + margin (px)
const VISIBLE_COUNT = 4;

export function ProjectsSection() {
  const [selected, setSelected] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const totalProjects = projects.length

  // Infinite scroll logic
  useEffect(() => {
    const list = listRef.current
    if (!list) return

    // Set initial scroll to the first real list
    list.scrollTop = totalProjects * ITEM_HEIGHT

    const onScroll = () => {
      if (!list) return
      const scrollTop = list.scrollTop
      const totalHeight = totalProjects * ITEM_HEIGHT
      if (scrollTop < ITEM_HEIGHT) {
        // Scrolled to top clone, jump to real list
        list.scrollTop = totalHeight + scrollTop
      } else if (scrollTop > totalHeight * 2 - ITEM_HEIGHT * VISIBLE_COUNT) {
        // Scrolled to bottom clone, jump to real list
        list.scrollTop = scrollTop - totalHeight
      }
    }
    list.addEventListener("scroll", onScroll)
    return () => list.removeEventListener("scroll", onScroll)
  }, [totalProjects])

  // Scroll to selected item in the main list
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    // Always scroll to the selected item in the main list
    list.scrollTop = totalProjects * ITEM_HEIGHT + selected * ITEM_HEIGHT
  }, [selected, totalProjects])

  // Render the list 3 times: [clone][main][clone]
  const renderProjects = (cb: (project: typeof projects[0], idx: number, realIdx: number) => React.ReactNode) => {
    return [
      ...projects.map((p, i) => cb(p, i, i - totalProjects)), // top clone
      ...projects.map((p, i) => cb(p, i, i)), // main
      ...projects.map((p, i) => cb(p, i, i + totalProjects)), // bottom clone
    ]
  }

  return (
    <section id="projects" className="min-h-[70vh] py-16 font-avant-garde bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#111439] mb-4">My Projects</h2>
          <p className="text-lg md:text-xl text-[#111439]/70 max-w-6xl mx-auto">Selected works showcasing creativity and technical expertise</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Left: Scrollable List */}
          <div className="md:w-1/2 w-full">
            <div
              ref={listRef}
              className="scroll-list__wrp js-scroll-content js-scroll-list h-[400px] overflow-y-auto p-4 rounded-lg shadow-lg bg-[#1c2e4a]"
              style={{ background: "linear-gradient(147deg, #2e3a59 0%, #1a2b46 74%)", maxHeight: ITEM_HEIGHT * VISIBLE_COUNT }}
            >
              {renderProjects((project, idx, realIdx) => (
                <div
                  key={realIdx}
                  className={`scroll-list__item js-scroll-list-item mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selected === (idx % totalProjects) && realIdx >= 0 && realIdx < totalProjects ? "item-focus border-2 border-blue-400 scale-105" : "item-hide opacity-70 hover:scale-105"
                  }`}
                  style={{
                    background: "linear-gradient(147deg, #4a90e2 0%, #0072ff 74%)",
                    height: 90,
                    display: "flex",
                    alignItems: "center",
                    padding: 16,
                  }}
                  onClick={() => setSelected(idx % totalProjects)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-16 h-16 object-cover rounded mr-4 border border-white/30"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-white/80">{project.tags.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Project Details */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-md">
              <img
                src={projects[selected].image}
                alt={projects[selected].title}
                className="w-full h-48 object-cover rounded mb-4 border border-white/30"
              />
              <h3 className="text-2xl font-bold mb-2 text-[#111439]">{projects[selected].title}</h3>
              <p className="mb-4 text-[#111439]/80">{projects[selected].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[selected].tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs text-[#111439]">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={projects[selected].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .scroll-list__wrp {
          scrollbar-width: thin;
          scrollbar-color: #4a90e2 #1c2e4a;
        }
        .scroll-list__wrp::-webkit-scrollbar {
          width: 8px;
        }
        .scroll-list__wrp::-webkit-scrollbar-thumb {
          background: #4a90e2;
          border-radius: 8px;
        }
        .scroll-list__wrp::-webkit-scrollbar-track {
          background: #1c2e4a;
        }
        .scroll-list__item {
          opacity: 0.8;
          transform: scale(0.97);
        }
        .scroll-list__item.item-focus {
          opacity: 1;
          transform: scale(1);
        }
        .scroll-list__item.item-hide {
          opacity: 0.7;
          transform: scale(0.97);
        }
      `}</style>
    </section>
  )
}
