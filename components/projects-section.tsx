"use client"

import { ExternalLink, Github } from "lucide-react"
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

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-[70vh] relative overflow-hidden py-16 font-avant-garde">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal offset={200} className="mx-auto max-w-[95%] [--duration:500ms]">
          {(isActive) => (
            <div className="text-center mb-12">
              <h2 className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "text-4xl md:text-6xl lg:text-7xl font-black text-[#111439] mb-4 transition-[transform,opacity] duration-[--duration]"
              )}>
                My Projects
              </h2>
              <p className={clsx(
                { "translate-y-8 opacity-0": !isActive },
                "text-lg md:text-xl text-[#111439]/70 max-w-6xl mx-auto transition-[transform,opacity] duration-[--duration]"
              )}>
                Selected works showcasing creativity and technical expertise
              </p>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal offset={200} className="max-w-7xl mx-auto [--duration:500ms]">
          {(isActive) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={index}
                  className={clsx(
                    { "translate-y-8 opacity-0": !isActive },
                    "relative bg-white/30 backdrop-blur-md overflow-hidden hover:bg-white/40 transition-all duration-300 group hover:shadow-lg border border-white/20 h-80 transition-[transform,opacity] duration-[--duration]"
                  )}
                  style={{ "--delay": `${(index + 1) * 150}ms` } as React.CSSProperties}
                >
                  {/* Full Image Background */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Transparent Overlay with Description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="mb-4 text-sm text-white/90">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="flex items-center space-x-2 text-white hover:text-white/70 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
