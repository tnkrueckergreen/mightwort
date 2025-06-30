const CATEGORY_MAP = {
    arts: ['arts', 'reviews'],
    opinion: ['opinion', 'editorial'],
};

const TITLE_MAP = {
    all: 'All Articles',
    arts: 'Arts & Reviews',
    opinion: 'Opinion',
};

/**
 * Filters articles based on a category and determines the appropriate page title.
 * @param {Array<Object>} allArticles - The complete list of articles.
 * @param {string} category - The category to filter by (e.g., 'sports', 'arts').
 * @returns {{title: string, articlesToDisplay: Array<Object>}}
 */
export function getArticlesToDisplay(allArticles, category) {
    const lowerCategory = category.toLowerCase();

    if (lowerCategory === 'all') {
        return { title: TITLE_MAP.all, articlesToDisplay: allArticles };
    }

    const categoriesToMatch = CATEGORY_MAP[lowerCategory] || [lowerCategory];
    const articlesToDisplay = allArticles.filter(a => 
        categoriesToMatch.includes(a.category.toLowerCase())
    );

    const title = TITLE_MAP[lowerCategory] || 
                  (category.charAt(0).toUpperCase() + category.slice(1));
                  
    return { title, articlesToDisplay };
}