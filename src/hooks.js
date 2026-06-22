import { useRef, useState, useEffect, useCallback } from 'react'
import { useInView, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'

/* ── Scroll-triggered in-view ── */
export function useSectionInView(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}

/* ── Parallax via scroll ── */
export function useParallax(offset = 100) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  return { ref, y }
}

/* ── Mouse follow for spotlight / cursor effects ── */
export function useMouseFollow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })

  const handleMouse = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }, [x, y])

  return { springX, springY, handleMouse }
}

/* ── 3D Tilt effect on cards ── */
export function useTilt(intensity = 10) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    rotateY.set(dx * intensity)
    rotateX.set(-dy * intensity)
  }, [intensity, rotateX, rotateY])

  const handleLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return { ref, springRotateX, springRotateY, handleMove, handleLeave }
}

/* ── Animated counter ── */
export function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const started = useRef(false)

  useEffect(() => {
    if (!startOnView || !isInView || started.current) return
    started.current = true
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end, duration, startOnView])

  return { count, ref }
}

/* ── Scroll progress ── */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return scaleX
}

/* ── Shared animation variants ── */
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Unsplash image helper ── */
export const img = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

/* ── Premium images ── */
export const IMAGES = {
  heroMain: img('photo-1600880292203-757bb62b4baf', 1920, 1080),
  heroOverlay: img('photo-1551434678-e076c223a692', 1920, 1080),
  strategy: img('photo-1552664730-d307ca884978', 800, 600),
  content: img('photo-1611162617213-7d7a39e9b1d7', 800, 600),
  analytics: img('photo-1551288049-bebda4e38f71', 800, 600),
  team: img('photo-1522071820081-009f0129c71c', 800, 600),
  creative: img('photo-1542744173-8e7e91415657', 800, 600),
  laptop: img('photo-1460925895917-afdab827c52f', 800, 600),
  meeting: img('photo-1542744094-3a31f272c490', 800, 600),
  office: img('photo-1497366216548-37526070297c', 1920, 800),
  growth: img('photo-1507003211169-0a1dd7228f2d', 800, 600),
  cityscape: img('photo-1486406146926-c627a92ad1ab', 1920, 800),
  marketing: img('photo-1533750349088-cd871a92f312', 800, 600),
  social: img('photo-1611162616305-c69b3fa7fbe0', 800, 600),
  funnel: img('photo-1553877522-43269d4ea984', 800, 600),
  results: img('photo-1559136555-9303baea8ebd', 1920, 800),
}
