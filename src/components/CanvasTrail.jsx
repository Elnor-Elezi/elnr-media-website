import { useEffect, useRef } from 'react'

export default function CanvasTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    let particles = []
    let mouse = { x: width/2, y: height/2 }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          color: `rgba(20, 184, 166, ${Math.random()})`
        })
      }
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.life * 4, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        if (p.life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (typeof window === 'undefined' || window.innerWidth < 1024) return null

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-30 mix-blend-screen"
    />
  )
}
