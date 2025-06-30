import { Authors } from '../metadata/Authors.js';

/**
 * Base article card component. This is the core template used
 * by more specific card types like FeaturedCard and RecentCard.
 * @param {Object} article - Article data object.
 * @param {Object} options - Configuration for rendering the card.
 * @returns {string} HTML string for a generic article card.
 */
export function ArticleCard(article, options = {}) {
    const {
        className = 'article-card',
        titleTag = 'h4',
        titleClass = 'article-title',
        showExcerpt = true,
        showAuthors = true,
        imageLoading = 'lazy',
        authorSize = 'large',
        withAvatars = true
    } = options;

    const image = `<img src="${article.image}" alt="${article.title}" loading="${imageLoading}">`;
    const metaBar = `
        <div class="meta-bar">
            <span class="category">${article.category}</span>
            <span class="date">${article.date.split(',')[0]}</span>
        </div>
    `;
    const title = `
        <a href="#single-article-page/${article.id}" class="stretched-link">
            <${titleTag} class="${titleClass}">${article.title}</${titleTag}>
        </a>
    `;
    const excerpt = showExcerpt ? `<p class="excerpt">${article.description}</p>` : '';
    const authors = showAuthors ? Authors(article.writers, { 
        size: authorSize, 
        withAvatars,
        className: 'author-meta'
    }) : '';

    return `
        <article class="${className} article-card-linkable">
            ${image}
            ${metaBar}
            ${title}
            ${excerpt}
            ${authors}
        </article>
    `;
}