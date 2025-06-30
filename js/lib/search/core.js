import Fuse from 'fuse.js';
import { getCombinedData } from '../../api/dataService.js';
import { stripHtml } from './utils.js';
import { FUSE_OPTIONS } from './config.js';

let fuseInstance = null;

/**
 * Initializes the Fuse.js search index. Fetches and processes article
 * data. This function is designed to run only once.
 */
export async function initializeSearch() {
    if (fuseInstance) return;

    const { articles } = await getCombinedData();
    
    // Pre-process articles to include a plain-text version of their content
    const articlesForSearch = articles.map(article => ({
        ...article,
        textContent: stripHtml(article.content)
    }));

    fuseInstance = new Fuse(articlesForSearch, FUSE_OPTIONS);
}

/**
 * Performs a search against the initialized Fuse.js index.
 * @param {string} query - The user's search term.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of result items.
 */
export async function performSearch(query) {
    // Ensure the index is ready before searching
    await initializeSearch();
    
    const results = fuseInstance.search(query);
    return results.map(result => result.item);
}