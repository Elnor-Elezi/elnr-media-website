import { motion } from 'framer-motion'

// A custom animated abstract object resembling a stack of 3D coins and floating circles
export default function MovementObject() {
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
        className="absolute w-[70%] h-[70%] bg-gradient-to-br from-brand-300 to-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-30"
      />
      <motion.div
        animate={{ 
          y: [40, -40, 40],
          x: [40, -40, 40],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60%] h-[60%] bg-gradient-to-tr from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-30"
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
          { delay: 0.6, size: "w-48 h-48 lg:w-[380px] lg:h-[380px]", yOffset: 160, rotateZ: -20, color: "from-navy-800 to-navy-900 dark:from-white dark:to-gray-100 dark:text-navy-900", shadow: "rgba(15, 23, 42, 0.5)" },
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
            className={`absolute ${coin.size} rounded-full border border-white/60 dark:border-white/20 bg-gradient-to-br ${coin.color} backdrop-blur-xl flex items-center justify-center`}
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
      </motion.div>
    </div>
  )
}
