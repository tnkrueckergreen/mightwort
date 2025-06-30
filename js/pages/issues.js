import { createIssuesPageView } from './issues/view.js';

/**
 * Renders the "Past Issues" page.
 * @param {HTMLElement} container - The main content container element.
 */
export function render(container) {
    // In a real application, this data would likely come from an API.
    const issues = [
        { name: 'November 2024 Issue' }, { name: 'October 2024 Issue' },
        { name: 'September 2024 Issue' }, { name: 'May 2024 Issue' },
        { name: 'April 2024 Issue' }, { name: 'March 2024 Issue' },
    ];

    container.innerHTML = createIssuesPageView(issues);
}