import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(10px)'
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)'
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full relative origin-center"
    >
      {children}
    </motion.div>
  )
}
