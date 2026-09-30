"use client";
import { useState, useId } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight, TrendingUp, DollarSign, Target, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Magnetic from './Magnetic'

export default function RoiCalculator() {
  const [adSpend, setAdSpend] = useState(5000)
  const [dealValue, setDealValue] = useState(10000)
  const [currentLeads, setCurrentLeads] = useState(25)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [email, setEmail] = useState('')

  const handleUnlock = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setIsUnlocked(true)
    }
  }

  const adSpendId = useId()
  const dealValueId = useId()
  const currentLeadsId = useId()

  // Business Logic:
  // With ELNR Media's system, we estimate a 2.5x to 3.8x lead improvement and ~25% higher conversion close rate
  const projectedLeads = Math.round(currentLeads * 2.8)
  const leadIncrease = projectedLeads - currentLeads
  
  // Assuming a conservative 8% deal close rate on qualified leads
  const estimatedDeals = Math.max(1, Math.round(projectedLeads * 0.08))
  const monthlyRevenueLift = estimatedDeals * dealValue
  const annualRevenueLift = monthlyRevenueLift * 12

  const roiMultiplier = ((monthlyRevenueLift / (adSpend + 1500)) * 100).toFixed(0)

  return (
    <section className="relative py-24 lg:py-36 bg-navy-900 dark:bg-[#070C16] text-white overflow-hidden" aria-label="B2B Revenue Calculator">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-container section-padding">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase bg-white/10 text-brand-300 border border-white/15 backdrop-blur-md mb-4">
            <Calculator size={14} className="text-brand-400" />
            Interactive ROI Estimator
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 pb-2">
            Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500">Revenue Potential</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            See how deploying an end-to-end media and lead generation engine transforms your ad spend into predictable pipeline growth.
          </p>
        </motion.div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Controls Panel (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[36px] shadow-2xl space-y-8"
          >
            {/* Slider 1: Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor={adSpendId} className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  <DollarSign size={16} className="text-brand-400" />
                  Monthly Ad Spend
                </label>
                <span className="font-display text-2xl font-bold text-brand-300 pb-1">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                id={adSpendId}
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-1 font-medium">
                <span>$1,000</span>
                <span>$25,000</span>
                <span>$50,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Deal Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor={dealValueId} className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  <Target size={16} className="text-brand-400" />
                  Average Deal Value (LTV)
                </label>
                <span className="font-display text-2xl font-bold text-brand-300 pb-1">
                  ${dealValue.toLocaleString()}
                </span>
              </div>
              <input
                id={dealValueId}
                type="range"
                min="2000"
                max="100000"
                step="2000"
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-1 font-medium">
                <span>$2,000</span>
                <span>$50,000</span>
                <span>$100,000+</span>
              </div>
            </div>

            {/* Slider 3: Current Monthly Leads */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label htmlFor={currentLeadsId} className="text-sm font-semibold text-white/90 flex items-center gap-2">
                  <TrendingUp size={16} className="text-brand-400" />
                  Current Monthly Leads
                </label>
                <span className="font-display text-2xl font-bold text-brand-300 pb-1">
                  {currentLeads} leads
                </span>
              </div>
              <input
                id={currentLeadsId}
                type="range"
                min="5"
                max="200"
                step="5"
                value={currentLeads}
                onChange={(e) => setCurrentLeads(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-400 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-white/40 mt-1 font-medium">
                <span>5 leads</span>
                <span>100 leads</span>
                <span>200+ leads</span>
              </div>
            </div>
          </motion.div>

          {/* Results Summary Box (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-b from-navy-800 to-navy-950 border border-brand-500/30 p-8 sm:p-10 rounded-[36px] shadow-2xl relative flex flex-col justify-between overflow-hidden"
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-400/20 rounded-full blur-2xl pointer-events-none" />

            {/* Blurred wrapper when locked */}
            <div className={`transition-all duration-500 ${!isUnlocked ? 'blur-[8px] opacity-40 select-none' : ''}`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">Projected Outcomes</span>
                <span className="flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/20">
                  <Sparkles size={12} /> {roiMultiplier}% Est. Return
                </span>
              </div>

              {/* Monthly Revenue Lift */}
              <div className="mb-6">
                <div className="text-xs text-white/60 uppercase tracking-wider mb-1 font-medium">Est. Monthly Revenue Lift</div>
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-400 tracking-tight pb-2">
                  +${monthlyRevenueLift.toLocaleString()}
                </div>
              </div>

              {/* Stats Breakdown */}
              <div className="grid grid-cols-2 gap-4 py-6 my-6 border-y border-white/10">
                <div>
                  <div className="text-xs text-white/50 mb-1">Projected Leads/Mo</div>
                  <div className="font-display text-2xl font-bold text-white flex items-center gap-2 pb-1">
                    {projectedLeads} 
                    <span className="text-xs text-brand-400 font-semibold">(+{leadIncrease})</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">Annual Pipeline Lift</div>
                  <div className="font-display text-2xl font-bold text-white pb-1">
                    +${(annualRevenueLift / 1000).toFixed(0)}k
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/50 leading-relaxed mb-8">
                *Estimates based on benchmark historical data across B2B growth campaigns. Actual metrics depend on market maturity and offer positioning.
              </p>
            </div>

            {/* Overlay Lock Screen */}
            {!isUnlocked && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-navy-950/60 rounded-[36px] text-center">
                <h3 className="font-display text-2xl font-bold text-white mb-2 pb-1">Unlock Your ROI Breakdown</h3>
                <p className="text-white/70 text-sm mb-6 max-w-[260px]">Enter your email to see your custom revenue projections and execution plan.</p>
                <form onSubmit={handleUnlock} className="w-full flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors backdrop-blur-md"
                  />
                  <button type="submit" className="w-full btn-pill btn-primary py-3.5 font-bold flex items-center justify-center gap-2">
                    Reveal My ROI
                    <ArrowRight size={16} />
                  </button>
                </form>
                <p className="text-[9px] text-white/40 mt-4 uppercase tracking-[0.15em] font-medium">We never share your email</p>
              </div>
            )}

            {/* CTA (Hidden when locked) */}
            <div className={`transition-opacity duration-500 ${!isUnlocked ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}>
              <Magnetic>
                <Link
                  href="/contact"
                  className="group btn-pill btn-primary w-full py-4 text-center flex items-center justify-center gap-2 shadow-glow text-base font-bold"
                >
                  Claim Growth Plan
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
