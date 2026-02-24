# skills/ — Claude Code Agentic Skills

These are `SKILL.md` files that install into Claude Code and change how Claude behaves.
They are **not code utilities** — they are behavioral instructions for the AI.

## How to Install a Skill

```bash
# Copy to global Claude skills folder (works in all projects)
cp -r skills/dev-workflow/brainstorming ~/.claude/skills/brainstorming

# Or copy an entire category
cp -r skills/seo/. ~/.claude/skills/
```

Once installed, Claude auto-invokes the skill when the situation matches — no slash command needed.

---

## Categories

| Category | Skills | What They Do |
|----------|--------|--------------|
| [dev-workflow/](dev-workflow/) | 14 skills | Full software dev methodology (superpowers) — brainstorming, TDD, planning, debugging, code review |
| [design/](design/) | 5 skills | UI/UX creation and review — bold aesthetics, landing pages, design audits |
| [seo/](seo/) | 6 skills | Search visibility — technical SEO, local SEO, GEO for AI engines, webmaster tools |
| [analytics/](analytics/) | 5 skills | Data & measurement — GA4, UTM, attribution, dashboards, retention |
| [cro/](cro/) | 4 skills | Conversion rate optimization — landing pages, popups, signup flows, A/B testing |
| [content/](content/) | 5 skills | Content & social — strategy, copywriting, email sequences, social media |
| [paid-growth/](paid-growth/) | 6 skills | Paid acquisition & outreach — Google/Meta ads, cold email, affiliate, growth hacking |
| [sales-ops/](sales-ops/) | 7 skills | Sales & revenue — CRM, lead scoring, sales funnels, pricing, RevOps |
| [misc/](misc/) | 3 skills | Niche utilities — ASCII banners, smart contract auditing, skill discovery |

**Total: 55 skills**

---

## Skill Overlap Notes

Some skills cover adjacent territory. Here's how to choose:

### Design
| Use... | When... |
|--------|---------|
| `frontend-design` | Building any UI — auto-invoked, bold aesthetic direction |
| `frontend-ui-ux-engineer` | Visual polish is priority over code quality |
| `web-design-guidelines` | Auditing/reviewing existing UI against Vercel guidelines |
| `awwwards-landing-page` | Specifically using Locomotive Scroll + GSAP + Framer Motion |
| `landing-page-builder` | Building a marketing landing page section-by-section |

### Analytics
| Use... | When... |
|--------|---------|
| `google-analytics` | Deep GA4 work — custom dimensions, Looker Studio, cross-domain |
| `marketing-analytics` | Broader measurement stack — UTM strategy, GTM, attribution modeling |

### SEO
| Use... | When... |
|--------|---------|
| `seo-geo` | Full SEO audit + AI engine optimization (ChatGPT/Perplexity citations) |
| `local-seo` | Local business — Google Business Profile, map pack, citations |
| `search-console` | Google Search Console specifically — indexing, CTR, rich results |
| `bing-webmaster` | Bing / IndexNow specifically |
| `yandex-webmaster` | Russian market specifically |

### CRO
| Use... | When... |
|--------|---------|
| `page-cro` | Landing page optimization — trust signals, heatmaps, form design |
| `popup-cro` | Popups, exit intent, modals, banners |
| `signup-flow-cro` | Registration and trial activation flows |
| `ab-testing` | Statistical experiment design — sample sizes, significance, prioritization |

> `page-cro` covers basic A/B test design. Use `ab-testing` when you need rigorous statistics.
