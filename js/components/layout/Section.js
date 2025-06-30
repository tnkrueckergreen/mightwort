/**
 * A generic wrapper for creating a <section> element with an ID and class.
 * @param {Object} options - Section configuration.
 * @param {string} [options.id=''] - The ID for the section.
 * @param {string} [options.className='page'] - CSS classes for the section.
 * @param {string} [options.content=''] - The inner HTML content.
 * @returns {string} HTML string for the section.
 */
export function Section({ id = '', className = 'page', content = '' }) {
    const idAttr = id ? `id="${id}"` : '';
    
    return `
        <section ${idAttr} class="${className}">
            ${content}
        </section>
    `;
}