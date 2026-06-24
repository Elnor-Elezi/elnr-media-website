import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { IMAGES } from '../hooks'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import ContactObject from '../components/objects/ContactObject'

export default function ContactPage() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', botcheck: false })
  const [submitted, setSubmitted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    // 1. Honeypot check for bots
    if (formData.botcheck) {
      // Silently pretend it succeeded to trick the bot
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
    <PageTransition>
      <div className="pt-24 pb-24 lg:pt-36 lg:pb-36">
      <SEO 
        title="Contact Us | Strategy Call"
        description="Book a free strategy call with ELNR Media. Let's discuss your growth strategy and how we can build a scalable media system for your brand."
      />
      <div className="max-container section-padding">
        <div ref={ref} className="relative w-full rounded-[40px] overflow-hidden min-h-[700px] flex items-center shadow-2xl">
          {/* Background image */}
          <motion.img
            style={{ scale: imgScale }}
            src={IMAGES.results}
            alt="Successful business growth results from working with ELNR Media"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-navy-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/90" />

          {/* Radial accent */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-500/[0.12] rounded-full blur-[120px]" />
          
          <div className="absolute top-10 left-10 opacity-80 pointer-events-none hidden lg:block z-0">
            <ContactObject />
          </div>

          {/* Border overlay */}
          <div className="absolute inset-0 border border-white/[0.08] rounded-[40px] pointer-events-none" />

          {/* Content */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10 p-8 sm:p-12 lg:p-24 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-7xl mx-auto">
              
              {/* Left Column: Info */}
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/10 text-white border border-white/20 mb-8 backdrop-blur-md">
                  <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
                  Get in Touch
                </span>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
                  Let's Discuss Your <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Growth Strategy</span>
                </h1>
                
                <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-16 max-w-xl">
                  Whether you need a complete media system overhaul or specific 
                  funnel optimizations, our team is ready to analyze your current 
                  setup and propose a data-driven path forward.
                </p>

                <div className="space-y-10">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 backdrop-blur-md">
                      <Mail size={24} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Email Us</div>
                      <a href="mailto:Elnorelezi@icloud.com" className="text-white font-medium text-xl hover:text-brand-300 transition-colors">Elnorelezi@icloud.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 backdrop-blur-md">
                      <Phone size={24} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Call Us</div>
                      <a href="tel:+355676718858" className="text-white font-medium text-xl hover:text-brand-300 transition-colors">+355 67 671 8858</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 backdrop-blur-md">
                      <MapPin size={24} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Headquarters</div>
                      <span className="text-white font-medium text-xl">Tirana, Albania</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="relative">
                {/* Decorative glow behind form */}
                <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full opacity-50" />
                
                <div className="relative p-8 sm:p-12 lg:p-14 rounded-[32px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl shadow-2xl">
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Book a Strategy Call</h3>
                  <p className="text-white/60 text-base mb-10">Free consultation. No commitment. Response within 24 hours.</p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot Field */}
                      <input 
                        type="checkbox" 
                        name="botcheck" 
                        className="hidden" 
                        style={{ display: 'none' }}
                        checked={formData.botcheck}
                        onChange={(e) => setFormData(prev => ({ ...prev, botcheck: e.target.checked }))}
                      />
                      
                      <div>
                        <label htmlFor="name" className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-3 ml-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-6 py-5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 text-base font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all duration-300"
                        />
                      </div>
                      
                      <div className="pb-4">
                        <label htmlFor="email" className="block text-[11px] font-bold text-white/60 uppercase tracking-[0.2em] mb-3 ml-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-6 py-5 rounded-full bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 text-base font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all duration-300"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                        whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                        className={`group relative w-full flex items-center justify-center btn-pill btn-primary ${
                          status === 'submitting' ? 'opacity-80 cursor-wait' : ''
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-3 py-1">
                          {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                          {status !== 'submitting' && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
                        </span>
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-16 px-8 text-center"
                    >
                      <CheckCircle size={56} className="text-brand-400 mx-auto mb-6" />
                      <h4 className="text-2xl font-bold text-white mb-4">Request Received!</h4>
                      <p className="text-white/60 text-base leading-relaxed">
                        Thank you, {formData.name}. We will review your details and reach out within 24 hours to schedule your strategy call.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </PageTransition>
  )
}
