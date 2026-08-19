"use client"

import { ScrollReveal } from "./ScrollReveal"
import clsx from "clsx"

const skills = [
  { name: "HTML", logo: "/logo/icons8-html5-480.png" },
  { name: "CSS", logo: "/logo/icons8-css-480.png" },
  { name: "JAVASCRIPT", logo: "/logo/icons8-js-480.png" },
  { name: "REACT JS", logo: "/logo/icons8-react-js-480.png" },
  { name: "PYTHON", logo: "/logo/icons8-python-480.png" },
  { name: "JAVA", logo: "/logo/icons8-java-480.png" },
  { name: "SQL", logo: "/logo/icons8-sql-100-2.png" },
  { name: "GIT", logo: "/logo/icons8-git-100.png" },
  { name: "REST API", logo: "/logo/icons8-rest-api-100.png" },
  { name: "VERCEL", logo: "/logo/icons8-vercel-100.png" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden font-avant-garde flex items-center py-16 sm:py-20 md:py-24">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 flex items-center justify-center h-full w-full py-4 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
          <ScrollReveal offset={100} className="mx-auto max-w-5xl [--duration:500ms]">
            {(isActive) => (
              <div className="text-center mb-8 sm:mb-14">
                <h2 className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-black text-[#111439] mb-3 sm:mb-5 transition-[transform,opacity] duration-[--duration]"
                )}>
                  What I do
                </h2>
                <p className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "text-sm sm:text-base md:text-lg lg:text-xl text-[#111439]/85 max-w-5xl mx-auto leading-relaxed transition-[transform,opacity] duration-[--duration] px-2"
                )}>
                  I'm a software developer with self driven, hands on experience building full stack applications in Python, JavaScript, and React. I've shipped three independent projects end to end, from architecture to deployment, using REST APIs, PostgreSQL, and Git/GitHub for version control. I apply Data Structures & Algorithms to write efficient, maintainable code, and I'm comfortable working across the stack, from responsive frontend interfaces to backend logic and database design. I'm looking to join a collaborative engineering team as a Junior Software Developer.
                </p>
              </div>
            )}
          </ScrollReveal>

          {/* Skills Grid */}
          <ScrollReveal offset={100} className="max-w-6xl mx-auto [--duration:500ms]">
            {(isActive) => (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className={clsx(
                      { "translate-y-8 opacity-0": !isActive },
                      "flex flex-col items-center transition-[transform,opacity] duration-[--duration]"
                    )}
                    style={{ "--delay": `${(index + 1) * 80}ms` }}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2.5 sm:mb-3.5 hover:bg-white/35 hover:scale-105 transition-all duration-300 border-2 border-[#111439]/20 shadow-md">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain"
                      />
                    </div>
                    <span className="text-[#111439] font-bold text-xs sm:text-sm md:text-base tracking-wide text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
