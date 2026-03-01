# scraping/

Reusable functions extracted from real scraping projects.

## What Goes Here

- **Parsers** — extract structured data from HTML (names, phones, emails, addresses)
- **Pagination** — handle next-page clicks, infinite scroll, offset/cursor params
- **Browser helpers** — Playwright utilities (wait for element, scroll, screenshot)
- **Data cleaners** — normalize phone numbers, strip whitespace, deduplicate rows
- **Output formatters** — save results to CSV, JSON, or Excel
- **Anti-detection** — random delays, stealth mode, user-agent rotation

## Planned Skills

| File | Description | Status |
|---|---|---|
| `cleanPhone.js` | Normalize phone numbers to E.164 format | Planned |
| `scrollToBottom.js` | Playwright helper: scroll page until no new content loads | Planned |
| `paginateWithNextButton.js` | Click "Next" until last page, collecting results | Planned |
| `saveToCSV.js` | Save an array of objects to a timestamped CSV file | Planned |
| `extractEmails.js` | Pull all email addresses from a page or string | Planned |
| `randomDelay.js` | Wait a random interval to mimic human behavior | Planned |

## Example Usage

```js
// Once cleanPhone.js is added:
const { cleanPhone } = require('./scraping');

const normalized = cleanPhone('(555) 123-4567');
// → '+15551234567'
```

## Source Project

Full scraper implementations live in:
`/Users/anurag/Documents/Claude Projects/Data Scraping/`

Skills here are the extracted, reusable pieces from those implementations.
