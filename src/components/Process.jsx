import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Target, Rocket, TrendingUp } from 'lucide-react'
import { IMAGES } from '../hooks'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit',
    desc: 'We deep-dive into your brand, audience, offer, content, and current marketing system to find gaps, strengths, and hidden opportunities.',
    img: IMAGES.strategy,
  },
  {
    num: '02',
    icon: Target,
    title: 'Strategy',
    desc: 'We build a clear, data-driven content, ad, funnel, and lead generation plan tailored to your exact business goals and market position.',
    img: IMAGES.meeting,
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Build',
    desc: 'We create and launch everything: the content system, ad campaigns, funnels, automations, and workflows. You focus on your business.',
    img: IMAGES.laptop,
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Scale',
    desc: 'We track every metric, optimize every campaign, and systematically increase results over time with data-driven decisions and rapid iteration.',
    img: IMAGES.analytics,
  },
]

function ProcessStep({ step, index, isLast }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30])
  const reversed = index % 2 === 1

  return (
    <div className="relative">
      {/* Timeline connector */}
      {!isLast && (
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-px h-20 lg:h-32 bg-gradient-to-b from-brand-300 dark:from-brand-600 to-brand-100/0 dark:to-transparent" />
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
      >
        {/* Content */}
        <div className={reversed ? 'lg:order-2' : ''}>
          {/* Step number + line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow">
              <step.icon size={24} className="text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-600 dark:text-brand-400 mb-0.5">Step {step.num}</div>
              <h3 className="font-display text-3xl font-bold text-navy-700 dark:text-white tracking-tight">{step.title}</h3>
            </div>
          </div>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-base lg:text-lg leading-relaxed pl-[72px] lg:pl-0">
            {step.desc}
          </p>
        </div>

        {/* Image */}
        <div className={`${reversed ? 'lg:order-1' : ''} relative`}>
          <div className="relative rounded-2xl overflow-hidden group shadow-card">
            <motion.img
              style={{ y: imgY }}
              src={step.img}
              alt={`Step ${step.num}: ${step.title} phase of the ELNR Media process`}
              className="w-full h-[280px] sm:h-[340px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/10 transition-all duration-700" />
            <div className="absolute inset-0 border border-charcoal-200/20 dark:border-white/10 rounded-2xl" />

            {/* Step badge on image */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border border-charcoal-200/40 dark:border-white/10 shadow-soft">
              <span className="text-xs font-bold text-navy-700 dark:text-white">{step.num}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-36 bg-white dark:bg-[#0A101C] overflow-hidden" aria-label="Our process">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-50/40 dark:bg-brand-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-500/20 mb-5">
            How It Works
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-700 dark:text-white tracking-tight mb-6">
            A Proven System for{' '}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-base sm:text-lg leading-relaxed">
            Every engagement follows a clear, strategic process designed to
            build momentum and deliver measurable results.
          </p>
        </motion.div>

        {/* Steps with timeline connectors */}
        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
