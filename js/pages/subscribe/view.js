import { Section } from '../../components/layout/Section.js';

/**
 * Creates the complete HTML for the dedicated subscription page.
 * @returns {string} The HTML string for the subscribe page.
 */
export function createSubscribePageView() {
    return Section({
        className: 'page subscribe-page',
        content: `
            <div class="container">
                <div class="subscribe-content">
                    <h1>Join the ANDOVERVIEW community.</h1>
                    <p>Get the latest stories, features, and updates from our student journalists, sent straight to your inbox.</p>
                    
                    <div id="form-container-page" class="form-container">
                        <form id="subscribe-form-page">
                            <input type="email" id="subscribe-email-page" placeholder="Enter your email address" required>
                            <button type="submit" class="button-subscribe">Subscribe</button>
                        </form>
                        <div id="subscribe-success-message-page" class="subscribe-success">
                            <span>Thank you for subscribing!</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}