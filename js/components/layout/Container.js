/**
 * A simple wrapper component for creating a centered container div.
 * @param {string} content - The inner HTML content to be wrapped.
 * @param {string} [className=''] - Additional CSS classes for the container.
 * @returns {string} HTML string for the container.
 */
export function Container(content, className = '') {
    return `
        <div class="container ${className}">
            ${content}
        </div>
    `;
}