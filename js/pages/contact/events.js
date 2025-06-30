import { showWarning, clearWarnings, isValidEmail, isFieldFilled } from '../../lib/formValidation.js';

/**
 * Attaches event listeners to the contact form for validation and submission.
 */
export function attachContactFormListeners() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(form)) {
            const successMessage = document.getElementById('contact-success-message');
            form.hidden = true;
            successMessage.hidden = false;
        }
    });
}

/**
 * Validates the entire contact form and shows warnings if needed.
 * @param {HTMLFormElement} form - The form element to validate.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
function validateForm(form) {
    clearWarnings(form);
    let isValid = true;

    const name = form.querySelector('#contact-name');
    const email = form.querySelector('#contact-email');
    const message = form.querySelector('#contact-message');

    if (!isFieldFilled(name.value)) {
        showWarning(name, 'Please enter your name.');
        isValid = false;
    }
    if (!isFieldFilled(email.value) || !isValidEmail(email.value)) {
        showWarning(email, 'Please enter a valid email address.');
        isValid = false;
    }
    if (!isFieldFilled(message.value)) {
        showWarning(message, 'Please enter your message.');
        isValid = false;
    }
    return isValid;
}