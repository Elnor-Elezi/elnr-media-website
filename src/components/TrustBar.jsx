import { motion } from 'framer-motion'
import { Layers, BarChart3, GitBranch, UserCheck } from 'lucide-react'
import { useSectionInView, useTilt, fadeInUp, stagger, IMAGES } from '../hooks'

const items = [
  { icon: Layers, label: 'Content Systems', desc: 'Strategic content at scale that builds authority and drives engagement across every platform.', img: IMAGES.content },
  { icon: BarChart3, label: 'Paid Ad Management', desc: 'ROI-optimized campaigns tracked in real time, turning ad spend into measurable business growth.', img: IMAGES.analytics },
  { icon: GitBranch, label: 'Funnel Strategy', desc: 'End-to-end conversion paths that guide prospects from first touch to qualified lead, automatically.', img: IMAGES.funnel },
  { icon: UserCheck, label: 'Lead Qualification', desc: 'Automated lead scoring and routing workflows that separate tire-kickers from ready buyers.', img: IMAGES.team },
]

/* Grid position classes for each card in the bento layout */
const gridPositions = [
  'col-span-2 row-span-2',     // Big left card
  'col-span-2',                 // Wide top right
  'col-span-1',                 // Bottom middle
  'col-span-1',                 // Bottom right
]

function TiltCard({ item, index }) {
  const { ref, springRotateX, springRotateY, handleMove, handleLeave } = useTilt(6)
  const isBig = index === 0

  return (
    <motion.div
      variants={fadeInUp}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 1000 }}
      className={`group relative rounded-2xl overflow-hidden cursor-default ${gridPositions[index]} ${
        isBig ? 'min-h-[400px]' : 'min-h-[220px]'
      }`}
    >
      {/* Background image */}
      <img
        src={item.img}
        alt={`${item.label}: ${item.desc}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy-900/60 dark:bg-[#0A101C]/80 group-hover:bg-navy-900/45 dark:group-hover:bg-[#0A101C]/60 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 dark:from-[#0A101C] via-navy-900/20 dark:via-[#0A101C]/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-7">
        <div className={`${isBig ? 'w-12 h-12' : 'w-10 h-10'} rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 group-hover:border-brand-400/30 transition-all duration-500`}>
          <item.icon size={isBig ? 22 : 18} className="text-brand-300" />
        </div>
        <h3 className={`font-display font-bold text-white mb-1.5 ${isBig ? 'text-xl' : 'text-base'}`}>{item.label}</h3>
        <p className={`text-white/70 leading-relaxed ${isBig ? 'text-sm max-w-md' : 'text-xs'}`}>{item.desc}</p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  )
}

export default function TrustBar() {
  const { ref, isInView } = useSectionInView()

  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-[#0A101C]" aria-label="Core capabilities">
      <div className="max-container section-padding">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600 dark:text-brand-400">Core Capabilities</span>
        </motion.div>

        {/* Bento grid: 4 columns, items fill all cells */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {items.map((item, i) => (
            <TiltCard key={item.label} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
