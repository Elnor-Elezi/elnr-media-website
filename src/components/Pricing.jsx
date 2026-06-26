import { motion } from 'framer-motion'
import { Check, Star, ArrowRight, Sparkles } from 'lucide-react'
import { useSectionInView, useTilt, fadeInUp, stagger } from '../hooks'
import AnimatedAuroraBackground from './backgrounds/AnimatedAuroraBackground'
import FloatingGlassShapes from './backgrounds/FloatingGlassShapes'
import ParallaxBackgroundAccents from './backgrounds/ParallaxBackgroundAccents'

const plans = [
  {
    name: 'Foundation',
    label: 'Launch Phase',
    priceFirst: '$500',
    priceAfter: '$400',
    pricePeriod: '/mo',
    priceNote: 'First month $500, then $400/mo',
    featured: false,
    features: [
      '12 High-Retention Organic Posts',
      '2 High-Converting Ad Architectures',
      'Automated 4-Email Nurture Sequence',
      'LinkedIn & Instagram Dominance',
      'Bi-Weekly ROI Performance Reports',
    ],
    cta: 'Start with Foundation',
  },
  {
    name: 'Growth',
    label: 'Scale Phase',
    badge: 'Most Popular',
    priceFirst: '$880',
    priceAfter: '$780',
    pricePeriod: '/mo',
    priceNote: 'First month $880, then $780/mo',
    featured: true,
    features: [
      'Everything in Foundation',
      '16 Posts + 4 Viral-Engineered Videos',
      'Meta Ad Campaign Management',
      'Aggressive Retargeting Protocols',
      'Frictionless Lead Qualification Workflow',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Authority',
    label: 'Domination Phase',
    priceFirst: '$1,300',
    priceAfter: '$1,700',
    pricePeriod: '/mo',
    priceNote: '$1,300 to $1,700/mo based on scope',
    featured: false,
    features: [
      'Everything in Growth',
      '24 Posts + 6 Premium Videos',
      '2 SEO-Optimized Articles',
      'Optional Content Proxy Support',
      'Multi-Segment Conversion Funnels',
      'Quarterly Boardroom Strategy Session',
      'In-Depth Case Study Production',
      'Direct Sales Pipeline Consulting',
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
      className={`group relative rounded-[40px] overflow-visible transition-all duration-500 ${
        plan.featured ? 'lg:-mt-8 z-10' : ''
      }`}
    >
      {/* Glow ring for featured */}
      {plan.featured && (
        <div className="absolute -inset-[2px] bg-gradient-to-b from-brand-400 via-brand-500/40 to-brand-400/10 rounded-[42px] blur-sm opacity-50" />
      )}

      <div className={`relative h-full rounded-[40px] p-8 lg:p-10 flex flex-col ${
        plan.featured
          ? 'bg-gradient-to-b from-navy-800 via-navy-900 to-[#0A101C] text-white shadow-2xl border border-white/10 backdrop-blur-xl'
          : 'glass dark:glass-dark shadow-soft hover:shadow-xl transition-shadow bg-white dark:bg-transparent'
      }`}>
        {/* Badge */}
        {plan.badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 shadow-glow border border-white/20">
              <Star size={14} className="text-white fill-white" />
              <span className="text-[11px] font-bold text-white tracking-[0.2em] uppercase">{plan.badge}</span>
            </div>
          </div>
        )}

        {/* Label */}
        <div className={`mb-6 ${plan.featured ? 'mt-4' : 'mt-2'}`}>
          <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${
            plan.featured
              ? 'bg-white/10 text-white border border-white/20'
              : 'bg-white dark:bg-navy-900 text-navy-900 dark:text-white border border-charcoal-100 dark:border-white/10 shadow-sm'
          }`}>
            {plan.label}
          </span>
        </div>

        {/* Name */}
        <h3 className={`font-display text-3xl font-bold mb-6 tracking-tight ${plan.featured ? 'text-white' : 'text-navy-900 dark:text-white'}`}>{plan.name}</h3>

        {/* Price */}
        <div className="mb-2 flex items-baseline gap-1">
          <span className={`font-display text-5xl lg:text-6xl font-bold tracking-tighter ${plan.featured ? 'text-white' : 'text-navy-900 dark:text-white'}`}>
            {plan.name === 'Authority' ? plan.priceFirst : plan.priceAfter}
          </span>
          <span className={`text-base font-medium ${plan.featured ? 'text-white/60' : 'text-charcoal-400 dark:text-charcoal-300'}`}>{plan.pricePeriod}</span>
        </div>
        <p className={`text-sm font-medium mb-8 ${plan.featured ? 'text-white/50' : 'text-charcoal-400 dark:text-charcoal-300'}`}>{plan.priceNote}</p>

        {/* Divider */}
        <div className={`h-px w-full mb-8 ${plan.featured ? 'bg-white/10' : 'bg-charcoal-200/60 dark:bg-white/10'}`} />

        {/* Features */}
        <ul className="space-y-4 mb-10 flex-1">
          {plan.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                plan.featured ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' : 'bg-brand-50 dark:bg-brand-500/10 text-brand-500 border border-brand-100 dark:border-brand-500/20'
              }`}>
                <Check size={12} strokeWidth={3} />
              </div>
              <span className={`text-base leading-relaxed font-medium ${plan.featured ? 'text-white/90' : 'text-charcoal-600 dark:text-charcoal-300'}`}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className={`group/btn relative w-full flex items-center justify-center ${
            plan.featured ? 'btn-pill btn-primary dark:bg-white dark:text-navy-900' : 'btn-pill btn-outline dark:text-white'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {plan.cta}
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const { ref, isInView } = useSectionInView(0.08)

  return (
    <section id="pricing" className="relative py-24 lg:py-40 overflow-hidden" aria-label="Pricing plans">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ELNR Media Growth Systems",
          "description": "Complete digital marketing, content creation, and lead generation systems.",
          "offers": plans.map(plan => ({
            "@type": "Offer",
            "name": plan.name,
            "price": plan.priceFirst.replace(/[^0-9.-]+/g,""),
            "priceCurrency": "USD",
            "description": plan.features.join(', ')
          }))
        })}
      </script>
      {/* Background System */}
      <AnimatedAuroraBackground variant="pricing" />
      <ParallaxBackgroundAccents />
      <FloatingGlassShapes variant="pricing" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-32"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 shadow-sm text-navy-900 dark:text-white mb-6">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            Pricing
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
            Choose Your{' '}
            <span className="text-gradient">Growth Engine</span>
          </h2>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-lg sm:text-xl leading-relaxed">
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
          className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-start"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Partner banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 lg:mt-32 max-w-4xl mx-auto"
        >
          <div className="glass dark:glass-dark rounded-[32px] p-8 lg:p-10 flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <Sparkles size={24} className="text-brand-500" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.2em] mb-2">Partner Benefit</div>
              <p className="text-base text-charcoal-500 dark:text-charcoal-300 leading-relaxed">
                Each successful partnership connected to ELNR Media may unlock a bonus discount, based on the agreed partnership terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
