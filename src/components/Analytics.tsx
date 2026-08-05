import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getReferralLabel } from '../data/analytics';

declare global {
  interface Window {
    umami: {
      track: (eventName: string, eventData?: any) => void;
    };
  }
}

/**
 * Hook to track scroll depth on a page.
 * Tracks 50%, 80%, and 100% visibility.
 */
export const useScrollTracking = (pageTitle: string) => {
  const hasTracked50 = useRef(false);
  const hasTracked80 = useRef(false);
  const hasTracked100 = useRef(false);

  useEffect(() => {
    hasTracked50.current = false;
    hasTracked80.current = false;
    hasTracked100.current = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollY + windowHeight) / fullHeight;

      if (scrollPercentage >= 0.5 && !hasTracked50.current) {
        trackEvent(`Read 50%: ${pageTitle}`);
        hasTracked50.current = true;
      }

      if (scrollPercentage >= 0.8 && !hasTracked80.current) {
        trackEvent(`Read 80%: ${pageTitle}`);
        hasTracked80.current = true;
      }

      if (scrollPercentage >= 0.95 && !hasTracked100.current) {
        trackEvent(`Read 100%: ${pageTitle}`);
        hasTracked100.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageTitle]);
};

/**
 * Utility to manually track events across the app.
 */
export const trackEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (typeof window.umami?.track === 'function') {
    // Umami Cloud has a 50-character limit for the event name.
    // We truncate here to ensure the request is never rejected (400 Bad Request).
    const safeName = eventName.length > 50 ? eventName.substring(0, 47) + '...' : eventName;
    window.umami.track(safeName, eventData);
  } else {
    console.debug('[Analytics] Umami not available for event:', eventName, eventData);
  }
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.umami?.track === 'function') {
      const hashSearchParams = new URLSearchParams(window.location.hash.split('?')[1]);
      const mainSearchParams = new URLSearchParams(window.location.search);
      
      const utmSource = hashSearchParams.get('utm_source') || mainSearchParams.get('utm_source');
      const ref = hashSearchParams.get('ref') || mainSearchParams.get('ref');
      
      const rawSource = utmSource || ref;
      if (rawSource) {
        const sourceLabel = getReferralLabel(rawSource);
        const fullPath = window.location.pathname + window.location.hash;
        
        // Use the friendly label as the event name (truncated to 50 chars by trackEvent)
        trackEvent(sourceLabel, { 
          source: rawSource, 
          path: fullPath 
        });
        
        console.debug(`[Analytics] Referral detected: ${rawSource} -> ${sourceLabel}`);
      }
      
      // Removed manual "Page View" tracking as Umami already captures it automatically.
      // This prevents duplicate events in the dashboard.
    }
  }, [location]);

  return null;
};

export default Analytics;
