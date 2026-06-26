import { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function Magnetic({ children, className = "", onClick }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 }
  const x = useSpring(position.x, springConfig)
  const y = useSpring(position.y, springConfig)

  const handleMouse = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    
    // Calculate distance from center
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    // Only apply strong pull on desktop
    if (window.innerWidth > 1024) {
      setPosition({ x: middleX * 0.3, y: middleY * 0.3 })
    }
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = (e) => {
    if (onClick) onClick(e)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      className={`magnetic inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
