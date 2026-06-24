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
        {/* Central Core */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotateZ: [0, 180] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-24 h-24 bg-gradient-to-tr from-brand-400 to-brand-600 rounded-2xl shadow-[0_0_80px_rgba(20,184,166,0.8)] backdrop-blur-md"
        />

        {/* Floating Data Cubes (Cards) */}
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
            className="absolute inset-0 m-auto w-16 h-16 bg-white/5 dark:bg-white backdrop-blur-xl border border-charcoal-200/50 dark:border-white rounded-xl shadow-lg dark:shadow-white/20"
            style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)` }}
          />
        ))}
      </motion.div>
    </div>
  )
}
