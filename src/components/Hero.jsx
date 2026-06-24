import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCounter } from '../hooks'

const stats = [
  { end: 150, suffix: '+', label: 'Campaigns Launched' },
  { end: 340, suffix: '%', label: 'Avg. ROI' },
  { end: 98, suffix: '%', label: 'Client Retention' },
  { end: 2, suffix: 'M+', label: 'Leads Generated' },
]

function AnimatedStat({ end, suffix, label }) {
  const { count, ref } = useCounter(end, 2200)
  return (
    <div ref={ref} className="text-center p-4">
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 mb-2">
        {count}<span className="text-brand-500">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-charcoal-500 font-medium uppercase tracking-wider">{label}</div>
    </div>
  )
}

// A custom animated abstract object resembling Jeton's 3D movement object
function MovementObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
      {/* Orb 1 */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60%] h-[60%] bg-gradient-to-br from-brand-300 to-brand-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      {/* Orb 2 */}
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          x: [20, -20, 20]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[50%] h-[50%] bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
      />
      
      {/* 3D Glass Stack */}
      <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1000px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100, rotateX: 60, rotateZ: -20 }}
            animate={{ 
              opacity: 1, 
              y: [0 - (i * 20), -15 - (i * 20), 0 - (i * 20)],
              rotateX: [60, 65, 60],
              rotateZ: [-20, -18, -20]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.5 + (i * 0.1) },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-[40px] border border-white/40 shadow-2xl backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
              zIndex: 10 - i,
            }}
          >
            {/* Inner glass highlight */}
            <div className="absolute inset-0 rounded-[40px] border border-white/20" style={{ transform: 'scale(0.95)' }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-jeton-ambient"
      aria-label="Welcome to ELNR Media"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] mix-blend-multiply opacity-50" />

      {/* Main content grid (Jeton style: Text bottom-left, Object top-right) */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-container section-padding w-full min-h-[90vh] pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        
        {/* Left column: Typography (aligned left/bottom) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-10 lg:pt-32 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/80 backdrop-blur-md border border-charcoal-100 shadow-sm text-navy-900">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              The Growth Engine
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 w-full">
            <h1 className="font-display font-bold text-navy-900 tracking-tighter leading-[0.95] flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px]"
              >
                Premium
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px]"
              >
                media
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px]"
              >
                systems.
              </motion.span>
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal-500 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl"
          >
            We build complete content, advertising, and funnel systems for businesses ready to scale with absolute clarity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/contact"
              className="group btn-pill btn-primary text-base px-10 py-4 flex items-center gap-3 shadow-glow w-full sm:w-auto justify-center"
            >
              Start your growth
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/pricing"
              className="group btn-pill btn-outline text-base px-10 py-4 bg-white/50 backdrop-blur-md shadow-soft w-full sm:w-auto justify-center"
            >
              View Packages
            </Link>
          </motion.div>
        </div>

        {/* Right column: Movement Object */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end order-1 lg:order-2">
          <MovementObject />
        </div>

      </motion.div>
      
      {/* Stats bar - placed at the absolute bottom like a floating banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass rounded-[32px] p-2 sm:p-4 z-20 hidden lg:block"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-charcoal-200/50">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
