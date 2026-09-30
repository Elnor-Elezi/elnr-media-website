"use client";
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Search, Target, Rocket, TrendingUp } from 'lucide-react'
import { IMAGES } from '../hooks'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Audit & Discovery',
    desc: 'We deep-dive into your brand, audience, offer, content, and current marketing system to find gaps, strengths, and hidden opportunities. We analyze competitors and map out the exact path to revenue growth.',
    img: IMAGES.strategy,
  },
  {
    num: '02',
    icon: Target,
    title: 'System Strategy',
    desc: 'We build a clear, data-driven content, ad, funnel, and lead generation plan tailored to your exact business goals. No guessing, just mathematical marketing architecture designed to compound over time.',
    img: IMAGES.meeting,
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Engine Build',
    desc: 'We create and launch everything: the content system, ad campaigns, funnels, automations, and CRM workflows. We construct the entire growth engine while you focus on closing deals and running your business.',
    img: IMAGES.laptop,
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Scale & Iterate',
    desc: 'We track every metric, optimize every campaign, and systematically increase results over time with data-driven decisions and rapid iteration. The system learns, adapts, and scales your revenue.',
    img: IMAGES.analytics,
  },
]

function HorizontalCard({ step }) {
  return (
    <div className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] lg:w-[600px] flex-shrink-0 overflow-hidden rounded-3xl bg-charcoal-100 dark:bg-navy-800 p-8 md:p-12 border border-charcoal-200 dark:border-white/10 shadow-xl flex flex-col justify-between">
      {/* Background Image Parallax/Hover */}
      <div className="absolute inset-0 z-0">
        <img 
          src={step.img} 
          alt={step.title} 
          className="h-full w-full object-cover opacity-10 group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20 dark:from-navy-900 dark:via-navy-900/80 dark:to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="w-16 h-16 rounded-2xl bg-white/50 dark:bg-navy-900/50 backdrop-blur-md border border-white dark:border-white/10 flex items-center justify-center shadow-soft">
            <step.icon size={28} className="text-brand-600 dark:text-brand-400" />
          </div>
          <span className="text-6xl md:text-8xl font-display font-bold text-charcoal-200/50 dark:text-white/5 tracking-tighter pb-2">
            {step.num}
          </span>
        </div>

        <div>
          <h3 className="font-sans text-3xl md:text-4xl font-bold text-navy-900 dark:text-white tracking-tight mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors pb-2">
            {step.title}
          </h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 text-base md:text-lg leading-relaxed font-medium">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Process() {
  const targetRef = useRef(null)
  
  // The height of the section determines how long the user scrolls to see all cards
  // 300vh means they scroll for 3 viewports before the sticky section releases.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // We want to transform the x position of the cards container
  // from 0 to negative (scroll left). Adjust percentage based on card width + gap.
  // We use -65% to stop scrolling when the last card is visible, preventing it from scrolling off screen.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])
  
  // Fade out the header slightly as we scroll deep into the cards
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2])

  return (
    <section ref={targetRef} id="process" className="relative h-[300vh] bg-white dark:bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-20">
        
        {/* Background Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -translate-y-1/2" />
        </div>

        <div className="relative w-full max-container section-padding">
          {/* Header (Stays Fixed inside the sticky container) */}
          <motion.div 
            style={{ opacity: headerOpacity }}
            className="absolute top-10 md:top-24 left-4 md:left-8 lg:left-[5%] z-20 max-w-2xl pointer-events-none"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-200/60 dark:border-brand-500/20 mb-6">
              How It Works
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tighter leading-[1.1] mb-6 pb-2">
              The Architecture <br/>
              of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Scale.</span>
            </h2>
          </motion.div>

          {/* Scrolling Cards */}
          <div className="flex h-full items-center pl-4 md:pl-8 lg:pl-[5%] mt-32 md:mt-48">
            <motion.div style={{ x }} className="flex gap-8 md:gap-12 pb-10">
              {steps.map((step) => (
                <HorizontalCard step={step} key={step.num} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
