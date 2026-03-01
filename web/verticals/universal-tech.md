# Universal Tech Patterns — All Verticals

## The codewithsadee Method (Proven Across All Verticals)
High-star HTML/CSS/JS templates from codewithsadee follow a consistent, clean pattern.
All templates: https://github.com/codewithsadee

### Core Stack (No Build Tools)
```html
<!-- Google Fonts (2 fonts max: display + body) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DISPLAY_FONT&family=BODY_FONT&display=swap" rel="stylesheet">

<!-- IonIcons (excellent, consistent icon set) -->
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

### CSS Architecture
```css
/* 1. Custom Properties (all variables at :root) */
/* 2. Reset / Base styles */
/* 3. Reusable utility classes */
/* 4. Component styles (header, hero, section, footer) */
/* 5. Media queries at bottom */

/* Standard section padding */
--section-padding: 75px; /* or 100px or 120px */
```

### HTML Structure Pattern (Every Template)
```html
<body id="top">
  <header class="header" data-header>
    <!-- logo + nav + CTA button -->
  </header>

  <main>
    <section class="section hero" id="home" aria-label="hero"> ... </section>
    <section class="section [name]" aria-label="[name]"> ... </section>
    <!-- repeat for each section -->
  </main>

  <footer class="footer"> ... </footer>

  <!-- Back to top -->
  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn></a>

  <!-- IonIcons scripts -->
</body>
```

### JS Pattern (Vanilla, No Libraries)
```javascript
// 1. Nav toggle (hamburger)
const header = document.querySelector("[data-header]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

// 2. Back to top visibility
window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});

// 3. Scroll reveal (IntersectionObserver)
const revealElements = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("revealed");
  });
}, { threshold: 0.1 });
revealElements.forEach(el => observer.observe(el));
```

---

## Font Pairings by Vertical

| Vertical | Display Font | Body Font | Mood |
|----------|-------------|-----------|------|
| Restaurant (luxury) | Forum (cursive) | DM Sans | Elegant, premium |
| Restaurant (casual) | Poppins 700 | Poppins 400 | Friendly, warm |
| Medical | Oswald | Rubik | Professional, clean |
| Agency (creative) | — | DM Sans only | Modern, minimal |
| Agency (professional) | — | Manrope only | Trustworthy, technical |
| Education (e-learning) | League Spartan | Poppins | Bold, academic |
| Preschool (playful) | Poppins 700 | Nunito | Fun, rounded |
| Corporate (B2B) | — | Inter or DM Sans | Professional, neutral |
| Salon/Spa | Playfair Display | Lato | Luxurious, clean |
| Fitness/Gym | Barlow Condensed | Open Sans | Energetic, strong |

---

## Color Palette by Vertical

| Vertical | Primary | Accent | Background | Mood |
|----------|---------|--------|------------|------|
| Preschool | `hsl(15, 100%, 60%)` orange | `hsl(55, 100%, 65%)` yellow | `hsl(36, 100%, 97%)` cream | Playful |
| Medical | `hsl(186, 100%, 19%)` teal | `hsl(182, 100%, 35%)` green | `hsl(0, 0%, 100%)` white | Clinical |
| Dental | `hsl(210, 100%, 50%)` blue | `hsl(160, 60%, 45%)` mint | `hsl(210, 30%, 98%)` ice white | Clean |
| Restaurant (luxury) | `hsl(38, 61%, 73%)` gold | `hsl(30, 3%, 34%)` gray | `hsl(40, 12%, 5%)` dark | Dark luxury |
| Restaurant (casual) | `hsl(15, 85%, 50%)` red-orange | `hsl(42, 90%, 55%)` amber | `hsl(30, 50%, 96%)` warm white | Appetizing |
| Salon/Spa | `hsl(340, 40%, 70%)` blush | `hsl(38, 50%, 65%)` gold | `hsl(0, 0%, 98%)` ivory | Premium |
| Agency (creative) | `hsl(241, 77%, 63%)` indigo | `hsl(0, 100%, 69%)` coral | `hsl(240, 8%, 12%)` dark | Bold/Modern |
| Agency (B2B) | `hsl(234, 50%, 64%)` periwinkle | `hsl(219, 72%, 56%)` blue | `hsl(220, 20%, 97%)` off-white | Professional |
| Corporate | `hsl(210, 80%, 35%)` navy | `hsl(38, 90%, 55%)` gold | `hsl(0, 0%, 100%)` white | Authority |
| Small Business | `hsl(210, 70%, 45%)` blue | `hsl(38, 90%, 55%)` orange | `hsl(0, 0%, 100%)` white | Trustworthy |

---

## Universal Section Components

### Sticky Header
```html
<header class="header" data-header>
  <div class="container">
    <a href="/" class="logo">BusinessName</a>
    <nav class="navbar" data-navbar>
      <ul class="navbar-list">
        <li><a href="#home" class="navbar-link">Home</a></li>
        <!-- vertical-specific links -->
      </ul>
    </nav>
    <a href="#contact" class="btn btn-primary">Contact Us</a>
    <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
      <ion-icon name="menu-outline"></ion-icon>
    </button>
  </div>
