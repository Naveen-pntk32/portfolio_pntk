import { Mail, Github, Linkedin } from "lucide-react"
import Magnet from "@/src/blocks/Animations/Magnet/Magnet"

export function ContactSection() {
  return (
    <section id="contact" className="h-screen relative overflow-hidden">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 flex items-center justify-center h-full py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact */}
            <div className="flex flex-col items-center justify-center">
              {/* Circular heading */}
              <Magnet padding={50} magnetStrength={3}>
                <div className="relative mb-16">
                  <div className="w-48 h-48 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <h2 className="text-2xl md:text-3xl font-black text-[#111439] text-center leading-tight">
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
            <div className="flex items-center justify-center">
              <div className="relative text-left">
                <blockquote
                  className="text-2xl md:text-4xl text-[#111439] font-black leading-tight"
                  style={{ fontFamily: "Centra No.1, sans-serif" }}
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
          </div>
        </div>
      </div>
    </section>
  )
}
