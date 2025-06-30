import { getArticles, getStaff } from './dataFetchers.js';

let cachedCombinedData = null;

/**
 * Fetches and combines article and staff data, enriching articles
 * with full writer profiles. The result is cached.
 * @returns {Promise<Object>} An object containing `articles` and `staff`.
 */
export async function getCombinedData() {
    if (cachedCombinedData) {
        return cachedCombinedData;
    }

    const [articles, staff] = await Promise.all([getArticles(), getStaff()]);
    
    const staffMap = new Map(staff.map(s => [s.name.toLowerCase(), s]));

    const articlesWithWriters = articles.map(article => {
        const authorNames = article.author || [];
        const writers = authorNames.map(authorName => {
            const writerData = staffMap.get(authorName.toLowerCase());
            return writerData || { 
                name: authorName, 
                image: 'https://i.pravatar.cc/300?u=placeholder', 
                bio: 'Bio not available.' 
            };
        });
        return { ...article, writers };
    });

    cachedCombinedData = { articles: articlesWithWriters, staff };
    return cachedCombinedData;
}