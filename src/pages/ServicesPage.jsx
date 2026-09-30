import { motion } from 'framer-motion'
import Services from '../components/Services'
import Process from '../components/Process'
import CaseStudyShowcase from '../components/CaseStudyShowcase'
import RoiCalculator from '../components/RoiCalculator'
import ImageBreak from '../components/ImageBreak'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="relative">
        <SEO 
          title="B2B Media Systems & Growth Services"
          description="High-retention content creation, Meta & LinkedIn paid advertising, and automated lead scoring funnels engineered for B2B scale."
          serviceName="B2B Growth Engine"
        />
        <Services />
        
        <CaseStudyShowcase />

        <ImageBreak
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=700&q=80"
          alt="Modern agency workspace showing creative professionals collaborating on media strategy"
          overlay="light"
        />

        <Process />
        
        <RoiCalculator />
        
        <FinalCta />
      </div>
    </PageTransition>
  )
}
