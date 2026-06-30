import { motion } from 'framer-motion'
import Pricing from '../components/Pricing'
import WhyElnr from '../components/WhyElnr'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function PricingPage() {
  return (
    <PageTransition>
      <div className="relative">
      <SEO 
        title="Pricing & Packages"
        description="Transparent pricing for our premium media systems. Choose the package that fits your growth stage."
      />
      <Pricing />
      <WhyElnr />
      <FinalCta />
    </div>
    </PageTransition>
  )
}
