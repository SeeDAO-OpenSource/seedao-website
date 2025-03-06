import React from 'react';
import { Helmet } from 'react-helmet';

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
  type?: string;
  structuredData?: Record<string, any>;
}

const PageMeta: React.FC<PageMetaProps> = ({
  title = 'SEEDAO - Together Create Freedom',
  description = 'SEEDAO is a decentralized autonomous organization dedicated to fostering innovation, collaboration, and freedom in the Web3 ecosystem. Join our community to shape the future of decentralized governance.',
  keywords = 'SEEDAO, DAO, blockchain, Web3, decentralized governance, cryptocurrency, digital assets, community',
  ogImage = '/og-image.jpg',
  canonicalPath = '',
  type = 'website',
  structuredData,
}) => {
  // Construct the canonical URL
  const baseUrl = 'https://seedao.xyz';
  const fullCanonicalUrl = `${baseUrl}${canonicalPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default PageMeta;
