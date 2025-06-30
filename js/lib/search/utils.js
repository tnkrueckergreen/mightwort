/**
 * Strips HTML tags from a string to create a plain-text representation.
 * @param {string} html - The input HTML string.
 * @returns {string} The plain text content.
 */
export function stripHtml(html) {
    if (!html) return "";
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}