# automation/

Reusable building blocks for workflow automation.

## What Goes Here

- **n8n helpers** — utilities that pair with n8n workflow nodes
- **Retry logic** — exponential backoff, retry-with-timeout patterns
- **Webhook handlers** — receive, validate, and route webhook payloads
- **API polling** — poll an endpoint until a condition is met
- **Schedulers** — cron-style task runners and interval helpers
- **Event dispatchers** — fire-and-forget or wait-for-response patterns

## Planned Skills

| File | Description | Status |
|---|---|---|
| `retryWithBackoff.js` | Retry any async function with exponential backoff | Planned |
| `webhookDispatcher.js` | Send and log outgoing webhooks with error handling | Planned |
| `pollUntilDone.js` | Poll an API endpoint until a status condition is met | Planned |
| `n8nHelpers.js` | Common n8n Code node utilities (format data, map fields) | Planned |

## Example Usage

```js
// Once retryWithBackoff.js is added:
const { retryWithBackoff } = require('./automation');

const result = await retryWithBackoff(
  () => fetch('https://api.example.com/data'),
  { maxRetries: 3, delayMs: 1000 }
);
```
