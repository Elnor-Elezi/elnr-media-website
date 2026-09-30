"use client";
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Search, Globe, FileText, ArrowRight, Zap,
  BarChart, Code, Layers, CheckCircle2
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

export default function SeoOrganicPillar() {
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
        title="SEO & Organic Search | ELNR Media"
        description="Dominate your industry's search results. We combine technical SEO, programmatic content, and high-authority link building to capture high-intent buyers."
        serviceName="SEO & Organic Search"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'SEO & Organic', path: '/services/seo-organic' }
        ]}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-brand-500/10 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-container relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 text-brand-500 font-bold text-sm tracking-widest uppercase mb-8 border border-brand-500/20">
              <Search size={16} /> Search Engine Dominance
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-bold text-navy-900 dark:text-white leading-[1.1] mb-8">
              Capture the Demand.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                Own the Search Real Estate.
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-12 max-w-3xl">
              While outbound marketing creates demand, SEO captures existing demand. If your ideal customers are actively searching for solutions to their problems and they don't find you on page one, you are handing money to your competitors.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-pill btn-primary text-lg px-8 py-4">
                Audit My Site
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 3 Pillars of SEO */}
      <section className="py-24 bg-navy-50 dark:bg-black/50">
        <div className="max-container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-6">
              Our 3-Pronged Approach to SEO
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-charcoal-300">
              SEO is not a dark art. It is a systematic process of technical excellence, semantic authority, and digital PR.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 shadow-xl border border-charcoal-100 dark:border-white/10">
              <Code size={40} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Technical SEO Architecture</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                Before content can rank, Google must be able to crawl and understand your site. We fix Core Web Vitals, implement dynamic JSON-LD Schema markup, optimize canonical tags, and ensure your site architecture strictly silos relevance.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 shadow-xl border border-charcoal-100 dark:border-white/10">
              <FileText size={40} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Content Clusters</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                We abandon the outdated strategy of writing random blog posts. Instead, we build massive Topic Clusters around your core commercial keywords. We write 2,000+ word pillar pages supported by highly specific long-tail satellite articles.
              </p>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-[32px] p-8 shadow-xl border border-charcoal-100 dark:border-white/10">
              <Globe size={40} className="text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">Digital PR & Link Building</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
                Authority is the currency of the internet. We acquire high-DR (Domain Rating) backlinks from contextual publications, SaaS directories, and industry partners to act as "votes of confidence" in Google's eyes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic SEO Highlight */}
      <section className="py-24 bg-brand-500 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
        
        <div className="max-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              The Secret Weapon: Programmatic SEO
            </h2>
            <div className="space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                If your business has a large dataset or targets numerous locations/integrations, manually writing pages is too slow.
              </p>
              <p>
                We build <strong>Programmatic SEO (pSEO)</strong> engines that can dynamically generate hundreds or thousands of high-quality, localized, or highly-specific comparison pages (e.g., "Best CRM for Dentists in Austin") without sacrificing quality.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-white" /> Rapid indexation of long-tail terms.
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-white" /> AI-augmented content layers to prevent duplicate content penalties.
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-white" /> Massive traffic spikes within 90 days.
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-navy-900 rounded-[32px] p-8 shadow-2xl text-charcoal-300 relative border border-white/10">
            {/* Pseudo-code aesthetic for programmatic SEO */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <pre className="font-mono text-sm overflow-x-auto text-brand-300">
{`// Generating 500 comparison pages
const generatePSeo = async (data) => {
  return data.map(competitor => ({
    slug: \`/alternatives/\${competitor.name}\`,
    title: \`The Best \${competitor.name} Alternative in 2026\`,
    schema: buildFAQSchema(competitor.faqs),
    content: generateSemanticMatrix(competitor)
  }));
}

await generatePSeo(industryData);
// Success: 500 pages generated & indexed.`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white dark:bg-black">
        <div className="max-container max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 dark:text-white mb-8">
            Ready to stop paying for every click?
          </h2>
          <p className="text-xl text-charcoal-600 dark:text-charcoal-300 mb-12">
            Organic traffic is the most scalable acquisition channel on earth. Let us audit your current technical foundation and build your content roadmap.
          </p>
          
          <Link href="/contact" className="btn-pill btn-primary text-xl px-12 py-5 shadow-2xl inline-flex items-center gap-3 group">
            Request SEO Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
