// MARKETING CLUES - MAIN JAVASCRIPT

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button Click Handlers
// Replace these URLs with your actual ConvertKit/email service URLs

const FREE_DOWNLOAD_URL = 'https://your-convertkit-url.com/free-issue';
const SUBSCRIBE_URL = 'https://your-payment-url.com/subscribe';

document.getElementById('free-download-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    // Replace with your actual free download logic
    // Option 1: Redirect to ConvertKit landing page
    window.location.href = FREE_DOWNLOAD_URL;
    
    // Option 2: Open modal/form (implement your own modal)
    // showEmailCaptureModal('free-issue');
});

document.getElementById('subscribe-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    // Replace with your actual subscription checkout
    window.location.href = SUBSCRIBE_URL;
});

document.getElementById('final-subscribe-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = SUBSCRIBE_URL;
});

// Simple analytics tracking (optional)
function trackEvent(eventName, eventData) {
    // Add your analytics tracking here
    // Example for Google Analytics:
    // gtag('event', eventName, eventData);
    
    // Example for Plausible:
    // plausible(eventName, { props: eventData });
    
    console.log('Event tracked:', eventName, eventData);
}

// Track CTA clicks
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('cta_click', { button: buttonText });
    });
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent / 25) * 25; // Track 25%, 50%, 75%, 100%
        if (maxScroll > 0 && maxScroll % 25 === 0) {
            trackEvent('scroll_depth', { depth: maxScroll + '%' });
        }
    }
});

// FAQ accordion (optional - add if you want collapsible FAQs)
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.style.cursor = 'pointer';
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        // Close all answers
        document.querySelectorAll('.faq-item > p, .faq-item > ol').forEach(el => {
            el.style.display = 'none';
        });
        
        // Open clicked answer if it was closed
        if (!isOpen) {
            let sibling = this.nextElementSibling;
            while (sibling && !sibling.matches('h3')) {
                sibling.style.display = 'block';
                sibling = sibling.nextElementSibling;
            }
        }
    });
});
