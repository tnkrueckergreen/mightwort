import { Section } from '../../components/layout/Section.js';
import { Container } from '../../components/layout/Container.js';
import { PageHeader } from '../../components/layout/PageHeader.js';
import { renderList } from '../../lib/template.js';
import { IssueCard } from '../../components/issues/IssueCard.js';

/**
 * Creates the complete HTML for the "Past Issues" page.
 * @param {Array<Object>} issues - An array of issue data objects.
 * @returns {string} The HTML string for the issues page.
 */
export function createIssuesPageView(issues) {
    const issueCards = renderList(issues, IssueCard);

    const content = Container(
        PageHeader(
            'Past Issues',
            'Browse and download PDF versions of our print newspaper.'
        ) +
        `<div class="issue-list">${issueCards}</div>`
    );

    return Section({ id: 'issues-page', content });
}