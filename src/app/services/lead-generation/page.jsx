"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, TrendingUp, Zap, CheckCircle2, ArrowRight,
  Database, LineChart, Shield, Mail, Users
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

export default function LeadGenerationPillar() {
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
        title="B2B Lead Generation & Paid Ads | ELNR Media"
        description="Stop buying cold lists. Build a predictable B2B outbound and paid ads engine that generates qualified meetings on autopilot. Explore our deep methodology."
        serviceName="B2B Lead Generation"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Lead Generation', path: '/services/lead-generation' }
        ]}
      />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-500/20 rounded-full blur-[100px]" />
        </motion.div>

        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-500 font-bold text-sm tracking-widest uppercase mb-8 border border-brand-500/20">
              <Target size={16} /> Predictable Revenue Engine
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-navy-900 dark:text-white leading-[1.1] mb-8">
              Stop Chasing Deals.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Engineer Predictable Pipeline.
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-12 max-w-3xl">
              Most B2B lead generation is broken. Spammy cold emails, generic LinkedIn pitches, and bloated paid ad campaigns that burn cash. We build sophisticated outbound and inbound engines that put qualified meetings on your calendar.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-pill btn-primary text-lg px-8 py-4">
                Build My Engine
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem (Agitation) */}
      <section className="py-24 bg-navy-50 dark:bg-black/50">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
                The Old Way of Lead Gen is Dead.
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                <p>
                  If you are relying on buying scraped lists and blasting generic emails, you are damaging your domain reputation and your brand. Buyers in the B2B space are smarter, highly defensive, and overwhelmed with noise.
                </p>
                <p>
                  <strong>Symptom 1:</strong> You spend $5,000 on LinkedIn Ads, get 100 "leads", but 95 of them are unqualified or never answer the phone.
                </p>
                <p>
                  <strong>Symptom 2:</strong> Your SDRs spend 80% of their time doing manual data entry and finding emails, and 20% actually selling.
                </p>
                <p>
                  <strong>Symptom 3:</strong> Revenue is a rollercoaster. You have a great month because of referrals, followed by a terrifyingly quiet month.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 md:p-12 shadow-2xl border border-charcoal-100 dark:border-white/10 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500/10 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold text-red-500 mb-8 font-display">The Cost of Inaction</h3>
              <ul className="space-y-6">
                {[
                  "Burned marketing budgets on zero-intent traffic.",
                  "Competitors stealing market share with better systems.",
                  "Founder burnout from constantly wearing the 'Sales' hat.",
                  "Inability to scale the sales team predictably."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0 mt-1">✕</div>
                    <span className="text-charcoal-700 dark:text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Methodology (Deep Dive) */}
      <section className="py-32 relative">
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
              The ELNR Lead Gen Methodology
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-charcoal-300">
              We don't just "run ads" or "send emails." We architect a multi-channel acquisition system designed for the modern B2B buyer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-navy-900 text-white p-10 rounded-[32px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="text-brand-400 font-display font-bold text-6xl mb-6 opacity-50">01</div>
              <h3 className="text-2xl font-bold mb-4">Total Market Capture</h3>
              <p className="text-gray-400 leading-relaxed">
                We start by scraping and enriching your Total Addressable Market (TAM). We don't guess. We build a proprietary database of your exact buyers using Apollo, ZoomInfo, and custom scrapers.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-navy-900 text-white p-10 rounded-[32px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="text-brand-400 font-display font-bold text-6xl mb-6 opacity-50">02</div>
              <h3 className="text-2xl font-bold mb-4">Infrastructure & Deliverability</h3>
              <p className="text-gray-400 leading-relaxed">
                Before sending a single email, we set up secondary domains, configure DMARC/DKIM/SPF, and warm up inboxes. We guarantee a 99% inbox placement rate, avoiding the spam folder entirely.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-navy-900 text-white p-10 rounded-[32px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-bl-full transition-transform group-hover:scale-110" />
              <div className="text-brand-400 font-display font-bold text-6xl mb-6 opacity-50">03</div>
              <h3 className="text-2xl font-bold mb-4">Omnichannel Conversion</h3>
              <p className="text-gray-400 leading-relaxed">
                We surround your prospects. They receive a highly personalized cold email, see a retargeting ad on LinkedIn, and get a connection request. We create the illusion of omnipresence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Breakdown / Services Included */}
      <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <div className="max-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-8">
                What's included in the engine?
              </h2>
              <div className="space-y-12">
                
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">Cold Email Infrastructure</h4>
                    <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                      Setup of 10+ sending domains, automated warmup, and rotation. We use Spintax and hyper-personalization variables (AI-driven first lines) to ensure emails read like 1-to-1 communication.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">B2B Paid Ads (LinkedIn & Meta)</h4>
                    <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                      We don't run generic lead forms. We build high-value Lead Magnets (reports, calculators) and run conversion-optimized ads to capture intent. We use offline conversion tracking to train the ad algorithms on closed deals, not just clicks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center flex-shrink-0 text-brand-500">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy-900 dark:text-white mb-2">CRM & Automation</h4>
                    <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                      All leads flow directly into HubSpot or GoHighLevel. We build automated nurture sequences via Zapier/Make so leads are educated before they ever jump on a call with your sales team.
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Visual Data Representation */}
            <div className="bg-navy-50 dark:bg-navy-900/50 rounded-[40px] p-8 border border-charcoal-100 dark:border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold text-center text-navy-900 dark:text-white mb-10">The ELNR Funnel Math</h3>
              
              <div className="space-y-6">
                <div className="relative pt-6">
                  <div className="absolute top-0 left-4 text-xs font-bold text-brand-500">10,000 Contacts</div>
                  <div className="h-16 bg-navy-900 rounded-2xl w-full flex items-center px-6 border border-white/10">
                    <span className="text-white font-medium">TAM Extracted</span>
                  </div>
                </div>
                
                <div className="relative pt-6 flex justify-center">
                  <div className="absolute top-0 left-[10%] text-xs font-bold text-brand-500">6,500 Valid Emails</div>
                  <div className="h-16 bg-navy-800 rounded-2xl w-[80%] flex items-center px-6 border border-white/10">
                    <span className="text-white font-medium">Cleaned & Verified</span>
                  </div>
                </div>

                <div className="relative pt-6 flex justify-center">
                  <div className="absolute top-0 left-[20%] text-xs font-bold text-brand-500">45% Open Rate</div>
                  <div className="h-16 bg-navy-700 rounded-2xl w-[60%] flex items-center px-6 border border-white/10">
                    <span className="text-white font-medium">Engaged Prospects</span>
                  </div>
                </div>

                <div className="relative pt-6 flex justify-center">
                  <div className="absolute top-0 left-[35%] text-xs font-bold text-brand-500">3-5% Meeting Rate</div>
                  <div className="h-16 bg-brand-500 rounded-2xl w-[30%] flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <span className="text-white font-bold">150+ Meetings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROI / Social Proof */}
      <section className="py-24 bg-brand-500 text-white relative">
        <div className="max-container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Metrics That Matter</h2>
          <div className="grid md:grid-cols-4 gap-8 divide-x divide-white/20">
            <div className="px-6">
              <div className="text-5xl font-bold mb-2">99%</div>
              <div className="text-white/80 font-medium">Inbox Placement</div>
            </div>
            <div className="px-6">
              <div className="text-5xl font-bold mb-2">3.8x</div>
              <div className="text-white/80 font-medium">Average ROAS</div>
            </div>
            <div className="px-6">
              <div className="text-5xl font-bold mb-2">45%</div>
              <div className="text-white/80 font-medium">Avg. Open Rate</div>
            </div>
            <div className="px-6">
              <div className="text-5xl font-bold mb-2">14</div>
              <div className="text-white/80 font-medium">Days to Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ & Final CTA */}
      <section className="py-32">
        <div className="max-container max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-8">
            Ready to fill your pipeline?
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 mb-12">
            Stop relying on word-of-mouth. Build a machine that generates leads while you sleep. Book a free strategy call to see if your business qualifies for our lead generation engine.
          </p>
          
          <Link href="/contact" className="btn-pill btn-primary text-xl px-12 py-5 shadow-2xl shadow-brand-500/20 inline-flex items-center gap-3 group">
            Schedule Growth Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
