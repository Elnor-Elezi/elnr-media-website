"use client";
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { IMAGES } from '../hooks'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import InteractiveDiscoveryForm from '../components/InteractiveDiscoveryForm'

export default function ContactPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1])
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])

  return (
    <PageTransition>
      <div className="pt-24 pb-24 lg:pt-36 lg:pb-36">
      <SEO 
        title="Book a Strategy Call — Free B2B Growth Audit | ELNR Media"
        description="Book a free strategy call with ELNR Media. Analyze your current marketing setup and discover how our media systems generate predictable B2B pipeline growth."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]}
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
                <InteractiveDiscoveryForm />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </PageTransition>
  )
}
