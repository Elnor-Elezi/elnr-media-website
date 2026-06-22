import { useEffect } from 'react'
import FinalCta from '../components/FinalCta'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white">
        <div className="max-container section-padding max-w-4xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-charcoal-50 text-charcoal-500 border border-charcoal-200 mb-6">
            Legal Information
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-charcoal-500 text-lg mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg prose-navy max-w-none">
            <p>
              Welcome to ELNR Media. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h3>1. Agreement to Terms</h3>
            <p>
              By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use ELNR Media's website if you do not accept all of the terms and conditions stated on this page.
            </p>

            <h3>2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise stated, ELNR Media and/or its licensors own the intellectual property rights for all material on ELNR Media. All intellectual property rights are reserved. You may view and/or print pages from https://elnrmedia.com for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from ELNR Media</li>
              <li>Sell, rent or sub-license material from ELNR Media</li>
              <li>Reproduce, duplicate or copy material from ELNR Media</li>
              <li>Redistribute content from ELNR Media (unless content is specifically made for redistribution)</li>
            </ul>

            <h3>3. Services and Guarantees</h3>
            <p>
              While ELNR Media implements strategies designed to generate leads and grow your brand, marketing is inherently subject to market forces. We do not guarantee specific financial results, return on investment (ROI), or exact lead volume. Past performance showcased on this website does not guarantee future results.
            </p>

            <h3>4. Client Responsibilities</h3>
            <p>
              Clients must provide necessary access, materials, and approvals in a timely manner. Delays in client feedback or provision of assets may delay the delivery of services. ELNR Media is not liable for delays caused by the client.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
              In no event shall ELNR Media, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract, tort or otherwise.
            </p>

            <h3>6. Governing Law</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State in which ELNR Media operates, and you submit to the non-exclusive jurisdiction of the state and federal courts located therein for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
      <FinalCta />
    </>
  )
}
