## Design System: HP Guide

### Pattern
- **Name:** Lead Magnet + Form
- **Conversion Focus:** Form fields ≤ 3 for best conversion. Offer valuable lead magnet preview. Show form submission progress.
- **CTA Placement:** Form CTA: Submit button
- **Color Strategy:** Lead magnet: Professional design. Form: Clean white bg. Inputs: Light border #CCCCCC. CTA: Brand color
- **Sections:** 1. Hero (benefit headline), 2. Lead magnet preview (ebook cover, checklist, etc), 3. Form (minimal fields), 4. CTA submit

### Style
- **Name:** Claymorphism
- **Keywords:** Soft 3D, chunky, playful, toy-like, bubbly, thick borders (3-4px), double shadows, rounded (16-24px)
- **Best For:** Educational apps, children's apps, SaaS platforms, creative tools, fun-focused, onboarding, casual games
- **Performance:** ⚡ Good | **Accessibility:** ⚠ Ensure 4.5:1

### Colors
| Role | Hex |
|------|-----|
| Primary | #4F46E5 |
| Secondary | #818CF8 |
| CTA | #F97316 |
| Background | #EEF2FF |
| Text | #1E1B4B |

*Notes: Playful indigo + energetic orange*

### Typography
- **Heading:** Crimson Pro
- **Body:** Atkinson Hyperlegible
- **Mood:** academic, research, scholarly, accessible, readable, educational
- **Best For:** Universities, research papers, academic journals, educational
- **Google Fonts:** https://fonts.google.com/share?selection.family=Atkinson+Hyperlegible:wght@400;700|Crimson+Pro:wght@400;500;600;700
- **CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Crimson+Pro:wght@400;500;600;700&display=swap');
```

### Key Effects
Inner+outer shadows (subtle, no hard lines), soft press (200ms ease-out), fluffy elements, smooth transitions

### Avoid (Anti-patterns)
- Dark modes
- Complex jargon

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] cursor-pointer on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
