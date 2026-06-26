import { motion, useReducedMotion } from 'framer-motion'

export default function AnimatedAuroraBackground({ variant = 'hero' }) {
  const shouldReduceMotion = useReducedMotion()

  // Configure colors based on page variant
  const colors = {
    hero: [
      'bg-brand-500/20',
      'bg-brand-300/20',
      'bg-teal-400/20'
    ],
    pricing: [
      'bg-brand-400/20',
      'bg-blue-400/20',
      'bg-indigo-400/10'
    ],
    services: [
      'bg-orange-300/10',
      'bg-brand-400/10',
      'bg-yellow-300/10'
    ],
    about: [
      'bg-brand-500/10',
      'bg-navy-400/10',
      'bg-teal-300/10'
    ]
  }[variant]

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${colors[0]} rounded-full blur-[120px] opacity-60`} />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full filter blur-[100px] opacity-60 dark:opacity-40">
        <motion.div 
          className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply dark:mix-blend-screen ${colors[0]} animate-blob`}
        />
        <motion.div 
          className={`absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full mix-blend-multiply dark:mix-blend-screen ${colors[1]} animate-blob animation-delay-2000`}
        />
        <motion.div 
          className={`absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply dark:mix-blend-screen ${colors[2]} animate-blob animation-delay-4000`}
        />
      </div>
    </div>
  )
}
