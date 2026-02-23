# utils/

General-purpose utility functions used across all projects.

## What Goes Here

Anything small, reusable, and dependency-free that doesn't belong in a
specific category. If you find yourself copy-pasting the same helper
into a second project, it's a `utils/` candidate.

## Planned Skills

| File | Description | Status |
|---|---|---|
| `stringHelpers.js` | `slugify`, `truncate`, `capitalize`, `stripHTML` | Planned |
| `arrayHelpers.js` | `groupBy`, `chunk`, `dedupe`, `flatMap` | Planned |
| `fileHelpers.js` | `readJSON`, `writeJSON`, `ensureDir`, `listFiles` | Planned |
| `envHelpers.js` | `requireEnv` — throw if a required env var is missing | Planned |
| `dateHelpers.js` | Format dates, parse timestamps, relative time ("2h ago") | Planned |
| `logger.js` | Colorized console logger with log levels | Planned |

## Example Usage

```js
// Once stringHelpers.js is added:
const { slugify } = require('./utils');

slugify('Hello World! 123');
// → 'hello-world-123'
```

```js
// Once arrayHelpers.js is added:
const { groupBy } = require('./utils');

groupBy([
  { city: 'Austin', name: 'Joe' },
  { city: 'Austin', name: 'Amy' },
  { city: 'Dallas', name: 'Sam' },
], 'city');
// → { Austin: [{...}, {...}], Dallas: [{...}] }
```

## Design Rules

- **No external dependencies** — utils must work with Node.js built-ins only
- **Pure functions where possible** — same input always gives same output
- **Small and focused** — one concern per function
