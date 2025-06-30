/**
 * Sets up a global keydown listener, primarily for the 'Escape' key
 * to close modals and search overlays.
 * @param {Object} actions - An object containing close functions.
 * @param {Function} actions.closeModal - Function to close the active modal.
 * @param {Function} actions.closeSearch - Function to close the search overlay.
 */
export function initGlobalKeydown({ closeModal, closeSearch }) {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeSearch();
        }
    });
}