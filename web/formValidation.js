/**
 * web/formValidation.js
 * ─────────────────────
 * Lightweight, zero-dependency form validation for vanilla JS websites.
 * Displays inline errors, prevents submission, and clears on fix.
 *
 * Functions:
 *   validateForm(formEl, rules)  — Validate a form against a rules object.
 *                                  Returns { valid: bool, errors: {} }.
 *   showError(fieldEl, message)  — Attach an error message below a field.
 *   clearErrors(formEl)          — Remove all error messages from a form.
 *   initLiveValidation(formEl, rules) — Clear field error as user types/selects.
 *
 * Built-in validators (use as rule values):
 *   required          — Field must not be empty
 *   email             — Must match email pattern
 *   phone             — Must be a 10-digit Indian mobile number
 *   minLength:N       — At least N characters
 *   maxLength:N       — At most N characters
 *   pattern:REGEX     — Must match the given regex string
 *
 * CSS hooks (style these yourself):
 *   .field-error      — Added to the input/select when invalid
 *   .error-message    — The <span> injected below the field
 *
 * Usage:
 *   const rules = {
 *     name:         ['required', 'minLength:2'],
 *     email:        ['required', 'email'],
 *     phone:        ['required', 'phone'],
 *     businessType: ['required'],
 *     message:      ['maxLength:500'],
 *   };
 *
 *   form.addEventListener('submit', (e) => {
 *     e.preventDefault();
 *     clearErrors(form);
 *     const { valid, errors } = validateForm(form, rules);
 *     if (!valid) {
 *       Object.entries(errors).forEach(([name, msg]) => {
 *         showError(form.elements[name], msg);
 *       });
 *       return;
 *     }
 *     // proceed with submission…
 *   });
 *
 *   initLiveValidation(form, rules); // optional: clear errors as user types
 *
 * Source project: Binary Ventures — Website Startup
 */


const VALIDATORS = {
  required: (val) =>
    val.trim().length > 0 || 'This field is required.',

  email: (val) =>
    !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) || 'Enter a valid email address.',

  phone: (val) =>
    !val || /^[6-9]\d{9}$/.test(val.trim()) || 'Enter a valid 10-digit mobile number.',

  minLength: (val, n) =>
    !val || val.trim().length >= Number(n) || `Must be at least ${n} characters.`,

  maxLength: (val, n) =>
    !val || val.trim().length <= Number(n) || `Must be ${n} characters or fewer.`,

  pattern: (val, regex) =>
    !val || new RegExp(regex).test(val.trim()) || 'Invalid format.',
};


/**
 * Validate a form against a set of rules.
 *
 * @param {HTMLFormElement} formEl  — The form to validate
 * @param {Object} rules            — { fieldName: ['required', 'email', 'minLength:3'] }
 * @returns {{ valid: boolean, errors: Object }} — errors keyed by field name
 */
function validateForm(formEl, rules) {
  const errors = {};

  for (const [name, fieldRules] of Object.entries(rules)) {
    const field = formEl.elements[name];
    if (!field) continue;

    const val = field.value || '';

    for (const rule of fieldRules) {
      const [ruleName, ruleArg] = rule.split(':');
      const validator = VALIDATORS[ruleName];
      if (!validator) continue;

      const result = validator(val, ruleArg);
      if (result !== true) {
        errors[name] = result;
        break; // stop at first failing rule for this field
      }
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}


/**
 * Show an inline error message below a form field.
 * Adds `.field-error` to the input and injects a `.error-message` span.
 *
 * @param {HTMLElement} fieldEl — The input/select/textarea element
 * @param {string} message      — Error text to display
 */
function showError(fieldEl, message) {
  if (!fieldEl) return;
  fieldEl.classList.add('field-error');

  // Remove existing error for this field first
  const existing = fieldEl.parentElement.querySelector('.error-message');
  if (existing) existing.remove();

  const span = document.createElement('span');
  span.className = 'error-message';
  span.textContent = message;
  fieldEl.insertAdjacentElement('afterend', span);
}


/**
 * Remove all inline errors from a form.
 *
 * @param {HTMLFormElement} formEl — The form to clear
 */
function clearErrors(formEl) {
  formEl.querySelectorAll('.field-error').forEach(el => el.classList.remove('field-error'));
  formEl.querySelectorAll('.error-message').forEach(el => el.remove());
}


/**
 * Attach live validation so errors clear as the user corrects a field.
 * Call this once after binding your submit handler.
 *
 * @param {HTMLFormElement} formEl — The form
 * @param {Object} rules           — Same rules object used in validateForm
 */
function initLiveValidation(formEl, rules) {
  for (const name of Object.keys(rules)) {
    const field = formEl.elements[name];
    if (!field) continue;

    const eventType = field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventType, () => {
      field.classList.remove('field-error');
      const sibling = field.nextElementSibling;
      if (sibling && sibling.classList.contains('error-message')) sibling.remove();
    });
  }
}


module.exports = { validateForm, showError, clearErrors, initLiveValidation };
