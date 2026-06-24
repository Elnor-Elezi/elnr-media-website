import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      if (isHidden) setIsHidden(false)
    }
    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)
    window.addEventListener('mouseenter', showCursor)

    // Listen to hoverable elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, select, .magnetic')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('mouseenter', showCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY, isHidden])

  if (typeof window === 'undefined' || window.innerWidth < 1024) return null // Only show on desktop

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-500 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x, y, opacity: isHidden ? 0 : 1 }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(20, 184, 166, 0.2)' : 'transparent',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-brand-400 pointer-events-none z-[10000] mix-blend-difference"
        style={{ 
          x: useMotionValue(cursorX.get() + 12), 
          y: useMotionValue(cursorY.get() + 12),
          translateX: -4,
          translateY: -4,
          opacity: isHidden ? 0 : 1 
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