</header>
```

### Stats Counter (Works for All)
```html
<section class="section stats" aria-label="stats">
  <ul class="stats-list">
    <li class="stats-card">
      <p class="h1 stats-text"><span class="counter" data-count="1200">0</span>+</p>
      <p>Happy Clients</p>
    </li>
  </ul>
</section>
```
```javascript
// Simple counter animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const target = +counter.dataset.count;
  const increment = target / 100;
  const update = () => {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 20);
    }
  };
  update();
});
```

### Testimonials Slider (Minimal)
```html
<section class="section testimonials" aria-label="testimonials">
  <ul class="testimonials-list" data-slider>
    <li class="testimonials-item">
      <div class="rating"> <!-- 5 stars --> </div>
      <p class="testimonials-text">"Great service and friendly staff!"</p>
      <div class="profile">
        <img src="avatar.jpg" alt="Customer name">
        <div>
          <p class="name">Priya Sharma</p>
          <p class="label">Customer since 2022</p>
        </div>
      </div>
    </li>
  </ul>
</section>
```

### Google Maps Embed
```html
<div class="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=PASTE_EMBED_CODE_HERE"
    width="100%" height="450" style="border:0;"
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="Business Location Map">
  </iframe>
</div>
```

### WhatsApp Floating Button (India Essential)
```html
<a href="https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to inquire about your services"
   class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
  <ion-icon name="logo-whatsapp"></ion-icon>
</a>
```
```css
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: #25D366;
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 32px;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  z-index: 999;
  transition: transform 0.2s;
}
.whatsapp-float:hover { transform: scale(1.1); }
```

---

## Template Collections to Reference
| Collection | Repo / URL | Count | Best For |
|-----------|-----------|-------|---------|
| codewithsadee templates | github.com/codewithsadee | 50+ | All verticals, HTML/CSS |
| learning-zone/website-templates | 5853★ | 150+ | Reference library |
| HTML5 UP | https://html5up.net | ~20 | Creative/portfolio |
| Start Bootstrap | https://startbootstrap.com | 30+ | Bootstrap-based |
| Themewagon free | https://themewagon.com | 100+ | Various verticals |
| HTML Codex | https://htmlcodex.com | 50+ | Preschool, medical, etc. |

---

## Universal Accessibility Patterns (All Verticals)

### Critical — Always Include
```html
<!-- 1. Skip nav link (first element in body) -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- 2. Lazy load all below-fold images (HUGE performance win) -->
<img src="photo.jpg" alt="Descriptive text" loading="lazy" decoding="async">
<!-- Hero image: eager, never lazy -->
<img src="hero.jpg" alt="..." loading="eager" fetchpriority="high">

<!-- 3. Language declaration -->
<html lang="en">

