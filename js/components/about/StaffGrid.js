/**
 * Creates the grid of staff member cards.
 * @param {Array<Object>} staff - The array of staff member data.
 * @returns {string} HTML string for the staff grid.
 */
export function StaffGrid(staff) {
    const staffCards = staff.map(person => `
        <div class="staff-card" data-id="${person.id}">
            <div class="staff-card-img">
                <img src="${person.image}" alt="${person.name}" loading="lazy">
            </div>
            <h4>${person.name}</h4>
            <p>${person.role}</p>
        </div>
    `).join('');

    return `<div class="staff-grid">${staffCards}</div>`;
}