import { motion } from 'framer-motion'

export default function ServicesObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1200px]">
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [15, -15, 15] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core structure */}
        <div className="absolute inset-0 m-auto w-80 h-80 border border-brand-500/30 dark:border-brand-500/20 rounded-full" style={{ transform: 'rotateX(90deg)' }} />
        <div className="absolute inset-0 m-auto w-80 h-80 border border-brand-500/30 dark:border-brand-500/20 rounded-full" style={{ transform: 'rotateY(90deg)' }} />
        <div className="absolute inset-0 m-auto w-80 h-80 border border-brand-500/30 dark:border-brand-500/20 rounded-full" />
        
        {/* Central Core */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotateZ: [0, 180] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-tr from-brand-400 to-brand-600 rounded-2xl shadow-[0_0_80px_rgba(20,184,166,0.8)] backdrop-blur-md"
        />

        {/* Orbiting rings and nodes */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{ rotateZ: [0, ring % 2 === 0 ? 360 : -360], rotateX: [0, 360] }}
            transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto rounded-full border border-charcoal-200/50 dark:border-white/10"
            style={{ 
              width: `${ring * 160}px`, 
              height: `${ring * 160}px`,
              transformStyle: 'preserve-3d' 
            }}
          >
            <div className="absolute top-0 left-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,1)]" />
            <div className="absolute bottom-0 right-1/4 w-4 h-4 bg-brand-300 rounded-full shadow-[0_0_20px_rgba(94,234,212,0.8)]" />
          </motion.div>
        ))}

        {/* Floating Data Cubes */}
        {[
          { x: 160, y: -160, z: 80 },
          { x: -180, y: 120, z: -120 },
          { x: 120, y: 180, z: 140 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [pos.y, pos.y - 40, pos.y],
              rotateX: [0, 360],
              rotateY: [0, 360]
            }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 m-auto w-16 h-16 bg-white/5 backdrop-blur-xl border border-charcoal-200/50 dark:border-white/20 rounded-xl"
            style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)` }}
          />
        ))}
      </motion.div>
    </div>
  )
}
