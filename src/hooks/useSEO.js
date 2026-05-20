import { useEffect } from 'react';

const useSEO = (titleOrConfig, description, options = {}) => {
  const config = typeof titleOrConfig === 'object' ? titleOrConfig : { title: titleOrConfig, description, ...options };

  const {
    title,
    description: desc,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    robots = 'index, follow'
  } = config;

  useEffect(() => {
    // Helper to update/create meta tag
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (content === undefined || content === null) return;
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Helper to remove meta tag
    const removeMetaTag = (attributeName, attributeValue) => {
      const element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (element) {
        element.remove();
      }
    };

    // Update Title
    if (title) {
      document.title = title;
    }

    // Update Description
    if (desc) {
      setMetaTag('name', 'description', desc);
    }

    // Update Keywords
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    } else {
      removeMetaTag('name', 'keywords');
    }

    // Update Robots
    if (robots) {
      setMetaTag('name', 'robots', robots);
    }

    // Open Graph Tags
    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || desc);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Devopstrio');
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    } else {
      removeMetaTag('property', 'og:image');
    }
    if (ogUrl) {
      setMetaTag('property', 'og:url', ogUrl);
    } else {
      setMetaTag('property', 'og:url', window.location.href);
    }

    // Twitter Tags
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', twitterTitle || ogTitle || title);
    setMetaTag('name', 'twitter:description', twitterDescription || ogDescription || desc);
    if (twitterImage || ogImage) {
      setMetaTag('name', 'twitter:image', twitterImage || ogImage);
    } else {
      removeMetaTag('name', 'twitter:image');
    }

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl || ogUrl) {
      const href = canonicalUrl || ogUrl || window.location.href;
      if (canonical) {
        canonical.setAttribute('href', href);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', href);
        document.head.appendChild(canonical);
      }
    } else {
      if (canonical) {
        canonical.remove();
      }
    }
  }, [
    title,
    desc,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonicalUrl,
    robots
  ]);
};

export default useSEO;
