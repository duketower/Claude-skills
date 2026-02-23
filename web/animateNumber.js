/**
 * web/animateNumber.js
 * ────────────────────
 * Smoothly animates a DOM element's text content from one number to another
 * using an ease-out cubic curve. Useful for pricing calculators, live totals,
 * or any UI where a number changes and you want a smooth transition.
 *
 * Note: This is different from `animateCounter` (which goes 0 → target on
 * scroll). This function animates *between* two known values instantly on call,
 * making it ideal for interactive widgets where the value changes repeatedly.
 *
 * Function:
 *   animateNumber(el, from, to, duration, formatter)
 *     — Animates el.textContent from `from` to `to` over `duration` ms.
 *       Optionally pass a `formatter` function to control how the number
 *       is displayed (e.g., currency, locale formatting).
 *
 * Usage:
 *   animateNumber(document.getElementById('total'), 49999, 99999);
 *
 *   // With Indian Rupee locale formatting:
 *   animateNumber(totalEl, 0, 99999, 400, v => v.toLocaleString('en-IN'));
 *
 *   // With a currency prefix:
 *   animateNumber(totalEl, 0, 1500, 400, v => '$' + v.toLocaleString());
 *
 * Source project: Binary Ventures — Website Startup (pricing calculator)
 */


/**
 * Animate a number displayed in a DOM element from `from` to `to`.
 *
 * @param {HTMLElement} el        — The element whose text content will be updated
 * @param {number}      from      — Starting value
 * @param {number}      to        — Ending value
 * @param {number}      duration  — Animation duration in ms (default 400)
 * @param {Function}    formatter — Optional function(value: number): string
 *                                  to format the displayed number (default: toLocaleString)
 */
function animateNumber(el, from, to, duration = 400, formatter = null) {
  const format = formatter || (v => v.toLocaleString());
  const start = performance.now();

  function step(ts) {
    const p   = Math.min((ts - start) / duration, 1);
    const val = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
    el.textContent = format(val);
    if (p < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}


module.exports = { animateNumber };
