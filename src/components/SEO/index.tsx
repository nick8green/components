import Head from "next/head";
import type { FC } from "react";

export type SEOProps = {
  title: string;
  description: string;
  url?: string;
  type?: "website";
  image?: string;
  robots?: string;
  charset?: string;
  viewport?: string;
  theme?: string;
  manifest?: string;
  icon?: string;
  touchIcon?: string;
};

const SEO: FC<SEOProps> = ({
  charset = "UTF-8",
  description,
  icon,
  image,
  manifest,
  robots,
  theme = "#ffffff",
  title,
  touchIcon,
  type,
  url,
  viewport = "width=device-width, initial-scale=1",
}) => {
  return (
    <Head>
      <meta charSet={charset} />
      <meta name="viewport" content={viewport} />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="robots" content={robots ?? "index, follow"} />
      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
        </>
      )}

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type ?? "website"} />

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
        </>
      )}

      {/* Additional Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Security Meta Tags */}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" />

      {/* PWA & Accessibility */}
      {icon && <link rel="icon" href={icon} />}
      {touchIcon && <link rel="apple-touch-icon" href={touchIcon} />}
      <meta name="theme-color" content={theme} />
      {manifest && <link rel="manifest" href={manifest} />}
    </Head>
  );
};

export default SEO;

// import Head from 'next/head';

// interface SEOProps {
//   title?: string;
//   description?: string;
//   url?: string;
//   image?: string;
// }

// const SEO = ({
//   title = 'My Awesome Page',
//   description = 'This is an awesome page about XYZ, providing high-quality content and resources.',
//   url = 'https://example.com',
//   image = 'https://example.com/og-image.jpg',
// }: SEOProps) => {
//   return (
//     <Head>
//       {/* Required Meta Tags */}
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <link rel="canonical" href={url} />
//       <meta name="robots" content="index, follow" />

//       {/* Open Graph (Facebook, LinkedIn) */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={image} />
//       <meta property="og:url" content={url} />
//       <meta property="og:type" content="website" />

//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={image} />

//       {/* Security Meta Tags */}
//       <meta httpEquiv="X-Frame-Options" content="DENY" />
//       <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
//       <meta httpEquiv="Content-Security-Policy" content="default-src 'self'" />

//       {/* PWA & Accessibility */}
//       <link rel="icon" href="/favicon.ico" />
//       <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
//       <meta name="theme-color" content="#ffffff" />
//       <link rel="manifest" href="/manifest.json" />
//     </Head>
//   );
// };

// export default SEO;
