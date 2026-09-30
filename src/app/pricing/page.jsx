"use client";
import { motion } from 'framer-motion'
import Pricing from '../../components/Pricing'
import WhyElnr from '../../components/WhyElnr'
import RoiCalculator from '../../components/RoiCalculator'
import FinalCta from '../../components/FinalCta'
import SEO from '../../components/SEO'
import PageTransition from '../../components/PageTransition'

export default function PricingPage() {
  return (
    <PageTransition>
      <div className="relative">
        <SEO 
          title="Transparent Pricing & Growth Packages"
          description="Transparent, ROI-driven pricing packages for ELNR Media systems. Predictable monthly investments with zero long-term lock-in."
        />
        <Pricing />
        <RoiCalculator />
        <WhyElnr />
        <FinalCta />
      </div>
    </PageTransition>
  )
}
