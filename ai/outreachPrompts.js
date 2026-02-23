/**
 * ai/outreachPrompts.js
 * ─────────────────────
 * Prompt templates for Binary Ventures client outreach, website copy,
 * and follow-up communications. Use these with Claude (or any LLM) to
 * generate high-quality, India-specific business content quickly.
 *
 * Functions (all return a ready-to-use prompt string):
 *   whatsappOutreach(business)    — Cold WhatsApp intro message
 *   emailOutreach(business)       — Cold email with subject line
 *   websiteCopy(business)         — Hero + about + services copy for a client site
 *   followUpMessage(business)     — Follow-up after no response (3–5 days later)
 *   testimonialRequest(business)  — Ask a happy client for a review/testimonial
 *   proposalEmail(business)       — Send a project proposal with pricing
 *
 * Each function accepts a `business` object:
 *   {
 *     name:        string  — Business name (e.g. "Sharma Sweets")
 *     type:        string  — Type (e.g. "sweet shop", "salon", "clinic")
 *     city:        string  — City (e.g. "Lucknow")
 *     ownerName:   string  — Owner's first name (e.g. "Rajesh")
 *     pain:        string  — Optional known pain point (e.g. "no online presence")
 *     budget:      string  — Optional budget tier ("Starter" | "Growth" | "Pro")
 *   }
 *
 * Usage:
 *   const { whatsappOutreach, websiteCopy } = require('./ai/outreachPrompts');
 *
 *   const prompt = whatsappOutreach({
 *     name: 'Sharma Sweets',
 *     type: 'sweet shop',
 *     city: 'Lucknow',
 *     ownerName: 'Rajesh',
 *   });
 *
 *   // Then pass `prompt` to Claude:
 *   // const response = await callClaude(prompt);
 *
 * Source project: Binary Ventures — Website Startup (marketing/)
 */


/**
 * Cold WhatsApp outreach message for a local business.
 * Output should be short (5–8 lines), conversational, in the owner's language.
 */
function whatsappOutreach({ name, type, city, ownerName, pain = '' }) {
  return `
Write a short, friendly WhatsApp outreach message in Hinglish (mix of Hindi and English) for Binary Ventures to send to a local business owner.

Business details:
- Business name: ${name}
- Type: ${type}
- City: ${city}
- Owner name: ${ownerName}
${pain ? `- Known pain point: ${pain}` : ''}

Requirements:
- Address the owner by first name (${ownerName} ji)
- Mention we noticed they don't have a website or their online presence is weak
- Briefly explain what Binary Ventures does (we build websites for local businesses)
- Mention one concrete benefit (e.g. customers find them on Google, 24/7 booking)
- End with a soft call to action — ask if they have 10 minutes for a free call
- Keep it under 80 words, warm and non-pushy
- NO formal corporate language — write like a helpful local person
- Do NOT use bullet points or formatting — it's a WhatsApp message
`.trim();
}


/**
 * Cold email outreach with subject line.
 * More detailed than WhatsApp — suitable for email.
 */
function emailOutreach({ name, type, city, ownerName, pain = '' }) {
  return `
Write a cold outreach email from Binary Ventures to a local business owner in India.

Business details:
- Business name: ${name}
- Business type: ${type}
- City: ${city}
- Owner name: ${ownerName}
${pain ? `- Known pain point: ${pain}` : ''}

About Binary Ventures:
- We build professional websites for small businesses across India
- Pricing starts at ₹49,999 (one-time)
- We include local SEO so customers find them on Google
- We offer n8n-powered booking automation as an add-on

Format:
Subject: [Write a specific, curiosity-driven subject line]

Body:
- Personalised opening referencing their specific business
- 2–3 pain points their business likely faces without a website
- How Binary Ventures solves these specifically for ${type} businesses
- Social proof line (e.g. "We've helped restaurants in [city] get 3x more bookings")
- Clear, low-pressure CTA: book a free 15-minute call
- Sign off from Anurag Tiwari, Co-Founder

Keep the email under 200 words. Professional but human — no corporate fluff.
`.trim();
}


