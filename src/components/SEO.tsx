import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  author?: string;
  keywords?: string;
  canonical?: string;
}

const SITE_NAME = 'eCloudBridge';
const DEFAULT_TITLE = 'eCloudBridge – DevOps & Cloud Solutions for Seamless Integration';
const DEFAULT_DESC = 'eCloudBridge delivers enterprise-grade DevOps, cloud migration, Kubernetes, SRE, and security services. Transform your digital infrastructure with our expert team.';
const DEFAULT_IMAGE = 'https://ecloudbridge.com/og-image.png';
const SITE_URL = 'https://ecloudbridge.com';
const DEFAULT_KEYWORDS = 'DevOps, Cloud Migration, Kubernetes, AWS, Azure, GCP, SRE, CI/CD, Infrastructure as Code, Cloud Security, eCloudBridge';
const TWITTER_HANDLE = '@ecloudbridge';

const SEO = ({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  publishedAt,
  author = 'eCloudBridge Technology Team',
  keywords = DEFAULT_KEYWORDS,
  canonical,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const canonicalUrl = canonical || url || SITE_URL;

    // Title
    document.title = fullTitle;

    // Helper
    const setMeta = (attr: string, val: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${val}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Core
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', author);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');

    // Article-specific OG
    if (type === 'article') {
      if (publishedAt) setMeta('property', 'article:published_time', publishedAt);
      setMeta('property', 'article:author', author);
      setMeta('property', 'article:publisher', 'https://ecloudbridge.com');
    }

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:site', TWITTER_HANDLE);
    setMeta('name', 'twitter:creator', TWITTER_HANDLE);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // Reset on unmount when navigating away
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, image, url, type, publishedAt, author, keywords, canonical]);

  return null;
};

export default SEO;
