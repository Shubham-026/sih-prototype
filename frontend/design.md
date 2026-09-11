# SkillHive — Design System

**Source of truth:** SkillHive logo (black + gold, glass-orb badge, "S" ribbon merged with graduation cap)
**Tagline:** Learn · Grow · Belong
**Sub-line:** A Brighter You

This doc translates the logo's visual language into a design system the whole team (Next.js + Tailwind + shadcn/ui) can apply consistently across student, industry, and admin views.

---

## 1. Brand Personality

The logo is premium, confident, and minimal — a dark background with a single glowing gold accent, not a busy multi-color edtech look. That maps to:

- **Serious, not childish.** SkillHive is solving a placement/career problem, not a kids' learning app — avoid bright primary-color, rounded-mascot UI clichés.
- **Precision over decoration.** One accent color, clean geometry (the ribbon + cap mark is a single continuous form), generous negative space.
- **Aspirational.** Gold = achievement/growth, black = focus/depth. The glass-orb ring gives a subtle "portal" feel — appropriate for a platform that's a gateway between students and industry.

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `background` / `bg-black` | `#0A0A0A` | Primary app background (dark mode default), nav, footer |
| `surface` | `#151515` | Cards, panels, modals on dark background |
| `surface-light` | `#F7F5EF` | Light-mode background / off-white surfaces (matches the logo's warm white, not pure `#FFFFFF`) |
| `gold-primary` | `#D4AF37` | Primary accent — CTAs, active states, key numbers (match score, skill gap %) |
| `gold-light` | `#E8C97A` | Hover states, gradients, highlights |
| `gold-deep` | `#B8860B` | Pressed states, borders on dark surfaces |
| `foreground` | `#F5F5F0` | Primary text on dark background (warm white, matches logo wordmark) |
| `foreground-muted` | `#A3A3A0` | Secondary text, captions, metadata |
| `text-on-light` | `#0A0A0A` | Primary text on light surfaces |
| `success` | `#4CAF7D` | Shortlisted / matched / verified states |
| `warning` | `#E0A72E` | Pending review, gap flagged |
| `danger` | `#D64545` | Rejected, missing required skill |

**Rule of one accent:** Gold is the *only* accent color used for emphasis (buttons, active nav, score rings, highlighted skill chips). Success/warning/danger are reserved strictly for status — never used decoratively. This keeps the interface as disciplined as the logo.

**Gradient:** For hero sections or the match-score ring, use a gold gradient `linear-gradient(135deg, #E8C97A 0%, #D4AF37 50%, #B8860B 100%)` to echo the logo's metallic ribbon.

---

## 3. Typography

The wordmark pairs a clean geometric sans ("SKILL" in white/regular weight) with the same sans in gold for "HIVE," plus a light, wide-tracked serif-like small caps line for the tagline.

| Role | Font | Notes |
|---|---|---|
| Headings / wordmark-adjacent UI | **Inter** or **Manrope** (Bold/Semibold) | Matches the logo's geometric sans; use for page titles, dashboard headers |
| Body text | **Inter** (Regular/Medium) | Default UI font, high readability at small sizes |
| Tagline / eyebrow / labels | Inter, **wide letter-spacing** (`tracking-[0.2em]`), uppercase, small size | Mirrors "LEARN · GROW · BELONG" treatment — use for section labels, badges, status tags |
| Numerals (match score, skill gap %) | Tabular figures, Semibold | Should feel like a stat, not body text |

**Split-color heading pattern:** Where it fits (e.g., page hero "Skill**Hive**"), render the brand name with the first part in `foreground` and second part in `gold-primary`, matching the logo exactly. Don't overuse this pattern beyond the logo/brand mentions.

---

## 4. Logo Usage

- **Primary lockup:** Full badge (orb + mark + wordmark + tagline) — use only on landing page hero, login/signup screens, and PPT/pitch materials.
- **Compact mark:** The ribbon+cap symbol alone (no wordmark) — use as the favicon, navbar logo, and loading spinner.
- **Wordmark only:** "SkillHive" in split black/gold text — use in navbar next to the compact mark, email templates, footer.
- **Minimum clear space:** Keep padding around the mark equal to the height of the graduation cap element.
- **Never:** stretch, recolor onto a busy background, place on a bright/saturated color, or drop the gold entirely (no monochrome flattening except a single approved white-on-transparent variant for dark-on-dark cases).
- **On light backgrounds:** use the mark with `text-on-light` (#0A0A0A) instead of white, gold accent stays the same.

---

## 5. UI Surface & Elevation

The logo's glass-orb ring suggests soft depth without heavy drop shadows:

- Cards: `surface` background, **1px gold-deep border at 20% opacity**, subtle glow on hover (`box-shadow: 0 0 24px rgba(212,175,55,0.15)`) rather than a hard shadow.
- Avoid flat Material-style elevation shadows in grey — depth comes from *glow*, not grey shadow layers.
- Dividers: 1px `foreground-muted` at 10–15% opacity, not solid lines.

---

## 6. Components (shadcn/ui mapping)

| Component | Treatment |
|---|---|
| Primary Button | `bg-gold-primary text-black font-semibold`, hover → `gold-light`, no rounded-full (use `rounded-lg`, matches the geometric mark, not overly soft) |
| Secondary Button | Transparent, `border-gold-deep`, `text-foreground`, hover fills 10% gold |
| Badge / Skill Chip | Small, uppercase, wide tracking, `bg-surface border-gold-deep/40` — "held skill" in gold outline, "gap skill" in muted outline |
| Match Score Ring | Circular progress using the gold gradient; center numeral in Semibold tabular figures |
| Navbar | `bg-black/95 backdrop-blur`, compact mark + wordmark left-aligned, gold underline on active route |
| Input fields | Dark surface, gold-deep border on focus (not blue — override shadcn default focus ring to gold) |
| Status tags | Success/warning/danger only, never gold (gold = brand, not status) |

**Tailwind config note:** override the default `ring`/`focus-visible` color token from blue to `gold-primary` so shadcn's default focus states stay on-brand.

---

## 7. Tone in Copy

- Tagline pattern (`Learn · Grow · Belong`) → use short, three-part rhythm for section headers where it fits (e.g., "Assess · Bridge · Apply" for the student flow, "Post · Match · Hire" for industry).
- Sub-line style ("A Brighter You") → one short aspirational line under major headings, not overused.
- Keep microcopy direct and outcome-focused ("3 skills to close for this role," not "Oops! You're missing some skills!") — matches the mature, non-gamified visual tone.

---

## 8. Quick Reference (Tailwind tokens to add)

```js
// tailwind.config.js — extend.colors
colors: {
  brand: {
    black: '#0A0A0A',
    surface: '#151515',
    light: '#F7F5EF',
    gold: {
      DEFAULT: '#D4AF37',
      light: '#E8C97A',
      deep: '#B8860B',
    },
    foreground: '#F5F5F0',
    muted: '#A3A3A0',
  },
  status: {
    success: '#4CAF7D',
    warning: '#E0A72E',
    danger: '#D64545',
  },
}
```

---

## 9. Open Items for Alok (Figma)

- Export compact mark as SVG (favicon + navbar sizes: 16/32/64/128px)
- Confirm exact gold hex used in source file (values above are estimated from the reference image — swap in exact brand hex once available)
- Light-mode variant of the full badge lockup (current reference is dark-only)