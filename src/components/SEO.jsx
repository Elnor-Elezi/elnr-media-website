import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, name = "ELNR Media", type = "website", image = "https://elnrmedia.com/og-image.jpg" }) {
  const siteTitle = title ? `${title} | ${name}` : name;
  const siteDescription = description || "We build proven media systems to help B2B brands scale. We get you more attention, run ads that capture it, and build funnels that turn it into revenue.";
  const location = useLocation();
  const canonicalUrl = `https://elnrmedia.com${location.pathname}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": name,
          "image": image,
          "url": canonicalUrl,
          "description": siteDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tirana",
            "addressCountry": "AL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+355-67-671-8858",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://elnrmedia.com",
            "https://www.linkedin.com/company/elnrmedia",
            "https://twitter.com/elnrmedia"
          ],
          "knowsAbout": [
            "Digital Marketing",
            "Proven Media Systems",
            "B2B Lead Generation",
            "Content Strategy",
            "Advertising Funnels",
            "Web Development"
          ],
          "founder": {
            "@type": "Person",
            "name": "Elnor Elezi"
          }
        })}
      </script>
    </Helmet>
  );
}