/**
 * Generate website copy for a client's new website.
 * Returns a prompt that produces hero text, about section, and services list.
 */
function websiteCopy({ name, type, city, ownerName }) {
  return `
Write professional website copy for a local Indian business. The copy should feel modern, trustworthy, and help the business rank on Google.

Business details:
- Business name: ${name}
- Business type: ${type}
- City: ${city}
- Owner name: ${ownerName}

Write the following sections:

1. **Hero Section**
   - Headline (max 8 words, benefit-focused)
   - Subheadline (1–2 sentences expanding on the headline)
   - Primary CTA button text
   - Secondary CTA button text

2. **About Section**
   - 2–3 sentences about the business, founder, and what makes them special
   - Mention ${city} and local community connection

3. **Services / Offerings** (3–5 items)
   - Each with a short name and 1-line description

4. **SEO Meta**
   - Page title (under 60 chars)
   - Meta description (under 155 chars, includes "${city}" and "${type}")

Keep the tone warm, confident, and locally rooted. Write in English but keep it accessible (avoid jargon). No placeholder text — write real, usable copy.
`.trim();
}


/**
 * Follow-up message after no response to the initial outreach.
 */
function followUpMessage({ name, ownerName, type }) {
  return `
Write a short, friendly follow-up WhatsApp message in Hinglish for Binary Ventures to send 4–5 days after the initial outreach with no response.

Context:
- Business: ${name} (${type})
- Owner: ${ownerName}
- We reached out earlier about building them a website

Requirements:
- Acknowledge they're likely busy
- Add one new piece of value or a quick insight (e.g. "Did you know 70% of people Google a business before visiting?")
- Re-state the free call offer
- Under 60 words
- Warm, not salesy or desperate
`.trim();
}


/**
 * Message to request a testimonial or Google review from a happy client.
 */
function testimonialRequest({ name, ownerName, type, city }) {
  return `
Write a short WhatsApp message in Hinglish from Binary Ventures asking a satisfied client to leave a Google review or share a testimonial.

Client details:
- Business: ${name} (${type}) in ${city}
- Owner: ${ownerName}
- We recently built their website and they're happy with the results

Requirements:
- Thank them genuinely for their trust
- Mention one specific result if possible (e.g. "happy to hear you're getting more calls")
- Politely ask if they'd share a quick review on Google or a 2-line testimonial
- Offer to help if they're unsure how
- Under 70 words, warm and conversational
`.trim();
}


/**
 * Proposal email with pricing after an initial conversation.
 */
function proposalEmail({ name, ownerName, type, city, budget = 'Growth' }) {
  const pricing = {
    Starter: { price: '₹49,999', features: 'up to 5 pages, mobile-friendly, basic SEO, contact form' },
    Growth:  { price: '₹99,999', features: 'up to 10 pages, advanced SEO, blog, Google Analytics, WhatsApp chat' },
    Pro:     { price: '₹1,79,999', features: 'unlimited pages, booking automation, custom integrations, priority support' },
  };
  const plan = pricing[budget] || pricing['Growth'];

  return `
Write a professional project proposal email from Binary Ventures to a client after an initial call.

Client details:
- Business: ${name} (${type}) in ${city}
- Owner: ${ownerName}
- Recommended plan: ${budget} — ${plan.price} one-time

About the plan:
- Includes: ${plan.features}
- Timeline: 7–14 working days
- Revision rounds: 2 included
- Post-launch support: 30 days free

Structure the email as:
1. Warm opening referencing the call ("Great speaking with you, ${ownerName}...")
2. Summary of what we understood about their needs
3. Recommended package with clear pricing (${plan.price})
4. What's included (bullet points, max 5)
5. Timeline and next steps
6. Payment terms (50% advance, 50% on delivery)
7. CTA: Reply to confirm or ask questions
8. Sign off from Anurag Tiwari with phone and email

Professional, clear, and confidence-inspiring. Under 300 words.
`.trim();
}


module.exports = {
  whatsappOutreach,
  emailOutreach,
  websiteCopy,
  followUpMessage,
  testimonialRequest,
  proposalEmail,
};
