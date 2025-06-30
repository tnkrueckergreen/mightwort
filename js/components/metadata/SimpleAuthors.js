import { formatAuthorNamesSummary, formatAuthorNamesFull } from '../../lib/formatters.js';

/**
 * Renders a simple text-only display of author names.
 * @param {Array<Object>} writers - Array of writer objects.
 * @param {Object} [options={}] - Display options.
 * @returns {string} HTML string for a simple author line.
 */
export function SimpleAuthors(writers, { size = 'large', fullNames = false, className = 'author-meta' }) {
    const formattedNames = fullNames 
        ? formatAuthorNamesFull(writers) 
        : formatAuthorNamesSummary(writers);

    return `<p class="${className} ${className}-${size}">By ${formattedNames}</p>`;
}