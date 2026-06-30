import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SeoCopy() {
  return (
    <section className="py-24 max-container section-padding bg-transparent" aria-label="About ELNR Media Growth Systems">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-500 hover:prose-a:text-brand-600 prose-a:transition-colors prose-a:no-underline hover:prose-a:underline">
        <h2 className="text-3xl sm:text-4xl text-navy-900 dark:text-white mb-6">Stop Wasting Capital on Isolated Marketing Tactics</h2>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-6">
          Most businesses burn through their marketing budget by treating content, advertising, and web development as separate silos. At ELNR Media, we know that isolated tactics lead to skyrocketing Customer Acquisition Costs (CAC) and unpredictable pipelines.
        </p>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          We are a premier B2B growth agency that builds interconnected media systems designed to scale your brand with absolute predictability. Whether you are looking for high-intent B2B lead generation, targeted paid ads, or seamless <Link to="/services">web development</Link>, our systems work together to turn attention into closed deals.
        </p>
        
        <h2 className="text-3xl sm:text-4xl text-navy-900 dark:text-white mb-6 mt-12">The Core Pillars of Your New Growth Engine</h2>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Engineered Content Creation</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          We don't just post for the sake of posting. Our team produces high-retention video and written content strategically designed to increase your organic visibility on platforms like LinkedIn. We help you establish measurable authority in your niche, driving inbound leads directly to your sales team. <Link to="/services">Learn more about our content systems.</Link>
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">ROI-Obsessed Paid Advertising</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          Stop renting low-quality clicks. We construct data-driven ad architectures across <a href="https://www.facebook.com/business" target="_blank" rel="noopener noreferrer">Meta</a> and <a href="https://business.linkedin.com/marketing-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a>. By focusing on aggressive retargeting and intent-based audience segmentation, we capture high-value buyers and dramatically lower your acquisition costs.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Automated Sales Funnels</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          Traffic is meaningless without a conversion mechanism. We build frictionless, automated sales funnels that systematically nurture cold prospects. From custom <Link to="/services">web development</Link> to CRM implementation, we ensure no lead falls through the cracks, generating qualified sales calls while you sleep.
        </p>

        <h2 className="text-3xl sm:text-4xl text-navy-900 dark:text-white mb-6 mt-12">Ready to Dominate Your Market?</h2>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed">
          Partner with ELNR Media and let us act as the dedicated growth arm of your business. <Link to="/pricing">Explore our pricing packages</Link> to find the perfect fit for your current scale phase, or <Link to="/contact">book a strategy call</Link> to map out your custom lead generation system today.
        </p>
      </div>
    </section>
  )
}
