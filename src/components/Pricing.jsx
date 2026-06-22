import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import { useSectionInView, useTilt, fadeInUp, stagger } from '../hooks'

const plans = [
  {
    name: 'Foundation',
    label: 'Good',
    priceFirst: '$500',
    priceAfter: '$400',
    pricePeriod: '/mo',
    priceNote: 'First month $500, then $400/mo',
    featured: false,
    features: [
      'Organic content: 12 posts/month',
      '2 ad concepts per month',
      '4-email nurture sequence',
      '2 platforms: LinkedIn & Instagram',
      'Performance report 2x/month',
    ],
    cta: 'Start with Foundation',
  },
  {
    name: 'Growth',
    label: 'Better',
    badge: 'Most Popular',
    priceFirst: '$880',
    priceAfter: '$780',
    pricePeriod: '/mo',
    priceNote: 'First month $880, then $780/mo',
    featured: true,
    features: [
      'Everything in Foundation',
      'Content: 16 posts + 4 videos',
      'Paid ads: Meta management',
      'Retargeting campaigns',
      'Lead qualification workflow',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Authority',
    label: 'Best',
    priceFirst: '$1,300',
    priceAfter: '$1,700',
    pricePeriod: '/mo',
    priceNote: '$1,300 to $1,700/mo based on scope',
    featured: false,
    features: [
      'Everything in Growth',
      '24 posts + 6 videos',
      '2 SEO articles per month',
      'Optional content proxy support',
      'Multi-segment funnels',
      'Quarterly strategy session',
      'Case study production',
      'Sales call support',
    ],
    cta: 'Build Authority',
  },
]

function PricingCard({ plan }) {
  const { ref, springRotateX, springRotateY, handleMove, handleLeave } = useTilt(plan.featured ? 5 : 4)

  return (
    <motion.div
      variants={fadeInUp}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1200,
      }}
      className={`group relative rounded-2xl overflow-visible transition-all duration-500 ${
        plan.featured ? 'lg:-mt-6 z-10' : ''
      }`}
    >
      {/* Glow ring for featured */}
      {plan.featured && (
        <div className="absolute -inset-[1px] bg-gradient-to-b from-brand-400 via-brand-500/40 to-brand-400/10 rounded-2xl" />
      )}

      <div className={`relative h-full rounded-2xl p-7 lg:p-8 flex flex-col ${
        plan.featured
          ? 'bg-gradient-to-b from-navy-700 via-navy-800 to-navy-900 text-white'
          : 'bg-white border border-charcoal-200/60 shadow-card'
      }`}>
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 shadow-glow">
              <Star size={12} className="text-white fill-white" />
              <span className="text-xs font-bold text-white tracking-wider">{plan.badge}</span>
            </div>
          </div>
        )}

        {/* Label */}
        <div className={`mb-5 ${plan.featured ? 'mt-3' : 'mt-1'}`}>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${
            plan.featured
              ? 'bg-brand-500/15 text-brand-300 border border-brand-400/20'
              : 'bg-charcoal-50 text-charcoal-500 border border-charcoal-200/60'
          }`}>
            {plan.label}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-display text-2xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-navy-700'}`}>{plan.name}</h3>

        {/* Price */}
        <div className="mb-1">
          <span className={`font-display text-4xl lg:text-5xl font-bold ${plan.featured ? 'text-white' : 'text-navy-700'}`}>
            {plan.name === 'Authority' ? plan.priceFirst : plan.priceAfter}
          </span>
          <span className={`text-sm ml-1 ${plan.featured ? 'text-white/60' : 'text-charcoal-400'}`}>{plan.pricePeriod}</span>
        </div>
        <p className={`text-xs mb-6 ${plan.featured ? 'text-white/50' : 'text-charcoal-400'}`}>{plan.priceNote}</p>

        {/* Divider */}
        <div className={`h-px mb-6 ${plan.featured ? 'bg-white/10' : 'bg-charcoal-200/60'}`} />

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                plan.featured ? 'bg-brand-500/20 text-brand-300' : 'bg-brand-50 text-brand-500'
              }`}>
                <Check size={11} strokeWidth={3} />
              </div>
              <span className={`text-sm leading-relaxed ${plan.featured ? 'text-white/80' : 'text-charcoal-600'}`}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`group/btn relative inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl text-sm font-semibold transition-all duration-500 hover:-translate-y-0.5 overflow-hidden ${
            plan.featured
              ? 'text-white shadow-glow'
              : 'text-navy-700'
          }`}
        >
          <span className="relative z-10">{plan.cta}</span>
          <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />

          {/* Button background */}
          <div className={`absolute inset-0 transition-opacity duration-500 ${
            plan.featured
              ? 'bg-gradient-to-r from-brand-500 to-brand-600'
              : 'bg-charcoal-100'
          }`} />
          <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 ${
            plan.featured
              ? 'bg-gradient-to-r from-brand-400 to-brand-500'
              : 'bg-charcoal-200/80'
          }`} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const { ref, isInView } = useSectionInView(0.08)

  return (
    <section id="pricing" className="relative py-24 lg:py-36 bg-white overflow-hidden" aria-label="Pricing plans">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-50/30 rounded-full blur-[150px]" />

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
            Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-700 tracking-tight mb-6">
            Choose Your{' '}
            <span className="text-gradient">Growth Engine</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg leading-relaxed">
            Each tier is a complete media and growth system. Step up for more reach,
            faster results, and more of the work handled for you.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Partner banner (iSMART reference removed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 lg:mt-20 max-w-3xl mx-auto"
        >
          <div className="card-surface rounded-2xl p-5 lg:p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200/60 flex items-center justify-center flex-shrink-0">
              <Sparkles size={20} className="text-brand-500" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-600 uppercase tracking-[0.2em] mb-1">Partner Benefit</div>
              <p className="text-sm text-charcoal-500 leading-relaxed">
                Each successful partnership connected to ELNR Media may unlock a bonus discount, based on the agreed partnership terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
