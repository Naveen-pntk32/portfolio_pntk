"use client"

import React from "react"
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
    title: "ZenPulse",
    description: "A SaaS productivity application with JWT authentication, a Python REST API backend with 8+ CRUD endpoints, and Pomodoro focus analytics.",
    image: "/images/Zenpulse.png",
    tags: ["React", "JavaScript", "Python", "REST APIs"],
    liveUrl: "https://zen-pulse-liard.vercel.app/",
  },
  {
    title: "Luxury Automotive Showcase",
    description: "A modern automotive showcase site inspired by Bugatti's design language, featuring real-time search & filtering and interactive enquiry workflows.",
    image: "/images/Buggatti.png",
    tags: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://buggati-landingpage.vercel.app/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-16 sm:py-20 md:py-24 font-avant-garde bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <ScrollReveal offset={100} className="text-center mb-10 sm:mb-16 max-w-5xl mx-auto [--duration:500ms]">
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

        {/* Row-wise Projects Grid */}
        <ScrollReveal offset={100} className="max-w-7xl mx-auto [--duration:500ms]">
          {(isActive) => (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch justify-center">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={clsx(
                    { "translate-y-8 opacity-0": !isActive },
                    "bg-white/30 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-7 border border-white/30 flex flex-col h-full hover:border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                  )}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden rounded-xl mb-5 border border-white/30 shadow-inner aspect-[16/10] bg-white/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black mb-2.5 text-[#111439] group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 text-sm sm:text-base text-[#111439]/80 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/40 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-[#111439] border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Action */}
                  <div className="mt-auto pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2.5 px-6 py-3 rounded-xl bg-[#111439] text-white hover:bg-[#1a2b46] active:scale-95 transition-all text-sm sm:text-base font-bold shadow-md w-full"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Live Demo</span>
                    </a>
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

