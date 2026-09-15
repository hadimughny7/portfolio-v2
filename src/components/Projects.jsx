import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
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
    <section id="projects" ref={container} className="py-32 bg-cream text-jetBlack px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-fjalla text-[clamp(2.5rem,8vw,5rem)] uppercase mb-24">
          Selected <span className="text-yellow-600 font-inter font-light tracking-tight capitalize italic">Projects</span>
        </h2>

        <div className="flex flex-col gap-16 md:gap-32 pb-32">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card sticky flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-black/10"
              style={{
                top: `calc(15vh + ${idx * 40}px)`,
                zIndex: idx + 10
              }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 group overflow-hidden bg-black/5 flex items-center justify-center p-6 md:p-10 rounded-3xl">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto max-h-[350px] object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col items-start px-2 md:px-0">
                <div className="flex items-baseline gap-4 mb-6">
                  <h3 className="font-fjalla text-3xl md:text-5xl leading-tight uppercase">{project.title}</h3>
                </div>
                
                <p className="font-inter text-gray-600 mb-8 leading-relaxed max-w-lg text-sm md:text-base">
                  {project.desc}
                </p>

                <div className="mb-10">
                  <p className="font-bold text-sm mb-4">Tech Stack <span className="ml-1">→</span></p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 border border-black/10 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative overflow-hidden px-8 py-3.5 border border-black rounded-full hover:border-yellow-500 transition-colors duration-500 inline-block"
                >
                  <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 rounded-full"></div>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-500 font-fjalla uppercase tracking-wider text-sm">
                    View Project 
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
