import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skills = [
  {
    title: "Frontend",
    subtitle: "Developing highly responsive, pixel-perfect user interfaces with a strong emphasis on web performance and engaging interactive experiences.",
    tech: ["React.js", "Vite.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "AJAX"]
  },
  {
    title: "Backend & DB",
    subtitle: "Designing scalable server-side architectures and secure RESTful APIs, paired with efficient relational and NoSQL database management.",
    tech: ["Node.js", "Express.js", "Python (Flask)", "Laravel", "MySQL", "MongoDB", "REST API"]
  },
  {
    title: "Tools",
    subtitle: "Leveraging industry-standard development tools, version control, and modern environments to streamline workflows and team collaboration.",
    tech: ["Git/GitHub", "VS Code", "Antigravity", "WordPress"]
  },
  {
    title: "Soft Skills",
    subtitle: "Combining technical proficiency with clear communication, adaptive problem-solving, and a strong collaborative mindset in fast-paced environments.",
    tech: ["Teamwork", "Communication", "Problem-solving", "Critical Thinking", "Leadership", "Fast Learner"]
  }
]

export default function Skills() {
  const container = useRef(null)

  useEffect(() => {
    gsap.fromTo('.skill-box',
      { y: 150, scale: 0.8, skewY: 7, opacity: 0 },
      {
        y: 0,
        scale: 1,
        skewY: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2,
        clearProps: 'all',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        }
      }
    )
  }, [])

  return (
    <section id="skills" ref={container} className="py-32 bg-cream text-jetBlack px-6 border-t border-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-fjalla text-[clamp(4rem,10vw,8rem)] uppercase tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-box group p-8 md:p-10 border border-black/10 bg-white rounded-3xl transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:border-black/30">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-fjalla text-3xl md:text-4xl uppercase">{skill.title}</h3>
              </div>
              <p className="font-inter text-gray-500 text-sm mb-8 min-h-[3.5rem] leading-relaxed">{skill.subtitle}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 border border-black/10 bg-black/5 text-[0.65rem] md:text-xs font-semibold tracking-wider rounded-full group-hover:border-yellow-500/50 group-hover:bg-yellow-50 transition-colors duration-500" style={{ transitionDelay: `${i * 50}ms` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
