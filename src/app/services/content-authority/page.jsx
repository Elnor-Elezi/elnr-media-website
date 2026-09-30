"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Megaphone, Edit3, Film, ArrowRight, CheckCircle2,
  Share2, MessageSquare, Briefcase, TrendingUp
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

export default function ContentAuthorityPillar() {
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
        title="B2B Content Authority & LinkedIn | ELNR Media"
        description="Transform your founders into industry thought leaders. We produce high-level LinkedIn content, short-form video, and newsletters that build absolute trust."
        serviceName="Content Authority"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Content Authority', path: '/services/content-authority' }
        ]}
      />

      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-500/10 rounded-full blur-[100px]" />
        </motion.div>

        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-500 font-bold text-sm tracking-widest uppercase mb-8 border border-brand-500/20">
              <Megaphone size={16} /> Market Dominance
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-navy-900 dark:text-white leading-[1.1] mb-8">
              Don't Just Be Found.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Be the Indisputable Choice.
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-12 max-w-3xl">
              B2B buyers do extensive research before they ever talk to sales. If your founders are silent and your social feeds look like a corporate brochure, you are losing deals to competitors who are actively educating the market.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-pill btn-primary text-lg px-8 py-4">
                Build Your Authority
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Shift in B2B Buying */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-brand-500/20 blur-3xl rounded-full" />
               <div className="relative bg-navy-900 border border-white/10 rounded-[32px] p-8 shadow-2xl">
                 <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                   <div className="w-12 h-12 rounded-full bg-gray-500" />
                   <div>
                     <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                     <div className="h-3 w-24 bg-white/10 rounded" />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="h-4 w-full bg-white/20 rounded" />
                   <div className="h-4 w-[90%] bg-white/20 rounded" />
                   <div className="h-4 w-[60%] bg-white/20 rounded" />
                   <div className="mt-8 h-48 w-full bg-brand-500/30 rounded-xl border border-brand-500/50 flex items-center justify-center">
                     <span className="text-brand-300 font-bold tracking-widest uppercase">High Value Content</span>
                   </div>
                 </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
                People Buy From People (They Trust)
              </h2>
              <div className="space-y-6 text-lg text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                <p>
                  Today's B2B buying cycle is largely "dark social." Your prospects are reading LinkedIn posts, watching short-form videos, and asking peers in private Slack groups. If your leadership team isn't visibly contributing to these conversations, you don't exist.
                </p>
                <p>
                  We ghostwrite for CEOs, founders, and executives. We extract the deep industry knowledge trapped in your head and turn it into a content machine that runs 365 days a year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deliverables / Pillars of Authority */}
      <section className="py-32 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
              The Authority Engine
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-charcoal-300">
              We require just 60 minutes of your time per month. We handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg">
              <Edit3 size={32} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Executive Ghostwriting</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                We interview your founders to extract unique perspectives, contrarian takes, and case studies. We then ghostwrite 3-5 high-performing LinkedIn posts per week that sound exactly like you.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg">
              <Film size={32} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Short-Form Video</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                We provide the hooks and scripts. You record from your phone or webcam. Our editors add dynamic captions, b-roll, and pacing to create TikTok/Reels/Shorts that command attention in the B2B space.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 border border-charcoal-100 dark:border-white/10 shadow-lg">
              <MessageSquare size={32} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Newsletters & Deep Dives</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                You need to own your audience, not just rent it from social platforms. We ghostwrite weekly Substack or LinkedIn Newsletters that move followers into your email database for long-term nurturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-500 text-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-container relative z-10 text-center max-w-4xl mx-auto text-white">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">
            Become the category king.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Content is compounding interest for your business. The best time to start was 5 years ago. The second best time is today.
          </p>
          
          <Link href="/contact" className="btn-pill bg-white text-brand-600 hover:bg-gray-100 text-xl px-12 py-5 shadow-2xl inline-flex items-center gap-3 group">
            Start Ghostwriting
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
