import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Utility to manually track events across the app.
 * Usage: trackEvent('click_cta', { label: 'Resume Download' })
 */
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  } else {
    console.debug('[Analytics] gtag not available for event:', action, params);
  }
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      // Track page view on route change
      const fullPath = window.location.pathname + window.location.hash;
      
      window.gtag('event', 'page_view', {
        page_path: fullPath,
        page_location: window.location.href,
        page_title: document.title,
      });

      console.debug('[Analytics] Page view tracked:', fullPath);
    }
  }, [location]);

  return null;
};

export default Analytics;
