import { ArticleCard } from './ArticleCard.js';

/**
 * A specific implementation of ArticleCard for "Featured" articles
 * on the homepage, using larger fonts and eager image loading.
 * @param {Object} article - Article data object.
 * @returns {string} HTML string for the featured card.
 */
export function FeaturedCard(article) {
    return ArticleCard(article, {
        className: 'featured-card',
        titleTag: 'h3',
        titleClass: 'article-title-large',
        showExcerpt: true,
        showAuthors: true,
        imageLoading: 'eager',
    });
}