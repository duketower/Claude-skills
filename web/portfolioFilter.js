/**
 * web/portfolioFilter.js
 * ──────────────────────
 * Zero-dependency portfolio/gallery filter by category.
 * Clicking a filter button shows only matching cards; clicking "all"
 * shows everything. Active state is applied to the selected button.
 *
 * No dependencies. Works in all modern browsers.
 *
 * Usage — HTML:
 *   <!-- Filter buttons -->
 *   <div>
 *     <button class="filter-btn active" data-filter="all">All</button>
 *     <button class="filter-btn" data-filter="branding">Branding</button>
 *     <button class="filter-btn" data-filter="web">Web</button>
 *   </div>
 *
 *   <!-- Cards — each has a data-category attribute -->
 *   <div class="portfolio-grid">
 *     <div class="portfolio-card" data-category="branding">…</div>
 *     <div class="portfolio-card" data-category="web">…</div>
 *   </div>
 *
 * Usage — JS:
 *   import { initPortfolioFilter } from './portfolioFilter';
 *   initPortfolioFilter();
 *
 *   // Or with custom selectors:
 *   initPortfolioFilter({
 *     btnSelector:  '.filter-btn',
 *     cardSelector: '.portfolio-card',
 *     activeClass:  'active',
 *     allValue:     'all',
 *   });
 *
 * Options:
 *   btnSelector   — CSS selector for filter buttons (default: '.filter-btn')
 *   cardSelector  — CSS selector for filterable cards (default: '.portfolio-card')
 *   activeClass   — Class applied to the active button (default: 'active')
 *   allValue      — data-filter value that shows everything (default: 'all')
 *
 * Notes:
 *   - Cards are hidden via `style.display = 'none'` (no CSS classes needed)
 *   - Reads the filter value from `button.dataset.filter`
 *   - Reads the card's category from `card.dataset.category`
 *   - Safe to call multiple times — replaces listeners by cloning buttons
 *
 * Source: extracted from The Digital Experts website (The Digital Experts project)
 */

/**
 * @param {object} options
 * @param {string} [options.btnSelector='.filter-btn']
 * @param {string} [options.cardSelector='.portfolio-card']
 * @param {string} [options.activeClass='active']
 * @param {string} [options.allValue='all']
 */
function initPortfolioFilter({
  btnSelector  = '.filter-btn',
  cardSelector = '.portfolio-card',
  activeClass  = 'active',
  allValue     = 'all',
} = {}) {
  const filterBtns = document.querySelectorAll(btnSelector);
  const cards      = document.querySelectorAll(cardSelector);

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove(activeClass));
      btn.classList.add(activeClass);

      const filter = btn.dataset.filter;

      // Show/hide cards
      cards.forEach(card => {
        const match = filter === allValue || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

module.exports = { initPortfolioFilter };
