/**
 * Vercel Speed Insights initialization
 * This script initializes Vercel Speed Insights for performance tracking
 */

// Initialize the Speed Insights queue
window.si = window.si || function () {
  (window.siq = window.siq || []).push(arguments);
};

// Load the Speed Insights script
(function() {
  const script = document.createElement('script');
  
  // Use the Vercel-hosted script
  // Note: This requires the site to be deployed on Vercel for full functionality
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '1.3.1';
  
  // Error handling
  script.onerror = function() {
    console.log(
      '[Vercel Speed Insights] Failed to load script. ' +
      'This feature requires deployment on Vercel platform. ' +
      'The site will function normally without Speed Insights tracking.'
    );
  };
  
  // Append to head
  if (document.head) {
    document.head.appendChild(script);
  } else {
    // If head is not ready, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
