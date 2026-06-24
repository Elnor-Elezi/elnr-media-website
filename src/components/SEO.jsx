import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name = "ELNR Media", type = "website" }) {
  const siteTitle = title ? `${title} | ${name}` : name;
  const siteDescription = description || "Premium media systems built to grow your brand with strategic content, advertising, funnels, and lead generation.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      
      {/* Twitter Card */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
}
