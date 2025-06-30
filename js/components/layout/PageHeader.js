/**
 * Renders a standard page header with a main title and an optional subtitle.
 * @param {string} title - The main page title (can include HTML).
 * @param {string} [subtitle=''] - The optional subtitle text.
 * @returns {string} HTML string for the page header.
 */
export function PageHeader(title, subtitle = '') {
    const subtitleHTML = subtitle ? `<p>${subtitle}</p>` : '';
    
    return `
        <div class="page-header">
            <h1>${title}</h1>
            ${subtitleHTML}
        </div>
    `;
}