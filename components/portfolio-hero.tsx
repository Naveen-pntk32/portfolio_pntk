import { Dock } from "./dock"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ContactSection } from "./contact-section"

export default function PortfolioHero() {
  return (
    <div className="scroll-smooth">
      {/* Home Section - First (starting point) */}
      <section id="home" className="h-screen relative overflow-hidden">
        {/* Single Consistent Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl px-6">
            {/* Small header text */}
            <div className="mb-8">
              <span className="text-[#111439] text-lg font-semibold font-olifant">
                Frontend Developer
              </span>
            </div>

            {/* Main portfolio heading */}
            <div className="mb-12">
              <h1 className="text-[#111439] font-black text-6xl md:text-4xl lg:text-6xl">
                I'm Navaneetha Krishnan
              </h1>
            </div>

            {/* Subtitle */}
            <div>
              <p className="text-[#111439] text-xl md:text-2xl font-semibold">
                I craft responsive, accessible, and performance-driven web interfaces using React, Tailwind CSS, and modern JavaScript </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Dock Navigation */}
      <Dock />
    </div>
  )
}
