import { motion } from 'framer-motion'

export default function AboutObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1200px]">
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Core Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-20 h-20 bg-brand-500 rounded-full blur-[30px] opacity-70"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* 3D Intersecting Rings (Atom Model) */}
        {[
          { rotateX: 0, rotateY: 75, rotateZ: 45, color: "border-brand-400" },
          { rotateX: 75, rotateY: 0, rotateZ: 45, color: "border-brand-300" },
          { rotateX: 45, rotateY: 45, rotateZ: 0, color: "border-orange-300" }
        ].map((ring, i) => (
          <div
            key={i}
            className={`absolute w-72 h-72 rounded-full border border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)] ${ring.color}`}
            style={{ 
              transformStyle: 'preserve-3d',
              transform: `rotateX(${ring.rotateX}deg) rotateY(${ring.rotateY}deg) rotateZ(${ring.rotateZ}deg)`
            }}
          >
            {/* Orbiting particle on the ring */}
            <motion.div
              animate={{ rotateZ: [0, 360] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-full absolute"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute top-[-8px] left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" 
                style={{ transform: 'translateX(-50%) translateZ(20px)' }}
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
