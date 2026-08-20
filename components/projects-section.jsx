"use client"

import React, { useState, useRef, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"
import clsx from "clsx"

const projects = [
  {
    title: "Signature Sentry",
    description: "A Siamese Neural Network (SNN) based signature verification system achieving 90%+ classification accuracy with a Python & Flask backend and real-time React frontend.",
    image: "/images/Sign-sentry.png",
    tags: ["Python", "Flask", "TensorFlow", "React"],
    liveUrl: "https://signature-sentry.onrender.com/",
  },
  {
    title: "ZenPulse (Productive Pro)",
    description: "A SaaS productivity application with JWT authentication, a Python REST API backend with 8+ CRUD endpoints, and Pomodoro focus analytics.",
    image: "/images/Productive-Pro.png",
    tags: ["React", "JavaScript", "Python", "REST APIs"],
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
    title: "Luxury Automotive Showcase",
    description: "A modern automotive showcase site inspired by Bugatti's design language, featuring real-time search & filtering and interactive enquiry workflows.",
    image: "/images/buggati.png",
    tags: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://buggati-landingpage.vercel.app/",
  },
]

const ITEM_HEIGHT = 90 + 16; // height + margin (px)
const VISIBLE_COUNT = 4;

export function ProjectsSection() {
  const [selected, setSelected] = useState(0)
  const listRef = useRef(null)
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
  const renderProjects = (cb) => {
    return [
      ...projects.map((p, i) => cb(p, i, i - totalProjects)), // top clone
      ...projects.map((p, i) => cb(p, i, i)), // main
      ...projects.map((p, i) => cb(p, i, i + totalProjects)), // bottom clone
    ]
  }

  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 md:py-24 font-avant-garde bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <ScrollReveal offset={100} className="text-center mb-8 sm:mb-14 max-w-5xl mx-auto [--duration:500ms]">
          {(isActive) => (
            <>
              <h2 className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-black text-[#111439] mb-3 sm:mb-5 transition-[transform,opacity] duration-[--duration]"
              )}>
                My Projects
              </h2>
              <p className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "text-base sm:text-lg md:text-xl lg:text-[22px] text-[#111439]/75 max-w-4xl mx-auto px-2 transition-[transform,opacity] duration-[--duration]"
              )}>
                Selected works showcasing creativity and technical expertise
              </p>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal offset={100} className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto items-center [--duration:500ms]">
          {(isActive) => (
            <>
              {/* Left: Scrollable List / Selector */}
              <div className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "w-full lg:w-1/2 transition-[transform,opacity] duration-[--duration]"
              )}>
                <div
                  ref={listRef}
                  className="scroll-list__wrp js-scroll-content js-scroll-list h-[340px] sm:h-[400px] md:h-[430px] overflow-y-auto p-3.5 sm:p-4 rounded-2xl shadow-xl bg-[#1c2e4a] border border-white/10"
                  style={{ background: "linear-gradient(147deg, #2e3a59 0%, #1a2b46 74%)" }}
                >
                  {renderProjects((project, idx, realIdx) => (
                    <div
                      key={realIdx}
                      className={`scroll-list__item js-scroll-list-item mb-3 sm:mb-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        selected === (idx % totalProjects) && realIdx >= 0 && realIdx < totalProjects ? "item-focus ring-2 ring-blue-400 scale-[1.02] sm:scale-105 shadow-lg" : "item-hide opacity-75 hover:opacity-100 hover:scale-[1.02]"
                      }`}
                      style={{
                        background: selected === (idx % totalProjects) && realIdx >= 0 && realIdx < totalProjects
                          ? "linear-gradient(147deg, #3b82f6 0%, #1d4ed8 74%)"
                          : "linear-gradient(147deg, #4a90e2 0%, #0072ff 74%)",
                        minHeight: 88,
                        display: "flex",
                        alignItems: "center",
                        padding: "14px 18px",
                      }}
                      onClick={() => setSelected(idx % totalProjects)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg mr-3.5 sm:mr-4 border border-white/40 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 truncate">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-white/80 line-clamp-1">{project.tags.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Project Details Card */}
              <div className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "w-full lg:w-1/2 flex items-center justify-center transition-[transform,opacity] duration-[--duration]"
              )}>
                <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-7 md:p-9 w-full max-w-lg lg:max-w-xl border border-white/30">
                  <div className="overflow-hidden rounded-xl mb-5 border border-white/30 shadow-inner">
                    <img
                      src={projects[selected].image}
                      alt={projects[selected].title}
                      className="w-full h-44 sm:h-52 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2.5 text-[#111439]">{projects[selected].title}</h3>
                  <p className="mb-5 text-sm sm:text-base md:text-lg text-[#111439]/80 leading-relaxed">{projects[selected].description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selected].tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1.5 bg-white/40 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-[#111439] border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={projects[selected].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2.5 px-6 py-3 rounded-xl bg-[#111439] text-white hover:bg-[#1a2b46] active:scale-95 transition-all text-sm sm:text-base font-bold shadow-md w-full sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </ScrollReveal>
      </div>
      <style jsx global>{`
        .scroll-list__wrp {
          scrollbar-width: thin;
          scrollbar-color: #4a90e2 #1c2e4a;
        }
        .scroll-list__wrp::-webkit-scrollbar {
          width: 6px;
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
          transform: scale(0.98);
        }
        .scroll-list__item.item-focus {
          opacity: 1;
          transform: scale(1);
        }
        .scroll-list__item.item-hide {
          opacity: 0.7;
          transform: scale(0.98);
        }
      `}</style>
    </section>
  )
}
