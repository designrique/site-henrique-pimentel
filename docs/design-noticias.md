# Design System: Notícias Portal — henriquepimentel.com.br

## 1. Visual Theme & Atmosphere

Editorial portal with restrained confidence. Density 5, Variance 6, Motion 4.
The atmosphere is a well-run newsroom: asymmetric grids, tight-tracked display
type, cobalt accents used sparingly, generous whitespace. Not a generic
"tech blog" — a curated intelligence desk that publishes AI/tech/marketing
news derived from research reports.

## 2. Color Palette & Roles

- **Pure Surface** (#FFFFFF) — Primary background, cards (light mode)
- **Canvas Warm** (#FAFAF9) — Subtle section backgrounds, alternating rows
- **Muted Stone** (#F5F5F4) — Hover fills, chips, code blocks
- **Charcoal Ink** (#0F172A) — Primary text
- **Slate Body** (#475569) — Secondary text, descriptions
- **Fog Border** (#E2E8F0) — 1px structural lines, card borders
- **Cobalt Signal** (#1E40AF) — Single accent: links, active states, date chips
- **Cobalt Hover** (#1D4ED8) — Accent hover
- **Teal Vertical** (#0F766E) — Secondary accent for vertical/medico category
- Dark mode: near-black surfaces (#0A0A0A/#171717/#262626), light text
  (#FAFAF9/#A1A1AA/#71717A), blue accent #3B82F6

## 3. Typography Rules

- **Display:** Geist — track-tight (-0.03em), weight-driven hierarchy, sizes
  via clamp: `clamp(2rem, 5vw, 3.75rem)` for H1
- **Serif Accent:** Fraunces italic — for single emphasized words in headlines
  (existing site signature)
- **Body:** Geist — relaxed leading (1.6–1.7), max 65ch
- **Mono:** JetBrains Mono — metadata, dates, reading time, category codes
- **Banned:** Inter, generic system fonts, Times/Georgia/Garamond for display

## 4. Component Stylings

- **Category chip:** 10px uppercase tracking-wider, rounded-md, cobalt subtle
  bg (#DBEAFE) + cobalt text; teal variant for vertical category
- **News card:** border-t row layout (no boxy card on listing) — date+chip in
  mono column left, title+teaser right; hover: title turns cobalt
- **Featured card:** rounded-2xl border, hero image 16/8 aspect, generous
  padding, card-hover elevation (warm-blue tinted shadow, no scale)
- **Buttons:** flat, cobalt fill for primary (hover cobalt-hover), ghost for
  secondary. No glow. No custom cursors
- **Newsletter:** existing pattern — label above, input below, cobalt focus ring
- **Loading:** skeleton shimmer matching layout dims. No circular spinners

## 5. Layout Principles

- Max-width containment (Container component, 1280px pattern)
- Listing: 12-col grid, main 8-col / sidebar 4-col sticky (lg)
- Rows separated by 1px top borders — editorial, not card-grid
- Featured post on top: image card, then border-list below
- Single-column collapse below lg, no horizontal scroll
- Vertical gaps: `py-16 sm:py-20` section rhythm, `space-y-8/10` list rhythm
- Mobile-first: all multi-column collapses to one column < 768px

## 6. Motion & Interaction

- Transitions: 200ms ease on border-color + box-shadow (card-hover pattern)
- Hover: title color → cobalt, image scale 1.02 (500ms)
- Focus-visible: 2px cobalt outline, offset 2px
- No spring choreography on this page — it's a newsroom, not a demo
- Respect prefers-reduced-motion (site default)

## 7. Anti-Patterns (Banned)

- No emojis
- No Inter font
- No pure black (#000000) — use Charcoal Ink
- No neon/outer glow shadows
- No oversaturated accents
- No 3-column equal card grids
- No centered hero (left-aligned editorial header)
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash")
- No filler UI text ("Scroll to explore", bouncing chevrons)
- No broken image links — hero images optional, SVG fallback ok
- No overlapping elements / absolute-positioned content stacking
- No fake round numbers
