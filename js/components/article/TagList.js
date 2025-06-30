/**
 * Renders a list of clickable tags for an article.
 * @param {Array<string>} tags - An array of tag strings.
 * @returns {string} HTML string for the tag list.
 */
export function TagList(tags) {
    const tagItems = tags.map(tag => `
        <a href="#search/${encodeURIComponent(tag)}" class="tag-item">${tag}</a>
    `).join('');

    return `<div class="tag-list">${tagItems}</div>`;
}