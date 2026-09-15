import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const container = useRef(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    gsap.fromTo('.contact-title span',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <section id="contact" ref={container} className="relative pt-32 pb-8 bg-cream text-jetBlack px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto min-h-[500px]">
        <h2 className="font-fjalla text-[clamp(3rem,10vw,6rem)] leading-[0.85] uppercase tracking-tight mb-20">
          <div className="overflow-hidden contact-title">
            <span className="inline-block">Get In </span>
            <span className="inline-block text-yellow-600 ml-4">Touch</span>
          </div>
        </h2>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 mb-16">
          <div className="w-full md:w-1/2">
            <p className="font-inter text-gray-700 leading-relaxed mb-10 max-w-sm text-lg">
              Have a project in mind, want to collaborate, or just want to say hello? I'd love to hear from you. Let's build something amazing together.
            </p>
            {!showForm && (
              <button 
                onClick={() => setShowForm(true)}
                className="group relative inline-flex overflow-hidden px-8 py-4 border border-black hover:border-transparent transition-colors"
              >
                <div className="absolute inset-0 w-full h-full bg-black transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10 font-fjalla text-xl uppercase tracking-wider group-hover:text-cream transition-colors duration-300">Let's Collaborate →</span>
              </button>
            )}
          </div>

          <div className="w-full md:w-1/2 flex items-start md:items-center">
            <div className="flex flex-col gap-6">
              <a href="https://instagram.com/hadimghny" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit">
                <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="font-fjalla text-xl uppercase">Instagram</span>
              </a>
              <a href="mailto:efthadimghny@gmail.com" className="flex items-center gap-4 group w-fit">
                <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="font-fjalla text-xl uppercase">Email</span>
              </a>
              <a href="https://github.com/hadimughny7" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit">
                <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span className="font-fjalla text-xl uppercase">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/hadimughny" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit">
                <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-fjalla text-xl uppercase">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="w-full max-w-2xl relative z-20 pb-32"
            >
            <button 
              onClick={() => setShowForm(false)}
              className="mb-6 font-inter text-sm flex items-center gap-2 hover:text-gray-500 transition-colors"
            >
              <span>←</span> Close Form
            </button>
            <form className="space-y-6 bg-white p-8 border border-black/10 shadow-xl" action="https://formspree.io/f/ganti_kode_formspree_disini" method="POST">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="font-fjalla text-sm uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" name="name" required className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black outline-none transition-colors font-inter" />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="font-fjalla text-sm uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" name="email" required className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black outline-none transition-colors font-inter" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-fjalla text-sm uppercase tracking-widest text-gray-500">Subject</label>
                <input type="text" name="subject" required className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black outline-none transition-colors font-inter" />
              </div>
              <div className="space-y-2">
                <label className="font-fjalla text-sm uppercase tracking-widest text-gray-500">Message</label>
                <textarea name="message" rows="4" required className="w-full bg-transparent border-b border-black/20 pb-2 focus:border-black outline-none transition-colors font-inter resize-none"></textarea>
              </div>
              <button type="submit" className="group relative overflow-hidden w-full bg-jetBlack text-cream py-4 font-fjalla uppercase tracking-widest transition-colors duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                {/* Background Sweep */}
                <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>

                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-colors duration-500">
                  Send Message
                  <div className="relative overflow-hidden flex items-center justify-center w-5 h-5 text-yellow-500 group-hover:text-black transition-colors duration-500">
                    <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]">→</span>
                    <span className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] group-hover:translate-x-0">→</span>
                  </div>
                </span>
              </button>
            </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Massive Watermark */}
      <div className="w-full flex justify-center mt-32 opacity-5 pointer-events-none select-none relative z-10 overflow-hidden">
        <h1 className="font-fjalla text-[clamp(4rem,18vw,20rem)] leading-none tracking-tighter whitespace-nowrap">
          HADI MUGHNY
        </h1>
      </div>

      {/* Footer / Copyright */}
      <div className="w-full flex justify-center pb-8 pt-4 relative z-20">
        <p className="font-inter text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] font-medium text-center px-4">
          © {new Date().getFullYear()} Hadi Mughny. All Rights Reserved.
        </p>
      </div>
    </section>
  )
}
