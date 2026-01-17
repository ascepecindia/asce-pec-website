import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title, 
  description, 
  image = '/asce-logo.png', // Default image (put in public folder)
  url = 'https://ascepec.org' // Your live Vercel URL
}: SEOProps) {
  const siteTitle = "ASCE PEC Student Chapter";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}