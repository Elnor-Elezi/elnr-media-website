import { motion } from 'framer-motion'

export default function FloatingObjects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px]"
      />
      
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-primary/5 to-transparent rounded-full blur-[100px]"
      />
    </div>
  )
}
