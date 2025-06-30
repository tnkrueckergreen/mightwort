import { getCombinedData } from '../api/dataService.js';
import { createHomePageView } from './home/view.js';

/**
 * Renders the home page.
 * Fetches all articles, filters them into 'featured' and 'recent'
 * categories, and passes them to the view for rendering.
 * @param {HTMLElement} container - The main content element.
 */
export async function render(container) {
    const { articles } = await getCombinedData();
    
    const featuredArticles = articles.filter(a => a.display === 'featured').slice(0, 2);
    const recentArticles = articles.filter(a => a.display === 'recent').slice(0, 6);
    
    container.innerHTML = createHomePageView(featuredArticles, recentArticles);
}