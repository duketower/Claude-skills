# Medical / Healthcare Vertical — Website Patterns

## Sub-verticals
1. **Multi-specialty Clinic** — multiple departments, doctors, appointment booking
2. **Single-doctor Practice** — GP, specialist, one physician site
3. **Dental Clinic** — service menu, before/after gallery, patient portal
4. **Physiotherapy / Rehab** — exercise content, progress tracking links
5. **Diagnostic Lab** — test catalog, home collection, report download
6. **Hospital** — large institution, ER contact prominent

---

## Key Reference Repos
| Repo | Stars | Demo | Stack |
|------|-------|------|-------|
| `codewithsadee/doclab` | 126★ | https://codewithsadee.github.io/doclab/ | HTML/CSS/JS |
| `bedimcode/responsive-medical-website` | active | YouTube tutorial | HTML/CSS/JS |
| `themixlyweb/nextjs-dental-website-template` | recent | Next.js + Bootstrap | Next.js |
| `themefisher/medic-bootstrap` | 18★ | Bootstrap template | Bootstrap |
| `sayed116/house-physio` | recent | Physio site | HTML/CSS/JS |

---

## Page Structure (Multi-specialty Clinic)
1. **Header** — logo + nav + emergency phone (prominent, red/orange)
2. **Hero** — professional image + tagline + "Book Appointment" primary CTA
3. **Services by Specialty** — icon cards: Cardiology, Orthopedics, Gynecology, Pediatrics, etc.
4. **About Us** — clinic story, years of experience, accreditations
5. **Doctor Listing** — profile card grid (photo, name, specialty, years exp, "Book" button)
6. **Appointment Booking Form** — name, phone, department, preferred date/time, message
7. **Why Choose Us** — features: 24/7 care, certified doctors, modern equipment, insurance
8. **Patient Testimonials** — star ratings + text
9. **Blog / Health Articles** — trust-building content
10. **Gallery** — facility photos (operation theatre, waiting room, etc.)
11. **Insurance Empanelment** — logo grid of accepted insurance
12. **Location + Hours** — map embed + table of department timings
13. **Footer** — emergency line, WhatsApp, address, quick links, social

### Dental Clinic Additions
- Before/after treatment gallery (with slider)
- Service pricing table (teeth whitening, braces, implants)
- "Smile Design" visual journey

---

## Design Conventions

### Clinical / Trustworthy
```css
/* doclab palette */
--primary: hsl(186, 100%, 19%);    /* midnight green / teal */
--accent: hsl(182, 100%, 35%);     /* verdigris */
--bg: hsl(0, 0%, 100%);            /* clean white */
--text: hsl(222, 44%, 8%);         /* rich black */
--font-heading: 'Oswald', sans-serif;
--font-body: 'Rubik', sans-serif;
```

### Warm / Approachable (family clinic)
- Soft blues, greens, warm whites
- Photography: smiling patients, clean facilities
- Avoid: harsh red (emergency only), dark backgrounds (feels unsafe)

### Alternative Palettes
- **Blue Trust**: `hsl(210, 100%, 40%)` — professional, corporate healthcare
- **Green Wellness**: `hsl(140, 50%, 35%)` — natural, holistic
- **Purple Specialist**: `hsl(260, 50%, 50%)` — premium, specialist

---

## Critical UX Rules
- **"Book Appointment" button** — must be in header, hero, and sticky on mobile
- **Emergency number** — bold, red, always visible on desktop header
- **WhatsApp** — essential for Indian context (`https://wa.me/91XXXXXXXXXX`)
- **Google Maps** — iframe embed in contact section, not just address text
- **NABH/ISO badge** — accreditation logos build trust
- **Doctor photos** — professional headshots, white coat preferred
- **Mobile-first** — 70%+ of patients search on mobile
- **Page speed** — slow sites lose appointments; optimize images

## ADA / Accessibility
- All images must have descriptive alt text
- Forms must have visible labels (not just placeholder)
- Color contrast: medical text on white must pass WCAG AA (4.5:1)
- Focus states on interactive elements

## Forms
- **Appointment Form**: Full Name → Phone → Department → Preferred Date → Preferred Time → Message → Submit
- **Home Collection Form** (labs): Name → Phone → Address → Test Required → Preferred Time

## Tech Notes
- Same codewithsadee stack: Ionicons, Google Fonts, Vanilla JS
- For appointment booking backend: use Formspree or Netlify Forms for static sites
- For complex booking: link to third-party (Practo, JustDial, Calendly)

## HIPAA / Compliance on Web Forms
Forms MUST include a HIPAA disclosure:
```html
<p class="hipaa-notice">
  Your information is protected under HIPAA. We will never share your data.
  <a href="/privacy-policy">Privacy Policy</a>
</p>
```
- Forms must send over HTTPS
- Do NOT ask for diagnosis/symptoms in contact forms — that's PHI (Protected Health Info)
- Google Analytics/Meta Pixel are increasingly scrutinized — use Plausible or Fathom if possible

## Schema.org for Medical Sites
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clinic Name",
  "telephone": "+91-XXXXXXXXXX",
  "medicalSpecialty": "General Practice",
  "address": { "@type": "PostalAddress", "addressLocality": "City", "addressCountry": "IN" },
  "availableService": [
    { "@type": "MedicalProcedure", "name": "General Consultation" }
  ]
}
```
Use `@type: "Dentist"` for dental, `"Physician"` for individual doctor profiles.

## Mobile Sticky Bottom Bar (Critical for Medical)
```css
@media (max-width: 768px) {
  .mobile-cta-bar {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: white;
    border-top: 1px solid #e2e8f0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    gap: 12px;
    z-index: 100;
  }
  .mobile-cta-bar .btn { flex: 1; text-align: center; padding: 14px; }
  body { padding-bottom: 80px; }
}
```
Two buttons: "Call Now" (tel:) and "Book Appointment" — biggest mobile conversion driver.

## Typography Notes (Medical Specific)
- Base font size: **17px** (not 16px) — older patient demographics need larger text
- Body line-height: 1.75 (more generous than other verticals)
- Never use font-weight 300 (light) for body text — minimum 400
- Font picks: Inter + Lato, or Merriweather + Open Sans (serif adds authority)

## Additional Reference Repos
| Repo | Stars | Notes |
|------|-------|-------|
| `bootstrapmade.com/medilab-*` | 500★ | Best single HTML5 medical template, Bootstrap 5 |
| `themewagon/medical` | 400★ | Bootstrap 5, clinic |
| `colorlib-support/template-mediplus` | 600★ | Bootstrap 4 general clinic |
| `technext/lifecare` | active | Free hospital/clinic HTML |

## India-Specific Notes
- List: "Cashless Insurance" accepted panels
- Mention CGHS / ECHS empanelment if applicable
- Hindi/regional language toggle for non-metro locations
- Home visit option is a differentiator
