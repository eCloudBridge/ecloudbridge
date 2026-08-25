
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    pagesense?: any;
  }
}

const Analytics = () => {
  useEffect(() => {
    // We only want to initialize this once
    const GA_MEASUREMENT_ID = 'G-X4JLFLNW0J'; // eCloudBridge GA4 measurement ID
    
    // Load Google Analytics
    const loadGoogleAnalytics = () => {
      // Create gtag script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(gtagScript);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer?.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      console.log('Google Analytics loaded');
    };

    // Load analytics only in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || localStorage.getItem('enableAnalytics') === 'true') {
      loadGoogleAnalytics();
    }

    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for route changes
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    const originalReplaceState = history.replaceState;
    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      setTimeout(trackPageView, 100);
    };

    window.addEventListener('popstate', trackPageView);

    return () => {
      window.removeEventListener('popstate', trackPageView);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
