import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experiences = [
  {
    id: "01",
    role: "FRONTEND WEB DEVELOPER",
    company: "Inndivo.com",
    period: "Apr 2025 — Nov 2025",
    desc: "Developed a company profile website and an internal online training platform (Inndivo University) using React.js, TypeScript, and Tailwind CSS, with interactive features, responsive design, and API integration.",
    tech: ["REACT.JS", "TYPESCRIPT", "TAILWIND"]
  },
  {
    id: "02",
    role: "WEB DEVELOPER INTERNSHIP",
    company: "Syaamil Group",
    period: "Jan 2025 — Apr 2025",
    desc: "Built the Qubba Foundation and Wisata Qur'an websites using WordPress with custom CSS and JavaScript for a foundation owned by PT Syaamil Qur'an.",
    tech: ["WORDPRESS", "CSS", "JAVASCRIPT"]
  },
  {
    id: "03",
    role: "INDEPENDENT STUDY (CAPSTONE)",
    company: "LearningX (MSIB Batch 7)",
    period: "Sep 2024 — Dec 2024",
    desc: "Developed a web-based food ordering application (Sweet Dessert e-commerce) using HTML, CSS, JavaScript, Bootstrap, Python Flask, and MongoDB.",
    tech: ["JAVASCRIPT", "PYTHON FLASK", "MONGODB"]
  },
  {
    id: "04",
    role: "JR. WEB DEVELOPER INTERNSHIP",
    company: "CV IDS Kejar ID",
    period: "Mar 2021 — Jun 2021",
    desc: "Built the website interface and developed the required features using the PHP programming language and the Laravel framework.",
    tech: ["PHP", "LARAVEL"]
  }
]

export default function Experience() {
  const container = useRef(null)

  useEffect(() => {
    const items = gsap.utils.toArray('.exp-item')
    items.forEach((item, i) => {
      // Entrance animation
      gsap.fromTo(item, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      )

      // Active state highlight when scrolling into center
      ScrollTrigger.create({
        trigger: item,
        start: 'top 55%',
        end: 'bottom 55%',
        toggleClass: 'is-active',
      })
    })
  }, [])

  return (
    <section id="experience" ref={container} className="py-32 bg-cream text-jetBlack px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Col - Title */}
        <div className="w-full md:w-1/3">
          <p className="font-inter font-bold text-xs uppercase tracking-widest mb-6">/ Experience</p>
          <h2 className="font-fjalla text-6xl md:text-[5.5rem] leading-[0.85] uppercase tracking-tight">Experience</h2>
          <p className="font-inter text-gray-500 mt-6 max-w-sm">
            A collection of places, projects and experiences that shaped the way I build for the web.
          </p>
        </div>

        {/* Right Col - Timeline */}
        <div className="w-full md:w-2/3 relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-[5px] top-0 bottom-0 w-[2px] bg-black/10"></div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="exp-item group relative md:pl-12">
                
                {/* Circle marker on line */}
                <div className="hidden md:block absolute left-[-1px] top-12 w-3.5 h-3.5 rounded-full border-[3px] border-black bg-cream z-20 group-[.is-active]:border-yellow-500 group-[.is-active]:bg-jetBlack transition-colors duration-500"></div>

                {/* Card Container */}
                <div className="relative p-8 md:p-10 border border-black/5 bg-white/40 shadow-sm rounded-3xl md:rounded-[2rem] transition-all duration-500 overflow-hidden">
                  
                  {/* Active Background Sweep */}
                  <div className="absolute inset-0 bg-jetBlack transform scale-y-0 origin-bottom group-[.is-active]:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>

                  {/* Content Wrapper */}
                  <div className="relative z-10 transition-colors duration-500 group-[.is-active]:text-cream">
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-6 gap-2 sm:gap-0">
                      <span className="font-inter text-sm font-semibold text-yellow-600/90 tracking-wide">{exp.id}</span>
                      <span className="font-inter text-xs tracking-widest text-gray-500 uppercase group-[.is-active]:text-cream/60 transition-colors">{exp.period.split(' — ')[1] || exp.period}</span>
                    </div>

                    <h3 className="font-fjalla text-3xl md:text-5xl leading-[0.9] uppercase tracking-tight mb-4 group-[.is-active]:text-yellow-500 transition-colors duration-500">{exp.role}</h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                      <p className="font-inter text-lg font-medium">{exp.company}</p>
                      <span className="hidden sm:block w-4 h-[2px] bg-black/20 group-[.is-active]:bg-cream/30 transition-colors"></span>
                      <p className="font-inter text-sm text-gray-500 uppercase tracking-widest group-[.is-active]:text-cream/70 transition-colors">{exp.period}</p>
                    </div>

                    <p className="font-inter text-gray-600 mb-8 max-w-xl leading-relaxed group-[.is-active]:text-cream/80 transition-colors duration-500">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-[0.65rem] md:text-xs font-bold uppercase tracking-wider group-[.is-active]:bg-white/10 group-[.is-active]:border-white/20 group-[.is-active]:text-cream transition-colors duration-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
