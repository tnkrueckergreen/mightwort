import { getCombinedData } from '../api/dataService.js';
import { getArticlesToDisplay } from './articleList/logic.js';
import { createArticleListPage } from './articleList/view.js';

/**
 * Renders an article list page for a given category.
 * @param {HTMLElement} container - The main content element.
 * @param {string} [category='all'] - The category of articles to display.
 */
export async function render(container, category = 'all') {
    const { articles } = await getCombinedData();
    const { title, articlesToDisplay } = getArticlesToDisplay(articles, category);
    
    container.innerHTML = createArticleListPage(title, articlesToDisplay);
}