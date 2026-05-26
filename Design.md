---
name: Modern Fintech Ethos
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444651'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#002761'
  on-tertiary: '#ffffff'
  tertiary-container: '#003c8d'
  on-tertiary-container: '#86abff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d9e2ff'
  tertiary-fixed-dim: '#afc6ff'
  on-tertiary-fixed: '#001944'
  on-tertiary-fixed-variant: '#00429a'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-blue: '#F8FAFC'
  success-green: '#10B981'
  error-red: '#EF4444'
  deep-navy: '#0F172A'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system establishes a high-trust, sophisticated environment for modern financial services. It moves away from high-density, legacy web layouts toward a premium "Modern Fintech" aesthetic. The brand personality is authoritative yet accessible, prioritizing clarity and speed of comprehension.

The design style leverages **Minimalism** with **Glassmorphic** accents. It utilizes generous whitespace to reduce cognitive load during complex financial decisions, paired with soft, translucent layers to indicate interaction and hierarchy. The visual language conveys reliability through structured layouts and warmth through carefully curated accent colors.

## Colors

The palette is anchored by **Deep Navy (#1E3A8A)** to provide institutional stability. The **Sophisticated Orange (#F97316)** is used sparingly as a high-intent accent for primary actions and critical alerts. 

A range of cool grays derived from the Slate scale provides the foundation for the UI's "high-breathability." 
- Use **Primary** for main headers, navigation backgrounds, and primary buttons.
- Use **Secondary** for calls-to-action (CTAs) that represent user progression (e.g., "Apply Now").
- Use **Surface Blue** for large background sections to differentiate from pure white containers.

## Typography

This design system uses a dual-font strategy to balance character with utility. **Plus Jakarta Sans** provides a modern, geometric feel for headlines, making the brand feel approachable and current. **Inter** is utilized for all body copy and UI labels due to its exceptional legibility at small scales and technical neutral tone.

Maintain a strict vertical rhythm by adhering to the defined line heights. Use `display-lg` for hero sections only, and `headline-md` for standard page titles. `label-sm` should be used for overlines or category tags to create a clear "browsing" hierarchy.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (1280px max-width) to maintain content focus and prevent overly long line lengths in financial data tables.

- **Desktop:** 12-column grid, 24px gutters, 40px margins.
- **Tablet:** 8-column grid, 24px gutters, 32px margins.
- **Mobile:** 4-column grid, 16px gutters, 16px margins.

Spacing is governed by an 8px base unit. Use `section-padding` to ensure the "high-breathability" requirement is met between major content blocks. Avoid packing more than three distinct loan product features into a single horizontal row on desktop.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 

1. **Base:** Pure white (#FFFFFF) for the primary background.
2. **Surface:** Surface Blue (#F8FAFC) for secondary containers and cards to create soft separation.
3. **Elevated:** Cards and modals use a "Soft Elevation" shadow: `0px 4px 20px rgba(30, 58, 138, 0.08)`. This tinting with the Primary color ensures shadows feel integrated rather than dirty.

Interactive elements (buttons on hover) should transition to a slightly deeper shadow to mimic physical displacement, maintaining the tactile feel of the fintech experience.

## Shapes

The shape language uses a **Rounded (12px / 0.5rem)** standard. This radius is applied to all primary cards, input fields, and buttons. 

- Use `rounded-lg` (16px) for major layout containers like product modals or feature hero cards.
- Use `rounded-xl` (24px) for marketing-led decorative elements or large "Application" containers.
- Form inputs must strictly follow the 8px or 12px radius to ensure they feel precise and professional.

## Components

### Buttons
- **Primary:** Deep Navy background, white text, 12px radius. High-contrast for "Apply" or "Submit."
- **Secondary:** Transparent with 1.5px Deep Navy border. Use for "Learn More" or "Secondary Actions."
- **Accent:** Sophisticated Orange background. Reserved for high-conversion entry points (e.g., "Check Eligibility").

### Input Fields
Inputs should use a 1px border in a light cool gray. On focus, the border transitions to Primary Blue with a 3px soft outer glow in a low-opacity blue. Labels must always be visible above the field in `label-md`.

### Cards
Cards are the primary vehicle for loan products. They should feature a white background, the standard 12px radius, and the Soft Elevation shadow. Use a 4px Deep Navy top-border to indicate premium or featured products.

### Progress Indicators
For loan applications, use a thin, linear progress bar at the top of the container using the Secondary Orange color to provide a sense of momentum and urgency.

### Chips & Tags
Use soft-filled chips (e.g., light blue background with dark blue text) for categories like "Personal Loan" or "Instant Approval." These should have a pill-shape (100px radius) to differentiate them from interactive buttons.