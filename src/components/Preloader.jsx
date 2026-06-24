import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden'
    
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = 'auto'
          }, 400) // slight delay at 100%
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 100)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy-900 text-white"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter"
            >
              ELNR <span className="text-brand-500">MEDIA</span>
            </motion.div>
            
            <div className="flex flex-col items-center gap-4 w-64">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-500"
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(counter, 100)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="text-xl font-mono tracking-widest text-brand-300">
                {Math.min(counter, 100)}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
