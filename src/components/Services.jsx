import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Film, Megaphone, GitBranch, UserCheck,
  FileText, BookOpen, Phone, Compass, ArrowUpRight
} from 'lucide-react'
import { useSectionInView, useTilt, fadeInUp, slideInLeft, slideInRight, stagger, IMAGES } from '../hooks'

const featuredServices = [
  {
    icon: Film,
    title: 'Content Production',
    desc: 'Strategic posts, videos, and branded content designed to build authority and engagement across platforms. We create scroll-stopping content that converts attention into action.',
    img: IMAGES.content,
    stats: [{ value: '16+', label: 'Posts/Month' }, { value: '4+', label: 'Videos' }],
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    desc: 'ROI-focused ad campaigns on Meta, LinkedIn, and Google, built to generate qualified leads at scale. Every dollar tracked, every campaign optimized.',
    img: IMAGES.analytics,
    stats: [{ value: '340%', label: 'Avg ROI' }, { value: '24/7', label: 'Monitoring' }],
  },
  {
    icon: GitBranch,
    title: 'Funnel Building',
    desc: 'Complete conversion funnels from lead capture to qualification, nurturing prospects into clients with automated workflows and strategic touchpoints.',
    img: IMAGES.funnel,
    stats: [{ value: 'End-to-End', label: 'Systems' }, { value: 'Auto', label: 'Follow-up' }],
  },
]

const gridServices = [
  { icon: UserCheck, title: 'Lead Qualification', desc: 'Automated workflows that score and route leads.' },
  { icon: FileText, title: 'SEO Articles', desc: 'Search-optimized articles that drive organic traffic.' },
  { icon: BookOpen, title: 'Case Studies', desc: 'Professional case studies that showcase your results.' },
  { icon: Phone, title: 'Sales Support', desc: 'Scripts, objection handling, and follow-up systems.' },
  { icon: Compass, title: 'Strategy Consulting', desc: 'Quarterly deep-dives to optimize your growth.' },
]

function FeaturedService({ service, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const reversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Text */}
      <motion.div
        variants={reversed ? slideInRight : slideInLeft}
        className={`${reversed ? 'lg:order-2 lg:text-left' : ''}`}
        style={{ direction: 'ltr' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200/60 flex items-center justify-center mb-6">
          <service.icon size={26} className="text-brand-600" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-navy-700 mb-4 tracking-tight">
          {service.title}
        </h3>
        <p className="text-charcoal-500 text-base lg:text-lg leading-relaxed mb-6">
          {service.desc}
        </p>
        <div className="flex gap-6 mb-6">
          {service.stats.map((s) => (
            <div key={s.label}>
              <div className="text-xl font-bold text-navy-700">{s.value}</div>
              <div className="text-xs text-charcoal-400">{s.label}</div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors duration-300"
        >
          Learn more
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={reversed ? slideInLeft : slideInRight}
        className={`${reversed ? 'lg:order-1' : ''} relative`}
        style={{ direction: 'ltr' }}
      >
        <div className="relative rounded-2xl overflow-hidden group shadow-card">
          <motion.img
            style={{ y: imgY }}
            src={service.img}
            alt={`${service.title}: ${service.desc.slice(0, 80)}`}
            className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-charcoal-200/20 rounded-2xl" />
        </div>
        {/* Floating accent */}
        <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl border border-brand-300/30 -z-10" />
        <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-brand-50/80 -z-10" />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, isInView } = useSectionInView(0.05)

  return (
    <section id="services" className="relative py-24 lg:py-36 bg-white overflow-hidden" aria-label="Our services">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-charcoal-50/80 rounded-full blur-[100px]" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-brand-50 text-brand-600 border border-brand-200/60 mb-5">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-700 tracking-tight mb-6">
            Full-Stack Growth{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-charcoal-500 text-base sm:text-lg leading-relaxed">
            Every service works together as part of a connected growth engine.
            Not isolated tactics, but a system designed to compound results.
          </p>
        </motion.div>

        {/* Featured services */}
        <div className="space-y-24 lg:space-y-36 mb-20 lg:mb-28">
          {featuredServices.map((svc, i) => (
            <FeaturedService key={svc.title} service={svc} index={i} />
          ))}
        </div>

        {/* Additional services: bento grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {gridServices.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              className="group card-surface card-surface-hover rounded-xl p-5 cursor-default"
            >
              <svc.icon size={20} className="text-brand-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-display font-semibold text-navy-700 text-sm mb-1">{svc.title}</h4>
              <p className="text-xs text-charcoal-500 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
