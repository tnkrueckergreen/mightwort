import { subscribe, setEmail, listen } from '../../lib/subscriptionState.js';

/**
 * Attaches event listeners to the subscription form on the dedicated
 * subscribe page. Syncs with the global subscription state.
 */
export function attachSubscribeFormListeners() {
    const formContainer = document.getElementById('form-container-page');
    if (!formContainer) return;

    const form = document.getElementById('subscribe-form-page');
    const successMsg = document.getElementById('subscribe-success-message-page');
    const emailInput = document.getElementById('subscribe-email-page');

    listen((state) => {
        // Sync the input value and visibility from the global state
        if (emailInput.value !== state.email) {
            emailInput.value = state.email;
        }
        if (state.isSubscribed) {
            form.classList.add('hidden');
            successMsg.classList.add('active');
        }
    });

    // Update the global state when this form's input changes
    emailInput.addEventListener('input', (e) => setEmail(e.target.value));

    // Update the global state on submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (emailInput.value && emailInput.checkValidity()) {
            subscribe();
        }
    });
}