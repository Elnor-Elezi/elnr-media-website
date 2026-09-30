import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function JourneyThread({ containerRef }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Smooth out the scroll progress slightly for a premium feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Transform the height of the glowing line based on scroll
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1])
  
  // Transform the glowing dot position
  const dotY = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  if (!mounted) return null;

  return (
    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px z-50 pointer-events-none hidden sm:block">
      {/* Background track */}
      <div className="absolute inset-0 w-full h-full bg-charcoal-200/20 dark:bg-white/5" />
      
      {/* The glowing thread that draws down */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-300 via-brand-500 to-brand-600 origin-top shadow-[0_0_15px_rgba(20,184,166,0.6)]"
        style={{ scaleY, height: '100%' }}
      />
      
      {/* The trailing dot */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-400 shadow-[0_0_20px_4px_rgba(20,184,166,0.8)]"
        style={{ top: dotY, marginTop: '-6px' }}
      >
        <div className="absolute inset-0 rounded-full bg-white opacity-50 animate-ping" />
      </motion.div>
    </div>
  )
}
