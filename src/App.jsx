import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Philosophy from './components/Philosophy'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import KitkopDetail from './components/KitkopDetail'
import { useSmoothScroll } from './hooks/useSmoothScroll'

function App() {
  useSmoothScroll()

  const pathname = window.location.pathname.replace(/\/+$/, '')
  const searchParams = new URLSearchParams(window.location.search)
  const isKitkopDetail =
    pathname === '/projects/kitkop' || searchParams.get('project') === 'kitkop'

  if (isKitkopDetail) {
    return (
      <div className="bg-cream min-h-screen text-jetBlack font-inter">
        <CustomCursor />
        <KitkopDetail />
      </div>
    )
  }

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
