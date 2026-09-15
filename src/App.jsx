import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-cream min-h-screen text-jetBlack font-inter">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
    </div>
  )
}

export default App

