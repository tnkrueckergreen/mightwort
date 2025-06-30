/**
 * A generic component for creating a single form field with a label
 * and a warning message placeholder.
 * @param {Object} options - Field configuration.
 * @returns {string} HTML string for the form field.
 */
export function FormField(options) {
    const {
        id,
        label,
        type = 'text',
        required = false,
        placeholder = '',
        rows,
        warningMessage
    } = options;

    const isTextarea = type === 'textarea';
    const reqAttr = required ? 'required' : '';
    const placeholderAttr = placeholder ? `placeholder="${placeholder}"` : '';

    const input = isTextarea
        ? `<textarea id="${id}" name="${id.replace('contact-', '')}" rows="${rows}" ${reqAttr}></textarea>`
        : `<input type="${type}" id="${id}" name="${id.replace('contact-', '')}" ${reqAttr} ${placeholderAttr}>`;

    return `
        <div class="form-group">
            <label for="${id}">${label}</label>
            ${input}
            <span class="warning-message" data-warning-for="${id}">${warningMessage}</span>
        </div>
    `;
}