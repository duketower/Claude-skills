# Repository Map

A quick guide to finding everything in Claude-Skills.

---

## 🗺️ Where Everything Is

### Your Custom Code
```
custom-skills/
├── ai/              Your AI utilities
├── automation/      Your automation scripts
├── experiments/     Your experimental work
├── scraping/        Your scraping tools
├── utils/           Your utilities
├── web/             Your web components
├── index.js         Your main entry point
└── README.md        Guide to your skills
```

**Access:** `cd custom-skills/`

---

### Anthropic's Official Skills
```
anthropic-skills/
├── skills/          16 production-ready skills
│   ├── algorithmic-art/
│   ├── brand-guidelines/
│   ├── canvas-design/
│   └── ... (13 more)
├── template/        Skill template reference
├── spec/            Skill specification
├── README.md        Anthropic skills overview
└── README_ANTHROPIC.md  About this folder
```

**Access:** `ls anthropic-skills/skills/`  
**Update:** `git submodule update --remote --merge`

---

### Documentation
```
docs/
├── README.md                       Start here
├── QUICK_REFERENCE.md              Command cheat sheet
├── SUBMODULE_GUIDE.md              How submodules work
├── MERGE_ANALYSIS.md               Why this approach
├── MERGE_SUMMARY.md                Merge details
└── SUBMODULE_CONVERSION_COMPLETE.md Conversion info
```

**Access:** `cat docs/QUICK_REFERENCE.md`

---

### Project Configuration
```
Root Directory
├── README.md               Main project guide
├── .gitmodules            Submodule configuration
├── .gitignore            Ignored files
├── .git/                 Git repository
└── REPOSITORY_MAP.md     This file
```

**Access:** `cat README.md`

---

## 🎯 Quick Find

| Looking For | Location | Command |
|-------------|----------|---------|
| YOUR AI tools | custom-skills/ai/ | `ls custom-skills/ai/` |
| YOUR scraping tools | custom-skills/scraping/ | `ls custom-skills/scraping/` |
| Anthropic's skills | anthropic-skills/skills/ | `ls anthropic-skills/skills/` |
| How to use submodules | docs/SUBMODULE_GUIDE.md | `cat docs/SUBMODULE_GUIDE.md` |
| Essential commands | docs/QUICK_REFERENCE.md | `cat docs/QUICK_REFERENCE.md` |
| Project overview | README.md | `cat README.md` |

---

## 📂 Full Directory Tree

```
Claude-Skills/
│
├── README.md                  ← Start here for overview
├── REPOSITORY_MAP.md          ← This file
├── .gitmodules               ← Submodule config
├── .gitignore
│
├── custom-skills/            ← YOUR CODE
│   ├── README.md
│   ├── index.js
│   ├── ai/
│   │   ├── README.md
│   │   ├── index.js
│   │   └── outreachPrompts.js
│   ├── automation/
│   │   ├── README.md
│   │   └── index.js
│   ├── experiments/
│   │   ├── README.md
│   │   └── index.js
│   ├── scraping/
│   │   ├── README.md
│   │   └── index.js
│   ├── utils/
│   │   ├── README.md
│   │   ├── index.js
│   │   └── formatters.js
│   └── web/
│       ├── README.md
│       ├── index.js
│       ├── animateCounter.js
│       ├── animateNumber.js
│       ├── beforeAfterSlider.js
│       ├── faqAccordion.js
│       ├── formValidation.js
│       ├── lightbox.js
│       ├── navbarUtils.js
│       ├── portfolioFilter.js
│       ├── scrollReveal.js
│       └── smoothScroll.js
│
├── anthropic-skills/         ← ANTHROPIC'S CODE (Submodule)
│   ├── README.md
│   ├── README_ANTHROPIC.md
│   ├── THIRD_PARTY_NOTICES.md
│   ├── skills/
│   │   ├── algorithmic-art/
│   │   ├── brand-guidelines/
│   │   ├── canvas-design/
│   │   ├── doc-coauthoring/
│   │   ├── docx/
│   │   ├── frontend-design/
│   │   ├── internal-comms/
│   │   ├── mcp-builder/
│   │   ├── pdf/
│   │   ├── pptx/
│   │   ├── skill-creator/
│   │   ├── slack-gif-creator/
│   │   ├── theme-factory/
│   │   ├── web-artifacts-builder/
│   │   ├── webapp-testing/
│   │   └── xlsx/
│   ├── template/
│   └── spec/
│
├── docs/                     ← DOCUMENTATION
│   ├── README.md
│   ├── QUICK_REFERENCE.md
│   ├── SUBMODULE_GUIDE.md
│   ├── MERGE_ANALYSIS.md
│   ├── MERGE_SUMMARY.md
│   └── SUBMODULE_CONVERSION_COMPLETE.md
│
└── .git/                     ← Git repository
```

---

## 🚀 Common Tasks

### Find your tools
```bash
ls custom-skills/
cd custom-skills/web/
```

### Browse Anthropic skills
```bash
ls anthropic-skills/skills/
ls anthropic-skills/skills/algorithmic-art/
```

### Read documentation
```bash
cat README.md                           # Project overview
cat custom-skills/README.md             # Your skills guide
cat anthropic-skills/README.md          # Anthropic guide
cat docs/QUICK_REFERENCE.md             # Commands
```

### Update Anthropic skills
```bash
git submodule update --remote --merge
git commit -m "Update Anthropic Skills"
```

### Check project structure
```bash
tree -L 2 .                    # Show 2 levels
find . -type d -not -path "./.git/*" | sort
```

---

## 📊 At a Glance

| Folder | Purpose | Owner | Notes |
|--------|---------|-------|-------|
| custom-skills/ | Your tools | You | 6 subdirs + index.js |
| anthropic-skills/ | Official skills | Anthropic | Git submodule |
| docs/ | All documentation | Project | 6 markdown files |
| .git/ | Version control | Git | Repository data |

---

## 💡 Remember

**custom-skills/** = Everything you build  
**anthropic-skills/** = Everything Anthropic provides  
**docs/** = Everything documented  

Clear, organized, professional! ✅

---

**Last Updated:** 2026-03-01

