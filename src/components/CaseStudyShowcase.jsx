import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ArrowUpRight, CheckCircle2, TrendingUp, BarChart, ShieldCheck } from 'lucide-react'
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

export default function CaseStudyShowcase() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id)
  const activeStudy = caseStudies.find(s => s.id === activeTab)

  return (
    <section className="relative py-24 lg:py-36 bg-white dark:bg-[#0A101C] overflow-hidden" aria-label="Verified Case Studies">
      <div className="max-container section-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-500/20 mb-4">
            <Award size={14} /> Verified Client Case Studies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
            Real Proof. <span className="text-gradient">Measurable Scale.</span>
          </h2>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-base sm:text-lg leading-relaxed">
            Explore how our integrated media systems generate verified B2B pipeline growth across industries.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === study.id
                  ? 'bg-navy-900 text-white dark:bg-white dark:text-navy-900 shadow-lg scale-105'
                  : 'glass dark:glass-dark text-charcoal-600 dark:text-charcoal-300 hover:text-navy-900 dark:hover:text-white'
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Case Study Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto glass dark:glass-dark rounded-[40px] p-8 sm:p-12 border border-charcoal-100 dark:border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest bg-brand-50 dark:bg-brand-500/10 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-500/20">
                    {activeStudy.client}
                  </span>
                  <span className="text-xs text-charcoal-400 font-medium">Verified Case Study</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white leading-snug">
                  {activeStudy.title}
                </h3>

                <p className="text-charcoal-600 dark:text-charcoal-300 text-base leading-relaxed">
                  {activeStudy.summary}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-2">
                  {activeStudy.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-navy-900 dark:text-white">
                      <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-charcoal-100 dark:border-white/10 italic text-charcoal-600 dark:text-charcoal-300 text-sm">
                  "{activeStudy.quote}"
                  <div className="not-italic font-bold text-xs text-navy-900 dark:text-white mt-2">
                    — {activeStudy.author}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Outcome Metrics (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {activeStudy.metrics.map((m, idx) => (
                  <div
                    key={m.label}
                    className="p-6 rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 text-white border border-white/10 shadow-xl"
                  >
                    <div className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-white">
                      {m.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}

                <Magnetic>
                  <Link
                    to="/contact"
                    className="group btn-pill btn-primary w-full py-4 text-center flex items-center justify-center gap-2 font-bold shadow-glow mt-4"
                  >
                    Build Your Engine Like This
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Magnetic>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
