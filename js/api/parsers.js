/**
 * Parses the text content of an article file into a structured object.
 * It separates frontmatter from the main content.
 * @param {string} txt - The raw text content of the .txt file.
 * @param {string} filename - The filename (e.g., 'my-article.txt').
 * @returns {Object} A structured article object.
 */
export function parseArticleTxt(txt, filename) {
    const article = { id: filename.split('.')[0] };
    const lines = txt.split('\n');
    const contentIndex = lines.findIndex(line => line.trim() === '---');
    
    const frontmatter = lines.slice(0, contentIndex).join('\n');
    const content = lines.slice(contentIndex + 1).join('\n');

    article.content = content;

    frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const key_ = key.trim().toLowerCase();
            const value = valueParts.join(':').trim();
            
            // Treat 'tags' and 'author' as comma-separated lists
            if (key_ === 'tags' || key_ === 'author') {
                article[key_] = value.split(',').map(item => item.trim());
            } else {
                article[key_] = value;
            }
        }
    });
    return article;
}