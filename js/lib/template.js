/**
 * Renders a list of items by applying a template function to each item.
 * @param {Array<any>} items - The array of data items to render.
 * @param {Function} templateFn - A function that takes an item and returns an HTML string.
 * @returns {string} The concatenated HTML string of all rendered items.
 */
export function renderList(items, templateFn) {
    if (!items || !Array.isArray(items)) return '';
    return items.map(templateFn).join('');
}

/**
 * Conditionally renders content.
 * @param {boolean} condition - The condition to check.
 * @param {string|Function} content - The content to render if the condition is true.
 * If a function, it will be executed to get the content.
 * @returns {string} The rendered content or an empty string.
 */
export function renderIf(condition, content) {
    if (!condition) return '';
    return typeof content === 'function' ? content() : content;
}