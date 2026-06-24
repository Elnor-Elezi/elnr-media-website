import { useEffect } from 'react'
import FinalCta from '../components/FinalCta'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for ELNR Media. Learn how we collect, use, and protect your data."
      />
      <div className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-container section-padding max-w-4xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.25em] uppercase bg-charcoal-50 text-charcoal-500 dark:text-charcoal-300 border border-charcoal-200 mb-6">
            Legal Information
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-charcoal-500 dark:text-charcoal-300 text-lg mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg prose-navy max-w-none">
            <p>
              At ELNR Media, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, and phone number.
            </p>

            <h3>2. How We Use Collected Information</h3>
            <p>
              ELNR Media may collect and use Users' personal information for the following purposes:
            </p>
            <ul>
              <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To send periodic emails:</strong> We may use the email address to respond to inquiries, questions, and/or other requests.</li>
            </ul>

            <h3>3. How We Protect Your Information</h3>
            <p>
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
            </p>

            <h3>4. Sharing Your Personal Information</h3>
            <p>
              We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
            </p>

            <h3>5. Third Party Websites</h3>
            <p>
              Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.
            </p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>
              ELNR Media has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>

            <h3>7. Contacting Us</h3>
            <p>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:Elnorelezi@icloud.com">Elnorelezi@icloud.com</a>
            </p>
          </div>
        </div>
      </div>
      <FinalCta />
    </PageTransition>
  )
}
