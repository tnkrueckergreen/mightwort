const footerCTA = document.getElementById('footer-cta');
const PAGES_TO_HIDE_FOOTER_ON = ['subscribe', 'contact'];

/**
 * Shows or hides the footer's Call-To-Action banner based on the current page.
 * @param {string} currentPath - The current route path (e.g., 'home-page').
 */
export function handleFooterVisibility(currentPath) {
    if (!footerCTA) return;
    
    const shouldHide = PAGES_TO_HIDE_FOOTER_ON.includes(currentPath);
    footerCTA.classList.toggle('hidden', shouldHide);
}