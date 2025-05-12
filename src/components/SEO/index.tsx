import Head from "next/head";
import type { FC } from "react";

export type SEOProps = {
  author?: string;
  charset?: string;
  description: string;
  icon?: string;
  image?: string;
  keywords?: string[];
  manifest?: string;
  robots?: string;
  theme?: string;
  title: string;
  touchIcon?: string;
  type?: "website";
  url?: string;
  viewport?: string;
};

const SEO: FC<SEOProps> = ({
  author,
  charset = "UTF-8",
  description,
  icon,
  image,
  keywords,
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
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      {author && <meta name="author" content={author} />}
    </Head>
  );
};

export default SEO;
