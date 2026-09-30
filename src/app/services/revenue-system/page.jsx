"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Infinity, Target, Activity, CheckCircle2, ArrowRight,
  Database, GitBranch, RefreshCw
} from 'lucide-react';
import SEO from '../../../components/SEO';
import PageTransition from '../../../components/PageTransition';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function RevenueSystemPillar() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <PageTransition>
      <SEO 
        title="Full Revenue System | Fractional CMO | ELNR Media"
        description="Our flagship offering. We install an end-to-end B2B revenue engine into your company, acting as your Fractional CMO and execution team."
        serviceName="Full Revenue System"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Full Revenue System', path: '/services/revenue-system' }
        ]}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px]" />
        </motion.div>

        <div className="max-container relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-500 font-bold text-sm tracking-widest uppercase mb-8 border border-brand-500/20">
              <Infinity size={16} /> The Flagship Engagement
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-navy-900 dark:text-white leading-[1.1] mb-8">
              The End-to-End <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                B2B Revenue System.
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Stop hiring disjointed freelancers or narrow-focused agencies. The Full Revenue System is a fractional CMO and a complete marketing department deployed into your business, aligning Paid Ads, SEO, Content, and CRM into one holistic engine.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-pill btn-primary text-lg px-8 py-4">
                Apply for Partnership
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Fragmentation Problem */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
                The Fragmentation Problem
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                <p>
                  Most B2B companies suffer from "Frankenstein Marketing." You have an SEO agency that doesn't talk to your Google Ads guy. You have a web developer who doesn't understand conversion rate optimization. Your sales team doesn't use the CRM properly.
                </p>
                <p>
                  This fragmentation leads to massive data loss, conflicting messaging, and wasted budget.
                </p>
                <p>
                  <strong>The Solution:</strong> A single, unified architecture where data from cold outbound informs your paid ads, and insights from sales calls dictate your SEO and content strategy.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 dark:bg-navy-900/50 rounded-[40px] p-10 border border-charcoal-100 dark:border-white/10 relative">
               <div className="flex flex-col gap-6">
                 <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-charcoal-100 dark:border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <Target className="text-brand-500" />
                     <span className="font-bold text-navy-900 dark:text-white">Traffic Engine</span>
                   </div>
                   <span className="text-sm text-brand-500 font-bold bg-brand-500/10 px-3 py-1 rounded-full">Ads & Outbound</span>
                 </div>
                 <div className="flex justify-center -my-2 text-charcoal-300"><ArrowRight className="rotate-90" /></div>
                 
                 <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-charcoal-100 dark:border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                     <GitBranch className="text-brand-500" />
                     <span className="font-bold text-navy-900 dark:text-white">Conversion Funnel</span>
                   </div>
                   <span className="text-sm text-brand-500 font-bold bg-brand-500/10 px-3 py-1 rounded-full">Web & VSL</span>
                 </div>
                 <div className="flex justify-center -my-2 text-charcoal-300"><ArrowRight className="rotate-90" /></div>

                 <div className="bg-brand-500 p-6 rounded-2xl shadow-lg flex items-center justify-between text-white">
                   <div className="flex items-center gap-4">
                     <Database className="text-white" />
                     <span className="font-bold">Nurture & Close</span>
                   </div>
                   <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full text-white">CRM & Email</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Phases of Installation */}
      <section className="py-32 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
              The System Installation
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-charcoal-300">
              We don't launch everything on day one. We build the system in a logical sequence over 90 days.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg relative">
              <div className="text-brand-500 font-display font-bold text-5xl mb-4 opacity-50">M1</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Foundation & Funnel</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 text-sm leading-relaxed">
                We rebuild your core offer, redesign your high-converting landing pages, and set up your CRM/Tracking architecture correctly.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg relative">
              <div className="text-brand-500 font-display font-bold text-5xl mb-4 opacity-50">M2</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Outbound & Paid Ads</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 text-sm leading-relaxed">
                We turn on the tap. LinkedIn Ads, Meta Retargeting, and hyper-personalized Cold Email sequences go live to inject fast cash flow.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg relative">
              <div className="text-brand-500 font-display font-bold text-5xl mb-4 opacity-50">M3</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Authority & Content</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 text-sm leading-relaxed">
                We launch founder ghostwriting and short-form video to build the brand moat and decrease cost-per-acquisition over time.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg relative">
              <div className="text-brand-500 font-display font-bold text-5xl mb-4 opacity-50">M4+</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">SEO & Scaling</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 text-sm leading-relaxed">
                We deploy the programmatic SEO engine and content clusters to capture organic intent, while scaling ad spend based on ROAS data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-24 bg-brand-500 text-white text-center">
        <div className="max-container max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            We only partner with 5 companies at a time.
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-12">
            The Full Revenue System is highly intensive. Because we act as your fractional marketing department, we limit our roster to ensure maximum focus and massive results for our partners. 
          </p>
          <Link href="/contact" className="btn-pill bg-white text-brand-600 hover:bg-gray-100 text-xl px-12 py-5 shadow-2xl inline-flex items-center gap-3 group">
            Apply For Partnership
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
