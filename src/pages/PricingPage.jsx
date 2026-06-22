import { motion } from 'framer-motion'
import Pricing from '../components/Pricing'
import WhyElnr from '../components/WhyElnr'
import FinalCta from '../components/FinalCta'

export default function PricingPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <Pricing />
      <div className="section-connector" />
      <WhyElnr />
      <FinalCta />
    </div>
  )
}
