"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import Magnet from "@/src/blocks/Animations/Magnet/Magnet"
import { ScrollReveal } from "./ScrollReveal"
import clsx from "clsx"

export function ContactSection() {
  return (
    <section id="contact" className="h-screen relative overflow-hidden font-avant-garde">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 flex items-center justify-center h-full py-12">
        <div className="container mx-auto px-6">
          <ScrollReveal offset={200} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center [--duration:500ms]">
            {(isActive) => (
              <>
                {/* Left side - Contact */}
                <div className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "flex flex-col items-center justify-center transition-[transform,opacity] duration-[--duration]"
                )}>
                  {/* Circular heading */}
                  <Magnet padding={50} magnetStrength={3}>
                    <div className="relative mb-16">
                      <div className="w-48 h-48 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <h2 className="text-2xl md:text-2xl font-black text-[#111439] text-center leading-tight">
                          get in
                          touch
                        </h2>
                      </div>
                    </div>
                  </Magnet>

                  {/* Social icons */}
                  <div className="flex items-center justify-center space-x-8">
                    <a href="https://github.com/Naveen-pntk32" target="_blank" rel="noopener noreferrer" className="group">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110">
                        <Github className="w-8 h-8 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-sm text-[#111439]">GitHub</p>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/naveen-pntk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110">
                        <Linkedin className="w-8 h-8 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-sm text-[#111439]">LinkedIn</p>
                    </a>

                    <a href="mailto:pnavaneethakrishnan07@gmail.com" className="group">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-white/50 group-hover:scale-110">
                        <Mail className="w-8 h-8 text-[#111439]" />
                      </div>
                      <p className="mt-2 text-center text-sm text-[#111439]">Email</p>
                    </a>
                  </div>
                </div>

                {/* Right side - Quote */}
                <div className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "flex items-center justify-center transition-[transform,opacity] duration-[--duration]"
                )}>
                  <div className="relative text-left">
                    <blockquote
                      className="text-2xl md:text-4xl text-[#111439] font-black leading-tight"
                      style={{ fontFamily: "Avant Garde Demi BT, sans-serif" }}
                    >
                      <p className="text-2xl md:text-4xl text-[#111439] font-black leading-tight">
                        &#x201C; Small steps are
                      </p>
                      <p className="text-2xl md:text-4xl text-[#111439] font-black leading-tight">
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
