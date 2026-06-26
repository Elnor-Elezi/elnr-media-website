import { motion, useReducedMotion } from 'framer-motion'

export default function FloatingGlassShapes({ variant = 'hero' }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  // --- HERO VARIANT (3D Coin Stack) ---
  if (variant === 'hero') {
    return (
      <motion.div 
        animate={{ rotateX: [10, -10, 10], rotateY: [-15, 15, -15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center perspective-[1200px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
          {[
            { delay: 0, size: "w-64 h-64 lg:w-[500px] lg:h-[500px]", yOffset: -120, rotateZ: 15, color: "from-brand-300 to-brand-500", shadow: "rgba(20, 184, 166, 0.4)" },
            { delay: 0.2, size: "w-56 h-56 lg:w-[420px] lg:h-[420px]", yOffset: -40, rotateZ: -10, color: "from-white to-gray-100", shadow: "rgba(0, 0, 0, 0.1)" },
            { delay: 0.4, size: "w-72 h-72 lg:w-[580px] lg:h-[580px]", yOffset: 60, rotateZ: 25, color: "from-orange-200 to-yellow-300", shadow: "rgba(249, 115, 22, 0.3)" },
            { delay: 0.6, size: "w-48 h-48 lg:w-[380px] lg:h-[380px]", yOffset: 160, rotateZ: -20, color: "from-navy-800 to-navy-900 dark:from-white dark:to-gray-100 dark:text-navy-900", shadow: "rgba(15, 23, 42, 0.5)" },
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
              className={`absolute ${coin.size} rounded-full border border-white/60 dark:border-white/20 bg-gradient-to-br ${coin.color} backdrop-blur-xl flex items-center justify-center`}
              style={{
                transformStyle: 'preserve-3d',
                translateZ: `${50 - (i * 20)}px`,
                zIndex: 10 - i,
                boxShadow: `inset 0px 4px 15px rgba(255,255,255,0.9), inset 0px -20px 30px rgba(0,0,0,0.15), 0px 40px 50px -15px ${coin.shadow}`
              }}
            >
              <div className="absolute inset-[10%] rounded-full border-2 border-white/30" />
              <div className="absolute inset-[20%] rounded-full border border-white/20 opacity-50" />
            </motion.div>
          ))}
        </motion.div>
    )
  }

  // --- PRICING VARIANT (Glass Spheres & Rings) ---
  if (variant === 'pricing') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full border border-white/30 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-premium"
          style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.2)' }}
        />
        <motion.div 
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] left-[5%] w-48 h-48 rounded-full border-4 border-brand-400/20 backdrop-blur-sm"
        />
        <motion.div 
          animate={{ x: [-30, 30, -30], y: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[60%] right-[25%] w-32 h-32 rounded-full border border-white/40 dark:border-white/20 bg-brand-200/20 dark:bg-brand-500/20 backdrop-blur-lg shadow-glow"
        />
      </div>
    )
  }

  // --- SERVICES VARIANT (Abstract Geometric Panels) ---
  if (variant === 'services') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{ y: [-30, 30, -30], rotateZ: [-5, 5, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[5%] w-72 h-96 rounded-[40px] border border-white/20 dark:border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md shadow-premium rotate-12"
          style={{ boxShadow: 'inset 0 0 60px rgba(255,255,255,0.1)' }}
        />
        <motion.div 
          animate={{ y: [20, -20, 20], rotateZ: [10, -10, 10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[10%] w-64 h-64 rounded-3xl border border-brand-500/20 bg-brand-500/5 backdrop-blur-sm -rotate-6"
        />
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwdjYwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-50 dark:opacity-20" />
      </div>
    )
  }

  return null
}
