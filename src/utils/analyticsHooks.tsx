import React, { useEffect } from 'react';
import analytics from './analytics';

// Note: usePageTracking removed as react-router-dom is not installed
// If you need page tracking with routing, install react-router-dom and its types

// Hook to track scroll depth
export const useScrollTracking = () => {
  useEffect(() => {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 100];
    const tracked = new Set();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        milestones.forEach((milestone) => {
          if (scrollPercentage >= milestone && !tracked.has(milestone)) {
            analytics.trackScrollDepth(milestone);
            tracked.add(milestone);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Hook to track time on page
export const useTimeTracking = () => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const duration = Math.round((endTime - startTime) / 1000); // in seconds
      
      if (duration > 5) { // Only track if user stayed more than 5 seconds
        analytics.trackTimeOnPage(duration);
      }
    };
  }, []);
};

// Component to wrap around your app for automatic tracking
interface AnalyticsProviderProps {
  children: React.ReactNode;
  measurementId: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, measurementId }) => {
  useEffect(() => {
    if (measurementId) {
      analytics.init(measurementId);
    }
  }, [measurementId]);

  useScrollTracking();
  useTimeTracking();

  return <>{children}</>;
};

export default analytics;
