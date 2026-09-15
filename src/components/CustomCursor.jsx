import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }
    setIsPointer(true)

    const moveCursor = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.project-card') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!isPointer) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full mix-blend-difference pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
      </motion.div>
    </>
  )
}
