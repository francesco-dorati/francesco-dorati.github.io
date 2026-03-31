import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      // Track page view on route change
      // For HashRouter, we want to include the full path including the hash
      const fullPath = window.location.pathname + window.location.hash;
      
      window.gtag('config', 'G-BPRWRM0LMY', {
        page_path: fullPath,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
