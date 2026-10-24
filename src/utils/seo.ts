/**
 * SEO & Analytics Management Utility for FuncUndo
 */

interface SEOOptions {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
}

const BASE_URL = 'https://funcundo.vercel.app';

export function updateSEO({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
}: SEOOptions): void {
  // 1. Update Title Tag
  document.title = title;

  // 2. Update Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);
  }

  // 3. Update Canonical Tag
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  } else {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', canonicalUrl);
    document.head.appendChild(canonicalLink);
  }

  // 4. Update Open Graph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const ogTypeMeta = document.querySelector('meta[property="og:type"]');
  if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);

  // 5. Update Twitter Card Tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', description);

  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrl) twitterUrl.setAttribute('content', canonicalUrl);

  // 6. Track Virtual Pageview in Google Analytics if initialized
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_title: title,
      page_location: canonicalUrl,
      page_path: canonicalPath || '/',
    });
  }
}

/**
 * Initialize Google Analytics 4 (GA4) with user measurement ID
 * Can be loaded via environment variable VITE_GA_ID or passed directly
 */
export function initGoogleAnalytics(measurementId?: string): void {
  const gaId = measurementId || (import.meta as any).env?.VITE_GA_ID;
  if (!gaId || typeof window === 'undefined') return;

  // Prevent duplicate script injection
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  const inlineScript = document.createElement('script');
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}', { send_page_view: true });
  `;
  document.head.appendChild(inlineScript);
}
