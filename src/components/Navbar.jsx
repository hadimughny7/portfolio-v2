import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full p-6 md:px-12 md:py-8 z-[60] flex justify-between items-center transition-colors duration-300 ${isOpen ? 'text-jetBlack' : 'text-cream mix-blend-difference'}`}>
        <div className="font-inter font-medium tracking-wide pointer-events-auto">
          <a href="#" className="text-xl md:text-2xl font-fjalla uppercase tracking-widest hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Hadi Mughny</a>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center pointer-events-auto hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm ${isOpen ? 'bg-black/5 text-black border border-black/10 hover:bg-black/10' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'}`}
        >
          {isOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* Full-screen Overlay */}
      <div 
        className={`fixed inset-0 bg-cream z-50 flex flex-col justify-center items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}`}
      >
        <ul className="flex flex-col items-center justify-center w-full h-full gap-4 sm:gap-6 md:gap-8 px-6">
          {navLinks.map((link, i) => (
            <li key={i} className="shrink-0">
              <a 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const targetId = link.href.replace('#', '');
                  setTimeout(() => {
                    if (targetId) {
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 300); // Wait for menu closing animation slightly
                }}
                className={`group inline-block font-fjalla text-[clamp(2.5rem,7vh,5rem)] uppercase tracking-tight text-jetBlack transition-transform transform duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden px-2 py-1 -mx-2 -my-1 leading-normal">
                  <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[110%] pb-1">{link.name}</span>
                  <span className="absolute left-2 top-1 inline-block translate-y-[110%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 text-yellow-600 italic pb-1">{link.name}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
