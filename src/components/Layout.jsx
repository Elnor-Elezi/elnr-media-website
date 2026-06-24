import Navbar from './Navbar'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CanvasTrail from './CanvasTrail'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-500 relative">
      <CanvasTrail />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
