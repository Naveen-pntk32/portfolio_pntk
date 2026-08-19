import { Dock } from "./dock"
import { SkillsSection } from "./skills-section"
import { ProjectsSection } from "./projects-section"
import { ContactSection } from "./contact-section"
import BlurText from "@/src/blocks/TextAnimations/BlurText/BlurText"
import DecryptedText from "@/src/blocks/TextAnimations/DecryptedText/DecryptedText"
import TiltedCard from "@/src/blocks/Components/TiltedCard/TiltedCard"

const PortfolioHero = () => {
  return (
    <div className="scroll-smooth">
      {/* Home Section - First (starting point) */}
      <section id="home" className="min-h-screen md:h-screen relative overflow-hidden flex items-center py-16 md:py-0">
        {/* Single Consistent Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full w-full max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-0 gap-6 md:gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <div className="flex flex-col gap-1 pl-2 md:pl-6">
              {/* Greeting and name */}
              <div className="mt-8 md:mt-12">
                <BlurText
                  text='Hey yoo ".'
                  className="text-[#111439] font-bold font-olifant text-[38px] sm:text-[48px] md:text-[64px] leading-tight"
                  animateBy="words"
                  direction="top"
                  delay={200}
                />

                <p className="text-[#111439] font-bold font-olifant text-[38px] sm:text-[48px] md:text-[64px] leading-tight">
                  I'm Navaneetha Krishnan
                </p>
              </div>

              {/* Role and education */}
              <h1 className="text-[#111439] font-black text-2xl sm:text-3xl md:text-[40px] font-avant-garde my-2 md:my-3">
                <DecryptedText
                  text="-- Jr SOFTWARE DEVELOPER"
                  speed={50}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-[#111439]"
                />
              </h1>

              {/* Description */}
              <p className="text-[rgb(17,20,57)] text-base sm:text-lg md:text-[21px] max-w-xl font-olifant leading-relaxed">
                <DecryptedText
                  text="I build efficient, scalable software solutions using Python, JavaScript, and React — from clean backend logic to intuitive user interfaces."
                  speed={30}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  className="text-[#111439]"
                />
              </p>
            </div>
          </div>

          {/* Right: TiltedCard with built-in glare effect */}
          <div className="flex-1 flex items-center justify-center w-full h-full md:pr-4 mt-8 md:mt-0">
            <div className="border-2 border-[#e0e7ef] rounded-[12px] p-2.5 inline-block bg-white/10 backdrop-blur-sm shadow-2xl">
              <TiltedCard
                imageSrc="/images/IG-Profile.png"
                altText="Profile Picture"
                captionText=""
                containerHeight="370px"
                containerWidth="370px"
                imageHeight="370px"
                imageWidth="370px"
                scaleOnHover={1.15}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                glareColor="#fff"
                glareOpacity={0.3}
                glareAngle={-50}
                glareSize={250}
                glareTransitionDuration={700}
              />
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

export default PortfolioHero
