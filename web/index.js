/**
 * web/index.js
 * ────────────
 * Central export for all web / frontend skills.
 *
 * This folder holds:
 *   - Reusable HTML/CSS/JS components
 *   - Page templates (landing pages, dashboards, forms)
 *   - UI patterns (modals, toasts, accordions, tabs)
 *   - API fetch wrappers with error handling
 *   - Form validation helpers
 *   - Responsive layout utilities
 *
 * Usage:
 *   import { fetchWithRetry } from './web';
 *
 * Note: Components may be framework-agnostic vanilla JS,
 * or framework-specific (React, Vue) — check each file's header.
 *
 * Related project: /Website Startup — full website implementations.
 */

// --- Exports ---

const { initScrollReveal }                                                      = require('./scrollReveal');
const { animateCounter, initCounters }                                          = require('./animateCounter');
const { initFaqAccordion }                                                      = require('./faqAccordion');
const { initBeforeAfterSlider }                                                 = require('./beforeAfterSlider');
const { initNavbarScroll, initHamburgerMenu, initDropdownNav,
        initActiveNavOnScroll }                                                 = require('./navbarUtils');
const { initSmoothScroll }                                                      = require('./smoothScroll');
const { animateNumber }                                                         = require('./animateNumber');

const { validateForm, showError, clearErrors,
        initLiveValidation }                                                    = require('./formValidation');

// Planned (not yet added):
// const { fetchWithRetry } = require('./fetchWithRetry');
// const { showToast }      = require('./showToast');

module.exports = {
  // Scroll & animation
  initScrollReveal,
  animateCounter,
  initCounters,
  animateNumber,

  // UI components
  initFaqAccordion,
  initBeforeAfterSlider,

  // Navbar utilities
  initNavbarScroll,
  initHamburgerMenu,
  initDropdownNav,
  initActiveNavOnScroll,

  // Navigation
  initSmoothScroll,

  // Forms
  validateForm,
  showError,
  clearErrors,
  initLiveValidation,
};
