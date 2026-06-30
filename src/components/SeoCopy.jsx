import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function SeoCopy() {
  return (
    <section className="py-24 max-container section-padding bg-transparent" aria-label="About ELNR Media Growth Systems">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-brand-500 hover:prose-a:text-brand-600 prose-a:transition-colors prose-a:no-underline hover:prose-a:underline">
        <h2 className="text-3xl sm:text-4xl text-navy-900 dark:text-white mb-6">We help B2B brands scale.</h2>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          If you want to grow your business, you need more people to know about you, and a predictable way to turn them into customers. That’s all a media system is. We don't just run ads or post content. We build the entire machine.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Content That Gets Attention</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          Attention is the new currency. We create <Link to="/services">content systems</Link> that actually get watched and read. This builds your authority, so by the time a prospect talks to your sales team, they are already sold.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Ads That Drive Revenue</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-8">
          We don't care about likes or impressions. We care about Cost Per Acquisition. We run data-driven ads on platforms like <a href="https://business.linkedin.com/marketing-solutions" target="_blank" rel="noopener noreferrer">LinkedIn</a> to put your offer directly in front of the people who can actually afford it.
        </p>
        
        <h3 className="text-2xl text-navy-900 dark:text-white mb-4 mt-8">Funnels That Convert</h3>
        <p className="text-charcoal-500 dark:text-charcoal-300 leading-relaxed mb-12">
          Traffic without a funnel is just burning money. We build simple, high-converting funnels that capture leads and follow up with them automatically. You get more qualified sales calls, predictably. If you are <Link to="/contact">ready to scale</Link>, let's talk.
        </p>
      </div>
    </section>
  )
}
