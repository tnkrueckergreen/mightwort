import { ArticleCard } from './ArticleCard.js';

/**
 * A specific implementation of ArticleCard for "Recent" articles
 * on the homepage, using smaller fonts and lazy image loading.
 * @param {Object} article - Article data object.
 * @returns {string} HTML string for the recent card.
 */
export function RecentCard(article) {
    return ArticleCard(article, {
        className: 'recent-card',
        titleTag: 'h4',
        titleClass: 'article-title-small',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'lazy',
    });
}