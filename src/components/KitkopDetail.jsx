import { useEffect, useRef, useState } from 'react'
import { kitkopCaseStudy } from '../data/kitkopCaseStudy'
import { gsap, ScrollTrigger } from '../lib/gsap'

export default function KitkopDetail() {
  const pageRef = useRef(null)
  const heroInnerRef = useRef(null)
  const stageRef = useRef(null)
  const shadowRef = useRef(null)
  const progressRef = useRef(null)
  const [activeCodePart, setActiveCodePart] = useState(null)

  useEffect(() => {
    document.title = 'Cafe Kitkop — System Analysis & Full-Stack Case Study | Hadi Mughny'
    window.scrollTo(0, 0)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const cleanups = []

    if (reduceMotion) return undefined

    const context = gsap.context(() => {
      // 1. Reading progress hairline (scrubbed over time/scroll)
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: pageRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.2,
            },
          }
        )
      }

      // 2. Hero 3D masked letterpress unfold
      gsap.set('.hero-3d-wrap', { perspective: 1200 })
      gsap.fromTo(
        '.hero-3d-line',
        {
          yPercent: 110,
          rotationX: -50,
          z: -80,
          autoAlpha: 0,
          transformOrigin: '50% 100% -30px',
        },
        {
          yPercent: 0,
          rotationX: 0,
          z: 0,
          autoAlpha: 1,
          duration: 1.15,
          stagger: 0.1,
          ease: 'expo.out',
        }
      )

      gsap.fromTo(
        '.hero-fade-item',
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.07,
          delay: 0.25,
          ease: 'power3.out',
        }
      )

      // Hero recedes into 3D Z-depth on scroll
      if (heroInnerRef.current) {
        gsap.to(heroInnerRef.current, {
          yPercent: 16,
          scale: 0.95,
          rotationX: 5,
          z: -90,
          opacity: 0.45,
          transformPerspective: 1400,
          transformOrigin: '50% 0%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // 3. Showcase card 3D architectural entrance
      gsap.fromTo(
        '.showcase-shell',
        {
          y: 90,
          z: -140,
          rotationX: 12,
          scale: 0.95,
          autoAlpha: 0,
          transformPerspective: 1600,
          transformOrigin: '50% 0%',
        },
        {
          y: 0,
          z: 0,
          rotationX: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.showcase-shell',
            start: 'top 88%',
            once: true,
          },
        }
      )

      // 4. Interactive 3D Multi-Plane Product Stage (kitkop-1.png)
      if (finePointer && stageRef.current) {
        const stage = stageRef.current
        const shadow = shadowRef.current
        gsap.set(stage, { transformStyle: 'preserve-3d', transformPerspective: 1400 })

        const rxTo = gsap.quickTo(stage, 'rotationX', { duration: 0.45, ease: 'power3.out' })
        const ryTo = gsap.quickTo(stage, 'rotationY', { duration: 0.45, ease: 'power3.out' })
        const sxTo = shadow ? gsap.quickTo(shadow, 'x', { duration: 0.45, ease: 'power3.out' }) : null
        const syTo = shadow ? gsap.quickTo(shadow, 'y', { duration: 0.45, ease: 'power3.out' }) : null

        const onStageMove = (e) => {
          const rect = stage.getBoundingClientRect()
          const nx = (e.clientX - rect.left) / rect.width
          const ny = (e.clientY - rect.top) / rect.height
          stage.style.setProperty('--mx', `${nx * 100}%`)
          stage.style.setProperty('--my', `${ny * 100}%`)

          rxTo((0.5 - ny) * 13)
          ryTo((nx - 0.5) * 15)
          if (sxTo && syTo) {
            sxTo((0.5 - nx) * 26)
            syTo((0.5 - ny) * 22 + 14)
          }
        }

        const onStageLeave = () => {
          rxTo(0)
          ryTo(0)
          if (sxTo && syTo) {
            sxTo(0)
            syTo(14)
          }
        }

        stage.addEventListener('pointermove', onStageMove)
        stage.addEventListener('pointerleave', onStageLeave)
        cleanups.push(() => {
          stage.removeEventListener('pointermove', onStageMove)
          stage.removeEventListener('pointerleave', onStageLeave)
        })
      }

      // 5. Spatial 3D Cards + 4D Scroll-Velocity Inertial Depth
      const spatialGrids = gsap.utils.toArray('.spatial-grid', pageRef.current)
      spatialGrids.forEach((grid) => {
        gsap.set(grid, { perspective: 1300 })
      })

      const cards = gsap.utils.toArray('.spatial-card', pageRef.current)
      cards.forEach((card, index) => {
        gsap.set(card, { transformStyle: 'preserve-3d', transformPerspective: 1300 })

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            y: 85,
            z: -110,
            rotationX: 14,
            rotationY: index % 2 === 0 ? -6 : 6,
            scale: 0.95,
          },
          {
            autoAlpha: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          }
        )

        if (!finePointer) return

        const rotateXTo = gsap.quickTo(card, 'rotationX', { duration: 0.38, ease: 'power3.out' })
        const rotateYTo = gsap.quickTo(card, 'rotationY', { duration: 0.38, ease: 'power3.out' })
        const zTo = gsap.quickTo(card, 'z', { duration: 0.42, ease: 'power3.out' })

        const onMove = (e) => {
          const rect = card.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width
          const y = (e.clientY - rect.top) / rect.height
          card.style.setProperty('--cx', `${x * 100}%`)
          card.style.setProperty('--cy', `${y * 100}%`)
          rotateXTo((0.5 - y) * 8)
          rotateYTo((x - 0.5) * 9)
          zTo(18)
        }

        const onLeave = () => {
          rotateXTo(0)
          rotateYTo(0)
          zTo(0)
        }

        card.addEventListener('pointermove', onMove)
        card.addEventListener('pointerleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('pointermove', onMove)
          card.removeEventListener('pointerleave', onLeave)
        })
      })

      // 6. 4D Temporal Scroll-Velocity Pitch across content sections
      const velocityPlanes = gsap.utils.toArray('.velocity-plane', pageRef.current)
      if (velocityPlanes.length > 0) {
        velocityPlanes.forEach((plane) => {
          gsap.set(plane, { transformPerspective: 1600, transformOrigin: '50% 50%' })
        })

        const pitchSetters = velocityPlanes.map((plane) =>
          gsap.quickTo(plane, 'rotationX', { duration: 0.55, ease: 'power3.out' })
        )
        let settleTimer = null

        ScrollTrigger.create({
          trigger: pageRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const rawVelocity = self.getVelocity()
            const clampedPitch = gsap.utils.clamp(-2.4, 2.4, rawVelocity / -1100)
            pitchSetters.forEach((setPitch) => setPitch(clampedPitch))

            if (settleTimer) clearTimeout(settleTimer)
            settleTimer = setTimeout(() => {
              pitchSetters.forEach((setPitch) => setPitch(0))
            }, 90)
          },
        })

        cleanups.push(() => {
          if (settleTimer) clearTimeout(settleTimer)
        })
      }

      // 7. Animated numeric count-up on Key Figures & QA stats
      const counters = gsap.utils.toArray('[data-count]', pageRef.current)
      counters.forEach((el) => {
        const target = Number(el.getAttribute('data-count'))
        const suffix = el.getAttribute('data-suffix') || ''
        if (Number.isNaN(target)) return

        const state = { val: 0 }
        gsap.to(state, {
          val: target,
          duration: 1.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(state.val)}${suffix}`
          },
        })
      })
    }, pageRef)

    return () => {
      cleanups.forEach((fn) => fn())
      context.revert()
    }
  }, [])

  return (
    <div ref={pageRef} className="bg-cream min-h-screen text-jetBlack font-inter overflow-x-hidden">
      {/* Top Bar with subtle scroll-time progress line */}
      <header className="fixed top-0 left-0 w-full px-6 py-5 md:px-12 md:py-6 z-50 flex justify-between items-center bg-darkOlive/90 backdrop-blur-md border-b border-cream/10 text-cream">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm md:text-base font-fjalla uppercase tracking-wider hover:text-yellow-500 transition-colors"
        >
          <span>←</span> Back to Portfolio
        </a>

        <a
          href={kitkopCaseStudy.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cream/30 text-xs md:text-sm font-fjalla uppercase tracking-wider hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300"
        >
          GitHub Repo <span>↗</span>
        </a>

        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full bg-yellow-500 origin-left scale-x-0"
        />
      </header>

      {/* Hero Section (Recedes in 3D Z-space on scroll) */}
      <section className="hero-section relative bg-darkOlive text-cream pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div ref={heroInnerRef} className="max-w-6xl mx-auto will-change-transform">
          <p className="hero-fade-item font-inter text-xs md:text-sm uppercase tracking-widest text-cream/60 mb-5">
            Cafe Kitkop &nbsp;—&nbsp; Thesis Project (Apr 2026 – Jul 2026) &nbsp;/&nbsp; {kitkopCaseStudy.role}
          </p>

          <div className="hero-3d-wrap">
            <h1 className="font-fjalla text-[clamp(2.4rem,6vw,5.2rem)] leading-[0.94] uppercase tracking-tight max-w-4xl">
              <span className="block overflow-hidden pb-1">
                <span className="hero-3d-line inline-block will-change-transform">
                  Menu Ordering & POS
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="hero-3d-line inline-block text-cream/90 will-change-transform">
                  Information System
                </span>
              </span>
            </h1>
          </div>

          <p className="hero-fade-item mt-6 max-w-3xl text-cream/80 text-sm md:text-lg leading-relaxed">
            {kitkopCaseStudy.summary}
          </p>

          {/* Key Figures */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 pt-10 border-t border-cream/15">
            {kitkopCaseStudy.metrics.map((m) => (
              <div key={m.label} className="hero-fade-item">
                <p
                  data-count={m.value}
                  className="font-fjalla text-3xl md:text-4xl text-cream tabular-nums"
                >
                  {m.value}
                </p>
                <p className="text-xs md:text-sm text-cream/65 mt-1 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-20 md:space-y-28">
        {/* Interactive 3D Multi-Plane Showcase + System Overview */}
        <section className="showcase-shell grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 rounded-[2.5rem] border border-black/10 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.12)] will-change-transform">
          <div
            ref={stageRef}
            style={{ '--mx': '50%', '--my': '50%' }}
            className="lg:col-span-7 group relative rounded-3xl bg-[#ebe7df] border border-black/10 p-6 md:p-10 flex items-center justify-center min-h-[300px] md:min-h-[380px] select-none will-change-transform"
          >
            {/* Subtle architectural drafting grid (Back Plane Z: 0) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(17,17,17,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.045) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Soft optical specular light following pointer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.65), transparent 55%)',
                transform: 'translateZ(4px)',
              }}
            />

            {/* Counter-shifting optical contact shadow (Mid Plane Z: 16px) */}
            <div
              ref={shadowRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-12 bottom-8 h-10 rounded-full bg-black/20 blur-2xl"
              style={{ transform: 'translate3d(0px, 14px, 16px)' }}
            />

            {/* Floating Product Screenshot (Front Plane Z: 54px) */}
            <img
              src={kitkopCaseStudy.heroImage}
              alt={kitkopCaseStudy.title}
              onLoad={() => ScrollTrigger.refresh()}
              style={{ transform: 'translateZ(54px)' }}
              className="relative w-full h-auto max-h-[350px] object-contain will-change-transform transition-transform duration-500"
            />

            {/* Architectural corner caption (Top Plane Z: 70px) */}
            <div
              style={{ transform: 'translateZ(70px)' }}
              className="hidden sm:flex items-center gap-2 absolute bottom-4 right-5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-sm border border-black/10 text-[0.65rem] uppercase tracking-widest text-gray-600 font-semibold shadow-sm pointer-events-none"
            >
              <span>QR Ordering</span>
              <span className="text-yellow-700">•</span>
              <span>QRIS</span>
              <span className="text-yellow-700">•</span>
              <span>Socket.IO</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-2">/ Methodology</p>
              <h2 className="font-fjalla text-2xl md:text-3xl uppercase">System Overview</h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {kitkopCaseStudy.overview.methodology}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2.5">Analysis & Modeling</p>
              <div className="flex flex-wrap gap-1.5">
                {kitkopCaseStudy.overview.analysisTools.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-black/10 bg-cream text-xs font-medium text-jetBlack">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2.5">Implementation & Cloud</p>
              <div className="flex flex-wrap gap-1.5">
                {kitkopCaseStudy.overview.techStack.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-semibold text-jetBlack">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Motion Graphic Showcase */}
        <section className="velocity-plane will-change-transform">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ Motion Graphic</p>
              <h2 className="font-fjalla text-4xl md:text-5xl uppercase tracking-tight">
                System Walkthrough
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              A brief motion overview of how Cafe Kitkop connects QR table ordering, kitchen updates, and automated stock tracking.
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-[2.5rem] border border-black/10 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.12)]">
            <div className="relative overflow-hidden rounded-3xl bg-jetBlack">
              <video
                src={kitkopCaseStudy.motionVideo}
                poster={kitkopCaseStudy.heroImage}
                controls
                playsInline
                preload="metadata"
                onLoadedMetadata={() => ScrollTrigger.refresh()}
                className="w-full max-h-[72vh] object-contain mx-auto block"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* 01. Requirements & As-Is / To-Be Analysis */}
        <section className="velocity-plane will-change-transform">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ 01 — Requirements & Process Analysis</p>
            <h2 className="font-fjalla text-4xl md:text-5xl uppercase tracking-tight">
              As-Is Problems & To-Be Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
              Requirements were gathered through on-site observation and interviews with the cashier and cafe owner. The running operation (5 actors across 3 core processes) was evaluated into 5 root problems, each paired with a targeted system capability.
            </p>
          </div>

          <div className="spatial-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {kitkopCaseStudy.problemsAndSolutions.map((item) => (
              <div
                key={item.no}
                style={{ '--cx': '50%', '--cy': '50%' }}
                className="spatial-card group relative bg-white rounded-3xl p-7 md:p-8 border border-black/10 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] hover:border-black/25 transition-colors duration-300 will-change-transform"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle at var(--cx) var(--cy), rgba(202, 138, 4, 0.1), transparent 52%)',
                    transform: 'translateZ(1px)',
                  }}
                />

                <div className="relative" style={{ transform: 'translateZ(24px)' }}>
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="font-inter font-semibold text-sm text-yellow-700">{item.no}</span>
                    <h3 className="font-fjalla text-2xl uppercase tracking-tight">{item.problem}</h3>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed border-t border-black/10 pt-4">
                    <div>
                      <span className="font-semibold text-xs uppercase tracking-wider text-gray-400 block mb-1">As-Is</span>
                      <p className="text-gray-600">{item.asIs}</p>
                    </div>
                    <div className="border-t border-black/10 pt-3">
                      <span className="font-semibold text-xs uppercase tracking-wider text-jetBlack block mb-1">Solution</span>
                      <p className="text-gray-700">{item.toBe}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. System Scope & UML Modeling */}
        <section className="velocity-plane pt-12 border-t border-black/10 will-change-transform">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ 02 — System Scope & Modeling</p>
            <h2 className="font-fjalla text-4xl md:text-5xl uppercase tracking-tight">
              UML Architecture & Role Scope
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl leading-relaxed">
              Scoped the proposed system around 6 actors and 5 core use cases with complete written scenarios and role-based access definitions before translating behavior and structure into UML diagrams.
            </p>
          </div>

          <div className="spatial-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitkopCaseStudy.umlDeliverables.map((uml, idx) => (
              <div
                key={uml.title}
                style={{ '--cx': '50%', '--cy': '50%' }}
                className="spatial-card group relative bg-white rounded-3xl p-7 border border-black/10 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] hover:border-black/25 transition-colors duration-300 will-change-transform"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle at var(--cx) var(--cy), rgba(202, 138, 4, 0.1), transparent 52%)',
                    transform: 'translateZ(1px)',
                  }}
                />
                <div className="relative" style={{ transform: 'translateZ(24px)' }}>
                  <span className="font-fjalla text-sm text-yellow-600 tracking-widest">0{idx + 1}</span>
                  <h3 className="font-fjalla text-2xl uppercase mt-2 mb-3">{uml.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{uml.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03. Database Normalization & Interactive 3D Data Codification */}
        <section className="velocity-plane pt-12 border-t border-black/10 will-change-transform">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ 03 — Data Architecture</p>
            <h2 className="font-fjalla text-4xl md:text-5xl uppercase tracking-tight">
              1NF–2NF Normalization & Data Codification
            </h2>
          </div>

          <div className="spatial-grid grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div
              style={{ '--cx': '50%', '--cy': '50%' }}
              className="spatial-card group relative lg:col-span-7 bg-white rounded-3xl p-8 border border-black/10 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] will-change-transform"
            >
              <div className="relative" style={{ transform: 'translateZ(22px)' }}>
                <h3 className="font-fjalla text-2xl uppercase mb-4">12-Table Relational Schema</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {kitkopCaseStudy.databaseDesign.summary}
                </p>
                <ul className="space-y-3 border-t border-black/10 pt-4">
                  {kitkopCaseStudy.databaseDesign.highlights.map((point, index) => (
                    <li key={point} className="flex items-baseline gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="text-yellow-700 font-semibold text-xs shrink-0">0{index + 1}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive 3D Codification Segment Inspector */}
            <div
              style={{ '--cx': '50%', '--cy': '50%' }}
              className="spatial-card lg:col-span-5 bg-jetBlack text-cream rounded-3xl p-8 flex flex-col justify-between will-change-transform"
            >
              <div style={{ transform: 'translateZ(26px)', transformStyle: 'preserve-3d' }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-cream/60">Order Number Codification</p>
                  <span className="text-[0.65rem] uppercase tracking-widest text-cream/40">Hover segment</span>
                </div>

                {/* Interactive 3D Token Blocks */}
                <div
                  className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/[0.06] border border-white/15 rounded-2xl px-4 py-5 my-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {kitkopCaseStudy.databaseDesign.codification.parts.map((part, idx) => {
                    const isActive = activeCodePart === part.code
                    return (
                      <div key={part.code} className="flex items-center gap-1.5 sm:gap-2">
                        <button
                          type="button"
                          onMouseEnter={() => setActiveCodePart(part.code)}
                          onMouseLeave={() => setActiveCodePart(null)}
                          onFocus={() => setActiveCodePart(part.code)}
                          onBlur={() => setActiveCodePart(null)}
                          style={{
                            transform: isActive ? 'translateZ(26px) translateY(-3px)' : 'translateZ(0px)',
                          }}
                          className={`px-2.5 py-1.5 rounded-lg font-fjalla text-2xl md:text-3xl tracking-wider transition-all duration-300 ${
                            isActive
                              ? 'bg-yellow-500 text-black shadow-[0_12px_25px_rgba(234,179,8,0.28)]'
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {part.code}
                        </button>
                        {idx < kitkopCaseStudy.databaseDesign.codification.parts.length - 1 && (
                          <span className="font-fjalla text-2xl text-cream/35 select-none">-</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3 mt-6">
                  {kitkopCaseStudy.databaseDesign.codification.parts.map((part) => {
                    const isActive = activeCodePart === part.code
                    return (
                      <div
                        key={part.code}
                        onMouseEnter={() => setActiveCodePart(part.code)}
                        onMouseLeave={() => setActiveCodePart(null)}
                        className={`border-t border-white/10 pt-3 transition-opacity duration-300 ${
                          activeCodePart && !isActive ? 'opacity-40' : 'opacity-100'
                        }`}
                      >
                        <span className="font-fjalla text-yellow-500 tracking-wider text-sm">{part.code}</span>
                        <p className="text-xs text-cream/75 mt-1 leading-relaxed">{part.meaning}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 & 05. Interface Specification, Prototyping & Black-Box Testing */}
        <section className="velocity-plane pt-12 border-t border-black/10 will-change-transform">
          <div className="spatial-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interface Spec */}
            <div
              style={{ '--cx': '50%', '--cy': '50%' }}
              className="spatial-card bg-white rounded-3xl p-8 border border-black/10 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] will-change-transform"
            >
              <div style={{ transform: 'translateZ(22px)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ 04 — Interface Specification & Prototyping</p>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase mb-6">
                  Menu & I/O Blueprint
                </h2>
                <div className="space-y-4">
                  {kitkopCaseStudy.interfaceAndTesting.prototyping.map((spec) => (
                    <div key={spec.metric} className="border-t border-black/10 pt-4">
                      <p className="font-fjalla text-xl uppercase text-jetBlack">{spec.metric}</p>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{spec.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Black-Box Testing */}
            <div
              style={{ '--cx': '50%', '--cy': '50%' }}
              className="spatial-card bg-white rounded-3xl p-8 border border-black/10 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.25)] flex flex-col justify-between will-change-transform"
            >
              <div style={{ transform: 'translateZ(22px)' }}>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">/ 05 — Quality Assurance</p>
                <h2 className="font-fjalla text-3xl md:text-4xl uppercase mb-4">
                  Black-Box Testing Validation
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                  {kitkopCaseStudy.interfaceAndTesting.testing.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4" style={{ transform: 'translateZ(28px)' }}>
                {kitkopCaseStudy.interfaceAndTesting.testing.stats.map((stat) => (
                  <div key={stat.label} className="p-5 rounded-2xl bg-cream border border-black/10">
                    <p className="font-fjalla text-2xl md:text-3xl text-jetBlack">{stat.value}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/10">
          <div>
            <h3 className="font-fjalla text-2xl md:text-3xl uppercase">Explore the Implementation</h3>
            <p className="text-sm text-gray-600 mt-1">
              Frontend deployed on Vercel • Backend & MySQL database hosted on Railway
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={kitkopCaseStudy.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden px-8 py-4 bg-jetBlack text-cream rounded-full font-fjalla uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              View Source on GitHub ↗
            </a>
            <a
              href="/#projects"
              className="px-8 py-4 border border-black rounded-full font-fjalla uppercase tracking-wider text-sm hover:bg-black hover:text-cream transition-colors duration-300"
            >
              ← Back to Projects
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
