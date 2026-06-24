import ScrollProgress from './ScrollProgress'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import CustomCursor from './CustomCursor'
import Preloader from './Preloader'
import CanvasTrail from './CanvasTrail'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-500 relative">
      <Preloader />
      <CustomCursor />
      <CanvasTrail />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
