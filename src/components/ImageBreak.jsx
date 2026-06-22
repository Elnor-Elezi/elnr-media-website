import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ImageBreak({ image, alt, overlay = 'light' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05])

  return (
    <div ref={ref} className="relative h-[40vh] sm:h-[50vh] overflow-hidden" role="img" aria-label={alt}>
      <motion.img
        src={image}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Clean fade-to-white edges only, no tint over the photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  )
}
