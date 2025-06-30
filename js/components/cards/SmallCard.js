import { ArticleCard } from './ArticleCard.js';

/**
 * A specific implementation of ArticleCard for article list pages
 * and search results.
 * @param {Object} article - Article data object.
 * @returns {string} HTML string for the small card.
 */
export function SmallCard(article) {
    return ArticleCard(article, {
        className: 'article-card-small',
        titleTag: 'h4',
        titleClass: 'article-title-small',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'lazy',
    });
}