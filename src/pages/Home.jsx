import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrustBar from '../components/TrustBar'
import Results from '../components/Results'
import FinalCta from '../components/FinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <Results />
      <div className="section-connector" />
      <FinalCta />
    </>
  )
}
