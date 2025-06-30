// Manages a central state for the subscription process, allowing
// different components (e.g., footer form, subscribe page) to stay in sync.

const state = {
    email: '',
    isSubscribed: false
};

const listeners = new Set();

function notifyListeners() {
    listeners.forEach(listener => listener(state));
}

/**
 * Updates the email in the central state.
 * @param {string} newEmail - The new value from an input field.
 */
export function setEmail(newEmail) {
    if (state.email !== newEmail) {
        state.email = newEmail;
        notifyListeners();
    }
}

/**
 * Sets the subscription status to true.
 */
export function subscribe() {
    if (!state.isSubscribed) {
        state.isSubscribed = true;
        // In a real app, this might be saved to localStorage.
        notifyListeners();
    }
}

/**
 * Allows a component to listen for any changes to the subscription state.
 * @param {Function} callback - The function to call when state changes.
 */
export function listen(callback) {
    listeners.add(callback);
    // Immediately notify the new listener with the current state.
    callback(state);
}