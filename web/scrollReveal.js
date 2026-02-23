/**
 * scrollReveal.js
 * ───────────────
 * Animate elements into view as the user scrolls, using IntersectionObserver.
 * Supports staggered delays for sibling elements inside grids/lists.
 *
 * No dependencies. Works in all modern browsers.
 *
 * Usage — HTML:
 *   Add class="reveal" to any element you want to animate in on scroll.
 *   Add the CSS below to your stylesheet, then call initScrollReveal().
 *
 * Usage — JS:
 *   import { initScrollReveal } from './scrollReveal';
 *   initScrollReveal();
 *
 * Required CSS:
 *   .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
 *   .reveal.visible { opacity: 1; transform: none; }
 *
 * Options:
 *   threshold   — 0–1, how much of element must be visible before triggering (default: 0.1)
 *   rootMargin  — CSS margin string to adjust trigger point (default: '0px 0px -60px 0px')
 *   staggerMs   — ms delay between sibling elements in the same parent (default: 100)
 *
 * Example with options:
 *   initScrollReveal({ threshold: 0.2, staggerMs: 150 });
 *
 * Source: extracted from Binary Ventures website (Website Startup project)
 */

/**
 * @param {object} options
 * @param {number} [options.threshold=0.1]
 * @param {string} [options.rootMargin='0px 0px -60px 0px']
 * @param {number} [options.staggerMs=100]
 */
function initScrollReveal({ threshold = 0.1, rootMargin = '0px 0px -60px 0px', staggerMs = 100 } = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });

  document.querySelectorAll('.reveal').forEach((el) => {
    // Auto-stagger siblings in the same parent container
    const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
    const index = siblings.indexOf(el);
    if (siblings.length > 1) {
      el.dataset.revealDelay = index * staggerMs;
    }
    observer.observe(el);
  });
}

module.exports = { initScrollReveal };
