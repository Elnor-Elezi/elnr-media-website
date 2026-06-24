import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { fadeInUp, stagger } from '../hooks'
import { blogPosts } from '../data/blog'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <Helmet>
        <title>Blog | ELNR Media</title>
        <meta name="description" content="Insights, strategies, and case studies on digital marketing, web development, and brand scaling." />
      </Helmet>

      <section className="relative max-container section-padding mb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
            Our <span className="text-brand-500">Insights</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed">
            Actionable strategies, case studies, and thoughts on scaling modern businesses.
          </motion.p>
        </motion.div>
      </section>

      <section className="max-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-500">
                  {post.category}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-charcoal-500 dark:text-charcoal-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-charcoal-600 dark:text-charcoal-300 text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-white group-hover:text-brand-500 transition-colors mt-auto"
                >
                  Read Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
