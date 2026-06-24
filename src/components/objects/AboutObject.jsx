import { motion } from 'framer-motion'

export default function AboutObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1000px]">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[60%] h-[60%] bg-brand-400 rounded-full blur-[80px]"
      />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 180] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[80%] h-[80%] rounded-full border border-brand-300/40 shadow-[inset_0_0_20px_rgba(20,184,166,0.2)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
      </motion.div>

      {/* Middle Ring */}
      <motion.div
        animate={{ rotateY: [0, 360], rotateZ: [0, -180] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[60%] h-[60%] rounded-full border border-orange-200/50 shadow-[inset_0_0_20px_rgba(253,186,116,0.2)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute top-1/2 right-0 w-3 h-3 translate-x-1/2 -translate-y-1/2 bg-orange-100 rounded-full shadow-[0_0_15px_rgba(255,237,213,0.8)]" />
      </motion.div>

      {/* Inner Core */}
      <motion.div
        animate={{ rotateZ: [0, 360], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[30%] h-[30%] rounded-full bg-gradient-to-br from-navy-800 to-navy-900 border border-white/20 shadow-2xl flex items-center justify-center backdrop-blur-xl"
      >
        <div className="absolute inset-2 rounded-full border border-white/10" />
      </motion.div>
    </div>
  )
}
