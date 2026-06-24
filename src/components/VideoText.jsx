import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function VideoText({ text = "ELNR MEDIA", videoSrc = "https://cdn.pixabay.com/vimeo/328303867/network-22687.mp4?width=1280&hash=123" }) {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // We could scrub video time based on scroll, but browsers block video scrubbing natively.
  // Instead, we will scale the text down slightly as user scrolls.
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1])

  return (
    <div ref={containerRef} className="relative w-full h-[60vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-white dark:bg-navy-950">
      <motion.div style={{ scale }} className="relative z-10 w-full h-full flex items-center justify-center">
        {/* CSS Magic to clip video to text */}
        <div className="relative inline-block" style={{ mixBlendMode: 'screen' }}>
          <h2 className="font-display font-black text-[12vw] leading-none tracking-tighter text-black bg-white dark:bg-navy-950 px-8 py-4 mix-blend-multiply">
            {text}
          </h2>
          <video 
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-[-1]"
          />
        </div>
      </motion.div>
    </div>
  )
}
