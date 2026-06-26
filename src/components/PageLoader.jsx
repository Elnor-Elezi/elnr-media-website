import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-navy-950 backdrop-blur-sm">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full border-4 border-brand-200 border-t-brand-500 shadow-glow"
      />
    </div>
  )
}
