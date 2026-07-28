---
name: Maki Archive
colors:
  surface: '#fcf9f1'
  surface-dim: '#dddad2'
  surface-bright: '#fcf9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3eb'
  surface-container: '#f1eee5'
  surface-container-high: '#ebe8e0'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#414844'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f4f0e8'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#5e5e5b'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdb'
  on-secondary-container: '#63635f'
  tertiary: '#262626'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c3c3c'
  on-tertiary-container: '#a8a6a6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#e4e2dd'
  secondary-fixed-dim: '#c8c6c2'
  on-secondary-fixed: '#1b1c19'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#fcf9f1'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
  surface-cream: '#F9F7F2'
  forest-accent: '#1B4332'
  charcoal-text: '#2D2D2D'
  border-muted: rgba(45, 45, 45, 0.1)
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  stat-number:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is centered on the concept of a "Personal Archive"—a curated, evidence-based repository of work that feels both academic and modern. It targets professional collaborators and "like-minded" creators who value substance over hype. 

The visual direction is **Editorial Minimalism**. It mimics the layout of a high-end cultural magazine or an archival dossier. It uses intentional whitespace, structured grids, and a sophisticated color palette to evoke a sense of calm authority. Unlike a standard SaaS landing page, this system prioritizes readability and "proof of work" through clear data visualization and documented processes.

**Key Brand Pillars:**
- **Authenticity:** Real data, real screenshots, and honest reflections.
- **Calmness:** A soft, high-contrast palette that reduces visual fatigue.
- **Precision:** Tight typography and subtle borders that suggest attention to detail.

## Colors

The color palette is grounded in organic, natural tones to differentiate from the typical "tech-blue" or "startup-gradient" portfolios.

- **Primary (#1B4332):** A deep forest green used for high-emphasis call-to-actions, category labels, and key data points. It represents growth and stability.
- **Secondary (#F9F7F2):** A soft beige/cream that serves as the primary canvas. It is warmer and more inviting than pure white, reinforcing the "archival paper" feel.
- **Neutral (#2D2D2D):** A soft charcoal used for all body text and headings to ensure high legibility without the harshness of pure black.
- **Accents:** Use low-opacity versions of the charcoal for subtle borders and separators to maintain the airy, editorial feel.

## Typography

The typography strategy relies on the tension between a classic Serif and a technical Sans-serif.

- **Headlines:** Use **Source Serif 4**. It provides a literary, trustworthy quality essential for an "archive" aesthetic. Larger headings should use a tighter letter-spacing for a sophisticated look.
- **Body & Interface:** Use **Hanken Grotesk**. This typeface is contemporary and highly legible at small sizes, providing a clean "modern" counterpoint to the serif headings.
- **Data & Labels:** Labels and small identifiers use Hanken Grotesk in uppercase with increased letter spacing to create a distinct hierarchy for metadata.
- **Chinese Characters:** When rendering Chinese text, use standard system Serif (like Noto Serif SC) for headings and Sans-serif (like Noto Sans SC) for body text to maintain the design narrative across languages.

## Layout & Spacing

This design system utilizes a **Fixed Grid** for desktop to maintain a magazine-style composition, switching to a fluid single-column layout for mobile.

- **The 12-Column Grid:** Elements should align to a 12-column grid with a 1120px max-width. Use asymmetrical layouts (e.g., content spanning 8 columns, sidebar spanning 4) to mimic editorial spreads.
- **Rhythm:** A base 8px unit governs all spacing. Section gaps are generous (120px+) to ensure the content "breathes" and feels premium.
- **The "Evidence" Layout:** Use a "split-screen" or "side-bar" approach for project details—narrative on the left, primary "evidence" (screenshots, data) on the right.

## Elevation & Depth

Depth in this system is achieved through **Tonal Layers** and **Subtle Outlines** rather than heavy shadows.

- **Flat Surfaces:** Most elements sit directly on the cream background. There are no heavy drop shadows.
- **Thin Borders:** Use 1px borders in `border-muted` to define card boundaries and separate content sections. This reinforces the "document/archive" feeling.
- **Hover States:** Subtle shifts in background color (from cream to a slightly darker beige) or moving from a muted border to a forest-green border indicate interactivity.
- **Depth through Imagery:** Use background blurs sparingly only behind sticky navigation headers to maintain legibility while scrolling.

## Shapes

The shape language is disciplined and consistent. All interactive elements and containers (cards, buttons, input fields) use a **0.5rem (8px)** corner radius. 

This specific radius provides a "soft-modern" look that bridges the gap between the sharpness of brutalism and the playfulness of rounded mobile apps. Images and "evidence" screenshots should also follow this 8px rule to feel integrated into the system.

## Components

- **Buttons:** 
  - *Primary:* Forest green background, cream text, 8px radius. High contrast.
  - *Secondary:* Transparent background, charcoal 1px border, 8px radius.
  - *Ghost:* No border, forest green text, for low-emphasis navigation.
- **Evidence Cards:** 
  - Used for project previews. Features a 1px border, 8px radius, and a "Label-Caps" tag at the top to denote the project type (e.g., "CONTENT OPS").
- **Stat Blocks:** 
  - Large serif numbers in Forest Green, followed by a small charcoal label. No container—just clean typography on the cream background.
- **Navigation:** 
  - A lightweight, sticky header. Text-only links with a forest green underline for the active state. 
- **Chips/Tags:** 
  - Small, rounded pills with a light beige fill and charcoal text. Used for skills and categories (e.g., "AI", "English Education").
- **Project Detail Images:**
  - Screenshots of data or videos must be framed with an 8px radius and a very subtle inner glow or 1px border to prevent them from "bleeding" into the cream background.