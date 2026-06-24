import { motion } from 'framer-motion'

export default function ContactObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1200px]">
      <motion.div
        animate={{ rotateY: [0, -360], rotateX: [15, 30, 15] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core Sphere */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-gradient-to-br from-brand-300/40 to-brand-500/40 backdrop-blur-md rounded-full border border-white/40 shadow-[0_0_60px_rgba(20,184,166,0.6)] flex items-center justify-center"
          style={{ transform: 'translateZ(0px)' }}
        >
          <div className="w-16 h-16 bg-white/20 rounded-full blur-md" />
        </motion.div>

        {/* 3D Orbiting Rings */}
        {[
          { size: 240, rx: 60, rz: -20, duration: 15, delay: 0 },
          { size: 340, rx: -60, rz: 30, duration: 20, delay: 2 },
          { size: 440, rx: 70, rz: 10, duration: 25, delay: 4 },
        ].map((ring, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/20"
            style={{ 
              width: `${ring.size}px`, 
              height: `${ring.size}px`,
              transformStyle: 'preserve-3d',
              transform: `rotateX(${ring.rx}deg) rotateZ(${ring.rz}deg)`
            }}
          >
            {/* Pulse effect traveling along the ring */}
            <motion.div
              animate={{ rotateZ: [0, 360] }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: "linear", delay: ring.delay }}
              className="absolute inset-0"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full blur-[8px]" style={{ transform: 'translateZ(10px)' }} />
              <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0_0_15px_white]" style={{ transform: 'translateZ(12px)' }} />
            </motion.div>
          </motion.div>
        ))}

        {/* Global wireframe meridian */}
        <div className="absolute w-32 h-32 rounded-full border border-brand-200/30" style={{ transform: 'rotateX(90deg)' }} />
        <div className="absolute w-32 h-32 rounded-full border border-brand-200/30" style={{ transform: 'rotateY(90deg)' }} />
        
      </motion.div>
    </div>
  )
}
