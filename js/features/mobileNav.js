/**
 * Initializes the functionality for the mobile navigation menu,
 * including the hamburger toggle and closing the menu on link click.
 */
export function initMobileNav() {
    const mainHeader = document.querySelector('.main-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (!mainHeader || !mobileToggle || !mainNav) return;

    mobileToggle.addEventListener('click', () => {
        mainHeader.classList.toggle('nav-open');
    });

    // Close mobile nav when any link inside it is clicked
    mainNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mainHeader.classList.remove('nav-open');
        }
    });
}