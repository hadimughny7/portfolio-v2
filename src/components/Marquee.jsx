import { useRef, useEffect } from 'react'
import { marqueeItems } from '../data/marquee'
import { gsap } from '../lib/gsap'

export default function Marquee() {
  const container = useRef(null)
  
  useEffect(() => {
    const context = gsap.context(() => {
      // Horizontal scroll effect on scroll
      gsap.to('.marquee-inner', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, container)

    return () => context.revert()
  }, [])

  return (
    <div ref={container} className="w-full bg-cream py-8 overflow-hidden border-b border-black/10">
      <div className="marquee-inner flex whitespace-nowrap items-center w-max">
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-2xl md:text-4xl font-fjalla uppercase tracking-wider mx-8 md:mx-12 text-jetBlack">{item}</span>
            <span className="text-2xl md:text-4xl text-yellow-600 font-light">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
