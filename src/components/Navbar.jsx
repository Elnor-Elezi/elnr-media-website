import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, hash } = useLocation()
  
  const activeSection = hash ? pathname + hash : pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Desktop Floating Pill Nav */}
      <nav 
        className={`hidden lg:flex items-center justify-between p-2 rounded-full pointer-events-auto transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border border-charcoal-200/50 shadow-soft w-[800px]' 
            : 'bg-transparent w-[800px]'
        }`}
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center pl-4 group" aria-label="ELNR Media home">
          <img 
            src="/logo.png?v=3" 
            alt="ELNR Logo" 
            className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
          />
        </Link>

        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors duration-300 ${
                activeSection === link.href ? 'text-navy-900 bg-black/[0.03]' : 'text-charcoal-500 hover:text-navy-900 hover:bg-black/[0.02]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="btn-pill bg-navy-900 text-white hover:bg-navy-800 shadow-sm py-2.5 px-6 ml-2"
        >
          Book Call
        </Link>
      </nav>

      {/* Mobile Nav Header */}
      <div className={`lg:hidden flex items-center justify-between w-full p-4 rounded-[24px] pointer-events-auto transition-all duration-500 ${
        scrolled || mobileOpen ? 'bg-white/90 backdrop-blur-xl border border-charcoal-200/50 shadow-soft' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center group" aria-label="ELNR Media home">
          <img 
            src="/logo.png?v=3" 
            alt="ELNR Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-navy-900 bg-black/[0.03] rounded-full hover:bg-black/[0.06] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-4 right-4 lg:hidden bg-white/95 backdrop-blur-3xl border border-charcoal-200/50 rounded-[24px] p-4 shadow-card pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-200 ${
                    activeSection === link.href ? 'bg-black/[0.04] text-navy-900' : 'text-charcoal-600 hover:bg-black/[0.02] hover:text-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-charcoal-100">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full btn-pill btn-primary py-3.5"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
