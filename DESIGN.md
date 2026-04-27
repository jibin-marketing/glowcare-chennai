# Design Brief

**Tone:** Premium Medical + Warm Elegance + Approachable Trust

**Differentiation:** Warm rose-gold accent sparingly on CTAs; before-after gallery with smooth transitions; testimonial cards with warm cream gradients; hand-curated restraint (teal + rose-gold + cream only).

## Color Palette

| Role | Light Mode | Dark Mode | Usage |
|------|-----------|-----------|--------|
| Background | 0.98 0.01 60 (warm cream) | 0.12 0.01 210 (deep navy) | Page backgrounds, negative space |
| Foreground | 0.2 0.02 36 (charcoal) | 0.92 0.01 60 (warm cream) | Body text |
| Primary | 0.45 0.15 210 (teal) | 0.68 0.12 40 (rose-gold) | Buttons, active states, CTAs |
| Secondary | 0.72 0.08 50 (warm gold) | 0.22 0.01 210 (navy) | Secondary actions, accents |
| Accent | 0.68 0.12 40 (rose-gold) | 0.72 0.08 50 (warm gold) | Highlights, interactive elements |
| Muted | 0.92 0.02 50 (light cream) | 0.2 0.01 210 (navy) | Subtle backgrounds, disabled states |
| Destructive | 0.55 0.22 25 (warm red) | 0.65 0.19 22 (warm red) | Error states, warnings |

## Typography

| Layer | Font | Purpose |
|-------|------|---------|
| Display | Fraunces | Headers, hero text, doctor names — confident, elegant, medical authority |
| Body | General Sans | Service descriptions, testimonials, body copy — clean, readable, approachable |
| Mono | System monospace | Code, timestamps (minimal use) |

**Type Scale:** H1 (40px), H2 (32px), H3 (24px), Body (16px), Small (14px)

**Weight Distribution:** Regular (400) for body; Bold (600–700) for headers and CTAs.

## Structural Zones

| Zone | Background | Border | Shadow | Purpose |
|------|-----------|--------|--------|---------|
| Header/Nav | 0.98 0.01 60 (warm cream) | bottom 0.88 0.01 50 | subtle (0.06 opacity) | Sticky navigation, minimal visual weight |
| Hero | 0.98 0.01 60 (warm cream) | none | none | Typography-first; warm, inviting entry point |
| Service Cards | 0.99 0.01 60 (white cream) | left 0.45 0.15 210 (teal, 4px) | elevated (0.08 opacity) | Grid layout; teal accent draws eye |
| Testimonials | gradient accent (0.68 → 0.72) | subtle | elevated | Warm card backgrounds; approachable voices |
| CTA Sections | 0.88 0.01 50 (light cream) | none | subtle | Booking forms, consultation requests |
| Footer | 0.15 0.02 210 (deep navy) | top 0.45 0.15 210 (teal) | none | Clinic hours, address, social links; text 0.92 0.01 60 |

## Spacing & Rhythm

- **Base unit:** 0.5rem (8px)
- **Section padding:** 6rem (96px) vertical, 2rem (32px) horizontal on desktop; 3rem / 1.5rem on mobile
- **Component gap:** 1.5rem between cards, 2rem between sections
- **Card padding:** 2rem internal spacing; 1.5rem on mobile

## Component Patterns

- **Buttons:** Teal primary (0.45 0.15 210), rose-gold secondary (0.68 0.12 40); rounded 0.875rem; shadow-subtle on hover
- **Form inputs:** Border 0.88 0.01 50; focus ring teal (0.45 0.15 210); rounded 0.875rem
- **Service cards:** Left teal border (4px); white background; minimal shadow-subtle; hover lift via shadow-elevated
- **Before-after gallery:** Smooth fade/slide transitions (0.4s ease-out); teal accent on image borders
- **Testimonial cards:** Warm gradient background (rose-gold → warm gold); small avatar with teal ring accent
- **FAQ accordion:** Teal headers; cream content background; smooth height animation

## Motion & Interactions

- **Entrance:** fade-in (0.4s) for sections; slide-up (0.4s) for cards on scroll
- **Hover:** shadow-subtle to shadow-elevated transition (0.3s smooth); primary text to teal color shift on links
- **Active:** teal fill for buttons; rose-gold underline for links
- **Transitions:** All interactive elements use transition-smooth (0.3s cubic-bezier)
- **No animations:** Avoid bounce or attention-seeking effects; keep motion purposeful and medical-grade

## Constraints

- **Color palette:** Teal + Rose-Gold + Cream ONLY — no secondary colors outside this triad
- **Shadows:** Only shadow-subtle and shadow-elevated; no neon glow or blur effects
- **Decorative elements:** Subtle gradient accents on buttons and testimonial cards; no full-page gradients or excessive ornamentation
- **Typography:** Fraunces for display only; General Sans for all body and UI text — no font mixing mid-section
- **Spacing:** Consistent base unit (8px) throughout; no arbitrary pixel values
- **Border radius:** 0.875rem (14px) base; no sharp corners or extreme rounding (>50%)

## Signature Detail

**Warm rose-gold accent on CTA buttons paired with teal text + warm cream background** creates a luxe-medical identity distinct from generic healthcare sites. The teal conveys trust and medical authority; rose-gold conveys warmth, elegance, and approachability. Cream backgrounds (not white) soften the interface and signal premium, softer beauty treatments (not aggressive laser clinics).

## Accessibility

- **Contrast:** All text meets WCAG AA+ against backgrounds (L difference ≥ 0.7)
- **Focus states:** Visible teal ring on all interactive elements
- **Motion:** Reduced motion respected; fade-in and slide-up use system prefers-reduced-motion
- **Color alone:** Never communicate state via color alone; combine with text labels and icons

