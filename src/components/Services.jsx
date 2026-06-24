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
      className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
    >
      {/* Text */}
      <motion.div
        variants={reversed ? slideInRight : slideInLeft}
        className={`${reversed ? 'lg:order-2 lg:text-left' : ''}`}
        style={{ direction: 'ltr' }}
      >
        <div className="w-16 h-16 rounded-full bg-white border border-charcoal-100 shadow-soft flex items-center justify-center mb-6">
          <service.icon size={26} className="text-brand-500" />
        </div>
        <h3 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4 tracking-tight">
          {service.title}
        </h3>
        <p className="text-charcoal-500 text-lg lg:text-xl leading-relaxed mb-8">
          {service.desc}
        </p>
        <div className="flex gap-8 mb-8">
          {service.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-navy-900">{s.value}</div>
              <div className="text-xs text-charcoal-400 uppercase tracking-wider font-bold mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-500 hover:text-brand-600 transition-colors duration-300"
        >
          Learn more
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={reversed ? slideInLeft : slideInRight}
        className={`${reversed ? 'lg:order-1' : ''} relative`}
        style={{ direction: 'ltr' }}
      >
        <div className="relative rounded-[40px] overflow-hidden group shadow-2xl">
          <motion.img
            style={{ y: imgY }}
            src={service.img}
            alt={`${service.title}: ${service.desc.slice(0, 80)}`}
            className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-white/20 rounded-[40px]" />
        </div>
        {/* Floating accent */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-brand-300/30 -z-10 bg-brand-50/50 backdrop-blur-md" />
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-orange-100/80 -z-10 blur-xl" />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, isInView } = useSectionInView(0.05)

  return (
    <section id="services" className="relative py-24 lg:py-36 overflow-hidden" aria-label="Our services">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-32 w-[800px] h-[800px] bg-brand-200/20 rounded-full blur-[150px] mix-blend-multiply opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-60 pointer-events-none" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20 lg:mb-32"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white border border-charcoal-100 shadow-sm text-navy-900 mb-6">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            What We Do
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 tracking-tight mb-6">
            Full-Stack Growth{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-charcoal-500 text-lg sm:text-xl leading-relaxed">
            Every service works together as part of a connected growth engine.
            Not isolated tactics, but a system designed to compound results.
          </p>
        </motion.div>

        {/* Featured services */}
        <div className="space-y-32 lg:space-y-48 mb-24 lg:mb-36">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          {gridServices.map((svc) => (
            <motion.div
              key={svc.title}
              variants={fadeInUp}
              className="group glass rounded-[32px] p-8 cursor-default transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svc.icon size={20} className="text-brand-500" />
              </div>
              <h4 className="font-display font-bold text-navy-900 text-lg mb-2 tracking-tight">{svc.title}</h4>
              <p className="text-sm text-charcoal-500 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
