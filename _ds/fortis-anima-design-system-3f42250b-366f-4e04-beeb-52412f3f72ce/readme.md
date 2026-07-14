# Fortis Anima Design System

**Fortis Anima Consulting** is a premium boutique consultancy helping entrepreneurs,
companies and international professionals establish and grow in Sweden. The brand stands
for trust, stability, competence, precision, Scandinavian professionalism, personal
support and long-term partnerships. It must never appear corporate-cold, startup-playful
or generic.

**Sources:** a written brand & design specification supplied by the user (v1.0, pasted
into chat). No Figma, codebase, logo files, photography or existing product was provided —
everything here is authored from that spec.

---

## CONTENT FUNDAMENTALS

- **Tone**: calm, confident, precise. A senior partner speaking — never a landing-page
  hype machine. Boutique consulting, not SaaS.
- **Person**: "we" for the firm, "you" for the client. Direct address:
  *"We handle the details. You build the business."*
- **Sentences**: short. Declarative. Whitespace between thoughts.
- **Casing**: sentence case everywhere — headlines, buttons, links. Uppercase only for
  overlines/labels (12px, 0.14em tracking).
- **Emoji**: never.
- **Exclamation marks**: never. No urgency tricks, no "limited offer".
- **Examples of on-brand copy**:
  - "Your foundation in Sweden."
  - "A 30-minute conversation is the best place to start."
  - "Registration, permits and banking — handled end to end."
- **Off-brand**: "Supercharge your Nordic journey! 🚀", "best-in-class synergistic
  solutions", ALL-CAPS urgency.

## VISUAL FOUNDATIONS

- **Colors**: Forest Green `#1E3A34` (primary), Warm White `#F7F4EF`, Muted Gold
  `#B08A4F` (accent — used sparingly: overlines, icons, numerals), Background `#FAF8F5`,
  Surface `#FFFFFF`, Surface Dark `#26352F`, Text `#1D1D1D` / `#5C5C5C`, Border
  `#E7E2DA`, Success `#4E8C5C`, Error `#C24747`. Never bright blue, neon, or gradients.
- **Type**: Display/headings in **Cormorant Garamond** (substitute for proprietary
  **Canela** — see Caveats), weight 500, elegant never bold-aggressive. Body/UI in
  **Inter** 300–700. Display clamps 56–88px; body 17px/1.65; overlines 12px uppercase
  0.14em gold. Max measure 70ch.
- **Backgrounds**: flat warm paper (`#FAF8F5`); tinted warm-white bands and Surface Dark
  blocks for rhythm. No patterns, textures, or gradients. Photography is the only imagery.
- **Imagery**: authentic photography — natural daylight, real professionals, Scandinavian
  interiors (wood, concrete, stone, glass), nature, Swedish cities. Cinematic composition.
  No stock handshakes. Illustrations avoided entirely. **No photo assets provided yet** —
  components render quiet placeholders.
- **Spacing**: 4/8/12/16/24/32/48/64/96/128/160 scale. Sections breathe: 140px padding.
  1280px container, 760px content width, 12-col grid, 32px gap.
- **Radii**: inputs 12 / buttons 14 / cards 24 / images 28.
- **Shadows**: near-invisible, blur-only, green-tinted (`rgba(30,58,52,…)` at 5–10%).
  Never Material elevation.
- **Borders**: 1px hairlines in `#E7E2DA`; `rgba(247,244,239,.14)` on dark.
- **Motion**: subtle — fade up, slight slide, scale 1.02, blur reveal, gentle parallax.
  250ms (hover) to 450–600ms (reveals), ease-out `cubic-bezier(0.22,1,0.36,1)`.
  Reduced-motion respected. Never overanimate.
- **Hover states**: buttons lift −2px + brighten 5% + soft shadow; cards lift −3px;
  links shift to gold; ghost buttons underline (5px offset). Press: no shrink tricks.
- **Focus**: visible gold double-ring (`--focus-ring`). WCAG AA minimum.
- **Cards**: white, 24px padding, 24px radius, soft border, almost-invisible shadow.
  Never gradients, never colored left-border accents.

## ICONOGRAPHY

- **Lucide only**, stroke 1.75, sizes 20 / 24 / 32. Loaded via CDN UMD
  (`https://unpkg.com/lucide@0.462.0/dist/umd/lucide.min.js`) and rendered through the
  `Icon` component (`components/core/Icon.jsx`).
- Icon colors: forest green default; gold for small feature markers.
- No emoji, no unicode glyphs as icons, no hand-drawn SVGs, no icon fonts.
- **No logo exists.** The wordmark is "Fortis Anima" set in the display serif
  (see `guidelines/brand-wordmark.html`). Do not invent a logomark.

## INDEX

- `styles.css` — global entry; imports everything in `tokens/`
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radius/shadow/motion/layout), `base.css`
- `guidelines/` — 15 specimen cards (Colors, Type, Spacing, Brand groups)
- `components/core/` — Button, Card, SectionHeader, Icon, Input
- `components/marketing/` — Navigation, Hero, CTA, Footer
- `components/content/` — FeatureGrid, IconCard, ServiceCard, StatisticCard, Timeline, FAQ, TeamCard, ContactForm
- `ui_kits/website/` — click-through marketing site (Home, Services, About, Contact)
- `thumbnail.html`, `SKILL.md`

Each component ships `<Name>.jsx` + `<Name>.d.ts` (props) + `<Name>.prompt.md` (usage).

### Intentional additions
The spec's component list is built verbatim. Added beyond it: **Button, Card, Input,
Icon** — the spec defines their rules (Buttons, Cards, Icons sections; ContactForm
requires Input) but doesn't list them as components.

## CAVEATS

- **Canela is proprietary and was not provided.** Cormorant Garamond (Google Fonts) is
  used per the spec's own fallback. Supply Canela font files to upgrade.
- Fonts load from Google Fonts CDN; no font binaries ship with the system.
- No photography, logo, or illustration assets were provided; placeholders are rendered
  where imagery belongs.
