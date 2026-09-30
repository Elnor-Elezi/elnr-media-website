import Head from 'next/head';
import { usePathname } from 'next/navigation';

const SITE_URL = 'https://elnrmedia.com';
const SITE_NAME = 'ELNR Media';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// Enforces max 130 chars for meta descriptions (Google truncates at ~155, optimal is 100-130)
function trimDescription(desc, max = 128) {
  if (!desc || desc.length <= max) return desc;
  return desc.slice(0, desc.lastIndexOf(' ', max)) + '…';
}

export default function SEO({ 
  title, 
  description, 
  type = 'website', 
  image = DEFAULT_IMAGE,
  faqs = [],
  serviceName = null,
  breadcrumbs = []
}) {
  const pathname = usePathname() || '';
  const canonicalUrl = `${SITE_URL}${pathname.replace(/\/$/, '') || '/'}`;

  const siteTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Proven Media Systems for B2B Growth`;

  const rawDescription = description
    || 'ELNR Media builds B2B media systems — content, paid ads, funnels & CRM — that turn attention into predictable revenue. Book a free growth audit.';

  const siteDescription = trimDescription(rawDescription);

  // ── Structured Data ──────────────────────────────────────────────

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.webp`,
      width: '512',
      height: '512',
    },
    image: DEFAULT_IMAGE,
    description: siteDescription,
    email: 'Elnorelezi@icloud.com',
    telephone: '+355-67-671-8858',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tirana',
      addressCountry: 'AL',
    },
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: 'Elnor Elezi',
      jobTitle: 'Founder & Managing Director',
    },
    sameAs: [
      'https://www.linkedin.com/company/elnr-media',
      'https://instagram.com/elnrmedia',
      'https://twitter.com/elnrmedia',
      'https://facebook.com/elnrmedia',
      'https://youtube.com/@elnrmedia',
    ],
    knowsAbout: [
      'B2B Lead Generation',
      'Paid Ad Campaign Management',
      'Sales Funnel Optimization',
      'B2B Content Strategy',
      'Meta Ads',
      'LinkedIn Ads',
      'CRM Automation',
      'Email Marketing',
    ],
  };

  const serviceSchema = serviceName ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Global',
    description: siteDescription,
    offers: { '@type': 'Offer', priceCurrency: 'USD' },
  } : null;

  const faqSchema = faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const breadcrumbSchema = breadcrumbs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  } : null;

  return (
    <Head>
      {/* Core */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang */}
      <link rel="alternate" hreflang="en" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@elnrmedia" />
      <meta name="twitter:creator" content="@elnrmedia" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {serviceSchema && <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>}
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
    </Head>
  );
}
