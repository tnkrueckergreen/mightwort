import { formatAuthorNamesFull } from '../../lib/formatters.js';

/**
 * Renders the metadata block at the top of a single article,
 * including author avatars and full names.
 * @param {Array<Object>} writers - The array of writer objects.
 * @returns {string} HTML string for the top metadata block.
 */
export function AuthorMetaTop(writers) {
    const avatars = writers.map(writer => 
        `<img src="${writer.image}" alt="${writer.name}">`
    ).join('');
    
    const names = formatAuthorNamesFull(writers);

    return `
        <div class="single-article-meta-top">
            <div class="avatar-stack">${avatars}</div>
            <span>By ${names}</span>
        </div>
    `;
}