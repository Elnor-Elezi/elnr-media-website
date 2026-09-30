"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { insights } from '../../data/insights';
import SEO from '../../components/SEO';
import PageTransition from '../../components/PageTransition';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function InsightsIndex() {
  const featuredArticle = insights[0];
  const gridArticles = insights.slice(1);

  return (
    <PageTransition>
      <SEO 
        title="Insights & Strategies | B2B Growth Engine | ELNR Media"
        description="The ultimate resource for B2B founders and marketers. Deep dives into lead generation, SEO, content authority, and revenue systems."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' }
        ]}
      />

      <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-container">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-bold text-navy-900 dark:text-white mb-6">
              The <span className="text-brand-500">Growth</span> Hub
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-charcoal-600 dark:text-charcoal-300">
              No fluff. No generic advice. Just actionable methodologies and systems we use to scale our B2B partners.
            </motion.p>
          </motion.div>

          {/* Featured Article */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <Link href={`/insights/${featuredArticle.slug}`} className="block group">
              <div className="relative rounded-[40px] overflow-hidden bg-navy-900 text-white min-h-[500px] flex items-end">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featuredArticle.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent" />
                
                <div className="relative z-10 p-8 md:p-16 max-w-4xl">
                  <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase mb-6">
                    <span className="text-brand-400">{featuredArticle.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 flex items-center gap-2"><Clock size={14} /> {featuredArticle.readTime}</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 group-hover:text-brand-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                    Read the Masterclass <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article, idx) => (
              <motion.div 
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              >
                <Link href={`/insights/${article.slug}`} className="group flex flex-col h-full bg-white dark:bg-navy-900 rounded-[32px] overflow-hidden border border-charcoal-100 dark:border-white/10 hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase mb-4">
                      <span className="text-brand-500">{article.category}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-white mb-4 group-hover:text-brand-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-charcoal-600 dark:text-charcoal-300 mb-8 flex-1 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-charcoal-500 dark:text-charcoal-400 mt-auto pt-6 border-t border-charcoal-100 dark:border-white/10">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1"><BookOpen size={14} /> {article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
