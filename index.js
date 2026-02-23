/**
 * claude-skills/index.js
 * ──────────────────────
 * Master registry for all reusable skills.
 *
 * This file is the single source of truth for what's available in
 * this library. Every skill added to a subfolder should be registered
 * here with a short description so Claude Code (and you) can quickly
 * see what exists.
 *
 * ──────────────────────────────────────────────────────────────────
 * HOW TO USE THIS LIBRARY IN A CLAUDE CODE SESSION
 * ──────────────────────────────────────────────────────────────────
 * When starting a new project, tell Claude:
 *   "I have a skills library at ~/Documents/Claude Projects/claude-skills/
 *    Check index.js to see what's available before writing new code."
 *
 * Claude will read this file, see what already exists, and reuse it
 * instead of rewriting things from scratch.
 *
 * ──────────────────────────────────────────────────────────────────
 * HOW TO ADD A NEW SKILL
 * ──────────────────────────────────────────────────────────────────
 * 1. Create the file in the right subfolder
 * 2. Add a header comment (what it does, how to use it, example)
 * 3. Export it from that folder's index.js
 * 4. Import and register it below in the SKILLS REGISTRY
 * 5. Add a one-line entry to the CATALOG comment above it
 *
 * ──────────────────────────────────────────────────────────────────
 * SKILL CATALOG
 * ──────────────────────────────────────────────────────────────────
 *
 * AUTOMATION
 *   (none yet — add to automation/ folder)
 *
 * SCRAPING
 *   (none yet — add to scraping/ folder)
 *
 * WEB
 *   initScrollReveal      — Scroll-triggered animations with stagger (IntersectionObserver)
 *   animateCounter        — Animate a number from 0 to target with ease-out cubic
 *   initCounters          — Set up scroll-triggered counters across the page
 *   initFaqAccordion      — Accessible FAQ accordion (aria-expanded, one open at a time)
 *   initBeforeAfterSlider — Drag/touch before-and-after image comparison slider
 *
 * AI
 *   (none yet — add to ai/ folder)
 *
 * UTILS
 *   (none yet — add to utils/ folder)
 *
 * EXPERIMENTS
 *   (sandbox only — nothing exported)
 *
 * ──────────────────────────────────────────────────────────────────
 */

// --- Skill Imports ---
const automation  = require('./automation');
const scraping    = require('./scraping');
const web         = require('./web');
const ai          = require('./ai');
const utils       = require('./utils');

// --- Master Export ---
module.exports = {
  automation,
  scraping,
  web,
  ai,
  utils,

  /**
   * list() — Print all available skills to the console.
   *
   * Usage:
   *   const skills = require('./claude-skills');
   *   skills.list();
   */
  list() {
    const categories = { automation, scraping, web, ai, utils };

    console.log('\n=== Claude Skills Library ===\n');

    for (const [category, exports] of Object.entries(categories)) {
      const skills = Object.keys(exports).filter(k => k !== 'list');
      if (skills.length === 0) {
        console.log(`  ${category}/   (no skills yet)`);
      } else {
        console.log(`  ${category}/`);
        skills.forEach(skill => console.log(`    - ${skill}`));
      }
    }

    console.log('\nAdd new skills → register in index.js\n');
  },
};
