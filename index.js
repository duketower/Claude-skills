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
 * ──────────────────────────────────────────────────────────────────
 * CLAUDE CODE SKILLS (skills/ folder — SKILL.md files)
 * ──────────────────────────────────────────────────────────────────
 * Install: cp -r skills/<category>/<skill> ~/.claude/skills/<skill>
 * See: skills/README.md for full catalog and overlap guide
 *
 * DEV WORKFLOW (14 skills — from obra/superpowers)
 *   brainstorming, writing-plans, executing-plans, subagent-driven-development,
 *   test-driven-development, systematic-debugging, verification-before-completion,
 *   requesting-code-review, receiving-code-review, dispatching-parallel-agents,
 *   using-git-worktrees, finishing-a-development-branch, writing-skills, using-superpowers
 *
 * DESIGN (5 skills)
 *   frontend-design, frontend-ui-ux-engineer, web-design-guidelines,
 *   awwwards-landing-page, landing-page-builder
 *
 * SEO (6 skills)
 *   seo-geo, local-seo, search-console, bing-webmaster, yandex-webmaster, programmatic-seo
 *
 * ANALYTICS (5 skills)
 *   google-analytics, marketing-analytics, data-analytics, data-management, retention-analytics
 *
 * CRO (4 skills)
 *   page-cro, popup-cro, signup-flow-cro, ab-testing
 *
 * CONTENT (5 skills)
 *   content-strategy, copywriting, social-media-growth, social-media-kit, email-sequence
 *
 * PAID GROWTH (6 skills)
 *   paid-ads, cold-outreach, affiliate-marketing, growth-hacking,
 *   customer-acquisition, business-development
 *
 * SALES OPS (7 skills)
 *   crm-builder, crm-operations, lead-scoring, sales-funnel,
 *   revenue-operations, pricing-optimization, accounting-finance
 *
 * MISC (3 skills)
 *   ascii-banner, smart-contract-auditor, find-skills
 *
 * ──────────────────────────────────────────────────────────────────
 * CODE UTILITIES (web/, ai/, utils/ folders — JS functions)
 * ──────────────────────────────────────────────────────────────────
 *
 * AUTOMATION
 *   (none yet — add to automation/ folder)
 *
 * SCRAPING
 *   (none yet — add to scraping/ folder)
 *
 * WEB (JS utilities)
 *   initScrollReveal      — Scroll-triggered animations with stagger (IntersectionObserver)
 *   animateCounter        — Animate a number from 0 to target with ease-out cubic
 *   initCounters          — Set up scroll-triggered counters across the page
 *   animateNumber         — Animate between two values instantly (e.g. pricing calculators)
 *   initFaqAccordion      — Accessible FAQ accordion (aria-expanded, one open at a time)
 *   initBeforeAfterSlider — Drag/touch before-and-after image comparison slider
 *   initPortfolioFilter   — Filter portfolio/gallery cards by data-category attribute
 *   initLightbox          — Fullscreen image lightbox with prev/next nav, keyboard shortcuts, scroll lock
 *   initNavbarScroll      — Add/remove .scrolled class on navbar after threshold px
 *   initHamburgerMenu     — Mobile hamburger toggle with body-scroll lock
 *   initDropdownNav       — Desktop hover + mobile click dropdowns with close delay
 *   initActiveNavOnScroll — Highlight nav link for the section currently in view
 *   initSmoothScroll      — Smooth anchor-link scrolling with navbar offset
 *   validateForm          — Validate form fields against rules, returns errors object
 *   showError             — Inject inline error message below a form field
 *   clearErrors           — Remove all inline errors from a form
 *   initLiveValidation    — Clear field errors as user types/selects
 *
 * WEB KNOWLEDGE (web/verticals/ — markdown reference files)
 *   education.md       — Preschool, K-12, E-learning website patterns
 *   medical.md         — Clinic, Dental, Hospital website patterns
 *   corporate.md       — Agency, IT, Consulting, SaaS website patterns
 *   small-business.md  — Restaurant, Salon, Local Services website patterns
 *   universal-tech.md  — Fonts, colors, CDN libs, WCAG across all verticals
 *   template-library.md — Build playbook: folder structure, HTML shell, CSS vars
 *
 * AI
 *   whatsappOutreach    — Cold WhatsApp message prompt for local business outreach
 *   emailOutreach       — Cold email prompt with subject line
 *   websiteCopy         — Hero + about + services copy prompt for client websites
 *   followUpMessage     — Follow-up message prompt after no response
 *   testimonialRequest  — Prompt to ask happy clients for a Google review
 *   proposalEmail       — Project proposal email prompt with pricing
 *
 * UTILS
 *   formatRupee         — ₹1,49,999 Indian Rupee formatting (en-IN locale)
 *   formatNumber        — en-IN number formatting with Indian comma grouping
 *   formatDate          — Human-readable Indian date (long / short / numeric)
 *   formatPhone         — +91 73990 06699 display format for Indian mobiles
 *   formatGST           — GSTIN display formatting
 *   slugify             — "Hello World!" → "hello-world"
 *   truncate            — Truncate string with ellipsis
 *   capitalize          — Title-case a string
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
