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
      <section id="home" className="h-screen relative overflow-hidden">
        {/* Single Consistent Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center h-full w-full">
          {/* Left: Text Content */}
          <div className="px-6 flex-1 flex items-center justify-center">
            <div className="flex flex-col gap-1 pl-8">
              {/* Greeting and name */}
              <div className="mt-12">
                <BlurText
                  text='Hey yoo ".'
                  className="text-[#111439] font-bold font-olifant text-[60px]"
                  animateBy="words"
                  direction="top"
                  delay={200}
                />
                
                <p className="text-[#111439] font-bold font-olifant text-[60px]">
                  I'm Navaneetha Krishnan
                </p>
              </div>

              {/* Role and education */}
             <h1 className="text-[#111439] font-black text-4xl font-olifant">
  <DecryptedText
    text="--Frontend Developer & Engineering graduate"
    speed={50}
    sequential={true}
    revealDirection="start"
    animateOn="view"
    className="text-[#111439]"
  />
</h1>


              {/* Description */}
              <p className="text-[rgb(17,20,57)] text-xl max-w-2xl font-olifant">
                <DecryptedText
                  text="I craft responsive, accessible, and performance-driven web interfaces using React, Tailwind CSS, and modern JavaScript"
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
          <div className="flex-1 flex items-center justify-center w-full h-full md:pr-16 md:pl-8 mt-8 md:mt-0">
            <div className="border-2 border-[#e0e7ef] rounded-[5px] p-2 inline-block">
              <TiltedCard
                imageSrc="/images/cat-profile.jpg"
                altText="Profile Picture"
                captionText=""
                containerHeight="340px"
                containerWidth="340px"
                imageHeight="340px"
                imageWidth="340px"
                scaleOnHover={1.2}
                rotateAmplitude={10}
                showMobileWarning={false}
                showTooltip={true}
                overlayContent={<span className="text-[#111439] font-bold font-olifant text-[60px]">Hello!</span>}
                displayOverlayContent={true}
                glareColor="#fff"
                glareOpacity={.3}
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
