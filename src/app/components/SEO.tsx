import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/og-image.jpg', // Make sure you have a default share image in public folder
  url 
}: SEOProps) {
  
  const siteTitle = "ASCE PEC | Punjab Engineering College";
  const defaultDescription = "Official Student Chapter of the American Society of Civil Engineers at Punjab Engineering College (PEC), Chandigarh. Leading technical society fostering innovation in civil engineering.";
  const siteUrl = "https://ascepec.vercel.app";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  
  // High-value keywords for ranking
  const defaultKeywords = [
    "ASCE PEC",
    "PEC Chandigarh",
    "Punjab Engineering College",
    "Civil Engineering Society",
    "Technical Societies in PEC",
    "ASCE Student Chapter",
    "Civil Engineering Events",
    "PEC Fest",
    "Reconnaissance 2026"
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | ASCE PEC` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook (Critical for Social Sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
}