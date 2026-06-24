import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrustBar from '../components/TrustBar'
import Results from '../components/Results'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Media Systems for Brand Growth & Lead Generation"
        description="ELNR Media builds complete content, advertising, and funnel systems for businesses ready to scale. Strategic media production, paid ads, and lead generation that compounds results."
      />
      <Hero />
      <Marquee />
      <TrustBar />
      <Results />
      <div className="section-connector" />
      <FinalCta />
    </>
  )
}
