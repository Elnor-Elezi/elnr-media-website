import { motion, useReducedMotion } from 'framer-motion'

export default function FloatingGlassShapes({ variant = 'hero' }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  // --- HERO VARIANT (3D Coin Stack - Improved) ---
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

  // --- PRICING VARIANT (Jeton-Style 3D Coin Vault) ---
  if (variant === 'pricing') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center lg:justify-end lg:pr-[15%] opacity-40 lg:opacity-100">
        <motion.div 
          animate={{ rotateX: [15, -15, 15], rotateY: [-25, 25, -25] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] flex items-center justify-center perspective-[1500px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Vault Outer Ring */}
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] rounded-full border border-white/40 dark:border-white/10 bg-brand-500/5 backdrop-blur-md shadow-premium flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d', 
              translateZ: '-100px',
              boxShadow: 'inset 0 0 100px rgba(20, 184, 166, 0.1), 0 50px 100px rgba(0,0,0,0.05)'
            }}
          >
            {/* Vault Notches */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute w-2 h-8 bg-brand-500/30 rounded-full" style={{ transform: `rotate(${i * 30}deg) translateY(-280px)` }} />
            ))}
          </motion.div>

          {/* Jeton 3D Golden Coin Element */}
          <motion.div
            animate={{ rotateZ: [-20, 20, -20], y: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[40%] h-[40%] rounded-full bg-gradient-to-br from-yellow-200 via-orange-300 to-brand-500 border-2 border-white/60 backdrop-blur-xl flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d', 
              translateZ: '150px',
              boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.8), inset 0 -20px 40px rgba(0,0,0,0.2), 0 30px 60px rgba(249, 115, 22, 0.3)'
            }}
          >
            <div className="absolute inset-[15%] rounded-full border-[3px] border-white/50" />
            <div className="absolute inset-[30%] rounded-full bg-white/20 blur-sm" />
          </motion.div>

          {/* Floating Data Shards */}
          {[1, 2, 3].map((shard) => (
            <motion.div
              key={shard}
              animate={{ 
                rotateX: [0, 360], 
                rotateY: [0, 360],
                translateZ: [(shard * 50), (shard * 100), (shard * 50)]
              }}
              transition={{ duration: 15 + shard * 5, repeat: Infinity, ease: "linear" }}
              className="absolute w-16 h-16 bg-white/30 dark:bg-white/10 border border-white/50 backdrop-blur-md rounded-2xl"
              style={{
                transformStyle: 'preserve-3d',
                left: `${shard * 25}%`,
                top: `${shard * 20}%`
              }}
            />
          ))}
        </motion.div>
      </div>
    )
  }

  // --- SERVICES VARIANT (Jeton-Style 3D Data Systems Grid) ---
  if (variant === 'services') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-30 lg:opacity-70">
        <motion.div 
          animate={{ rotateX: [60, 65, 60], rotateZ: [-10, -5, -10], y: [-30, 30, -30] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[150%] h-[150%] flex items-center justify-center perspective-[1000px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main 3D Grid */}
          <div 
            className="absolute inset-[-20%] grid grid-cols-6 grid-rows-6 gap-8 p-12"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {[...Array(36)].map((_, i) => {
              const isHeroNode = i % 5 === 0;
              return (
                <motion.div
                  key={i}
                  animate={{ 
                    translateZ: isHeroNode ? [0, 80, 0] : [0, 20, 0],
                    opacity: isHeroNode ? [0.4, 0.8, 0.4] : 0.1
                  }}
                  transition={{ 
                    duration: 4 + (i % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                  className={`w-full h-full rounded-2xl border ${isHeroNode ? 'border-brand-400 bg-brand-500/20 shadow-glow' : 'border-white/20 bg-white/5'} backdrop-blur-sm`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {isHeroNode && (
                    <div className="absolute inset-1/4 bg-white/40 rounded-full blur-md" />
                  )}
                </motion.div>
              )
            })}
          </div>
          
          {/* Overlay connection lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxNGI4YTYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xNSI+PHBhdGggZD0iTTAgMHYxMDBoMTAwIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-50" />
        </motion.div>
      </div>
    )
  }

  return null
}
