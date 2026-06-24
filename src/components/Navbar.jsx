import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Moon, Sun, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './ThemeContext'
import Magnetic from './Magnetic'

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    dropdown: [
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'Funnel Building', href: '/services/funnel-building' },
      { label: 'CRM', href: '/services/crm' },
      { label: 'Content Creation', href: '/services/content-creation' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const { isDark, toggleDark } = useTheme()
  
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
            ? 'bg-white/80 dark:bg-navy-950/80 backdrop-blur-xl border border-charcoal-200/50 dark:border-white/10 shadow-soft w-[800px]' 
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
            <div key={link.href} className="relative group">
              <Link
                to={link.href}
                className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors duration-300 flex items-center gap-1 ${
                  (activeSection.startsWith(link.href) && link.href !== '/') || (link.href === '/' && activeSection === '/')
                    ? 'text-navy-900 dark:text-white bg-black/[0.03] dark:bg-white/[0.05]' 
                    : 'text-charcoal-500 dark:text-charcoal-300 hover:text-navy-900 dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                }`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl border border-charcoal-200/50 dark:border-white/10 rounded-2xl p-2 shadow-xl min-w-[220px] flex flex-col gap-1">
                    {link.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.href}
                        to={dropItem.href}
                        className="px-4 py-2.5 rounded-xl text-[13px] font-medium text-charcoal-600 dark:text-charcoal-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.05] hover:text-navy-900 dark:hover:text-white transition-colors whitespace-nowrap"
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-navy-900 dark:text-white">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Magnetic>
            <Link
              to="/contact"
              className="group btn-pill bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-charcoal-100 shadow-sm py-2.5 px-6 ml-2 flex items-center gap-2"
            >
              Book Call
              <ArrowRight size={14} />
            </Link>
          </Magnetic>
        </div>
      </nav>

      {/* Mobile Nav Header */}
      <div className={`lg:hidden flex items-center justify-between w-full p-4 rounded-[24px] pointer-events-auto transition-all duration-500 ${
        scrolled || mobileOpen ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border border-charcoal-200/50 dark:border-white/10 shadow-soft' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center group" aria-label="ELNR Media home">
          <img 
            src="/logo.png?v=3" 
            alt="ELNR Logo" 
            className="h-10 w-auto object-contain" 
          />
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={toggleDark} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-navy-900 dark:text-white">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-navy-900 dark:text-white bg-black/[0.03] dark:bg-white/[0.05] rounded-full hover:bg-black/[0.06] dark:hover:bg-white/[0.1] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-4 right-4 lg:hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-3xl border border-charcoal-200/50 dark:border-white/10 rounded-[24px] p-4 shadow-card pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col">
                  <Link
                    to={link.href}
                    onClick={() => !link.dropdown && setMobileOpen(false)}
                    className={`px-4 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-200 flex items-center justify-between ${
                      (activeSection.startsWith(link.href) && link.href !== '/') || (link.href === '/' && activeSection === '/')
                        ? 'bg-black/[0.04] dark:bg-white/[0.05] text-navy-900 dark:text-white' 
                        : 'text-charcoal-600 dark:text-charcoal-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-navy-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown size={14} className="opacity-50" />}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-1 pl-6 pr-4 pb-2 pt-1">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          to={dropItem.href}
                          onClick={() => setMobileOpen(false)}
                          className="px-4 py-2.5 text-[13px] font-medium rounded-xl text-charcoal-500 dark:text-charcoal-400 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] hover:text-navy-900 dark:hover:text-white transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 mt-2 border-t border-charcoal-100 dark:border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full btn-pill bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-charcoal-100 py-3.5"
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
