// Analytics utility for tracking user interactions
// Google Analytics 4 event tracking

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track page views
 * @param url - Page URL
 * @param title - Page title
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title,
    });
  }
};

/**
 * Track calculator/tool usage
 * @param toolName - Name of the tool/calculator used
 * @param category - Category of the tool
 */
export const trackToolUsage = (toolName: string, category: string = 'calculator') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tool_used', {
      event_category: category,
      event_label: toolName,
      tool_name: toolName,
    });
  }
};

/**
 * Track calculator calculations
 * @param calculatorName - Name of the calculator
 * @param value - Optional value associated with calculation
 */
export const trackCalculation = (calculatorName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculation_performed', {
      event_category: 'engagement',
      event_label: calculatorName,
      calculator_name: calculatorName,
      value: value,
    });
  }
};

/**
 * Track form submissions
 * @param formName - Name of the form submitted
 */
export const trackFormSubmission = (formName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formName,
      form_name: formName,
    });
  }
};

/**
 * Track newsletter subscriptions
 */
export const trackNewsletterSubscription = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'engagement',
      event_label: 'Newsletter Subscription',
    });
  }
};

/**
 * Track button/link clicks
 * @param elementName - Name of the element clicked
 * @param destination - Optional destination URL
 */
export const trackClick = (elementName: string, destination?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: elementName,
      destination: destination,
    });
  }
};

/**
 * Track outbound link clicks
 * @param url - External URL clicked
 */
export const trackOutboundLink = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'outbound_link', {
      event_category: 'engagement',
      event_label: url,
      destination_url: url,
    });
  }
};

/**
 * Track custom conversion events
 * @param eventName - Name of the conversion event
 * @param value - Value associated with the conversion
 */
export const trackConversion = (eventName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      value: value,
    });
  }
};

