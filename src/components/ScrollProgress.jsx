import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks'

export default function ScrollProgress() {
  const scaleX = useScrollProgress()

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600 z-[60]"
    />
  )
}
