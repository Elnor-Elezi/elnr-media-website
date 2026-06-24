import { motion } from 'framer-motion'

export default function PricingObject() {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center perspective-[1000px]">
      <motion.div 
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}
      >
        {/* Tiers */}
        {[
          { size: 240, color: 'border-white/10', y: 40, duration: 4 },
          { size: 180, color: 'border-brand-300/30 shadow-[inset_0_0_30px_rgba(94,234,212,0.2)]', y: 0, duration: 5 },
          { size: 120, color: 'border-brand-500/50 shadow-[inset_0_0_40px_rgba(20,184,166,0.4)]', y: -40, duration: 3 },
          { size: 60, color: 'bg-brand-400 border-white/80 shadow-[0_0_50px_rgba(20,184,166,0.8)]', y: -80, duration: 2 }
        ].map((tier, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [tier.y, tier.y - 20, tier.y],
              rotateZ: [0, i % 2 === 0 ? 360 : -360] 
            }}
            transition={{ 
              y: { duration: tier.duration, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" }
            }}
            className={`absolute rounded-full border-2 ${tier.color} backdrop-blur-sm`}
            style={{ 
              width: `${tier.size}px`, 
              height: `${tier.size}px`,
              transform: `translateZ(${tier.y}px)`
            }}
          >
            {/* Orbiting particles on each ring */}
            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-[0_0_10px_white]" />
          </motion.div>
        ))}

        {/* Central Vertical Beam */}
        <div className="absolute w-1 h-[400px] bg-gradient-to-b from-transparent via-brand-400/50 to-transparent" style={{ transform: 'rotateX(90deg)' }} />
      </motion.div>
    </div>
  )
}
