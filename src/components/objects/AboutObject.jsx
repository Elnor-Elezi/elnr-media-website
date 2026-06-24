import { motion } from 'framer-motion'

export default function AboutObject() {
  return (
    <div className="relative w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] flex items-center justify-center perspective-[1200px]">
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glowing Core Sphere */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-gradient-to-br from-brand-300 to-brand-600 shadow-[0_0_100px_rgba(20,184,166,1)] blur-md"
          style={{ transform: 'translateZ(0px)' }}
        />
        
        {/* Inner Solid Core */}
        <div 
          className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white dark:bg-navy-900 border border-brand-300 shadow-[inset_0_0_20px_rgba(20,184,166,0.5)]"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* 3D Intersecting Rings (Perfectly aligned Atom Model) */}
        {[
          { rotateX: 0, rotateY: 90, rotateZ: 0, color: "border-brand-400/80 dark:border-brand-400/60" },
          { rotateX: 90, rotateY: 0, rotateZ: 45, color: "border-brand-300/80 dark:border-brand-300/60" },
          { rotateX: 45, rotateY: 45, rotateZ: 0, color: "border-teal-300/80 dark:border-teal-300/60" },
          { rotateX: -45, rotateY: -45, rotateZ: 90, color: "border-white/60 dark:border-white/30" }
        ].map((ring, i) => (
          <div
            key={i}
            className={`absolute inset-0 m-auto w-80 h-80 sm:w-96 sm:h-96 rounded-full border-2 shadow-[0_0_30px_rgba(20,184,166,0.2)] backdrop-blur-sm ${ring.color}`}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg) rotateZ(${ring.rotateZ}deg)`
            }}
          >
            {/* Orbiting particles exactly ON the ring (translateZ is 0) */}
            <motion.div
              animate={{ rotateZ: [0, 360] }}
              transition={{ duration: 8 + i * 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full absolute inset-0 m-auto"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Particle 1 */}
              <div 
                className="absolute top-[-10px] left-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,1)]" 
                style={{ transform: 'translateX(-50%) translateZ(0px)' }}
              />
              {/* Particle 2 (Opposite) */}
              <div 
                className="absolute bottom-[-10px] left-1/2 w-3 h-3 bg-brand-300 rounded-full shadow-[0_0_15px_rgba(20,184,166,1)]" 
                style={{ transform: 'translateX(-50%) translateZ(0px)' }}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
