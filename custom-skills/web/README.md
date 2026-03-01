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

## Source Project

Full website implementations live in:
`/Users/anurag/Documents/Claude Projects/Website Startup/`
