"use client"

import type React from "react"

const skills = [
  { name: "HTML", logo: "/logo/icons8-html5-480.png" },
  { name: "CSS", logo: "/logo/icons8-css-480.png" },
  { name: "JAVASCRIPT", logo: "/logo/icons8-js-480.png" },
  { name: "TYPESCRIPT", logo: "/logo/icons8-typescript-480.png" },
  { name: "REACT JS", logo: "/logo/icons8-react-js-480.png" },
  { name: "NEXT.JS", logo: "/logo/icons8-nextjs-480.png" },
  { name: "NODE JS", logo: "/logo/icons8-nodejs-480.png" },
  { name: "PYTHON", logo: "/logo/icons8-python-480.png" },
  { name: "JAVA", logo: "/logo/icons8-java-480.png" },
  { name: "TAILWIND CSS", logo: "/logo/icons8-tailwindcss-480.png" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="h-screen relative overflow-hidden">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 flex items-center justify-center h-full py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-[#111439] mb-6">What I do</h2>
            <p className="text-lg md:text-xl text-[#111439]/80 max-w-4xl mx-auto leading-relaxed">
              I am from Pakistan and currently living in Karachi. I am doing Bachelor's in Software engineering and I
              will graduate in the year 2021. I am UI Ux designer and currently working as a freelancer.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-5xl mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-5 gap-8 mb-12 justify-items-center">
              {skills.slice(0, 5).map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all duration-300 border-2 border-[#111439]/30">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="text-[#111439] font-semibold text-sm tracking-wide text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-5 gap-8 justify-items-center">
              {skills.slice(5, 10).map((skill, index) => (
                <div key={index + 5} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all duration-300 border-2 border-[#111439]/30">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="text-[#111439] font-semibold text-sm tracking-wide text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
