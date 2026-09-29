import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title, 
  description, 
  name = "ELNR Media", 
  type = "website", 
  image = "https://elnrmedia.com/og-image.jpg",
  faqs = [],
  serviceName = null,
  breadcrumbs = []
}) {
  const siteTitle = title ? `${title} | ${name}` : `${name} | Proven Media Systems for B2B Brand Growth`;
  const siteDescription = description || "We build proven media systems to help B2B brands scale. We get you more attention, run ads that capture it, and build funnels that turn attention into predictable revenue.";
  const location = useLocation();
  const canonicalUrl = `https://elnrmedia.com${location.pathname}`;

  // Organization & Local Business Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://elnrmedia.com/#organization",
    "name": name,
    "url": "https://elnrmedia.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://elnrmedia.com/logo.webp",
      "width": "512",
      "height": "512"
    },
    "image": image,
    "description": siteDescription,
    "email": "Elnorelezi@icloud.com",
    "telephone": "+355-67-671-8858",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tirana",
      "addressCountry": "AL"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://elnrmedia.com",
      "https://www.linkedin.com/company/elnrmedia",
      "https://twitter.com/elnrmedia"
    ],
    "knowsAbout": [
      "B2B Lead Generation",
      "Paid Ad Campaign Management",
      "Sales Funnel Optimization",
      "B2B Content Strategy",
      "Meta Ads",
      "LinkedIn Ads",
      "Web Development"
    ],
    "founder": {
      "@type": "Person",
      "name": "Elnor Elezi",
      "jobTitle": "Founder & Managing Director"
    }
  };

  // Service Schema (when serviceName is provided)
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@id": "https://elnrmedia.com/#organization"
    },
    "areaServed": "Global",
    "description": siteDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD"
    }
  } : null;

  // FAQ Schema (when faqs array is provided)
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Breadcrumbs Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": `https://elnrmedia.com${crumb.path}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@elnrmedia" />

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

