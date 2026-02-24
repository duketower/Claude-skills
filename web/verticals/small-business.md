# Small Business Vertical — Website Patterns

## Sub-verticals
1. **Restaurant / Café / Cloud Kitchen** — menu, reservations, delivery links
2. **Salon / Spa / Beauty Studio** — service menu, booking, gallery
3. **Retail Shop / Boutique** — product showcase, hours, location
4. **Local Services** — plumber, electrician, AC repair, pest control
5. **Gym / Fitness Studio** — memberships, classes, trainers
6. **Coaching Centre** — courses, results, schedule, fees
7. **Event Venue / Banquet Hall** — gallery, capacity, packages, inquiry

---

## Key Reference Repos
| Repo | Stars | Demo | Type |
|------|-------|------|------|
| `codewithsadee/grilli` | 529★ | https://codewithsadee.github.io/grilli/ | Restaurant (Luxury) |
| `codewithsadee/foodhub-restaurant-website` | 116★ | https://codewithsadee.github.io/foodhub-restaurant-website/ | Restaurant |
| `codewithsadee/foodie` | active | https://codewithsadee.github.io/foodie/ | Fast Food |
| `bogdanchiikk/beauty-salon-website-frontend` | active | HTML/CSS/JS | Salon |
| `unfolding-io/Astrorante` | active | Astro + Storyblok | Fine Dining |

---

## Page Structure

### Restaurant
1. **Header** — logo + nav (Menu, About, Reservations) + phone
2. **Hero** — full-screen slider (3 slides) with bold food headlines + CTA
3. **Services / Offerings** — dine-in, takeaway, private events, catering
4. **About / Our Story** — chef background, restaurant philosophy
5. **Special Dish / Feature** — hero card for signature item (image + recipe story)
6. **Menu Section** — tabbed by category (Starters, Mains, Desserts, Drinks)
7. **Testimonials** — Google Review style cards or food blog quotes
8. **Reservation Form** — date, time, party size, name, phone
9. **Why Choose Us** — local sourcing, hygiene, family-friendly, etc.
10. **Location + Hours** — map + table (Mon-Sun hours)
11. **Footer** — phone, address, social, delivery links (Swiggy/Zomato)

### Salon / Spa
1. Header — logo + nav + "Book Now" button
2. Hero — mood image (clean, luxurious) + tagline + "Book Appointment"
3. Services — cards: Haircut, Coloring, Facial, Massage, Bridal, etc.
4. About Us — salon story, team expertise
5. Gallery — before/after images OR style showcase
6. Pricing — service price list (optional, many prefer "call for price")
7. Team / Stylists — profile cards with specialties
8. Testimonials — client reviews
9. Booking Form / Link to Booksy / Vagaro / Google Booking
10. Hours + Location + Footer

### Local Services (Plumber / Electrician / AC Repair)
1. Header — logo + PHONE (huge, click-to-call) + "Call Now" button
2. Hero — service area covered + "Emergency? Call Now" banner
3. Services list — all service types offered
4. Why Choose Us — licensed, insured, same-day, warranty
5. Service Areas — list of neighborhoods/cities covered
6. Pricing (optional) — starting from ₹X
7. Reviews — Google Review cards
8. Contact Form — name, phone, issue type, preferred time
9. Location + Footer

---

## Design Conventions

### Luxury Restaurant (dark, moody)
```css
/* grilli palette */
--gold: hsl(38, 61%, 73%);           /* gold-crayola */
--black: hsla(40, 12%, 5%, 1);       /* smoky black */
--dark-bg: hsla(210, 4%, 9%, 1);     /* eerie black */
--white: hsla(0, 0%, 100%, 1);
--font-display: 'Forum', cursive;    /* elegant serif */
--font-body: 'DM Sans', sans-serif;
```

### Casual / Family Restaurant
- Warm reds, oranges, cream backgrounds
- Rounded fonts (Poppins, Nunito)
- Bright food photography

### Salon / Spa (Clean + Premium)
- Blush pink, gold, ivory, soft pastels
- Serif display font (Playfair Display, Cormorant)
- Clean whitespace, minimal decorations
- High-quality before/after gallery

### Local Services (Trust + Emergency)
- Bold blue or orange (action-oriented)
- Large phone number (40–60px)
- Emergency/same-day callout badge
- License number for credibility

---

## Key UX Patterns

### Universal for Small Business
- **Click-to-call phone** — always `<a href="tel:+91XXXXXXXXXX">` — critical on mobile
- **WhatsApp floating button** — bottom-right, always visible
- **Google Maps embed** — essential, not just an address
- **Business Hours** — clear table (Mon-Fri, Sat, Sun/holiday)
- **Google Reviews** — embed or screenshot widget
- **"Get Directions" button** — links to Google Maps directions
- **Social proof** — years in business, customers served, 5-star reviews

### Restaurant Specific
- **Online Ordering Links** — Swiggy / Zomato / own ordering system
- **Menu PDF download** option
- **"Book a Table"** — prominent CTA with Dineout / EazyDiner or custom form
- **Food delivery badges** — "Available on Swiggy, Zomato"

### Salon Specific
- **Online Booking** — link to Booksy, Vagaro, or simple form
- **Service + price list** — clients want pricing
- **Before/After Gallery** — most effective for salon conversions
- **Stylists' social media** — Instagram links for portfolios

---

## Local SEO (Critical for Small Business)
All small business sites MUST include:
```html
<!-- Schema.org LocalBusiness markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",        <!-- or Salon, LocalBusiness, etc. -->
  "name": "Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 MG Road",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "telephone": "+91-98400-12345",
  "openingHours": "Mo-Sa 10:00-22:00",
  "url": "https://www.businessname.com"
}
</script>
```
- NAP (Name, Address, Phone) consistent across header, footer, contact page
- Google Business Profile link/embed
- Local keywords in meta title: "Best Italian Restaurant in Koramangala, Bengaluru"

## Forms
- **Reservation**: Name → Phone → Date → Time → Party Size → Special Requests
- **Appointment (Salon)**: Name → Phone → Service → Preferred Date → Preferred Time
- **Service Request**: Name → Phone → Service Type → Address (for home service) → Preferred Time

## Tech Notes
- Same stack: HTML/CSS/Vanilla JS works perfectly for small business
- Google Fonts: Playfair Display (luxury), Poppins (casual), DM Sans (modern)
- For booking: embed Calendly widget, or use Formspree for simple forms
- Swiggy/Zomato links — use their restaurant partner badge images
