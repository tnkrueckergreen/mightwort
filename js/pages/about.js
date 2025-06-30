import { getStaff } from '../api/dataService.js';
import { Section } from '../components/layout/Section.js';
import { Container } from '../components/layout/Container.js';
import { PageHeader } from '../components/layout/PageHeader.js';
import { MissionStatement } from '../components/about/MissionStatement.js';
import { TeamHeader } from '../components/about/TeamHeader.js';
import { StaffGrid } from '../components/about/StaffGrid.js';

/**
 * Renders the About page by fetching staff data and assembling components.
 * @param {HTMLElement} container - The main content element to render into.
 */
export async function render(container) {
    const staff = await getStaff();

    const content = Container(
        PageHeader('About ANDOVERVIEW') +
        MissionStatement() +
        TeamHeader() +
        StaffGrid(staff)
    );

    container.innerHTML = Section({ id: 'about-page', content });
}