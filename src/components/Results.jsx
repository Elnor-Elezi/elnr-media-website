import { motion } from 'framer-motion'
import {
  Shield, Repeat, TrendingUp, Compass,
  Mail, Star
} from 'lucide-react'
import { useSectionInView, useCounter, fadeInUp, stagger } from '../hooks'

const results = [
  { icon: Shield, title: 'Stronger Online Authority', desc: 'Become a recognized, trusted voice in your industry.', metric: 85, suffix: '%', metricLabel: 'Brand Trust Increase' },
  { icon: Repeat, title: 'More Consistent Content', desc: 'Never miss a week of publishing again.', metric: 48, suffix: '+', metricLabel: 'Posts Per Quarter' },
  { icon: TrendingUp, title: 'Better Lead Flow', desc: 'A steady pipeline of qualified leads.', metric: 3, suffix: 'x', metricLabel: 'Lead Growth' },
  { icon: Compass, title: 'Clearer Marketing Strategy', desc: 'Know exactly what to do and why.', metric: 100, suffix: '%', metricLabel: 'Strategic Clarity' },
  { icon: Mail, title: 'Improved Follow-Up', desc: 'Automated sequences that convert interest.', metric: 67, suffix: '%', metricLabel: 'Response Rate' },
  { icon: Star, title: 'Better Brand Position', desc: 'Stand out with premium presence.', metric: 92, suffix: '%', metricLabel: 'Client Satisfaction' },
]

function ResultCard({ result, index }) {
  const { count, ref: counterRef } = useCounter(result.metric, 1800)

  return (
    <motion.div
      variants={fadeInUp}
      ref={counterRef}
      className="group card-surface card-surface-hover rounded-2xl p-6 cursor-default relative overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-100/0 group-hover:from-brand-50/60 group-hover:to-brand-100/30 transition-all duration-700 rounded-2xl" />

      <div className="relative">
        {/* Icon + Metric row */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-charcoal-50 border border-charcoal-200/60 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-200/60 transition-all duration-500">
            <result.icon size={20} className="text-charcoal-400 group-hover:text-brand-500 transition-colors duration-500" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-display font-bold text-navy-700">
              {count}<span className="text-brand-500">{result.suffix}</span>
            </div>
            <div className="text-[9px] text-charcoal-400 uppercase tracking-wider">{result.metricLabel}</div>
          </div>
        </div>

        <h3 className="font-display font-semibold text-navy-700 mb-1.5">{result.title}</h3>
        <p className="text-sm text-charcoal-500 leading-relaxed">{result.desc}</p>

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-charcoal-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${result.metric > 100 ? 100 : result.metric}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Results() {
  const { ref, isInView } = useSectionInView(0.08)

  return (
    <section className="relative py-24 lg:py-36 bg-white overflow-hidden" aria-label="Results and outcomes">
      {/* Background */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-brand-50/40 rounded-full blur-[120px]" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-brand-50 text-brand-600 border border-brand-200/60 mb-5">
            Results
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-700 tracking-tight mb-6">
            Outcomes That{' '}
            <span className="text-gradient">Compound</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg leading-relaxed">
            Working with ELNR Media means building systems that create
            lasting, measurable business impact.
          </p>
        </motion.div>

        {/* Results grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {results.map((r, i) => (
            <ResultCard key={r.title} result={r} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
