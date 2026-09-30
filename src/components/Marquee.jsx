import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ROW_DEFAULTS = {
  top: 'ELNR MEDIA • SCALE WITH CERTAINTY • ',
  bottom: 'CONTENT • ADS • FUNNELS • CRM • LEADS • ',
}

function MarqueeRow({ text, direction = 'left', scrollYProgress, baseSpeed = -1000 }) {
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, baseSpeed])
  const xRight = useTransform(scrollYProgress, [0, 1], [baseSpeed, 0])
  const transformX = direction === 'left' ? xLeft : xRight

  return (
    <motion.div
      style={{ x: transformX }}
      className="flex whitespace-nowrap items-center"
    >
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex items-center">
          <span className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20 uppercase tracking-widest px-5 pb-1">
            {text}
          </span>
          <span className="w-3 h-3 bg-brand-500 rounded-full mx-3 shadow-[0_0_12px_rgba(20,184,166,0.8)] flex-shrink-0" />
        </div>
      ))}
    </motion.div>
  )
}

export default function Marquee({ 
  text = ROW_DEFAULTS.top,
  secondText,
  direction = 'left',
  dual = true
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const effectiveSecondText = secondText || ROW_DEFAULTS.bottom

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-navy-900 border-y border-white/10"
      style={{ transform: 'rotate(-1.5deg) scaleX(1.05)', zIndex: 20, margin: '-8px 0' }}
    >
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      {/* Row 1 — scrolls in primary direction */}
      <div className="py-4">
        <MarqueeRow text={text} direction={direction} scrollYProgress={scrollYProgress} baseSpeed={-900} />
      </div>

      {/* Row 2 — scrolls opposite direction for depth (only if dual=true) */}
      {dual && (
        <div className="py-4 border-t border-white/[0.06]">
          <MarqueeRow
            text={effectiveSecondText}
            direction={direction === 'left' ? 'right' : 'left'}
            scrollYProgress={scrollYProgress}
            baseSpeed={-900}
          />
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
    </div>
  )
}
