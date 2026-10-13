import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    id: "nodewave",
    title: "Project Management System",
    desc: "A cross-department collaboration platform that automates task workflows, tracks deliverables, and gives external clients visibility into project progress while keeping sensitive internal data protected.",
    techGroups: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Radix UI", "TanStack Query", "Zustand"] },
      { label: "Backend", items: ["Bun v1.4", "Hono v4", "Prisma ORM", "PostgreSQL"] },
      { label: "DevOps & Security", items: ["Railway", "Vercel", "GitHub Actions CI/CD", "Biome", "JWT", "Secure Headers"] }
    ],
    highlights: [
      { title: "3-Dimensional Access Control", detail: "Granular permissions combine role hierarchy (PM, internal team, and client), department scope, and task status rules." },
      { title: "State Machine & Blocker Resolution", detail: "Tasks stay BLOCKED until prerequisite dependencies are completed." },
      { title: "Data Integrity & Concurrency", detail: "Version locking rejects conflicting updates with HTTP 409, while permanent audit logs preserve change history." },
      { title: "Lightweight API Runtime", detail: "Bun and Hono power an API designed for low overhead and minimal memory usage." }
    ],
    link: "https://nodewave-frontend-plum.vercel.app/login",
    linkLabel: "Open Live Demo"
  },
  {
    id: "01.",
    title: "Menu Ordering & POS System Based on Web Real-Time",
    desc: "A fullstack Point of Sale and food ordering web application for cafes. Features include menu management, real-time order tracking with Socket.IO, QR code table ordering, and an admin dashboard with sales reports.",
    tech: ["React.js", "Node.js", "Express", "MySQL", "Socket.IO"],
    link: "https://github.com/hadimughny7/kitkop-web-app",
    img: "/img/kitkop-1.png"
  },
  {
    id: "02.",
    title: "Sweet Dessert E-Commerce",
    desc: "A web-based food ordering application supporting online dessert ordering with integration between front-end and back-end. Developed during the LearningX Fullstack Web Development program.",
    tech: ["JavaScript", "Bootstrap", "Python Flask", "MongoDB"],
    link: "https://sweetdessert.glitch.me/",
    img: "/img/porto 7.png"
  },
  {
    id: "03.",
    title: "Qubba Foundation Website",
    desc: "Built the Qubba Foundation and Wisata Qur'an websites using WordPress with custom CSS and JavaScript for a foundation owned by PT Syaamil Qur'an.",
    tech: ["WordPress", "CSS", "JavaScript"],
    link: "https://qubbafoundation.org/",
    img: "/img/porto 11.png"
  }
]

export default function Projects() {
  const container = useRef(null)

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      )
    })
  }, [])

  return (
    <section id="projects" ref={container} className="py-20 md:py-32 bg-cream text-jetBlack px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-fjalla text-[clamp(2.5rem,8vw,5rem)] uppercase mb-14 md:mb-24">
          Selected <span className="text-yellow-600 font-inter font-light tracking-tight capitalize italic">Projects</span>
        </h2>

        <div className="flex flex-col gap-16 pb-0 md:gap-40 md:pb-32">
          {projects.map((project, idx) => (
            <div 
              key={project.id}
              className="project-card relative top-auto flex flex-col-reverse md:sticky md:top-[var(--project-sticky-top)] md:flex-row-reverse gap-8 md:gap-16 items-center bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-black/10"
              style={{
                '--project-sticky-top': `calc(10vh + ${idx * 40}px)`,
                zIndex: idx + 10
              }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 group overflow-hidden bg-black/5 flex items-center justify-center p-6 md:p-10 rounded-3xl">
                {project.highlights ? (
                  <div className="w-full">
                    <p className="font-fjalla text-2xl uppercase mb-5">Engineering Highlights</p>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-4 xl:grid-cols-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={highlight.title} className="border-t border-black/10 pt-4">
                          <p className="font-inter font-semibold text-sm mb-2">
                            <span className="text-yellow-700 mr-2">0{index + 1}</span>
                            {highlight.title}
                          </p>
                          <p className="font-inter text-sm text-gray-600 leading-relaxed">{highlight.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : <img
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto max-h-[350px] object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />}
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col items-start px-2 md:px-0">
                <div className="flex items-baseline gap-4 mb-6">
                  <h3 className="font-fjalla text-3xl md:text-5xl leading-tight uppercase">{project.title}</h3>
                </div>
                
                <p className={`font-inter text-gray-600 leading-relaxed max-w-lg text-sm md:text-base ${project.highlights ? 'mb-6' : 'mb-8'}`}>
                  {project.desc}
                </p>

                {project.techGroups ? (
                  <div className="mb-7 w-full space-y-3">
                    {project.techGroups.map((group) => (
                      <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
                        <p className="shrink-0 font-bold text-sm sm:w-24 sm:pt-1">{group.label}</p>
                        <div className="flex flex-1 flex-wrap gap-1.5">
                          {group.items.map((tech) => (
                            <span key={tech} className="px-2.5 py-1 border border-black/10 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : <div className="mb-10">
                  <p className="font-bold text-sm mb-4">Tech Stack <span className="ml-1">→</span></p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 border border-black/10 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>}

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden px-8 py-3.5 border border-black rounded-full hover:border-yellow-500 transition-colors duration-500 inline-block"
                >
                  <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 rounded-full"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-500 font-fjalla uppercase tracking-wider text-sm">
                    {project.linkLabel || 'View Project'}
                    <div className="relative overflow-hidden flex items-center justify-center w-4 h-4 text-black group-hover:text-black transition-colors duration-500">
                      <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%] font-inter">→</span>
                      <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] group-hover:translate-x-0 font-inter">→</span>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
