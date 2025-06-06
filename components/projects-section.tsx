import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React, Next.js, and Stripe integration",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Next.js", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System",
    description: "Comprehensive design system with reusable components and documentation",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio showcasing modern web development techniques",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Framer Motion", "Three.js", "GSAP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile App UI",
    description: "Cross-platform mobile application with beautiful user interface",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Expo", "TypeScript", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen relative overflow-hidden py-20">
      {/* Single Consistent Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F9] via-[#D4D4E8] to-[#111439]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#111439] mb-6">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-[#111439]/70 max-w-2xl mx-auto">
            Selected works showcasing creativity and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={index}
              className="relative bg-white/30 backdrop-blur-md overflow-hidden hover:bg-white/40 transition-all duration-300 group hover:shadow-lg border border-white/20 h-80"
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
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-white hover:text-white/70 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
