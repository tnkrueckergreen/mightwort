import { PageHeader } from '../layout/PageHeader.js';

/**
 * Creates the "Meet the Team" header section for the About page.
 * @returns {string} HTML string for the team header.
 */
export function TeamHeader() {
    // We reuse the generic PageHeader but wrap it for specific styling.
    return `
        <div class="team-header">
            ${PageHeader(
                '<h2>Meet the Team</h2>', 
                'The dedicated students behind every story. We are writers, editors, photographers, and leaders committed to bringing you the news that matters.'
            )}
        </div>
    `;
}