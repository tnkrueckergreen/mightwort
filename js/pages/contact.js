import { createContactPageView } from './contact/view.js';
import { attachContactFormListeners } from './contact/events.js';

/**
 * Renders the contact page and attaches its event listeners.
 * @param {HTMLElement} container - The main content container element.
 */
export function render(container) {
    container.innerHTML = createContactPageView();
    attachContactFormListeners();
}