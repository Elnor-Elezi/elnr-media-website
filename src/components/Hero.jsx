import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCounter } from '../hooks'
import Magnetic from './Magnetic'
import AnimatedAuroraBackground from './backgrounds/AnimatedAuroraBackground'
import FloatingGlassShapes from './backgrounds/FloatingGlassShapes'
import ParallaxBackgroundAccents from './backgrounds/ParallaxBackgroundAccents'

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
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 dark:text-white mb-2">
        {count}<span className="text-brand-500">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-charcoal-500 dark:text-charcoal-300 font-medium uppercase tracking-wider">{label}</div>
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
      className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-16 overflow-hidden"
      aria-label="Welcome to ELNR Media"
    >
      {/* Background System */}
      <AnimatedAuroraBackground variant="hero" />
      <ParallaxBackgroundAccents />

      {/* Main content grid (Writing on left, Object on right) */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-container section-padding w-full min-h-[90vh] pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        
        {/* Left column: Typography (Writing on the left) */}
        <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col items-start text-left pt-10 lg:pt-32 order-2 lg:order-1 relative z-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border border-charcoal-100 dark:border-white/10 shadow-sm text-navy-900 dark:text-white">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              The Growth Engine
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 w-full flex flex-col items-start">
            <h1 className="font-display font-bold text-navy-900 dark:text-white tracking-tighter leading-[0.95] flex flex-col items-start">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px]"
              >
                Scale B2B
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px]"
              >
                revenue
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
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-charcoal-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
        >
          Stop burning capital on isolated marketing tactics. We build interconnected content and ad architectures that lower Customer Acquisition Cost (CAC) and deliver qualified B2B sales calls.
        </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full"
          >
            <Magnetic>
              <Link
                to="/contact"
                className="group btn-pill btn-primary dark:bg-white dark:text-navy-900 text-base px-10 py-4 flex items-center gap-3 shadow-glow w-full sm:w-auto justify-center"
              >
                Start your growth
                <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/pricing"
                className="group btn-pill btn-outline text-base px-10 py-4 bg-white/50 dark:bg-navy-800/50 dark:text-white backdrop-blur-md shadow-soft w-full sm:w-auto justify-center"
              >
                View Packages
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right column: Movement Object */}
        <div className="absolute lg:relative right-[-20%] lg:right-[-20%] xl:right-[-30%] top-[20%] lg:top-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] flex justify-end opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto order-1 lg:order-2 lg:scale-125 xl:scale-150 origin-right lg:translate-x-12 xl:translate-x-24">
          <FloatingGlassShapes variant="hero" />
        </div>

      </motion.div>
      
      {/* Stats bar - placed at the absolute bottom like a floating banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl glass dark:glass-dark rounded-[32px] p-2 sm:p-4 z-20 hidden lg:block"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-charcoal-200/50 dark:divide-white/10">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
