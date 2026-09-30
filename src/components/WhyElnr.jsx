"use client";
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, BarChart3, Palette, CalendarCheck,
  FileBarChart, Award
} from 'lucide-react'
import { IMAGES } from '../hooks'

const reasons = [
  { icon: Zap, title: 'Complete Growth Systems', desc: 'No random content. Every piece works as part of an integrated system designed to compound revenue mathematically over time.' },
  { icon: BarChart3, title: 'Strategy Before Execution', desc: 'Every campaign starts with deep research and a tailored strategy before a single asset is created. We audit to win.' },
  { icon: Palette, title: 'Strong Visual Branding', desc: 'Premium design and consistent visual identity across every touchpoint. You look like a market leader from day one.' },
  { icon: CalendarCheck, title: 'Consistent Monthly Delivery', desc: 'Reliable, on-time delivery every month. No gaps, no guesswork, just steady momentum and flawless execution.' },
  { icon: FileBarChart, title: 'Clear Reporting', desc: "Transparent performance reporting so you always know what's working, where your budget goes, and where to focus next." },
  { icon: Award, title: 'Built for Long-Term Authority', desc: 'Every system creates lasting brand authority and sustainable lead generation, not quick fixes that die off in a week.' },
]

export default function WhyElnr() {
  const containerRef = useRef(null)
  
  return (
    <section ref={containerRef} className="relative py-24 lg:py-48 bg-[#050505] overflow-hidden" aria-label="Why choose ELNR Media">
      {/* Background glow for dark mode */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-container section-padding">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left: Sticky Context & Image */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:h-[calc(100vh-160px)] flex flex-col justify-between z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase bg-white/5 text-brand-400 border border-white/10 mb-6 backdrop-blur-md">
                  Why ELNR Media
                </span>
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                  Built Different.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Built to Last.</span>
                </h2>
                <div className="space-y-6 text-charcoal-300 text-lg leading-relaxed max-w-lg">
                  <p>
                    Most agencies focus on vanity metrics. We focus on one thing: scaling your revenue efficiently.
                  </p>
                  <p>
                    We build complete, strategic systems that create authority, generate high-intent leads, and convert them consistently. Our infrastructure is built for longevity.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Pinned Image below text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 relative w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block"
            >
              <img
                src={IMAGES.team}
                alt="ELNR Media team collaborating"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            </motion.div>
          </div>

          {/* Right: Scrolling Bento Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 lg:pt-[40vh] pb-[20vh] z-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
              >
                {/* Hover gradient flare */}
                <div className="absolute -inset-20 bg-gradient-to-r from-brand-500/0 via-brand-500/10 to-brand-500/0 opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-out skew-x-12" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-500/30 transition-all duration-500 shadow-soft">
                    <reason.icon size={28} className="text-white group-hover:text-brand-400 transition-colors duration-500" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-white mb-4 tracking-tight leading-normal pb-2">
                    {reason.title}
                  </h3>
                  <p className="text-charcoal-300 text-lg leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
