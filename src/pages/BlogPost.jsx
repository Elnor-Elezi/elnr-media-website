import { useEffect, useMemo } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '../data/blog'

export default function BlogPost() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const post = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <Helmet>
        <title>{post.title} | ELNR Media Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-500 hover:text-brand-500 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>

        <div className="mb-8">
          <div className="inline-block bg-brand-500/10 text-brand-500 px-3 py-1 rounded-full text-xs font-bold mb-6">
            {post.category}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal-500 dark:text-charcoal-400">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden mb-12">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-lg dark:prose-invert prose-brand max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-500"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
