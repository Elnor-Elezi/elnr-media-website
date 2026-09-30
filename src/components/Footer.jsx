import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// SVG Brand Icons
const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Social Media Management', href: '/services/social-media-management' },
    { label: 'Paid Advertising', href: '/services/funnel-building' },
    { label: 'Funnel Building', href: '/services/funnel-building' },
    { label: 'CRM Setup', href: '/services/crm' },
    { label: 'Content Creation', href: '/services/content-creation' },
  ],
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/elnr-media',
    icon: Linkedin,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/elnrmedia',
    icon: Instagram,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/elnrmedia',
    icon: Twitter,
  },
]

const contact = [
  { icon: Mail, label: 'Elnorelezi@icloud.com', href: 'mailto:Elnorelezi@icloud.com' },
  { icon: Phone, label: '+355 67 671 8858', href: 'tel:+35567671858' },
  { icon: MapPin, label: 'Tirana, Albania', href: null },
]

const staggerChildren = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden" role="contentinfo">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-container section-padding pt-20 pb-10">
        {/* Main grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group" aria-label="ELNR Media home">
              <img
                src="/logo.webp?v=3"
                alt="ELNR Media Logo"
                width="160"
                height="60"
                className="h-12 sm:h-14 w-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8">
              Premium media systems built to grow B2B brands with strategic content,
              advertising, funnels, and lead generation. We build systems, not just campaigns.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-brand-500/20 hover:border-brand-500/30 transition-all duration-300"
                >
                  <s.icon size={15} className="text-white/50 group-hover:text-brand-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.nav variants={fadeUp} className="lg:col-span-3" aria-label="Services navigation">
            <h4 className="font-display font-semibold text-white text-xs mb-6 uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/45 hover:text-brand-400 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-brand-400 group-hover:w-3 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Company column */}
          <motion.nav variants={fadeUp} className="lg:col-span-2" aria-label="Company navigation">
            <h4 className="font-display font-semibold text-white text-xs mb-6 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/45 hover:text-brand-400 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-brand-400 group-hover:w-3 transition-all duration-300 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact + CTA column */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white text-xs mb-6 uppercase tracking-[0.2em]">Get in Touch</h4>
            <ul className="space-y-3 mb-8">
              {contact.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="flex items-center gap-2.5 text-sm text-white/45 hover:text-brand-400 transition-colors duration-300 group"
                    >
                      <c.icon size={13} className="text-brand-500/60 group-hover:text-brand-400 flex-shrink-0 transition-colors" />
                      {c.label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2.5 text-sm text-white/45">
                      <c.icon size={13} className="text-brand-500/60 flex-shrink-0" />
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-brand-500 to-brand-700 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-500 hover:-translate-y-0.5"
            >
              Book a Strategy Call
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} ELNR Media — Elnor Elezi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
