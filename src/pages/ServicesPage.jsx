import { motion } from 'framer-motion'
import Services from '../components/Services'
import Process from '../components/Process'
import ImageBreak from '../components/ImageBreak'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="relative">
      <SEO 
        title="Our Services"
        description="We provide comprehensive media production, paid advertising, and funnel optimization services to scale your brand with certainty."
      />
      <Services />
      
      <ImageBreak
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=700&q=80"
        alt="Modern agency workspace showing creative professionals collaborating on media strategy"
        overlay="light"
      />

      <Process />
      
      <FinalCta />
    </div>
    </PageTransition>
  )
}
