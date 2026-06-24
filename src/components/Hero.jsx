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

// A custom animated abstract object resembling a stack of 3D coins and floating circles
function MovementObject() {
  return (
    <div className="relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] flex items-center justify-center">
      {/* Background Glow Orbs */}
      <motion.div
        animate={{ 
          y: [-40, 40, -40],
          x: [-20, 20, -20],
          rotate: [0, 20, -20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[70%] h-[70%] bg-gradient-to-br from-brand-300 to-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />
      <motion.div
        animate={{ 
          y: [40, -40, 40],
          x: [40, -40, 40],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60%] h-[60%] bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
      />
      
      {/* 3D Coin/Disc Stack wrapped in 3D rotation */}
      <motion.div 
        animate={{ rotateX: [10, -10, 10], rotateY: [-15, 15, -15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center perspective-[1200px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {[
          { delay: 0, size: "w-64 h-64 lg:w-[500px] lg:h-[500px]", yOffset: -120, rotateZ: 15, color: "from-brand-300 to-brand-500", shadow: "rgba(20, 184, 166, 0.4)" },
          { delay: 0.2, size: "w-56 h-56 lg:w-[420px] lg:h-[420px]", yOffset: -40, rotateZ: -10, color: "from-white to-gray-100", shadow: "rgba(0, 0, 0, 0.1)" },
          { delay: 0.4, size: "w-72 h-72 lg:w-[580px] lg:h-[580px]", yOffset: 60, rotateZ: 25, color: "from-orange-200 to-yellow-300", shadow: "rgba(249, 115, 22, 0.3)" },
          { delay: 0.6, size: "w-48 h-48 lg:w-[380px] lg:h-[380px]", yOffset: 160, rotateZ: -20, color: "from-navy-800 to-navy-900", shadow: "rgba(15, 23, 42, 0.5)" },
          { delay: 0.8, size: "w-40 h-40 lg:w-[320px] lg:h-[320px]", yOffset: 240, rotateZ: 5, color: "from-brand-100 to-teal-100", shadow: "rgba(20, 184, 166, 0.2)" },
        ].map((coin, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 300, rotateX: 65, rotateZ: coin.rotateZ }}
            animate={{ 
              opacity: 1, 
              y: [coin.yOffset, coin.yOffset - 40, coin.yOffset + 20, coin.yOffset],
              rotateX: [65, 72, 58, 65],
              rotateZ: [coin.rotateZ, coin.rotateZ + 15, coin.rotateZ - 10, coin.rotateZ]
            }}
            transition={{ 
              opacity: { duration: 1, delay: coin.delay },
              y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: coin.delay },
              rotateX: { duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: coin.delay * 0.5 },
              rotateZ: { duration: 8 + i, repeat: Infinity, ease: "easeInOut", delay: coin.delay }
            }}
            className={`absolute ${coin.size} rounded-full border border-white/60 bg-gradient-to-br ${coin.color} backdrop-blur-xl flex items-center justify-center`}
            style={{
              transformStyle: 'preserve-3d',
              translateZ: `${50 - (i * 20)}px`,
              zIndex: 10 - i,
              // Extrusion / 3D edge effect for coins
              boxShadow: `inset 0px 4px 15px rgba(255,255,255,0.9), inset 0px -20px 30px rgba(0,0,0,0.15), 0px 40px 50px -15px ${coin.shadow}`
            }}
          >
            {/* Inner Ring (Coin Detail) */}
            <div className="absolute inset-[10%] rounded-full border-2 border-white/30" />
            <div className="absolute inset-[20%] rounded-full border border-white/20 opacity-50" />
            <div className="absolute w-[30%] h-[30%] rounded-full bg-white/20 blur-md" />
          </motion.div>
        ))}

        {/* Floating Particles/Bubbles to add more movement */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -150, 0],
              x: [0, (i % 2 === 0 ? 80 : -80), 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.7, 0.2],
              rotateZ: [0, 180, 360]
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            className="absolute rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xl"
            style={{
              width: `${(i % 3 + 2) * 20}px`,
              height: `${(i % 3 + 2) * 20}px`,
              left: `${15 + (i * 10)}%`,
              top: `${10 + (i * 10)}%`,
              zIndex: 20,
              transform: `translateZ(${100 + i * 20}px)`
            }}
          >
            <div className="absolute inset-1 rounded-full border border-white/40" />
          </motion.div>
        ))}
      </motion.div>
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
        <div className="absolute bottom-[-20%] left-[-20%] w-[1000px] h-[1000px] bg-orange-100/40 rounded-full blur-[150px] mix-blend-multiply opacity-60" />
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
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/80 backdrop-blur-md border border-charcoal-100 shadow-sm text-navy-900">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              The Growth Engine
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 w-full flex flex-col items-start">
            <h1 className="font-display font-bold text-navy-900 tracking-tighter leading-[0.95] flex flex-col items-start">
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
            className="text-charcoal-500 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl text-left"
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
        <div className="absolute lg:relative right-[-20%] lg:right-[-10%] top-[20%] lg:top-0 w-full lg:w-[60%] xl:w-[65%] flex justify-end opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto order-1 lg:order-2">
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
