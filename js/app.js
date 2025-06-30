import { initRouter } from './router.js';
import { initModal } from './lib/modal.js';
import { initHeaderSearch } from './lib/headerSearch.js';
import { initFooterSubscription } from './features/footerSubscription.js';
import { initDownloadHandler } from './handlers/downloadHandler.js';
import { initMobileNav } from './features/mobileNav.js';
import { initGlobalKeydown } from './handlers/globalKeydown.js';

/**
 * Main application entry point.
 */
function init() {
    const closeModal = initModal();
    const closeSearch = initHeaderSearch();
    
    initFooterSubscription();
    initDownloadHandler();
    initMobileNav();
    initGlobalKeydown({ closeModal, closeSearch });
    
    initRouter();
}

document.addEventListener('DOMContentLoaded', init);