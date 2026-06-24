import { motion } from 'framer-motion'

export default function ServicesObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1200px]">
      <motion.div
        animate={{ rotateY: [0, 360], rotateX: [10, -10, 10] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Central Core Cube */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-brand-500/80 backdrop-blur-md rounded-xl border border-white/40 shadow-[0_0_40px_rgba(20,184,166,0.6)]"
          style={{ transform: 'translateZ(0px) rotate45deg' }}
        />

        {/* Orbiting Cubes */}
        {[
          { delay: 0, x: 120, y: -80, z: 60, size: 'w-16 h-16', color: 'bg-orange-300/70' },
          { delay: 1, x: -140, y: 40, z: -80, size: 'w-20 h-20', color: 'bg-navy-800/80' },
          { delay: 2, x: 60, y: 140, z: 40, size: 'w-12 h-12', color: 'bg-white/80' },
          { delay: 3, x: -80, y: -120, z: 100, size: 'w-14 h-14', color: 'bg-brand-300/60' },
        ].map((cube, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [cube.x - 20, cube.x + 20, cube.x - 20],
              y: [cube.y + 20, cube.y - 20, cube.y + 20],
              rotateZ: [0, 180, 360]
            }}
            transition={{ 
              opacity: { duration: 1, delay: cube.delay },
              x: { duration: 8 + i, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 15 + i, repeat: Infinity, ease: "linear" }
            }}
            className={`absolute ${cube.size} ${cube.color} backdrop-blur-xl rounded-lg border border-white/30 shadow-xl`}
            style={{ transform: `translateZ(${cube.z}px)` }}
          />
        ))}

        {/* Connecting Lines (Simulated by thin divs) */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent rotate-45" />
        <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-brand-400/30 to-transparent -rotate-45" />
      </motion.div>
    </div>
  )
}
