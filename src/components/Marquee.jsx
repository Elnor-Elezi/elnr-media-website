import { motion } from 'framer-motion'

const items = [
  'Content Systems', '/', 'Paid Advertising', '/', 'Funnel Strategy', '/',
  'Lead Generation', '/', 'SEO Articles', '/', 'Case Studies', '/',
  'Sales Support', '/', 'Brand Strategy', '/', 'Social Media', '/',
  'Retargeting', '/', 'Email Automation', '/', 'Analytics', '/',
]

export default function Marquee() {
  return (
    <div className="relative py-5 bg-charcoal-50/80 border-y border-charcoal-200/40 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-medium ${
              item === '/'
                ? 'text-brand-400'
                : 'text-charcoal-500 hover:text-brand-600 transition-colors duration-300 cursor-default'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
