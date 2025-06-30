import { performSearch } from '../lib/search.js';
import { createSearchResultsView } from './searchResults/view.js';

/**
 * Renders the search results page.
 * It decodes the query, performs the search, and passes results to the view.
 * @param {HTMLElement} container - The main content container element.
 * @param {string} query - The URI-encoded search query from the URL.
 */
export async function render(container, query) {
    const decodedQuery = decodeURIComponent(query);
    const results = await performSearch(decodedQuery);
    
    container.innerHTML = createSearchResultsView(decodedQuery, results);
}