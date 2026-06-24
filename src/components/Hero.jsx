import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCounter, IMAGES } from '../hooks'

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
      {/* Decorative Jeton-style ambient orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50" />

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-container section-padding w-full pt-40 pb-20 lg:pt-52 lg:pb-32 flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white border border-charcoal-100 shadow-sm text-navy-900">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            The Growth Engine
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-display font-bold text-navy-900 tracking-tighter leading-[0.9] flex flex-wrap justify-center gap-x-4 sm:gap-x-6 lg:gap-x-8">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px]"
            >
              Premium
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px]"
            >
              media
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl lg:text-[100px] xl:text-[120px]"
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
          className="text-charcoal-500 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-14 max-w-3xl"
        >
          We build complete content, advertising, and funnel systems for businesses ready to scale with absolute clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
          <Link
            to="/contact"
            className="group btn-pill btn-primary text-base px-10 py-5 flex items-center gap-3 shadow-glow"
          >
            Start your growth
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            to="/pricing"
            className="group btn-pill btn-outline text-base px-10 py-5 bg-white shadow-soft"
          >
            View Packages
          </Link>
        </motion.div>

        {/* Stats bar - Jeton style borderless glass */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl glass rounded-[32px] p-2 sm:p-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-charcoal-200/50">
            {stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
