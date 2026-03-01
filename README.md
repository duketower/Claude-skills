# Claude Skills Library

A comprehensive skills library combining custom tools and Anthropic's official skills.
Every time something useful gets built, it lives here — ready to be referenced
in any future project without starting from scratch.

---

## 📂 Overall Structure

```
Claude-Skills/
├── custom-skills/          ← YOUR custom tools & utilities
│   ├── ai/                 # AI utilities and helpers
│   ├── automation/         # n8n helpers, workflow utilities, task runners
│   ├── scraping/           # Scraper functions, parsers, data extraction
│   ├── web/                # Website components, templates, UI snippets
│   ├── utils/              # General-purpose helpers used across projects
│   ├── experiments/        # Work-in-progress ideas and prototypes
│   ├── index.js            # Master registry of custom skills
│   └── README.md           # Custom skills documentation
│
├── anthropic-skills/       ← ANTHROPIC'S official skills (Git Submodule)
│   ├── skills/             # 16 production-ready Anthropic skills
│   │   ├── algorithmic-art/
│   │   ├── brand-guidelines/
│   │   ├── canvas-design/
│   │   └── ... (13 more)
│   ├── template/           # Skill template reference
│   ├── spec/               # Agent Skills specification
│   └── README.md           # Anthropic skills documentation
│
├── docs/                   ← PROJECT DOCUMENTATION
│   ├── SUBMODULE_GUIDE.md
│   ├── QUICK_REFERENCE.md
│   ├── MERGE_ANALYSIS.md
│   └── README.md
│
├── .gitmodules            # Git submodule configuration
├── README.md              # This file
└── .gitignore
```

---

## 🎯 Quick Navigation

### My Custom Tools
👉 **See:** `custom-skills/README.md`
- Browse your custom skills and utilities
- Find what you need for your projects
- Add new custom tools

### Anthropic's Official Skills
👉 **See:** `anthropic-skills/README.md`
- Browse 16 production-ready skills
- Find creative, development, and document tools
- Stay updated with latest versions

### Documentation
👉 **See:** `docs/README.md`
- QUICK_REFERENCE.md - Essential commands
- SUBMODULE_GUIDE.md - How submodules work
- MERGE_ANALYSIS.md - Why this structure is best

---

## 🚀 How to Use This Library

### For Your Custom Skills
1. **Find what you need** — browse `custom-skills/` by category
2. **Copy or reference** — skills are designed to be standalone
3. **Add new ones** — put reusable code in `custom-skills/`

### For Anthropic Skills
1. **Explore available skills** — check `anthropic-skills/skills/`
2. **Stay updated** — run `git submodule update --remote --merge`
3. **Use in projects** — reference them like any other library

### Reference in Claude Code
Point Claude at either folder:
- Your custom tools: `custom-skills/`
- Anthropic tools: `anthropic-skills/skills/`

---

## ➕ Adding New Skills

### Adding Custom Skills
1. Create file in appropriate `custom-skills/` subfolder
2. Add header comment explaining purpose and usage
3. Export from `custom-skills/index.js`
4. Document in `custom-skills/README.md`

### Adding Anthropic Skills
Not needed — they're automatically managed via Git submodule!
Just run: `git submodule update --remote --merge`

---

## 📊 What's Included

### Custom Skills
- **automation/** - n8n, workflows, task runners
- **scraping/** - Web scrapers, parsers, data extraction
- **web/** - Components, templates, UI snippets
- **ai/** - Prompts, agent logic, tools, chains
- **utils/** - General-purpose helpers
- **experiments/** - Work-in-progress ideas

### Anthropic Skills (16 Total)
- **5 Creative & Design** - art, branding, design, GIFs
- **6 Development & Technical** - MCP, skills, testing, web apps
- **5 Document Manipulation** - Word, PDF, PowerPoint, Excel, Web UI

---

## 🔄 Updating Anthropic Skills

Anthropic regularly improves their skills. Get updates with:

```bash
git submodule update --remote --merge
git commit -m "Update Anthropic Skills to latest version"
git push
```

Time: **30 seconds**
Benefit: Latest features and bug fixes

---

## 🏗️ Project Organization

| Aspect | Details |
|--------|---------|
| Your Code | `custom-skills/` - Everything you build |
| Theirs | `anthropic-skills/` - Linked from GitHub |
| Docs | `docs/` - All documentation |
| Status | Clean, organized, professional |

---

## 💡 Key Principles

✅ **Clear Separation** - Your code vs Anthropic's code
✅ **Easy Maintenance** - One command to update
✅ **Professional** - Industry best practices
✅ **Documented** - Everything explained
✅ **Modular** - Skills are portable
✅ **Growing** - Add new tools whenever needed

---

## 📖 Getting Started

**First time?** Read in this order:
1. `custom-skills/README.md` - Your tools
2. `docs/QUICK_REFERENCE.md` - Essential commands
3. `anthropic-skills/README.md` - Available skills

---

*Built with Claude Code — combining custom tools with Anthropic's professional skills.*
