"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * SeoCopy — rich editorial content section
 * Serves dual purpose: human-readable page content + SEO word count / heading structure.
 * Visually subtle but fully readable. Uses proper H2 → H3 → H4 hierarchy.
 * Target: 600+ words, correct heading nesting, no heading skips.
 */
export default function SeoCopy() {
  return (
    <section
      className="py-24 lg:py-32 bg-white dark:bg-[#0A101C]"
      aria-label="About ELNR Media — B2B Growth Agency"
    >
      <div className="max-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* ── Primary heading (H2 here because H1 lives in Hero) ── */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white tracking-tight leading-normal pb-2 mb-6">
            The B2B Media Agency That Builds Systems, Not Campaigns
          </h2>
          <p className="text-charcoal-600 dark:text-charcoal-300 text-lg leading-relaxed mb-10">
            Most marketing agencies sell you a service. ELNR Media sells you a system. A system
            that creates attention, captures it with precision advertising, and converts it into
            qualified sales calls on autopilot. Whether you are a founder-led consultancy, a
            SaaS business, or a professional services firm, we build the entire growth
            infrastructure around your offer — so you can focus on delivering results while we
            fill your pipeline.
          </p>

          {/* ── H3: Content ── */}
          <h3 className="font-sans text-2xl font-bold text-navy-900 dark:text-white leading-normal pb-2 mb-4 mt-12">
            B2B Content Marketing That Builds Real Authority
          </h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-4">
            Attention is the new currency of business. We design{' '}
            <Link href="/services/content-creation" className="text-brand-600 dark:text-brand-400 hover:underline font-medium">
              content systems for B2B brands
            </Link>{' '}
            that compound over time. Every post, video, and newsletter is engineered to build
            authority in your niche so that by the time a decision-maker reaches out, they
            already trust you. We handle LinkedIn content strategy, short-form video scripts,
            long-form articles, and email newsletters that actually get opened.
          </p>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-8">
            Unlike agencies that focus on vanity metrics, we measure content performance by its
            downstream impact: qualified inbound leads, demo requests, and sales calls booked
            directly from organic content.
          </p>

          {/* ── H4: Sub-topic ── */}
          <h4 className="font-sans text-xl font-semibold text-navy-900 dark:text-white leading-normal pb-2 mb-3">
            What a Content System Looks Like
          </h4>
          <ul className="list-disc list-inside text-charcoal-600 dark:text-charcoal-300 leading-relaxed space-y-2 mb-10 pl-2">
            <li>Weekly LinkedIn thought-leadership posts aligned to your sales cycle</li>
            <li>Short-form video content repurposed across platforms</li>
            <li>Monthly email newsletters with 40%+ open rates</li>
            <li>SEO-optimised blog articles that drive compounding organic traffic</li>
          </ul>

          {/* ── H3: Paid Ads ── */}
          <h3 className="font-sans text-2xl font-bold text-navy-900 dark:text-white leading-normal pb-2 mb-4">
            Meta &amp; LinkedIn Paid Ads That Drive Qualified Revenue
          </h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-4">
            We run data-driven paid advertising campaigns on{' '}
            <a
              href="https://business.linkedin.com/marketing-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 hover:underline font-medium"
            >
              LinkedIn
            </a>{' '}
            and Meta (Facebook &amp; Instagram) for B2B companies that want to put their offer
            directly in front of the buyers who can afford it. Our campaigns are built around
            Cost Per Acquisition, not cost per click. Every targeting decision, creative asset,
            and bid strategy is designed to maximise return on ad spend.
          </p>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-10">
            We don't set and forget. We run weekly optimisation cycles, A/B test creatives
            constantly, and report transparent performance data every month. Our average client
            sees a 3× improvement in lead quality within the first 60 days.
          </p>

          {/* ── H3: Funnels ── */}
          <h3 className="font-sans text-2xl font-bold text-navy-900 dark:text-white leading-normal pb-2 mb-4">
            Sales Funnel Architecture That Converts Browsers Into Buyers
          </h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-4">
            Traffic without a conversion system is money set on fire. We design and build{' '}
            <Link href="/services/funnel-building" className="text-brand-600 dark:text-brand-400 hover:underline font-medium">
              high-converting sales funnels
            </Link>{' '}
            that guide prospects from first touch to qualified sales call, automatically. Every
            funnel includes a lead-capture mechanism, a nurture email sequence, and a booking
            system so qualified prospects land directly in your calendar.
          </p>

          {/* ── H4: Sub-topic ── */}
          <h4 className="font-sans text-xl font-semibold text-navy-900 dark:text-white leading-normal pb-2 mb-3 mt-6">
            CRM &amp; Lead Qualification Automation
          </h4>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-10">
            We set up and integrate CRM systems (HubSpot, GoHighLevel, or your existing tool)
            with automated lead scoring, tagging, and routing workflows. This means your sales
            team only speaks to warm, pre-qualified prospects — never cold, unqualified leads.
            The result is a shorter sales cycle, higher close rates, and a pipeline you can
            actually predict.
          </p>

          {/* ── H3: Why ELNR ── */}
          <h3 className="font-sans text-2xl font-bold text-navy-900 dark:text-white leading-normal pb-2 mb-4">
            Why B2B Brands Choose ELNR Media
          </h3>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-4">
            We work with a selective group of clients because results require real partnership.
            Our process starts with a deep audit of your current marketing position, competitive
            landscape, and revenue goals. From that foundation we build a custom strategy before
            we write a single piece of copy or launch a single ad.
          </p>
          <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed mb-8">
            We operate on transparent monthly terms with no long-term contracts. If we're not
            delivering measurable results, you are free to leave. Our 98% client retention rate
            suggests that rarely happens.
          </p>

          {/* CTA inline */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 dark:bg-white text-white dark:text-navy-900 text-sm font-bold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              Book a Free Growth Audit →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-charcoal-200 dark:border-white/20 text-navy-900 dark:text-white text-sm font-medium hover:border-brand-400 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
