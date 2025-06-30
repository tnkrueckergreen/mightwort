/**
 * Displays a validation warning message for a form field.
 * @param {HTMLElement} inputElement - The input or textarea element.
 * @param {string} message - The warning message to display.
 */
export function showWarning(inputElement, message) {
    const warningEl = document.querySelector(`[data-warning-for="${inputElement.id}"]`);
    if (warningEl) {
        warningEl.textContent = message || warningEl.dataset.defaultMessage;
        warningEl.style.display = 'block';
    }
    inputElement.classList.add('invalid');
}

/**
 * Clears all validation warnings within a given form.
 * @param {HTMLFormElement} form - The form element.
 */
export function clearWarnings(form) {
    form.querySelectorAll('.warning-message').forEach(el => el.style.display = 'none');
    form.querySelectorAll('input.invalid, textarea.invalid').forEach(el => el.classList.remove('invalid'));
}

/**
 * Validates an email address format using a simple regex.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email format is valid.
 */
export function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

/**
 * Checks if a field's value is not empty after trimming whitespace.
 * @param {string} value - The field's value.
 * @returns {boolean} True if the field is filled.
 */
export function isFieldFilled(value) {
    return value.trim().length > 0;
}