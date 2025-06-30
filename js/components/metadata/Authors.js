import { SimpleAuthors } from './SimpleAuthors.js';
import { AuthorsWithAvatars } from './AuthorsWithAvatars.js';

/**
 * A high-level component that decides whether to render authors
 * with simple text or with an avatar stack.
 * @param {Array<Object>} writers - Array of writer objects.
 * @param {Object} [options={}] - Display options.
 * @returns {string} HTML string for the authors metadata.
 */
export function Authors(writers, options = {}) {
    const { withAvatars = true } = options;

    if (!withAvatars) {
        return SimpleAuthors(writers, options);
    }

    return AuthorsWithAvatars(writers, options);
}