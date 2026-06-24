import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Marquee({ text = "ELNR MEDIA • SCALE WITH CERTAINTY • ", direction = "left", speed = 5 }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Scrolling speeds up or moves based on scroll
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const xRight = useTransform(scrollYProgress, [0, 1], [-1000, 0])

  const transformX = direction === "left" ? xLeft : xRight

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden py-8 bg-navy-900 border-y border-white/10 rotate-[-2deg] scale-110 z-20">
      <motion.div
        style={{ x: transformX }}
        className="flex whitespace-nowrap items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 uppercase tracking-widest px-6">
              {text}
            </span>
            <span className="w-4 h-4 bg-brand-500 rounded-full mx-4 shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
