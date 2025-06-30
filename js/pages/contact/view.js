import { ContactForm } from '../../components/forms/ContactForm.js';
import { ContactDetails } from '../../components/common/ContactDetails.js';
import { PageHeader } from '../../components/layout/PageHeader.js';
import { Container } from '../../components/layout/Container.js';
import { Section } from '../../components/layout/Section.js';

/**
 * Assembles the complete HTML for the contact page.
 * @returns {string} The HTML string for the contact page.
 */
export function createContactPageView() {
    const formSection = `
        <div class="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Use this form for guest commentaries, article pitches, or any other questions.</p>
            <div id="contact-form-container">
                ${ContactForm()}
                <div id="contact-success-message" hidden>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent. We'll get back to you shortly.</p>
                </div>
            </div>
        </div>
    `;
    const content = Container(
        PageHeader('Contact Us', 'We encourage letters to the editor and guest commentaries.') +
        `<div class="contact-grid">
            ${formSection}
            ${ContactDetails()}
        </div>`
    );
    return Section({ className: 'page contact-page', content });
}