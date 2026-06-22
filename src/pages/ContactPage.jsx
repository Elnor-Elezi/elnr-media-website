import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { IMAGES } from '../hooks'

export default function ContactPage() {
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

  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

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
        })
      })

      const result = await response.json()
      if (result.success) {
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
    <div className="pt-24 pb-24 lg:pt-32 lg:pb-32 bg-white">
      <div className="max-container section-padding">
        <div ref={ref} className="relative w-full rounded-3xl overflow-hidden min-h-[700px] flex items-center shadow-premium">
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
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/[0.08] rounded-full blur-[100px]" />

          {/* Border overlay */}
          <div className="absolute inset-0 border border-white/[0.06] rounded-3xl pointer-events-none" />

          {/* Content */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="relative z-10 p-8 sm:p-12 lg:p-20 w-full"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center max-w-6xl mx-auto">
              
              {/* Left Column: Info */}
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-white/[0.08] text-brand-300 border border-white/[0.1] mb-7">
                  Get in Touch
                </span>

                <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                  Let's Discuss Your <br className="hidden sm:block" />
                  <span className="text-gradient">Growth Strategy</span>
                </h1>
                
                <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-lg">
                  Whether you need a complete media system overhaul or specific 
                  funnel optimizations, our team is ready to analyze your current 
                  setup and propose a data-driven path forward.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                      <Mail size={22} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Email Us</div>
                      <a href="mailto:Elnorelezi@icloud.com" className="text-white font-medium text-lg hover:text-brand-300 transition-colors">Elnorelezi@icloud.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                      <Phone size={22} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Call Us</div>
                      <a href="tel:+355676718858" className="text-white font-medium text-lg hover:text-brand-300 transition-colors">+355 67 671 8858</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                      <MapPin size={22} className="text-brand-400 group-hover:text-brand-300 transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Headquarters</div>
                      <span className="text-white font-medium text-lg">Tirana, Albania</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="relative">
                {/* Decorative glow behind form */}
                <div className="absolute -inset-4 bg-brand-500/20 blur-3xl rounded-full opacity-50" />
                
                <div className="relative p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Book a Strategy Call</h3>
                  <p className="text-white/50 text-sm mb-8">Free consultation. No commitment. Response within 24 hours.</p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all duration-300"
                        />
                      </div>
                      
                      <div className="pb-2">
                        <label htmlFor="email" className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-5 py-4 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-white/20 text-sm font-medium focus:outline-none focus:border-brand-400/50 focus:bg-white/[0.09] transition-all duration-300"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'submitting'}
                        whileHover={status !== 'submitting' ? { scale: 1.02 } : {}}
                        whileTap={status !== 'submitting' ? { scale: 0.96 } : {}}
                        className={`group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 text-base sm:text-lg font-extrabold uppercase tracking-wider text-white rounded-2xl transition-all duration-500 overflow-hidden ${
                          status === 'submitting' 
                            ? 'bg-charcoal-500 cursor-wait opacity-80' 
                            : 'bg-gradient-to-r from-brand-500 to-brand-600 shadow-[0_0_40px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_0_60px_-15px_rgba(20,184,166,0.6)]'
                        }`}
                      >
                        {status !== 'submitting' && <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
                        <span className="relative z-10 flex items-center gap-3">
                          {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                          {status !== 'submitting' && <Send size={20} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />}
                        </span>
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-12 px-6 text-center"
                    >
                      <CheckCircle size={48} className="text-brand-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
                      <p className="text-white/60 text-sm">
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
  )
}
