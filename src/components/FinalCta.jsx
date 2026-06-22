import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../hooks'

export default function FinalCta({ showForm = false }) {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-36 bg-white overflow-hidden" aria-label="Contact us">
      <div className="max-container section-padding">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden min-h-[550px] flex items-center">
          {/* Background image */}
          <motion.img
            style={{ scale: imgScale }}
            src={IMAGES.results}
            alt="Successful business growth results from working with ELNR Media"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/90" />

          {/* Radial accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-500/[0.08] rounded-full blur-[80px]" />

          {/* Border overlay */}
          <div className="absolute inset-0 border border-white/[0.06] rounded-3xl" />

          {/* Content */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10 p-10 sm:p-14 lg:p-20 text-center w-full"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-white/[0.08] text-brand-300 border border-white/[0.1] mb-7">
              Let's Build Together
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
              Ready to build a media system<br className="hidden sm:block" />
              that actually{' '}
              <span className="text-gradient">compounds</span>?
            </h2>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Work with ELNR Media to turn content, ads, and funnels into a consistent
              growth engine that builds authority and generates leads on autopilot.
            </p>

            {/* Conditionally render Form vs Button */}
            {showForm ? (
              !submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-md"
                      id="contact-name"
                      aria-label="Your name"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-md"
                      id="contact-email"
                      aria-label="Your email"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 shadow-glow-lg hover:shadow-glow transition-all duration-500"
                  >
                    Book Your Strategy Call
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-md mx-auto mb-6 py-6 px-8 rounded-xl bg-brand-500/15 border border-brand-400/20 backdrop-blur-md"
                >
                  <CheckCircle size={32} className="text-brand-400 mx-auto mb-3" />
                  <p className="text-white font-semibold mb-1">Thank you, {formData.name}!</p>
                  <p className="text-white/60 text-sm">We will be in touch within 24 hours.</p>
                </motion.div>
              )
            ) : (
              <div className="mb-6 flex justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 shadow-glow-lg hover:shadow-glow transition-all duration-500"
                >
                  Book Your Strategy Call
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            )}


            <p className="text-xs text-white/30">
              Free consultation · No commitment · Response within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
