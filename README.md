# Claude Skills Library

A personal, reusable skills library built alongside Claude Code projects.
Every time something useful gets built, it lives here — ready to be referenced
in any future project without starting from scratch.

---

## Structure

```
claude-skills/
├── automation/     # n8n helpers, workflow utilities, task runners
├── scraping/       # Scraper functions, parsers, data extraction patterns
├── web/            # Website components, templates, UI snippets
├── ai/             # Prompts, agent logic, tool definitions, chains
├── utils/          # General-purpose helpers used across projects
├── experiments/    # Work-in-progress ideas and prototypes
└── index.js        # Master registry — all skills documented here
```

---

## How to Use This Library

1. **Browse by category** — each subfolder has its own README explaining what's inside
2. **Copy what you need** — skills are designed to be standalone and portable
3. **Reference in Claude Code** — point Claude at this repo for context on available tools
4. **Add new skills** — when you build something reusable, drop it in the right folder

---

## Adding a New Skill

1. Put the file in the right subfolder (`automation/`, `scraping/`, etc.)
2. Add a header comment explaining what it does and how to use it
3. Export it from the subfolder's `index.js`
4. Register it in the root `index.js` with a short description

---

## Projects Using This Library

| Project | Skills Used |
|---|---|
| Data Scraping | `scraping/`, `utils/` |
| Website Startup | `web/`, `ai/` |
| n8n Builder | `automation/`, `utils/` |

---

*Built with Claude Code — growing over time as new patterns emerge.*
