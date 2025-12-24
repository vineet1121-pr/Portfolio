// Analytics utility for tracking user interactions
// Supports Google Analytics 4 (GA4)

// Extend Window interface to include gtag types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface EventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  form_name?: string;
  success?: boolean;
  description?: string;
  page_path?: string;
}

class Analytics {
  private isInitialized: boolean;
  private measurementId: string | null;

  constructor() {
    this.isInitialized = false;
    this.measurementId = null;
  }

  // Initialize Google Analytics
  init(measurementId: string): void {
    if (this.isInitialized) {
      console.warn('Analytics already initialized');
      return;
    }

    this.measurementId = measurementId;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]): void {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    this.isInitialized = true;
    console.log('Analytics initialized with ID:', measurementId);
  }

  // Track page views
  pageView(path: string): void {
    if (!this.isInitialized || !window.gtag) {
      console.warn('Analytics not initialized');
      return;
    }

    window.gtag('config', this.measurementId, {
      page_path: path,
    });

    console.log('Page view tracked:', path);
  }

  // Track custom events
  event(eventName: string, eventParams: EventParams = {}): void {
    if (!this.isInitialized || !window.gtag) {
      console.warn('Analytics not initialized');
      return;
    }

    window.gtag('event', eventName, eventParams);
    console.log('Event tracked:', eventName, eventParams);
  }

  // Track button clicks
  trackButtonClick(buttonName: string, category: string = 'engagement'): void {
    this.event('button_click', {
      event_category: category,
      event_label: buttonName,
    });
  }

  // Track form submissions
  trackFormSubmission(formName: string, success: boolean = true): void {
    this.event('form_submission', {
      form_name: formName,
      success: success,
    });
  }

  // Track navigation clicks
  trackNavigation(destination: string): void {
    this.event('navigation_click', {
      event_category: 'navigation',
      event_label: destination,
    });
  }

  // Track project views
  trackProjectView(projectName: string): void {
    this.event('project_view', {
      event_category: 'portfolio',
      event_label: projectName,
    });
  }

  // Track downloads
  trackDownload(fileName: string): void {
    this.event('file_download', {
      event_category: 'downloads',
      event_label: fileName,
    });
  }

  // Track social media clicks
  trackSocialClick(platform: string): void {
    this.event('social_click', {
      event_category: 'social_media',
      event_label: platform,
    });
  }

  // Track scroll depth
  trackScrollDepth(percentage: number): void {
    this.event('scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }

  // Track time on page
  trackTimeOnPage(duration: number): void {
    this.event('time_on_page', {
      event_category: 'engagement',
      value: duration,
    });
  }

  // Track errors
  trackError(errorMessage: string, errorType: string = 'javascript_error'): void {
    this.event('error', {
      event_category: 'errors',
      event_label: errorType,
      description: errorMessage,
    });
  }
}

// Create singleton instance
const analytics = new Analytics();

export default analytics;

// Usage Examples:
// 
// 1. Initialize in your app:
//    import analytics from './utils/analytics';
//    analytics.init('G-XXXXXXXXXX'); // Your GA4 Measurement ID
//
// 2. Track page views:
//    analytics.pageView('/about');
//
// 3. Track button clicks:
//    analytics.trackButtonClick('Contact Form Submit');
//
// 4. Track custom events:
//    analytics.event('user_signup', { method: 'email' });
