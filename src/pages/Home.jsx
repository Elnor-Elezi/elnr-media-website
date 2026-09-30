import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import TrustBar from '../components/TrustBar'
import WhyElnr from '../components/WhyElnr'
import Process from '../components/Process'
import Results from '../components/Results'
import CaseStudyShowcase from '../components/CaseStudyShowcase'
import RoiCalculator from '../components/RoiCalculator'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import SeoCopy from '../components/SeoCopy'
import PageTransition from '../components/PageTransition'

const homeFaqs = [
  {
    question: "What is a B2B Media System?",
    answer: "A B2B Media System is an integrated marketing architecture that combines high-retention organic content, ROI-driven paid advertising (Meta, LinkedIn, Google), and automated sales funnels to turn buyer attention into qualified revenue."
  },
  {
    question: "How quickly can we see results with ELNR Media?",
    answer: "Initial ad campaign setups and content strategy rollouts launch within 7-14 days. Measurable lead flow and performance benchmarks typically normalize within the first 30 days."
  },
  {
    question: "Are there long-term contracts?",
    answer: "No. We believe in performance-driven partnerships. Our packages operate on transparent monthly terms with zero long-term lock-in."
  },
  {
    question: "What services does ELNR Media offer?",
    answer: "ELNR Media offers a complete suite of B2B growth services: social media management, Meta and LinkedIn paid advertising, sales funnel architecture, CRM setup and automation, content creation, and email marketing systems."
  },
  {
    question: "Do you work with companies outside Albania?",
    answer: "Yes. We work with B2B brands across Europe and internationally. Our systems and processes are built to scale regardless of geography."
  },
  {
    question: "How is ELNR Media different from a traditional marketing agency?",
    answer: "Traditional agencies focus on individual campaigns. ELNR Media builds interconnected, automated systems — so content, ads, funnels, and CRM all work together to compound results over time."
  }
];

export default function Home() {
  return (
    <PageTransition>
      <SEO 
        title="Proven Media Systems for B2B Brand Growth"
        description="ELNR Media builds end-to-end B2B media systems that capture attention, deploy high-ROI ad architectures, and build automated funnels that generate qualified sales calls."
        faqs={homeFaqs}
      />
      <Hero />
      <Marquee />
      <TrustBar />
      <div className="section-connector" />
      <WhyElnr />
      <Marquee text="AUDIT • STRATEGY • BUILD • SCALE • " direction="right" />
      <Process />
      <div className="section-connector" />
      <Results />
      <CaseStudyShowcase />
      <RoiCalculator />
      <SeoCopy />
      <div className="section-connector" />
      <FinalCta />
    </PageTransition>
  )
}
