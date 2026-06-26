import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function ParallaxBackgroundAccents() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  
  // Create different scroll speeds for depth illusion
  const y1 = useTransform(scrollY, [0, 2000], [0, -150])
  const y2 = useTransform(scrollY, [0, 2000], [0, -300])
  const y3 = useTransform(scrollY, [0, 2000], [0, -50])

  if (shouldReduceMotion) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
      {/* Fast moving layer (feels closer) */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 opacity-20 dark:opacity-40">
        <Plus size={16} className="absolute top-[15%] left-[10%] text-brand-500" />
        <Plus size={12} className="absolute top-[60%] right-[15%] text-navy-400" />
        <div className="absolute top-[80%] left-[20%] w-2 h-2 rounded-full bg-brand-400" />
      </motion.div>

      {/* Medium moving layer */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-15 dark:opacity-30">
        <Plus size={24} className="absolute top-[30%] right-[5%] text-charcoal-400" />
        <Plus size={16} className="absolute top-[70%] left-[5%] text-brand-500" />
        <div className="absolute top-[40%] left-[80%] w-3 h-3 rounded-full border border-navy-400" />
        <div className="absolute top-[20%] left-[40%] w-1.5 h-1.5 rounded-full bg-charcoal-400" />
      </motion.div>

      {/* Slow moving layer (feels distant) */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 opacity-10 dark:opacity-20">
        <Plus size={32} className="absolute top-[50%] left-[15%] text-navy-300" />
        <div className="absolute top-[10%] right-[30%] w-32 h-32 rounded-full border border-charcoal-300" />
        <div className="absolute top-[85%] right-[25%] w-24 h-24 rounded-full border border-brand-300" />
      </motion.div>
    </div>
  )
}
