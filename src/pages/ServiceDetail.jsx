import { useEffect, useMemo } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Smartphone, Code, Mail, GitBranch, Database, Film, 
  CheckCircle2, ArrowRight, Zap, Target, TrendingUp, Users
} from 'lucide-react'
import { fadeInUp, stagger } from '../hooks'

// Rich, non-generic data for each service
const servicesData = {
  'social-media-management': {
    title: 'Social Media Management',
    tagline: 'We don\'t just post; we build authority.',
    icon: Smartphone,
    heroDesc: 'Your social profiles are often the first impression a prospect has of your business. We turn your social media into a 24/7 sales asset with brand-aligned design, strategic storytelling, and community engagement.',
    benefits: [
      { title: 'Brand Consistency', desc: 'Maintain a premium, cohesive look and feel across all platforms.', icon: Target },
      { title: 'Audience Growth', desc: 'Strategies designed to attract followers who actually want to buy from you.', icon: TrendingUp },
      { title: 'Active Engagement', desc: 'We interact with your audience to build trust and keep you top-of-mind.', icon: Users },
    ],
    deliverables: [
      'Platform-specific content strategies (Instagram, LinkedIn, X, TikTok)',
      'Custom graphic design and carousel creation',
      'Copywriting that drives engagement and clicks',
      'Monthly analytics and growth reporting',
      'Community management and proactive outreach'
    ],
    ctaText: 'Dominate Your Socials'
  },
  'web-development': {
    title: 'Web Development',
    tagline: 'High-converting, lightning-fast digital storefronts.',
    icon: Code,
    heroDesc: 'A slow or confusing website leaks money every second. We build custom, React-based web applications and landing pages optimized for speed, technical SEO, and—most importantly—conversions.',
    benefits: [
      { title: 'Lightning Fast', desc: 'Built with modern tech stacks so your site loads instantly, improving both SEO and user experience.', icon: Zap },
      { title: 'Conversion-Focused', desc: 'Every button, layout, and word is placed with the goal of turning visitors into leads.', icon: Target },
      { title: 'Mobile First', desc: 'Flawless performance across all devices, ensuring you never lose a mobile prospect.', icon: Smartphone },
    ],
    deliverables: [
      'Custom UI/UX Design tailored to your brand identity',
      'Full-stack development (React, Next.js, Node.js)',
      'Technical SEO and schema markup optimization',
      'Integration with your CRM and marketing tools',
      'Post-launch maintenance and continuous optimization'
    ],
    templates: [
      { name: 'High-Converting Landing Pages', desc: 'Single-page sites engineered for paid ad traffic and lead generation.' },
      { name: 'Corporate & Agency Websites', desc: 'Multi-page authority builders for B2B businesses and agencies.' },
      { name: 'E-Commerce Storefronts', desc: 'Seamless shopping experiences built on modern frameworks (Shopify Headless, Next.js).' },
      { name: 'SaaS Marketing Sites', desc: 'Dynamic, feature-rich sites designed to sell software subscriptions.' },
    ],
    caseStudies: [
      { title: 'Tech Startup Scale-Up', metric: '+215%', desc: 'Increase in organic lead volume after launching their new conversion-optimized corporate site.' },
      { title: 'Local Service Business', metric: '4X', desc: 'Growth in booked appointments within the first 60 days of deploying our custom landing page.' },
    ],
    packages: [
      {
        name: 'Launch (Basic)',
        price: '$499',
        desc: 'Perfect for startups needing a landing page. Includes a $100/year maintenance plan.',
        features: ['1 Custom Landing Page', 'Mobile Responsive Design', 'Basic SEO Setup', 'Contact Form Integration', '1 Round of Revisions'],
        isPopular: false
      },
      {
        name: 'Authority (Advanced)',
        price: '$1,399',
        desc: 'The sweet spot for established businesses. Includes a $300/year maintenance plan.',
        features: ['Up to 5 Pages', 'Custom UI/UX Design', 'Advanced Technical SEO', 'CRM & Analytics Setup', 'Blog/CMS Integration', 'Priority Support'],
        isPopular: true
      },
      {
        name: 'Scale (Premium)',
        price: '$3,499+',
        desc: 'For enterprise scale or custom web apps. Includes a $700/year maintenance plan.',
        features: ['Unlimited Pages / Web App', 'Complex API Integrations', 'E-Commerce / Headless', 'Advanced Animations', 'Dedicated Project Manager', 'Post-Launch Retainer'],
        isPopular: false
      }
    ],
    ctaText: 'Build Your Website'
  },
  'email-marketing': {
    title: 'Email Marketing',
    tagline: 'Your list is your most valuable asset.',
    icon: Mail,
    heroDesc: 'Stop relying solely on algorithms. We craft automated nurture sequences and engaging weekly newsletters that turn cold leads into warm prospects, and warm prospects into raving clients.',
    benefits: [
      { title: 'Automated Nurture', desc: 'Set up systems that sell your services on autopilot while you sleep.', icon: Zap },
      { title: 'High Deliverability', desc: 'We ensure your emails actually land in the primary inbox, not the spam folder.', icon: CheckCircle2 },
      { title: 'Compelling Copy', desc: 'Subject lines that get opened and copy that gets clicked.', icon: Target },
    ],
    deliverables: [
      'Welcome sequence strategy and implementation',
      'Weekly or bi-weekly newsletter copywriting',
      'List segmentation and tagging for personalized offers',
      'A/B testing for subject lines and CTA buttons',
      'Campaign performance analytics and cleanup'
    ],
    ctaText: 'Scale Your Email Revenue'
  },
  'funnel-building': {
    title: 'Funnel Building',
    tagline: 'End-to-end conversion systems.',
    icon: GitBranch,
    heroDesc: 'From the initial click on an ad to the final booked call or sale, we architect the entire user journey. We remove friction and maximize your Return on Ad Spend (ROAS) through proven psychology.',
    benefits: [
      { title: 'Higher Conversion Rates', desc: 'We identify and fix the leaks where you are currently losing prospects.', icon: TrendingUp },
      { title: 'Seamless Journey', desc: 'A logical, persuasive path that guides the user exactly where you want them to go.', icon: GitBranch },
      { title: 'Data-Driven Tweaks', desc: 'We constantly monitor analytics to improve the funnel post-launch.', icon: Target },
    ],
    deliverables: [
      'Funnel architecture mapping and wireframing',
      'Landing page design and development',
      'Lead magnet creation (PDFs, mini-courses, webinars)',
      'Upsell, downsell, and order bump integration',
      'End-to-end tracking (Pixel, Conversions API, Analytics)'
    ],
    ctaText: 'Build Your Funnel'
  },
  'crm': {
    title: 'CRM Implementation',
    tagline: 'Stop losing leads in the chaos.',
    icon: Database,
    heroDesc: 'A business without an organized database cannot scale. We implement, migrate, and organize your CRM so every prospect is tracked, nurtured, and closed systematically.',
    benefits: [
      { title: 'Total Visibility', desc: 'Know exactly where every lead is in your sales pipeline at a glance.', icon: Target },
      { title: 'Automated Follow-ups', desc: 'Trigger tasks and emails automatically based on lead behavior.', icon: Zap },
      { title: 'Sales Alignment', desc: 'Give your sales team the exact context they need before they jump on a call.', icon: Users },
    ],
    deliverables: [
      'CRM setup and configuration (HubSpot, GoHighLevel, Salesforce, etc.)',
      'Data migration and clean-up from old systems',
      'Custom pipeline and deal stage creation',
      'Zapier/Make automation integrations',
      'Team training and standard operating procedures (SOPs)'
    ],
    ctaText: 'Organize Your Leads'
  },
  'content-creation': {
    title: 'Content Creation',
    tagline: 'Scroll-stopping visuals and copy.',
    icon: Film,
    heroDesc: 'Average content gets ignored. We produce top-tier short-form video, long-form YouTube content, and written copy designed specifically to capture attention and build absolute trust in your market.',
    benefits: [
      { title: 'High Retention', desc: 'Videos edited with pacing and hooks that keep viewers watching until the end.', icon: TrendingUp },
      { title: 'Omnipresence', desc: 'We repurpose one piece of content across multiple platforms to maximize reach.', icon: Users },
      { title: 'Brand Authority', desc: 'High-production value that positions you as the premium choice in your industry.', icon: Target },
    ],
    deliverables: [
      'Short-form video editing (Reels, TikToks, Shorts)',
      'YouTube long-form editing and thumbnail design',
      'Professional copywriting for blogs and articles',
      'Content ideation and scripting frameworks',
      'B-roll and stock footage curation'
    ],
    ctaText: 'Elevate Your Content'
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  
  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = useMemo(() => servicesData[slug], [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <Helmet>
        <title>{service.title} | ELNR Media</title>
        <meta name="description" content={service.heroDesc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative max-container section-padding mb-24">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="w-20 h-20 mx-auto rounded-full bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 shadow-xl flex items-center justify-center mb-8">
            <Icon size={32} className="text-brand-500" />
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 dark:text-white tracking-tight mb-6">
            {service.title}
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-2xl sm:text-3xl font-display font-semibold text-brand-500 mb-8">
            {service.tagline}
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-charcoal-600 dark:text-charcoal-300 leading-relaxed max-w-3xl mx-auto">
            {service.heroDesc}
          </motion.p>
        </motion.div>
      </section>

      {/* Why It Works / Benefits */}
      <section className="relative max-container section-padding mb-24">
        <div className="bg-white/50 dark:bg-navy-900/50 backdrop-blur-xl border border-charcoal-100 dark:border-white/10 rounded-[40px] p-8 lg:p-16 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">Why Our Approach Works</h2>
            <p className="text-charcoal-500 dark:text-charcoal-300 text-lg max-w-2xl mx-auto">We don't do cookie-cutter solutions. Everything is engineered for growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center mb-6 text-brand-500">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-charcoal-600 dark:text-charcoal-300 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="relative max-container section-padding mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white mb-6">What You Get</h2>
            <p className="text-lg text-charcoal-600 dark:text-charcoal-300 mb-10 leading-relaxed">
              When you partner with ELNR Media for {service.title}, we handle the heavy lifting. Here is exactly what is included in our execution process:
            </p>
            
            <ul className="space-y-6">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={18} className="text-brand-500" />
                  </div>
                  <span className="text-lg text-navy-800 dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-400 to-brand-600 rounded-[40px] rotate-3 opacity-20 dark:opacity-40 blur-xl" />
            <div className="relative bg-navy-900 dark:bg-black border border-white/10 rounded-[40px] p-10 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-display text-3xl font-bold text-white mb-6">Ready to scale?</h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Book a free strategy call today to discuss how we can implement {service.title.toLowerCase()} into your business for maximum ROI.
              </p>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto btn-pill bg-brand-500 text-white hover:bg-brand-600 shadow-xl shadow-brand-500/20 py-4 px-10 text-lg font-bold flex items-center justify-center gap-3 group"
              >
                {service.ctaText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites (Templates) */}
      {service.templates && (
        <section className="relative max-container section-padding mb-24">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">Types of Sites We Build</h2>
            <p className="text-charcoal-500 dark:text-charcoal-300 text-lg max-w-2xl mx-auto">From high-converting landing pages to complex corporate infrastructures.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.templates.map((template, idx) => (
              <div key={idx} className="bg-white dark:bg-navy-900 border border-charcoal-100 dark:border-white/10 rounded-3xl p-8 shadow-soft">
                <h3 className="text-xl font-bold text-brand-500 mb-3">{template.name}</h3>
                <p className="text-charcoal-600 dark:text-charcoal-300">{template.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pricing Packages */}
      {service.packages && (
        <section className="relative max-container section-padding mb-32">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white mb-4">Development Packages</h2>
            <p className="text-charcoal-500 dark:text-charcoal-300 text-lg max-w-2xl mx-auto">Transparent pricing tailored to your business scale.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {service.packages.map((pkg, idx) => (
              <div key={idx} className={`relative flex flex-col p-8 rounded-[40px] ${pkg.isPopular ? 'bg-navy-900 dark:bg-black text-white shadow-2xl border-2 border-brand-500 transform lg:-translate-y-4' : 'bg-white/50 dark:bg-navy-900/50 backdrop-blur-xl border border-charcoal-100 dark:border-white/10 text-navy-900 dark:text-white'}`}>
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-brand-500 mb-4">{pkg.price}</div>
                <p className={`text-sm mb-8 ${pkg.isPopular ? 'text-gray-300' : 'text-charcoal-500 dark:text-charcoal-400'}`}>{pkg.desc}</p>
                <div className="flex-1 space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-brand-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm font-medium ${pkg.isPopular ? 'text-gray-200' : 'text-navy-800 dark:text-gray-300'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className={`w-full text-center py-3 rounded-full font-bold transition-colors ${pkg.isPopular ? 'bg-brand-500 text-white hover:bg-brand-600' : 'bg-charcoal-100 dark:bg-white/10 hover:bg-brand-500 hover:text-white'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Studies */}
      {service.caseStudies && (
        <section className="relative max-container section-padding mb-32">
          <div className="bg-brand-500 rounded-[40px] p-8 lg:p-16 text-white text-center shadow-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">Recent Results</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.caseStudies.map((study, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-left">
                  <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">{study.metric}</div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-white/80">{study.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
