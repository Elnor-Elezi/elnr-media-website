import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

const caseStudies = [
  {
    id: 'b2b-saas',
    category: 'B2B SaaS',
    title: '3.4x Pipeline Growth in 90 Days for Enterprise Cloud Platform',
    client: 'CloudScale Technologies',
    metrics: [
      { value: '340%', label: 'Pipeline Increase' },
      { value: '-42%', label: 'Cost Per Acquisition (CAC)' },
      { value: '148', label: 'Qualified Demos Booked' },
    ],
    summary: 'Restructured fragmented Meta and LinkedIn ad campaigns into an automated lead scoring funnel while deploying 16 high-retention video assets.',
    deliverables: ['Omni-Channel Meta & LinkedIn Ads', 'High-Retention Video System', 'CRM Pipeline Routing'],
    quote: 'ELNR Media turned our chaotic marketing into a predictable revenue system within the first month.',
    author: 'Marcus Vance, VP of Growth',
  },
  {
    id: 'prof-services',
    category: 'Professional Services',
    title: 'From Cold Outbound to $1.2M Inbound Revenue for Consultancy',
    client: 'Apex Strategic Partners',
    metrics: [
      { value: '$1.2M', label: 'New Revenue Closed' },
      { value: '4.2x', label: 'Ad Spend ROI' },
      { value: '62%', label: 'Funnels Conversion Rate' },
    ],
    summary: 'Built an executive authority content engine combined with retargeting protocols that converted high-intent corporate decision-makers.',
    deliverables: ['Thought Leadership Content', 'Retargeting Funnels', 'Automated Email Nurture'],
    quote: 'The ROI was undeniable. We stopped relying on cold emails completely.',
    author: 'Elena Rostova, Managing Partner',
  },
  {
    id: 'fintech-b2b',
    category: 'B2B FinTech',
    title: 'Scaled Monthly Qualified Lead Flow from 15 to 85 Lead Accounts',
    client: 'PayPulse Infrastructure',
    metrics: [
      { value: '466%', label: 'Lead Volume Surge' },
      { value: '14 Days', label: 'Time to First Closed Deal' },
      { value: '98%', label: 'Lead Qualification Accuracy' },
    ],
    summary: 'Deployed custom web landing pages with automated qualification questionnaires to instantly filter tire-kickers from high-value enterprises.',
    deliverables: ['High-Converting Landing Pages', 'Automated Qualification Engine', 'Lead Scoring Rules'],
    quote: 'ELNR Media delivered qualified leads that our sales team actually enjoys calling.',
    author: 'David Chen, Head of Sales',
  },
]

function TiltCard({ children, id }) {
  const ref = useRef(null)
  
  // Motion values for tracking mouse
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring values to make it smooth
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  // Transform raw mouse values into rotation angles (-2deg to 2deg max to keep it subtle and premium)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      key={id}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="max-w-5xl mx-auto glass dark:glass-dark rounded-[40px] p-8 sm:p-12 border border-charcoal-100 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden group"
    >
      {/* Interactive Glare / Glow that follows mouse */}
      <motion.div 
        className="absolute w-[800px] h-[800px] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-[80px] pointer-events-none -z-10"
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], ["-30%", "30%"]),
          y: useTransform(mouseYSpring, [-0.5, 0.5], ["-30%", "30%"]),
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      {children}
    </motion.div>
  )
}

export default function CaseStudyShowcase() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id)
  const activeStudy = caseStudies.find(s => s.id === activeTab)

  return (
    <section className="relative py-24 lg:py-48 bg-white dark:bg-[#050505] overflow-hidden" aria-label="Verified Case Studies">
      <div className="max-container section-padding perspective-[2000px]">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-500/20 mb-6">
            <Award size={14} /> Verified Client Case Studies
          </span>
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tighter leading-[1.1] mb-6">
            Real Proof. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Measurable Scale.</span>
          </h2>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-base sm:text-lg leading-relaxed">
            Explore how our integrated media systems generate verified B2B pipeline growth across industries.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === study.id
                  ? 'bg-navy-900 text-white dark:bg-white dark:text-navy-900 shadow-xl scale-105 border border-transparent'
                  : 'bg-white/50 dark:bg-white/5 text-charcoal-600 dark:text-charcoal-300 border border-charcoal-200 dark:border-white/10 hover:text-navy-900 dark:hover:text-white hover:border-brand-500/30'
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Case Study Card Display with Tilt */}
        <AnimatePresence mode="wait">
          <TiltCard id={activeStudy.id} key={activeStudy.id}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10" style={{ transform: "translateZ(30px)" }}>
              
              {/* Left Column: Details (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest bg-brand-50 dark:bg-brand-500/10 px-4 py-1.5 rounded-full border border-brand-200 dark:border-brand-500/20">
                    {activeStudy.client}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white leading-[1.1] tracking-tight">
                  {activeStudy.title}
                </h3>

                <p className="text-charcoal-600 dark:text-charcoal-300 text-lg leading-relaxed font-medium">
                  {activeStudy.summary}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-3 pt-2">
                  {activeStudy.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold text-navy-900 dark:text-white group/item">
                      <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-charcoal-100 dark:border-white/10 italic text-charcoal-600 dark:text-charcoal-300 text-base shadow-soft">
                  "{activeStudy.quote}"
                  <div className="not-italic font-bold text-sm text-navy-900 dark:text-white mt-4 flex items-center gap-2">
                    <div className="w-6 h-px bg-brand-500" />
                    {activeStudy.author}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Outcome Metrics (5 cols) */}
              <div className="lg:col-span-5 space-y-4" style={{ transform: "translateZ(50px)" }}>
                {activeStudy.metrics.map((m, idx) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="p-6 rounded-3xl bg-navy-900 dark:bg-[#0A101C] text-white border border-charcoal-800 dark:border-white/5 shadow-2xl hover:border-brand-500/30 transition-colors"
                  >
                    <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-white tracking-tighter">
                      {m.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-brand-100/50 font-bold mt-2">
                      {m.label}
                    </div>
                  </motion.div>
                ))}

                <Magnetic>
                  <Link
                    to="/contact"
                    className="group btn-pill btn-primary dark:bg-white dark:text-navy-900 w-full py-5 text-center flex items-center justify-center gap-3 font-bold shadow-glow mt-6"
                  >
                    Build Your Engine Like This
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Magnetic>
              </div>

            </div>
          </TiltCard>
        </AnimatePresence>

      </div>
    </section>
  )
}
