import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-darkOlive flex flex-col justify-center items-center text-cream px-6 py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center w-full mt-10 md:mt-0">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex justify-center relative group mt-8"
        >
          {/* Continuous floating animation wrapper */}
          <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="relative"
          >
             {/* Spinning decorative dashed border */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
               className="absolute -inset-4 border border-dashed border-yellow-600/50 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
             ></motion.div>
             
             {/* Second spinning border */}
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="absolute -inset-2 border border-cream/30 rounded-full opacity-70 group-hover:border-yellow-600/40 transition-colors duration-500"
             ></motion.div>

             <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cream/20 bg-cream/5 shadow-[0_0_40px_rgba(202,138,4,0.15)] group-hover:border-yellow-600/50 transition-colors duration-500">
               <img src="/img/profile-contact.jpg" alt="Hadi Mughny" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
             </div>
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-fjalla text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.85] tracking-tight uppercase whitespace-nowrap"
        >
          Hi, I'm Hadi Mughny
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-fjalla text-[clamp(1.5rem,4.5vw,5rem)] leading-[0.85] tracking-tight uppercase text-cream/90 mt-4 md:mt-2 whitespace-nowrap"
        >
          Fullstack Web Developer
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <p className="font-inter text-cream/80 text-sm md:text-base mb-10 leading-relaxed">
            Information Systems fresh graduate from Universitas Komputer Indonesia with a passion for building modern, responsive, and interactive web experiences — from front-end interfaces to back-end architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-cream/30 rounded-full text-cream transition-colors duration-500 hover:border-yellow-500"
            >
              {/* Background Sweep */}
              <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 rounded-full"></div>
              
              <span className="relative z-10 text-sm md:text-base font-fjalla uppercase tracking-widest group-hover:text-black transition-colors duration-500">Get In Touch</span>
              
              <div className="relative z-10 overflow-hidden flex items-center justify-center w-5 h-5 group-hover:text-black transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[150%]">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-x-[150%] group-hover:translate-x-0">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
            
            <a 
              href="https://drive.google.com/drive/folders/19aGiZpMWN5JGXRMqQHVQC8Uv0SsQN30L?usp=sharing" 
              target="_blank" 
              rel="noreferrer" 
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-cream text-darkOlive border-2 border-transparent rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:border-yellow-500"
            >
              {/* Background Sweep */}
              <div className="absolute inset-0 bg-yellow-500 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 rounded-full"></div>

              <span className="relative z-10 text-sm md:text-base font-fjalla uppercase tracking-widest font-semibold group-hover:text-black transition-colors duration-500">View My CV</span>
              
              <div className="relative z-10 overflow-hidden flex items-center justify-center w-5 h-5 group-hover:text-black transition-colors duration-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%] group-hover:translate-x-[150%]">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-[150%] -translate-x-[150%] group-hover:translate-y-0 group-hover:translate-x-0">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
