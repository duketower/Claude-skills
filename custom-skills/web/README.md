# web/

Reusable frontend components, templates, and UI utilities.

## What Goes Here

- **Page templates** — starter HTML for landing pages, dashboards, forms
- **UI components** — modals, toasts, dropdowns, tabs, accordions
- **Fetch wrappers** — `fetch()` with retry, auth headers, error handling
- **Form helpers** — client-side validation, field formatting, submit handlers
- **Layout utilities** — responsive grid helpers, CSS custom properties
- **Animation snippets** — scroll-triggered reveals, transitions, loaders

## Planned Skills

| File | Description | Status |
|---|---|---|
| `fetchWithRetry.js` | `fetch()` wrapper with automatic retry on 5xx errors | Planned |
| `validateForm.js` | Validate required fields, email format, min/max length | Planned |
| `showToast.js` | Lightweight toast notification (no dependencies) | Planned |
| `modal.js` | Accessible modal dialog with open/close/backdrop | Planned |
| `landingPage.html` | Minimal landing page template with hero + CTA | Planned |

## Example Usage

```js
// Once fetchWithRetry.js is added:
import { fetchWithRetry } from './web';

const data = await fetchWithRetry('/api/users', {
  method: 'GET',
  retries: 3,
});
```

## Available JS Skills

| File | Description |
|------|-------------|
| `navbarUtils.js` | Sticky navbar + hamburger menu toggle |
| `smoothScroll.js` | Anchor link smooth scrolling with offset |
| `scrollReveal.js` | Scroll-triggered animations (IntersectionObserver) |
| `faqAccordion.js` | Accessible FAQ accordion, one open at a time |
| `formValidation.js` | Inline form validation with error messages |
| `beforeAfterSlider.js` | Before/after image comparison slider |
| `animateCounter.js` | Number counter animation from 0 to target |
| `animateNumber.js` | Animate between two values instantly |
| `portfolioFilter.js` | Gallery/portfolio filtering by data-category |
| `lightbox.js` | Fullscreen image lightbox with keyboard nav |

## Industry Vertical Knowledge Base

`verticals/` — Research-backed documentation for building websites in specific industries:

| Vertical | File |
|----------|------|
| Schools, Preschools, E-learning | `verticals/education.md` |
| Clinics, Hospitals, Dental | `verticals/medical.md` |
| Agencies, IT Companies, SaaS | `verticals/corporate.md` |
| Restaurants, Salons, Local Services | `verticals/small-business.md` |
| Universal patterns (fonts, colors, CDN libs, WCAG) | `verticals/universal-tech.md` |
| Build playbook (HTML shell, CSS vars, folder structure) | `verticals/template-library.md` |

## Source Projects

- JS skills: `/Users/anurag/Documents/Claude Projects/PreSchool Website Builder/shared/js/`
- Website templates: `/Users/anurag/Documents/Claude Projects/PreSchool Website Builder/templates/`
