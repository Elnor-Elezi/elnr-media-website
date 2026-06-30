import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrustBar from '../components/TrustBar'
import Results from '../components/Results'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import SeoCopy from '../components/SeoCopy'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="B2B Growth, Paid Ads & Funnels"
        description="Scale your B2B brand with ELNR Media. We build interconnected content, paid ads, and automated funnels to deliver qualified leads and lower your CAC."
      />
      <Hero />
      <Marquee />
      <TrustBar />
      <Results />
      <SeoCopy />
      <div className="section-connector" />
      <FinalCta />
    </PageTransition>
  )
}
