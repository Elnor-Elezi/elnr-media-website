import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, BarChart3, Palette, CalendarCheck,
  FileBarChart, Award
} from 'lucide-react'
import { useSectionInView, fadeInUp, stagger, IMAGES } from '../hooks'

const reasons = [
  { icon: Zap, title: 'Complete Growth Systems', desc: 'No random content. Every piece works as part of an integrated system designed to compound.' },
  { icon: BarChart3, title: 'Strategy Before Execution', desc: 'Every campaign starts with deep research and a tailored strategy before a single asset is created.' },
  { icon: Palette, title: 'Strong Visual Branding', desc: 'Premium design and consistent visual identity across every touchpoint and platform.' },
  { icon: CalendarCheck, title: 'Consistent Monthly Delivery', desc: 'Reliable, on-time delivery every month. No gaps, no guesswork, just steady momentum.' },
  { icon: FileBarChart, title: 'Clear Reporting', desc: "Transparent performance reporting so you always know what's working and where to focus next." },
  { icon: Award, title: 'Built for Long-Term Authority', desc: 'Every system creates lasting brand authority and sustainable lead generation, not quick fixes.' },
]

export default function WhyElnr() {
  const { ref, isInView } = useSectionInView(0.08)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-36 bg-[#fafbfc] overflow-hidden" aria-label="Why choose ELNR Media">
      <div className="max-container section-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <motion.img
                style={{ y: imgY }}
                src={IMAGES.team}
                alt="ELNR Media team collaborating on client growth strategies in a modern workspace"
                className="w-full h-[400px] lg:h-[550px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-charcoal-200/20 rounded-2xl" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:right-6 bg-white rounded-xl p-4 shadow-card-hover border border-charcoal-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <Award size={20} className="text-brand-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-navy-700">98%</div>
                  <div className="text-[10px] text-charcoal-500">Client Retention Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Accent shapes */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl border border-brand-200/40 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-brand-50 text-brand-600 border border-brand-200/60 mb-5">
                Why ELNR Media
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 tracking-tight mb-5">
                Built Different.{' '}
                <span className="text-gradient">Built to Last.</span>
              </h2>
              <p className="text-charcoal-500 text-base leading-relaxed">
                We build complete, strategic systems that create authority,
                generate leads, and compound results over time.
              </p>
            </motion.div>

            {/* Bento-style reason cards */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {reasons.map((reason) => (
                <motion.div
                  key={reason.title}
                  variants={fadeInUp}
                  className="group flex gap-3 p-4 rounded-xl bg-white border border-charcoal-200/40 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-500 cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-charcoal-50 border border-charcoal-200/60 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-50 group-hover:border-brand-200/60 transition-all duration-500">
                    <reason.icon size={16} className="text-charcoal-400 group-hover:text-brand-500 transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-700 text-sm mb-0.5">{reason.title}</h4>
                    <p className="text-[11px] text-charcoal-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
