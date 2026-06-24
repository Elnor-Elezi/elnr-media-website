import { motion } from 'framer-motion'

export default function PricingObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1000px]">
      <div className="flex items-end justify-center gap-6" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(-20deg)' }}>
        
        {/* Pillar 1 */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          className="relative w-24 h-48 bg-gradient-to-t from-white/40 to-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl flex items-end p-4"
        >
          <div className="w-full h-1/3 bg-brand-200/50 rounded-lg blur-sm" />
        </motion.div>

        {/* Pillar 2 (Center - Tallest) */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="relative w-28 h-72 bg-gradient-to-t from-brand-400/80 to-brand-300/40 backdrop-blur-xl rounded-2xl border border-brand-200/60 shadow-[0_20px_50px_rgba(20,184,166,0.3)] z-10 flex items-end p-4"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="w-full h-1/2 bg-brand-500/40 rounded-lg blur-sm" />
        </motion.div>

        {/* Pillar 3 */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="relative w-24 h-56 bg-gradient-to-t from-orange-200/60 to-orange-100/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl flex items-end p-4"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <div className="w-full h-2/5 bg-orange-300/30 rounded-lg blur-sm" />
        </motion.div>

      </div>
    </div>
  )
}
