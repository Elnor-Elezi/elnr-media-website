import { motion } from 'framer-motion'
import { Target, Shield, Rocket, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { IMAGES, useSectionInView, fadeInUp, stagger } from '../hooks'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
const values = [
  {
    icon: Target,
    title: 'Data-Driven Precision',
    desc: 'No guesswork. We build systems based on hard data and proven frameworks that predictably turn attention into revenue.'
  },
  {
    icon: Shield,
    title: 'Radical Transparency',
    desc: 'We over-communicate. You will always know exactly what is happening, why it is happening, and the exact ROI being generated.'
  },
  {
    icon: Rocket,
    title: 'Relentless Growth',
    desc: 'Good enough is never enough. We continuously iterate, optimize, and push the boundaries of what your brand can achieve.'
  },
  {
    icon: Users,
    title: 'True Partnership',
    desc: 'We don’t act like a traditional vendor. We embed ourselves into your business and operate as your dedicated growth arm.'
  }
]

export default function AboutPage() {
  const { ref, isInView } = useSectionInView(0.1)

  return (
    <PageTransition>
      <div className="pt-24 lg:pt-36">
      <SEO 
        title="About Us | ELNR Media"
        description="Learn about ELNR Media, our founder Elnor Elezi, and our mission to build premium media systems that scale."
      />

      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative max-container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 shadow-sm text-navy-900 dark:text-white mb-8">
                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
                Our Story
              </span>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight mb-8">
                We Build Systems That <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Actually Compound.</span>
              </h1>
              
              <p className="text-charcoal-500 dark:text-charcoal-300 text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                Founded by Elnor Elezi, ELNR Media is a premium growth agency headquartered in Tirana, Albania. We exist to solve one massive problem: businesses burning cash on isolated marketing tactics while their customer acquisition costs skyrocket. Instead of disjointed ads and scattered content, we build compounding media systems.
              </p>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl mt-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80" 
                alt="ELNR Media Strategy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-[40px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder / Mission Section */}
      <section className="py-24 lg:py-36 relative z-10">
        <div className="max-container section-padding">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
                The New Standard of <br />
                <span className="text-brand-500">Growth Partners.</span>
              </h2>
              <div className="space-y-6 text-charcoal-500 dark:text-charcoal-300 text-lg leading-relaxed">
                <p>
                  Most agencies focus on inputs—how many posts they make or how much they spend on ads. At ELNR Media, we focus entirely on business outcomes.
                </p>
                <p>
                  We build "Premium Media Systems." This means your content drives authority, your ads capture intent, and your funnels convert attention into closed deals. It's an ecosystem where every piece makes the others stronger.
                </p>
                <p>
                  Our mission is simple: to be the last growth partner you will ever need to hire. We scale businesses with absolute clarity and predictable results.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="glass dark:glass-dark rounded-[32px] p-8 lg:p-12 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-8">
                  <CheckCircle className="text-brand-500 w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-4">Why we are different</h3>
                <ul className="space-y-4">
                  {[
                    "We don't do isolated tactics, we build systems.",
                    "We obsess over your unit economics.",
                    "We act as an extension of your internal team.",
                    "We prioritize long-term brand equity over short-term hacks."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ArrowRight size={12} className="text-brand-500" />
                      </div>
                      <span className="text-charcoal-600 dark:text-charcoal-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-36 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-brand-900/20" />
        
        <div className="relative max-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 shadow-sm text-navy-900 dark:text-white mb-6">
              Core Values
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
              How We Operate
            </h2>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="glass dark:glass-dark p-8 lg:p-10 rounded-[32px] hover:-translate-y-2 transition-transform duration-500 shadow-soft hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-6">
                  <val.icon className="text-brand-500 w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCta />
    </div>
    </PageTransition>
  )
}
