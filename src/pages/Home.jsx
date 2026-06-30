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
        title="Premium Media Systems for Brand Growth"
        description="ELNR Media builds premium media systems that drive brand growth and lead generation. Scale your business with our content, advertising, and funnel strategies."
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
