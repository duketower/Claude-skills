# Claude Skills Library

A personal skills library built alongside Claude Code projects.
Single source of truth: **https://github.com/duketower/Claude-skills**

---

## Two Types of Resources

This repo holds two distinct types of skills:

### 1. Claude Code Skills (`skills/`)
`SKILL.md` files that install into Claude Code and change how Claude behaves.
Auto-invoked when the situation matches — no slash command needed.

```bash
# Install a skill globally
cp -r skills/dev-workflow/brainstorming ~/.claude/skills/brainstorming

# Install all SEO skills
cp -r skills/seo/. ~/.claude/skills/
```

→ See [skills/README.md](skills/README.md) for the full catalog (55 skills across 8 categories)

---

### 2. Code Utilities (`web/`, `ai/`, `utils/`, `automation/`, `scraping/`)
Reusable JS functions, HTML/CSS patterns, and knowledge files to copy into projects.

```js
// Example: copy animateCounter.js into your project
import { animateCounter } from './shared/animateCounter.js';
```

---

## Skills Catalog (Quick Reference)

| Category | Count | Examples |
|----------|-------|---------|
| **Dev Workflow** | 14 | brainstorming, TDD, writing-plans, debugging, code review |
| **Design** | 5 | frontend-design, frontend-ui-ux-engineer, landing-page-builder |
| **SEO** | 6 | seo-geo, local-seo, search-console, bing-webmaster |
| **Analytics** | 5 | google-analytics, marketing-analytics, retention-analytics |
| **CRO** | 4 | page-cro, popup-cro, signup-flow-cro, ab-testing |
| **Content** | 5 | content-strategy, copywriting, social-media-kit, email-sequence |
| **Paid Growth** | 6 | paid-ads, cold-outreach, growth-hacking, affiliate-marketing |
| **Sales Ops** | 7 | crm-builder, lead-scoring, sales-funnel, pricing-optimization |
| **Misc** | 3 | ascii-banner, smart-contract-auditor, find-skills |

---

## Code Utilities Catalog

| Folder | What's Inside |
|--------|--------------|
| [web/](web/) | 10 JS utilities (navbar, scroll, counter, lightbox, FAQ, gallery, etc.) |
| [web/verticals/](web/verticals/) | Website knowledge base for 4 industries (education, medical, corporate, small business) |
| [web/docs/](web/docs/) | Client intake form + project brief template |
| [ai/](ai/) | Outreach prompts (WhatsApp, email, testimonial request, proposal) |
| [utils/](utils/) | Indian formatting helpers (₹, dates, phone, GST, slugify) |

---

## Folder Structure

```
claude-skills/
├── skills/                 ← Claude Code SKILL.md files (55 total)
│   ├── dev-workflow/       ← superpowers: brainstorming, TDD, planning, debugging
│   ├── design/             ← UI creation and review
│   ├── seo/                ← Search optimization
│   ├── analytics/          ← Measurement and data
│   ├── cro/                ← Conversion optimization
│   ├── content/            ← Content and social media
│   ├── paid-growth/        ← Paid acquisition and outreach
│   ├── sales-ops/          ← CRM, sales, revenue
│   └── misc/               ← Niche utilities
├── web/                    ← JS code utilities + verticals + client docs
├── ai/                     ← AI prompt templates
├── utils/                  ← General formatting helpers
├── automation/             ← (planned: n8n patterns)
└── scraping/               ← (planned: scraper patterns)
```

---

## Projects Using This Library

| Project | Skills Used |
|---------|-------------|
| PreSchool Website Builder | `web/`, `skills/dev-workflow/`, `skills/design/`, `web/verticals/` |
| Website Startup | `skills/design/`, `skills/seo/`, `skills/cro/`, `skills/content/` |
| n8n Builder | `automation/`, `utils/` |
| Data Scraping | `scraping/`, `utils/` |

---

*Built with Claude Code. Single source of truth on GitHub.*
