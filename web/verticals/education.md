# Education Vertical — Website Patterns

## Sub-verticals
1. **Preschool / Kindergarten / Daycare** — enrollment-first, playful, parent-facing
2. **K-12 School** — institutional, events, academics, community
3. **Coaching / Tuition Centre** — courses, results, batch schedules
4. **E-learning Platform** — online courses, categories, cart/checkout

---

## Key Reference Repos (codewithsadee — HTML/CSS/Vanilla JS)
| Repo | Stars | Demo | Type |
|------|-------|------|------|
| `codewithsadee/eduweb` | 224★ | https://codewithsadee.github.io/eduweb/ | E-learning |
| `codewithsadee/eduhome` | 108★ | https://codewithsadee.github.io/eduhome/ | Education |
| `codewithsadee/youdemi` | 110★ | https://codewithsadee.github.io/youdemi/ | Courses |
| `tiagohs/school-hub` | small | Bootstrap HTML5 | School |

---

## Page Structure

### Preschool / Kindergarten (enrollment-first)
1. **Header** — logo + nav (Programs, About, Gallery, Contact) + "Enroll Now" CTA button
2. **Admissions Banner** — seasonal ("Admissions Open 2025-26")
3. **Hero** — full-screen background + tagline + dual CTA (Enroll / Virtual Tour)
4. **Programs** — age-group cards (Playgroup, Nursery, LKG, UKG)
5. **About Us** — founder story + philosophy split layout
6. **Why Choose Us** — 4–6 feature icons (safety, curriculum, teachers, meals)
7. **Gallery** — masonry or grid of classroom photos
8. **Teachers/Staff** — profile card grid
9. **Testimonials** — parent quotes + star ratings
10. **Events** — upcoming events list or mini calendar
11. **Enrollment/Enquiry Form** — name, child DOB, program, phone
12. **FAQ** — accordion
13. **Contact** — address + map + phone + WhatsApp
14. **Footer** — logo + links + hours + social + copyright

### E-learning Platform (course-centric)
1. Header — nav + search + cart icon + login
2. Hero — headline "Learn Anything" + search box
3. Category chips — Math, Science, Languages, etc.
4. About Us — stats + mission
5. Popular Courses — card grid (thumbnail, rating, price, instructor)
6. Video Section — play button on background image
7. Stats counter — students, courses, instructors, certificates
8. Blog/Articles
9. Footer

---

## Design Conventions

### Preschool (Playful)
- **Colors**: Bright primaries — orange, purple, yellow, teal
- **Fonts**: Nunito (body), Poppins (headings) — rounded, friendly
- **Shapes**: Rounded corners (border-radius 12–20px), blob shapes, wavy dividers
- **Imagery**: Happy children, classroom activities, outdoor play
- **Pattern**: Our existing preschool template uses `--color-primary:#FF6B6B` `--color-secondary:#4ECDC4` `--color-accent:#FFE66D`

### E-learning / School (Professional)
```css
/* eduweb palette */
--primary: hsl(170, 75%, 41%);     /* kappel green */
--accent: hsl(42, 94%, 55%);       /* selective yellow */
--text-dark: hsl(0, 0%, 9%);
--font-display: 'League Spartan', sans-serif;
--font-body: 'Poppins', sans-serif;
```

---

## Must-Have Components (India context)
- **WhatsApp CTA** — floating button + enquiry form opt-in
- **Admission season banner** — yellow, dismissible
- **Indian academic calendar** — April–March year
- **Board affiliation badge** — CBSE / ICSE / State board / IB
- **Age-group breakdown** — Playgroup 1.5–2.5y / Nursery 2.5–3.5y / LKG / UKG
- **Fee structure table** (optional — many prefer "call for fees")
- **Testimonial videos** — parents on camera builds trust

## Forms
- **Enquiry Form fields**: Parent Name → Child Name → DOB → Mobile → Program → Source → Email (optional) → WhatsApp opt-in
- **Admission Form fields**: Full child details + documents checklist

## Current Preschool Template — Known Gaps vs. Industry Standard
These are missing from the current demo site (priority order):
1. **`og:image` meta tag** — when parents share the link on WhatsApp, no image preview shows
2. **`loading="lazy"` on images** — gallery and testimonials pages miss this; add to all non-hero images
3. **Mobile sticky bottom CTA bar** — fixed bottom bar with "Call Now" + "WhatsApp" on mobile; highest-converting mobile element
4. **`canonical` URL tag** — prevents duplicate content (with/without index.html)
5. **localStorage for banner dismissal** — currently in-memory only; survives page refreshes if persisted
6. **`og:image` in `<head>`** — needed for WhatsApp link preview cards

## JS Library References (For When Vanilla Isn't Enough)
| Library | Purpose | Stars | Size |
|---------|---------|-------|------|
| Swiper.js | Mobile-swipe carousels/sliders | 38k★ | ~28KB |
| AOS.js | Animate On Scroll | 27k★ | ~15KB |
| GLightbox | Image lightbox (MIT, modern) | 3k★ | ~12KB |
| CountUp.js | Number counters | 10k★ | ~5KB |
| Isotope.js | Gallery filtering + masonry | 11k★ | ~20KB |

**Recommended**: GLightbox for gallery lightbox (MIT licensed, swipe-enabled, zero jQuery).

## Additional Template Collections for Education
| Source | URL | Notes |
|--------|-----|-------|
| Colorlib edu templates | colorlib.com | Bootstrap-based, 300-800★ each |
| Educa (colorlib) | github.com/colorlib/educa-template | ~800★, full K-12 |
| HTML5 UP (Stellar, Hyperspace) | html5up.net | CC3.0, widely adapted |
| EduMall forks | Various | Bootstrap 5, LMS-style course cards |

## Tech Notes
- Google Fonts: Poppins + Nunito via CDN
- Icons: Font Awesome 6 CDN
- No build step required
- WhatsApp: `https://wa.me/91XXXXXXXXXX`
