import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white" role="contentinfo">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="max-container section-padding py-16 lg:py-20">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group" aria-label="ELNR Media home">
              <img 
                src="/logo.png?v=3" 
                alt="ELNR Logo" 
                className="h-16 sm:h-20 w-auto object-contain mix-blend-screen grayscale invert contrast-200 opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Premium media systems built to grow your brand with strategic content,
              advertising, funnels, and lead generation. We build systems, not just campaigns.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-brand-500 to-brand-700 shadow-glow hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-0.5"
            >
              Book a Strategy Call
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/50 hover:text-brand-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-5 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/50">Elnorelezi@icloud.com</li>
              <li className="text-sm text-white/50">+355 67 671 8858</li>
              <li className="text-sm text-white/50">Tirana, Albania</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ELNR Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/30 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/30 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
