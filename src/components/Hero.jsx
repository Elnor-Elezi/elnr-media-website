import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCounter } from '../hooks'
import Magnetic from './Magnetic'

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

import { lazy, Suspense } from 'react'
const MovementObject = lazy(() => import('./objects/MovementObject'))
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Welcome to ELNR Media"
    >
      {/* Fully Animated Moving Background (Reverse-Engineered Jeton Feel) */}
      <motion.div 
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "5%", "-5%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-brand-200/30 rounded-full blur-[150px] mix-blend-multiply opacity-60" />
      </motion.div>

      <motion.div 
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-5%", "5%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-[-20%] left-[-20%] w-[1000px] h-[1000px] bg-brand-100/40 dark:bg-brand-900/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen opacity-60" />
      </motion.div>

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
            className="text-charcoal-500 dark:text-charcoal-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl text-left"
          >
            We build complete content, advertising, and funnel systems for businesses ready to scale with absolute clarity.
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
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
          <Suspense fallback={null}>
            <MovementObject />
          </Suspense>
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
