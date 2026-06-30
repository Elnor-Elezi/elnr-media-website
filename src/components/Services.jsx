import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Film, Megaphone, GitBranch, UserCheck, FileText, BookOpen, Phone, Compass,
  LineChart, MousePointerClick, Filter, Camera,
  Smartphone, Code, Mail, Database, ArrowUpRight
} from 'lucide-react'
import { useSectionInView, fadeInUp, slideInLeft, slideInRight, stagger, IMAGES } from '../hooks'
import AnimatedAuroraBackground from './backgrounds/AnimatedAuroraBackground'
import FloatingGlassShapes from './backgrounds/FloatingGlassShapes'
import ParallaxBackgroundAccents from './backgrounds/ParallaxBackgroundAccents'

const featuredServices = [
  {
    icon: Film,
    title: 'Content Creation',
    desc: 'We do not just "make posts". We produce high-retention video and written content designed to increase organic visibility, establish measurable authority, and drive inbound B2B leads.',
    img: IMAGES.content,
    stats: [{ value: '16+', label: 'Posts/Month' }, { value: '4+', label: 'Videos' }],
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    desc: 'Stop renting low-quality clicks. We build ROI-obsessed ad architectures across Meta, LinkedIn, and Google to capture high-intent buyers and dramatically lower your acquisition costs.',
    img: IMAGES.analytics,
    stats: [{ value: '340%', label: 'Avg ROI' }, { value: '24/7', label: 'Monitoring' }],
  },
  {
    icon: GitBranch,
    title: 'Funnel Building',
    desc: 'Traffic is useless without conversion. We construct frictionless, automated sales funnels that systematically nurture cold prospects into warm, closed deals while you sleep.',
    img: IMAGES.funnel,
    stats: [{ value: 'End-to-End', label: 'Systems' }, { value: 'Auto', label: 'Follow-up' }],
  },
]

const gridServices = [
  { icon: Smartphone, title: 'Social Media Management', desc: 'Consistent, brand-aligned presence across all key platforms.' },
  { icon: Code, title: 'Web Development', desc: 'High-converting, perfectly optimized landing pages and websites.' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automated nurture sequences and engaging weekly newsletters.' },
  { icon: Database, title: 'CRM Implementation', desc: 'Organized lead tracking and seamless sales pipeline setups.' },
  { icon: Compass, title: 'Strategy Consulting', desc: 'Quarterly deep-dives to optimize your brand growth.' },
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
        <div className="w-16 h-16 rounded-full bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 shadow-soft flex items-center justify-center mb-6">
          <service.icon size={26} aria-hidden="true" className="text-brand-500" />
        </div>
        <h3 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white mb-4 tracking-tight">
          {service.title}
        </h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 text-lg lg:text-xl leading-relaxed mb-8">
          {service.desc}
        </p>
        <div className="flex gap-8 mb-8">
          {service.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-navy-900 dark:text-white">{s.value}</div>
              <div className="text-xs text-charcoal-400 uppercase tracking-wider font-bold mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-500 hover:text-brand-600 transition-colors duration-300"
        >
          Learn more
          <ArrowUpRight size={18} aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
            width="800"
            height="600"
            className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-white/20 rounded-[40px]" />
        </div>
        {/* Floating accent */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-brand-300/30 -z-10 bg-brand-50/50 backdrop-blur-md" />
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-brand-100/80 dark:bg-brand-900/40 -z-10 blur-xl" />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { ref, isInView } = useSectionInView(0.05)

  return (
    <section id="services" className="relative py-24 lg:py-36 overflow-hidden" aria-label="Our services">
      {/* Background System */}
      <AnimatedAuroraBackground variant="services" />
      <ParallaxBackgroundAccents />
      <FloatingGlassShapes variant="services" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-500/20 mb-5">
            What We Do
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
            Premium B2B Media Systems &{' '}
            <span className="text-gradient">Growth Services</span>
          </h1>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-base sm:text-lg leading-relaxed">
            We don't just run ads or post content. We build interconnected 
            media systems that turn attention into revenue.
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
              className="glass dark:glass-dark p-8 lg:p-10 rounded-[32px] hover:-translate-y-2 transition-transform duration-500 shadow-soft hover:shadow-xl relative overflow-hidden group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svc.icon size={20} aria-hidden="true" className="text-brand-500" />
              </div>
              <h4 className="font-display font-bold text-navy-900 dark:text-white text-lg mb-2 tracking-tight">{svc.title}</h4>
              <p className="text-sm text-charcoal-500 dark:text-charcoal-300 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
