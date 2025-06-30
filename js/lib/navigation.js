/**
 * Updates the active state of navigation links based on the current page hash.
 * @param {string} currentPath - The current route path (e.g., 'home-page').
 */
export function updateActiveNavLink(currentPath) {
    const navLinks = document.querySelectorAll('.main-nav a.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.hash.replace('#', '');
        
        let isActive = (linkPath === currentPath);
        
        // Handle parent categories for dropdowns
        if (currentPath.startsWith('articles-page-') && linkPath === 'articles-page-all') {
            isActive = true;
        }
        if (currentPath === 'articles-page-editorial' && linkPath === 'articles-page-opinion') {
            isActive = true;
        }

        link.classList.toggle('active-link', isActive);
    });
}