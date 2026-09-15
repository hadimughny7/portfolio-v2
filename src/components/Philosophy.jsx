import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Philosophy() {
  const container = useRef(null)

  useEffect(() => {
    gsap.fromTo('.philosophy-quote',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section ref={container} className="py-32 bg-cream text-jetBlack px-6 text-center border-t border-black/10">
      <div className="max-w-4xl mx-auto philosophy-quote">
        <blockquote className="font-fjalla text-[clamp(2rem,6vw,4rem)] leading-tight tracking-tight uppercase mb-10">
          "I'm not just here to make things <span className="text-yellow-600">work</span> — I want to create experiences that people <span className="text-yellow-600">remember.</span>"
        </blockquote>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-4 bg-jetBlack text-cream rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
        >
          {/* Background Sweep */}
          <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 rounded-full"></div>

          <span className="relative z-10 font-inter text-sm uppercase tracking-wider font-semibold group-hover:text-black transition-colors duration-500">More About Me</span>
          
          <div className="relative z-10 overflow-hidden flex items-center justify-center w-5 h-5 group-hover:text-black transition-colors duration-500 text-yellow-500">
            <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]">→</span>
            <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] group-hover:translate-x-0">→</span>
          </div>
        </a>
      </div>
    </section>
  )
}
