import { motion } from 'framer-motion'

export default function ContactObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
      {/* Radar pulses */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
          className="absolute w-32 h-32 rounded-full border-2 border-brand-400/40"
        />
      ))}

      {/* Orbiting dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64 rounded-full"
      >
        <div className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-orange-400 rounded-full shadow-[0_0_15px_rgba(251,146,60,0.8)]" />
      </motion.div>

      {/* Orbiting dot 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full"
      >
        <div className="absolute bottom-0 left-1/2 w-6 h-6 -translate-x-1/2 translate-y-1/2 bg-navy-800 rounded-full border-2 border-white/50 shadow-[0_0_15px_rgba(15,23,42,0.5)]" />
      </motion.div>

      {/* Core */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-24 h-24 bg-gradient-to-br from-brand-300 to-brand-500 rounded-2xl shadow-[0_0_50px_rgba(20,184,166,0.6)] flex items-center justify-center backdrop-blur-xl border border-white/40"
        style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
      >
        <div className="w-12 h-12 bg-white/30 rounded-full blur-sm" />
      </motion.div>
    </div>
  )
}
