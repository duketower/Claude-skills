# Corporate / Business Vertical — Website Patterns

## Sub-verticals
1. **Digital Agency** — services, portfolio, case studies, team
2. **IT / Software Company** — products, tech stack, careers
3. **Consulting Firm** — expertise, thought leadership, lead gen
4. **Startup / SaaS** — product hero, pricing, features, free trial
5. **Manufacturing / B2B** — products catalog, certifications, distributors
6. **Professional Services** — lawyers, CAs, architects, HR firms

---

## Key Reference Repos
| Repo | Stars | Demo | Type |
|------|-------|------|------|
| `codewithsadee/pixology` | 204★ | https://codewithsadee.github.io/pixology/ | Digital Agency |
| `codewithsadee/adex` | 153★ | https://codewithsadee.github.io/adex/ | Business Agency |
| `codewithsadee/innohub` | 174★ | https://codewithsadee.github.io/innohub/ | Digital Marketing |
| `codewithsadee/solutry` | 138★ | https://codewithsadee.github.io/solutry/ | IT Agency |
| `themefisher/airspace-bootstrap` | 71★ | Bootstrap | Clean Business |

---

## Page Structure (Agency / Consulting)
1. **Header** — sticky nav + logo + "Get a Quote" CTA
2. **Hero** — bold headline + subtext + dual CTA + video play button OR animation
3. **Services / What We Do** — 3–6 service cards (icon + title + 2 lines description)
4. **About / Why Choose Us** — split layout + bullet differentiators
5. **Stats Counter** — clients served, projects done, years, team size
6. **Portfolio / Case Studies** — filterable project grid (category tabs)
7. **Process / How We Work** — numbered steps (Discovery → Strategy → Execute → Deliver)
8. **CTA Banner** — full-width section "Ready to Start? Let's Talk" + button
9. **Testimonials** — client logos + quotes, or Google review cards
10. **Blog / Insights** — thought leadership articles
11. **Contact Form** — name, company, email, phone, budget range, project type
12. **Footer** — logo + services nav + contact + social + copyright

### SaaS / Startup Additions
- Pricing table (3 tiers: Free / Pro / Enterprise)
- Feature comparison table
- "Start Free Trial" CTA
- Integration logos (works with: Slack, Google, Zapier)
- Demo video or animated product screenshot

### IT Company Additions
- Tech stack badges (React, Node, AWS, Python)
- Careers section with open positions
- GitHub link / open-source contributions
- Client logos / enterprise trust logos

---

## Design Conventions

### Professional Agency (adex palette)
```css
--primary: hsla(234, 50%, 64%, 1);      /* violet-blue crayola */
--dark: hsla(216, 14%, 14%, 1);         /* raisin-black */
--light: hsla(220, 20%, 97%, 1);        /* cultured */
--accent: hsla(219, 72%, 56%, 1);       /* blue crayola */
--font: 'Manrope', sans-serif;          /* single clean font */
```

### Digital/Creative Agency (pixology palette)
```css
--primary: hsl(241, 77%, 63%);          /* majorelle blue */
--dark: hsl(240, 8%, 12%);              /* raisin-black */
--accent: hsl(0, 100%, 69%);            /* bittersweet orange */
--light: hsl(230, 60%, 98%);            /* ghost-white */
--font: 'DM Sans', sans-serif;          /* modern, clean */
```

### Conservative / B2B (professional trust)
- Navy + white + gold accents
- Serif or semi-serif headings for authority
- Clean grid layout, no decorative elements
- Client logo strip builds credibility

---

## Key UX Patterns
- **Hero Video Background** — muted autoplay loop (50–80% overlay darkening)
- **Stats that count up** — uses IntersectionObserver + JS counter
- **Portfolio filters** — tabs to filter by industry/service type
- **Process timeline** — horizontal or vertical numbered steps
- **"Get a Quote" form** — multi-field with budget range dropdown
- **LinkedIn CTA** — link to company LinkedIn page
- **Case study cards** — before/after or metric-led headlines ("300% ROI for Client X")

## Forms
- **Lead Form**: Name → Company → Email → Phone → Budget Range → Project Description → Submit
- **Budget Range options**: Under ₹1L / ₹1–5L / ₹5–20L / ₹20L+ (adjust for market)

## Tech Notes
- Many modern corporate sites use Next.js or Astro (but HTML/CSS still works)
- For HTML/CSS: DM Sans or Manrope are excellent single-font choices
- Animation: CSS `@keyframes` or lightweight AOS (Animate on Scroll) library
- Portfolio gallery: use CSS Grid with `object-fit: cover`

## Additional High-Value Repos (from extended research)
| Repo | Stars | Stack | Notes |
|------|-------|-------|-------|
| `onwidget/astrowind` | 4k★ | Astro + Tailwind | Best corporate Astro starter |
| `cruip/tailwind-landing-page-template` | 3k★ | Tailwind CSS | SaaS/agency, polished UX |
| `shadcn-ui/ui` | 75k★ | React + Tailwind | Design system for B2B products |
| `StartBootstrap/startbootstrap-business-frontpage` | 1k★ | Bootstrap | Simple HTML/CSS corporate |
| `withastro/astro` (examples) | 45k★ | Astro | Official business starter themes |

## Animation Libraries (Corporate Sites)
- **GSAP** — industry standard for scroll-triggered animations on agency sites
- **Framer Motion** — React-specific, used in Next.js B2B products
- **AOS** (Animate on Scroll) — lightweight, drop-in for HTML templates
- **Lenis** — smooth scroll, pairs with GSAP
- **CSS transitions** — sufficient for most hover states and reveals

## Modern Corporate Font Choices (2025)
- `Inter` — most common B2B sans-serif, ultra-readable
- `DM Sans` — friendly professional, works alone
- `Plus Jakarta Sans` — modern, slightly rounded
- `Sora` — clean tech/SaaS feel
- `Manrope` — excellent weight range, corporate trust
- Display pair: `Playfair Display` + `Inter` for consulting/professional services

## Trust Signals for Corporate Sites
- G2 / Clutch / Trustpilot rating widgets
- SOC2 / ISO 27001 / GDPR compliance badges
- "Featured in": Forbes, TechCrunch, Economic Times logos
- Award badges: Inc. 5000, Deloitte Fast 500
- Client logo marquee (infinite CSS scroll, greyscale)

## India-Specific Notes
- GST registration number in footer for B2B credibility
- MSME / Startup India badge if applicable
- Indian payment gateways if selling online (Razorpay, PayU)
- MCA company registration builds trust
- Awards: "Best Digital Agency — Bangalore 2024" style social proof
