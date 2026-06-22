import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMouseFollow, useCounter, IMAGES } from '../hooks'

const stats = [
  { end: 150, suffix: '+', label: 'Campaigns Launched' },
  { end: 340, suffix: '%', label: 'Avg. ROI' },
  { end: 98, suffix: '%', label: 'Client Retention' },
  { end: 2, suffix: 'M+', label: 'Leads Generated' },
]

function AnimatedStat({ end, suffix, label }) {
  const { count, ref } = useCounter(end, 2200)
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700">
        {count}<span className="text-brand-500">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-charcoal-500 mt-1 font-medium">{label}</div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white via-charcoal-50 to-brand-50/30"
      aria-label="Welcome to ELNR Media"
    >
      {/* Subtle decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-100/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-50/60 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-charcoal-100/20 rounded-full blur-[150px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-container section-padding w-full pt-32 pb-16 lg:pt-40 lg:pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase bg-brand-50 text-brand-700 border border-brand-200/60">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Premium Media Agency
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 max-w-4xl">
          <h1>
            {['Premium', 'Media', 'Systems'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy-700 tracking-tight mr-4 lg:mr-5"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden sm:block" />
            {['Built', 'to'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.86 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy-700 tracking-tight mr-4 lg:mr-5"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gradient tracking-tight mr-4 lg:mr-5"
            >
              Grow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 1.22, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-navy-700 tracking-tight"
            >
              Your Brand
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
          We build complete content, advertising, and funnel systems for
          businesses ready to scale with clarity, consistency, and authority.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <Link
            to="/contact"
            className="group magnetic-btn relative inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-brand-500 to-brand-700 shadow-glow hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
          <Link
            to="/pricing"
            className="group magnetic-btn inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-navy-700 rounded-full border border-charcoal-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-500 hover:-translate-y-1"
          >
            View Packages
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="bg-white rounded-2xl p-6 sm:p-8 max-w-3xl shadow-card border border-charcoal-100"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <AnimatedStat key={s.label} {...s} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-charcoal-400 uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-charcoal-300 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-brand-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
