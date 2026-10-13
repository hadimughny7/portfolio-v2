import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

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

