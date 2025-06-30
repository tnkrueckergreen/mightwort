import { Section } from '../../components/layout/Section.js';
import { SingleArticleHeader } from '../../components/article/SingleArticleHeader.js';
import { TagList } from '../../components/article/TagList.js';
import { AuthorMetaTop } from '../../components/article/AuthorMetaTop.js';
import { AuthorBios } from '../../components/article/AuthorBios.js';

/**
 * Assembles the complete HTML for the single article page from components.
 * @param {Object} article - The article data object.
 * @returns {string} The complete HTML string for the page.
 */
export function createSingleArticleView(article) {
    return Section({
        id: 'single-article-page',
        content: `
            <div class="container">
                <div class="single-article-wrapper">
                    ${SingleArticleHeader(article)}
                    ${TagList(article.tags)}
                    ${AuthorMetaTop(article.writers)}

                    <img src="${article.image}" alt="${article.title}" class="single-article-image">
                    
                    <div class="single-article-content">
                        ${article.content}
                        ${AuthorBios(article.writers)}
                    </div>
                </div>
            </div>
        `
    });
}