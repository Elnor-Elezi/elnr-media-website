import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { IMAGES } from '../hooks'

export default function FinalCta({ showForm = false }) {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', botcheck: false })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    // 1. Honeypot check for bots
    if (formData.botcheck) {
      setSubmitted(true)
      setStatus('success')
      return
    }

    // 2. Client-side Rate Limit (1 hour cooldown)
    const lastSubmission = localStorage.getItem('elnr_last_submission')
    if (lastSubmission) {
      const timeSince = Date.now() - parseInt(lastSubmission)
      if (timeSince < 3600000) { // 60 minutes
        alert("You have already sent a request recently. We will be in touch shortly!")
        setSubmitted(true)
        setStatus('success')
        return
      }
    }

    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '88c85314-1851-4448-a4b2-bf517e0bb82a',
          subject: 'New Strategy Call Request from ELNR Website',
          from_name: 'ELNR Media',
          name: formData.name,
          email: formData.email,
          botcheck: formData.botcheck,
        })
      })

      const result = await response.json()
      if (result.success) {
        localStorage.setItem('elnr_last_submission', Date.now().toString())
        setSubmitted(true)
        setStatus('success')
      } else {
        setStatus('error')
        console.error(result)
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      console.error(error)
      alert('Network error. Please try again.')
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-36 overflow-hidden" aria-label="Contact us">
      <div className="max-container section-padding">
        <div className="relative max-w-5xl mx-auto rounded-[40px] overflow-hidden min-h-[550px] flex items-center shadow-2xl">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/[0.12] rounded-full blur-[100px]" />

          {/* Border overlay */}
          <div className="absolute inset-0 border border-white/[0.08] rounded-[40px]" />

          {/* Content */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10 p-10 sm:p-14 lg:p-20 text-center w-full"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/10 text-white border border-white/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
              Let's Build Together
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
              Ready to build a media system<br className="hidden sm:block" />
              that actually{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">compounds</span>?
            </h2>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Work with ELNR Media to turn content, ads, and funnels into a consistent
              growth engine that builds authority and generates leads on autopilot.
            </p>

            {/* Conditionally render Form vs Button */}
            {showForm ? (
              !submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                  {/* Honeypot Field */}
                  <input 
                    type="checkbox" 
                    name="botcheck" 
                    className="hidden" 
                    style={{ display: 'none' }}
                    checked={formData.botcheck}
                    onChange={(e) => setFormData(prev => ({ ...prev, botcheck: e.target.checked }))}
                  />
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-md"
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
                      className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all duration-300 backdrop-blur-md"
                      id="contact-email"
                      aria-label="Your email"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center btn-pill btn-primary py-4"
                  >
                    <span className="flex items-center gap-3">
                      Book Your Strategy Call
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-md mx-auto mb-6 py-8 px-8 rounded-[32px] bg-brand-500/15 border border-brand-400/20 backdrop-blur-md"
                >
                  <CheckCircle size={40} className="text-brand-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-xl mb-2">Thank you, {formData.name}!</p>
                  <p className="text-white/60 text-base">We will be in touch within 24 hours.</p>
                </motion.div>
              )
            ) : (
              <div className="mb-8 flex justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center btn-pill btn-primary px-10 py-4"
                >
                  <span className="flex items-center gap-3">
                    Book Your Strategy Call
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            )}


            <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
              Free consultation · No commitment · Response within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
