import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  {
    title: "Programming Languages",
    tech: ["JavaScript", "TypeScript", "Python", "PHP"]
  },
  {
    title: "Frontend",
    tech: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Radix UI", "TanStack Query", "Zustand"]
  },
  {
    title: "Backend",
    tech: ["Node.js", "Express.js", "Hono", "Bun", "Laravel", "Flask", "REST API", "JWT"]
  },
  {
    title: "Database & ORM",
    tech: ["MySQL", "PostgreSQL", "MongoDB", "Prisma"]
  },
  {
    title: "Tools & Deployment",
    tech: ["Git", "GitHub", "GitHub Actions", "VS Code", "Antigravity", "Vite", "Biome", "Docker", "Railway", "Vercel"],
    wide: true
  }
]

export default function Skills() {
  const container = useRef(null)

  useEffect(() => {
    const cards = gsap.utils.toArray('.skill-box', container.current)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const removeListeners = []

    if (reduceMotion) {
      gsap.set(cards, { opacity: 1, clearProps: 'transform' })
      return undefined
    }

    const context = gsap.context(() => {
      gsap.set('.skills-grid', { perspective: 1200 })

      cards.forEach((card, index) => {
        gsap.set(card, { transformStyle: 'preserve-3d', transformPerspective: 1200 })

        gsap.fromTo(card,
          {
            autoAlpha: 0,
            y: 120,
            z: -180,
            rotationX: 18,
            rotationY: index % 2 === 0 ? -12 : 12,
            scale: 0.92,
          },
          {
            autoAlpha: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.25,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            }
          }
        )

        if (!finePointer) return

        const rotateXTo = gsap.quickTo(card, 'rotationX', { duration: 0.35, ease: 'power3.out' })
        const rotateYTo = gsap.quickTo(card, 'rotationY', { duration: 0.35, ease: 'power3.out' })
        const zTo = gsap.quickTo(card, 'z', { duration: 0.4, ease: 'power3.out' })

        const handlePointerMove = (event) => {
          const bounds = card.getBoundingClientRect()
          const x = (event.clientX - bounds.left) / bounds.width
          const y = (event.clientY - bounds.top) / bounds.height

          card.style.setProperty('--pointer-x', `${x * 100}%`)
          card.style.setProperty('--pointer-y', `${y * 100}%`)
          rotateXTo((0.5 - y) * 10)
          rotateYTo((x - 0.5) * 12)
          zTo(22)
        }

        const handlePointerLeave = () => {
          rotateXTo(0)
          rotateYTo(0)
          zTo(0)
        }

        card.addEventListener('pointermove', handlePointerMove)
        card.addEventListener('pointerleave', handlePointerLeave)
        removeListeners.push(() => {
          card.removeEventListener('pointermove', handlePointerMove)
          card.removeEventListener('pointerleave', handlePointerLeave)
        })
      })
    }, container)

    return () => {
      removeListeners.forEach((removeListener) => removeListener())
      gsap.killTweensOf(cards)
      context.revert()
    }
  }, [])

  return (
    <section id="skills" ref={container} className="py-20 md:py-32 bg-cream text-jetBlack px-6 border-t border-black/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-24">
          <h2 className="font-fjalla text-[clamp(4rem,10vw,8rem)] uppercase tracking-tight">
            What I Use
          </h2>
        </div>

        <div className="skills-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group) => (
            <div
              key={group.title}
              className={`skill-box group relative rounded-3xl border border-black/10 bg-white p-7 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow] duration-500 hover:border-yellow-500/50 hover:shadow-[0_28px_60px_-25px_rgba(0,0,0,0.35)] md:p-8 ${group.wide ? 'md:col-span-2 lg:col-span-2' : ''}`}
              style={{ '--pointer-x': '50%', '--pointer-y': '50%' }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(234, 179, 8, 0.22), transparent 48%)', transform: 'translateZ(1px)' }}
              />

              <div className="relative" style={{ transform: 'translateZ(34px)' }}>
                <h4 className="mb-6 font-fjalla text-2xl uppercase md:text-3xl">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.tech.map((item, i) => (
                    <span key={item} className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[0.65rem] font-semibold tracking-wider transition-[background-color,border-color,transform] duration-500 group-hover:border-yellow-500/50 group-hover:bg-yellow-50 md:text-xs" style={{ transitionDelay: `${i * 35}ms`, transform: 'translateZ(18px)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
