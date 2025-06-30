import { subscribe, setEmail, listen } from '../lib/subscriptionState.js';

/**
 * Initializes the subscription form in the website footer.
 * It syncs its state with the global subscription state.
 */
export function initFooterSubscription() {
    const formContainer = document.getElementById('footer-form-container');
    if (!formContainer) return;

    const form = document.getElementById('subscribe-form-footer');
    const successMsg = document.getElementById('subscribe-success-message-footer');
    const emailInput = document.getElementById('subscribe-email-footer');

    listen((state) => {
        if (emailInput.value !== state.email) {
            emailInput.value = state.email;
        }
        if (state.isSubscribed) {
            form.classList.add('hidden');
            successMsg.classList.add('active');
        }
    });

    emailInput.addEventListener('input', (e) => setEmail(e.target.value));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInput.value && emailInput.checkValidity()) {
            subscribe();
        }
    });
}