<!-- 4. Open Graph for WhatsApp/social sharing -->
<meta property="og:title" content="Business Name | City">
<meta property="og:description" content="One-sentence description">
<meta property="og:image" content="https://domain.com/og-image.jpg"> <!-- 1200x630px -->
<meta property="og:type" content="website">
```

```css
/* 5. Focus ring — NEVER remove, always style */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* 6. Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 7. Skip link CSS */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 9999;
  padding: 12px 24px;
  background: var(--color-primary);
  color: white;
}
.skip-link:focus { top: 0; }
```

### Color Contrast Minimums (WCAG AA)
- Normal text: **4.5:1** ratio minimum
- Large text (18pt+ or 14pt+ bold): **3:1** minimum
- UI components (buttons, inputs): **3:1** minimum
- Tool to check: contrast-ratio.com or browser devtools accessibility panel

## Form Handling (No Backend Required)
Since all sites are static HTML, use these services for form submissions:

| Service | Free Tier | Best For |
|---------|-----------|---------|
| **Netlify Forms** | 100 submissions/month | Already on Netlify — add `netlify` attr to `<form>`, zero config |
| **Web3Forms** | 250/month, unlimited forms | Best free option if not on Netlify |
| **Formspree** | 50/month per form | Simple, reliable |
| **Tally.so** | Unlimited free | Enrollment/multi-step forms |

```html
<!-- Netlify Forms — easiest, works immediately on this project -->
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- your fields -->
</form>

<!-- Web3Forms — backup option -->
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_KEY">
  <!-- your fields -->
</form>
```

**Spam prevention** — add to any form:
```html
<!-- Honeypot — bots fill this, humans don't see it -->
<input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
```
For better protection: **Cloudflare Turnstile** (free, no puzzles, privacy-respecting).

## Key CDN-Available Libraries (No Build Step)
These work by adding a `<script>` or `<link>` tag — no npm required:

| Library | CDN Usage | Stars | Use For |
|---------|-----------|-------|---------|
| **AOS** | `<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css">` | 24k★ | Scroll reveal animations |
| **Swiper.js** | CDN: `https://cdn.jsdelivr.net/npm/swiper@11/` | 38k★ | Mobile carousels/sliders |
| **Alpine.js** | `<script defer src="https://unpkg.com/alpinejs@3">` | 26k★ | Interactive components (15KB) |
| **Animate.css** | `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">` | 79k★ | CSS animation classes |
| **GLightbox** | CDN available | 3k★ | Image/video lightbox |
| **GSAP** | `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js">` | 18k★ | Premium scroll animations |
| **Lottie** | CDN: `https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js` | 29k★ | After Effects JSON animations |

**Free Lottie animations**: https://lottiefiles.com/featured (useful for hero sections, loading states)

## Specific Named Templates by Vertical
(Themewagon, BootstrapMade, HTML5UP — all free)

| Vertical | Template Name | Source | Stack |
|----------|--------------|--------|-------|
| Preschool/Education | Eduwell | themewagon.com | Bootstrap 5 |
| Preschool/Kids | Kider | themewagon.com | Bootstrap 5 |
| Education/E-learning | Mentor | bootstrapmade.com | Bootstrap 5 |
| Medical/Clinic | Medilab | themewagon.com | Bootstrap 5 |
| Medical/Clinic | Medi | bootstrapmade.com | Bootstrap 5 |
| Restaurant | Feane | themewagon.com | Bootstrap 5 |
| Restaurant | Yummy | bootstrapmade.com | Bootstrap 5 |
| Corporate/Agency | BizLand | bootstrapmade.com | Bootstrap 5 |
| Corporate/Agency | Arsha (SaaS) | bootstrapmade.com | Bootstrap 5 |
| Fitness/Gym | Fiona | themewagon.com | Bootstrap 5 |
| Hotel | Glint | themewagon.com | Bootstrap 5 |
| Portfolio/Agency | Phantom | html5up.net | Pure HTML5/CSS3 |
| Portfolio/Agency | Hyperspace | html5up.net | Pure HTML5/CSS3 |
| Business | Landed | html5up.net | Pure HTML5/CSS3 |

## Choosing the Right Stack by Project
| Scenario | Stack | Reason |
|----------|-------|--------|
| Small local business | HTML/CSS/JS | No maintenance, easy to hand off |
| School/Clinic with CMS | WordPress | Client can update content |
| Startup SaaS | Next.js + Tailwind | SEO + fast + modern |
| Restaurant with online ordering | Shopify / custom | Payment, inventory needs |
| Portfolio/agency showcase | Astro | Performance, blog support |
| Government/education | HTML/CSS | Accessibility, compatibility |
