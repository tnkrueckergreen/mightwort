import { API_PATHS } from './paths.js';
import { parseArticleTxt } from './parsers.js';

/**
 * Fetches the list of articles from the manifest, then fetches
 * and parses each individual article file.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of article objects.
 */
export async function getArticles() {
    try {
        const manifestRes = await fetch(API_PATHS.articleManifest);
        const articleFiles = await manifestRes.json();

        const promises = articleFiles.map(async (filename) => {
            try {
                const articleRes = await fetch(`${API_PATHS.articleDir}${filename}`);
                if (!articleRes.ok) return null; // Gracefully handle 404
                const txt = await articleRes.text();
                return parseArticleTxt(txt, filename);
            } catch (e) {
                console.error(`Failed to load or parse ${filename}`, e);
                return null;
            }
        });

        const articles = (await Promise.all(promises)).filter(Boolean);
        articles.sort((a, b) => new Date(b.date) - new Date(a.date));
        return articles;

    } catch (error) {
        console.error("Could not fetch article manifest:", error);
        return [];
    }
}

/**
 * Fetches the staff data from the JSON file.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of staff objects.
 */
export async function getStaff() {
    try {
        const response = await fetch(API_PATHS.staff);
        return await response.json();
    } catch (error) {
        console.error("Could not fetch staff data:", error);
        return [];
    }
}