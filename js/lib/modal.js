import { getStaff } from '../api/dataService.js';
import { createStaffModalHTML } from '../components/modal/StaffModalContent.js';

/**
 * Initializes the staff biography modal. Handles opening, closing,
 * and populating the modal with content.
 * @returns {Function} A function to programmatically close the modal.
 */
export function initModal() {
    const overlay = document.getElementById('staff-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const bodyContent = document.getElementById('modal-body-content');

    const openModal = (person) => {
        bodyContent.innerHTML = createStaffModalHTML(person);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.getElementById('main-content').addEventListener('click', async (e) => {
        const card = e.target.closest('.staff-card');
        if (card) {
            const staffId = card.dataset.id;
            const staff = await getStaff();
            const person = staff.find(p => p.id == staffId);
            if (person) openModal(person);
        }
    });
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    return closeModal; // For global 'Escape' key listener
}