import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import PageLoader from './components/PageLoader'
import { useScrollProgress } from './hooks'

const Home = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function App() {
  const location = useLocation();
  const scaleX = useScrollProgress()

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 z-[9999] shadow-[0_0_8px_rgba(20,184,166,0.6)]"
      />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Main Website Routes (with Navbar/Footer) */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />
          </Route>

          {/* App Routes (No Navbar/Footer) */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  )
}

export default App
