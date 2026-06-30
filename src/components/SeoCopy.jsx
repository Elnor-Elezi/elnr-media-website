import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SeoCopy() {
  return (
    <section className="py-24 max-container section-padding bg-transparent" aria-label="About ELNR Media Growth Systems">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-500 hover:prose-a:text-brand-600 prose-a:transition-colors prose-a:no-underline hover:prose-a:underline">
        <h2 className="text-3xl sm:text-4xl text-navy-900 dark:text-white mb-6">Stop Wasting Capital on Isolated Tactics</h2>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          When your content production operates separately from your advertising strategy, your pipeline suffers. If you are a business <Link to="/contact">ready to scale</Link>, our team engineers complete marketing ecosystems that turn cold attention into qualified sales calls.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Strategic Content Production</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          Brand growth starts with undeniable authority. Our <Link to="/services">content systems</Link> are designed to capture attention and educate your market with high-retention assets.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">High-Converting Paid Ads</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          We construct data-driven advertising campaigns across top-tier networks like <a href="https://business.linkedin.com/marketing-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a>. By leveraging intent-based segmentation, our paid ads capture high-value buyers.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Frictionless Funnels</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          We build frictionless, automated funnels that nurture prospects 24/7. From landing pages to robust lead generation workflows, we generate consistent ROI.
        </p>
      </div>
    </section>
  )
}
