"use client";
import { useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { marked } from 'marked';
import { insights } from '../../../data/insights';
import SEO from '../../../components/SEO';
import PageTransition from '../../../components/PageTransition';

export default function InsightDetail() {
  const router = useRouter();
  const { slug } = useParams();

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = useMemo(() => insights.find(i => i.slug === slug), [slug]);

  if (!article) {
    router.replace('/insights');
    return null;
  }

  // Parse markdown
  const htmlContent = marked.parse(article.content);

  return (
    <PageTransition>
      <SEO 
        title={`${article.title} | ELNR Insights`}
        description={article.excerpt}
        image={article.image}
        type="article"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: article.title, path: `/insights/${slug}` }
        ]}
      />

      <article className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-container max-w-3xl">
          {/* Back button */}
          <Link href="/insights" className="inline-flex items-center gap-2 text-charcoal-500 dark:text-charcoal-400 hover:text-brand-500 transition-colors mb-10 font-medium">
            <ArrowLeft size={18} /> Back to all insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-widest uppercase mb-6">
              <span className="text-brand-500 bg-brand-50 dark:bg-brand-500/10 px-3 py-1 rounded-full">{article.category}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white leading-[1.1] mb-8">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-charcoal-600 dark:text-charcoal-400 text-sm border-b border-charcoal-100 dark:border-white/10 pb-8">
              <span className="flex items-center gap-2"><User size={16} /> {article.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} /> {article.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {article.readTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-[32px] overflow-hidden mb-16 aspect-[21/9] relative bg-navy-900">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${article.image})` }}
            />
          </div>

          {/* Markdown Content rendered via tailwind typography plugin */}
          <div 
            className="prose prose-lg md:prose-xl prose-charcoal dark:prose-invert max-w-none 
                       prose-headings:font-display prose-headings:font-bold prose-a:text-brand-500
                       prose-h2:mt-16 prose-h2:mb-6 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Author / CTA Footer */}
          <footer className="mt-20 pt-12 border-t border-charcoal-100 dark:border-white/10">
            <div className="bg-navy-50 dark:bg-navy-900/50 rounded-[32px] p-8 md:p-12 text-center border border-charcoal-100 dark:border-white/10">
              <h3 className="font-display text-3xl font-bold text-navy-900 dark:text-white mb-4">Want these systems in your business?</h3>
              <p className="text-charcoal-600 dark:text-charcoal-300 mb-8 max-w-xl mx-auto">
                We implement the exact strategies discussed in this article for B2B SaaS companies ready to scale.
              </p>
              <Link href="/contact" className="btn-pill btn-primary px-10 py-4 text-lg">
                Book a Strategy Call
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </PageTransition>
  );
}
