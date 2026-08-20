"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import Magnet from "@/src/blocks/Animations/Magnet/Magnet"
import { ScrollReveal } from "./ScrollReveal"
import clsx from "clsx"

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden font-avant-garde flex items-center py-16 sm:py-20 md:py-24 pb-28 sm:pb-32 md:pb-28">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 flex items-center justify-center h-full w-full py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
          <ScrollReveal offset={100} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center [--duration:500ms]">
            {(isActive) => (
              <>
                {/* Left side - Contact */}
                <div className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "flex flex-col items-center justify-center transition-[transform,opacity] duration-[--duration]"
                )}>
                  {/* Circular heading */}
                  <Magnet padding={40} magnetStrength={2.5}>
                    <div className="relative mb-8 sm:mb-12 md:mb-16">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#111439] text-center leading-tight">
                          get in<br />touch
                        </h2>
                      </div>
                    </div>
                  </Magnet>

                  {/* Social icons */}
                  <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <a href="https://github.com/Naveen-pntk32" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110 shadow-md">
                        <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-xs sm:text-sm md:text-base font-bold text-[#111439]">GitHub</p>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/navien-krish/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110 shadow-md">
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-xs sm:text-sm md:text-base font-bold text-[#111439]">LinkedIn</p>
                    </a>

                    <a href="mailto:pnavaneethakrishnan07@gmail.com" className="group flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110 shadow-md">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-xs sm:text-sm md:text-base font-bold text-[#111439]">Email</p>
                    </a>
                  </div>
                </div>

                {/* Right side - Quote */}
                <div className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "flex items-center justify-center transition-[transform,opacity] duration-[--duration] mt-4 lg:mt-0"
                )}>
                  <div className="relative text-center lg:text-left px-2 sm:px-4">
                    <blockquote
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] text-[#111439] font-black leading-tight"
                      style={{ fontFamily: "Avant Garde Demi BT, sans-serif" }}
                    >
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] text-[#111439] font-black leading-tight">
                        &#x201C; Small steps are
                      </p>
                      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[48px] text-[#111439] font-black leading-tight mt-1 sm:mt-2">
                        Better than NO Steps &#x201D;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
