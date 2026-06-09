# Design System — Bao Portfolio

Dark editorial aesthetic. The visual language borrows from high-end print portfolios: tight tracking, large-scale serif headings, restrained use of accent color, and atmospheric depth from the WebGL smoke layer.

---

## Color

### Palette

| Role | Value | Usage |
|------|-------|-------|
| Background | `#0A0A0A` (`dark`) | Root background |
| Surface | `#111111` (`surface`) | Reserved — not used on sections (transparent over smoke) |
| Surface 2 | `#181818` (`surf-2`) | Cards, inputs if needed |
| Accent | `#E84B2A` | CTAs, active states, progress bar, cursor dot |
| Accent Mid | `#F26845` | Gradient midpoint |
| Accent Lit | `#F4906B` | Gradient endpoint, hover highlights |
| White body | `rgba(255,255,255,0.50)` | Body text |
| White dim | `rgba(255,255,255,0.30–0.40)` | Labels, metadata, placeholder text |
| White muted | `rgba(255,255,255,0.06–0.10)` | Borders, dividers |

### Accent Gradient (`.gt`)
```css
background: linear-gradient(120deg, #E84B2A 0%, #F26845 45%, #FAB08A 100%);
```
Applied to italic serif spans in section headings ("Intelligence.", "Projects.", etc.).

### Glass Surface (`.glass`)
```css
background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,255,255,0.07);
backdrop-filter: blur(12px);
```
Used on all cards (About role/education, Work projects, Skills services, Contact channels, form).

---

## Typography

### Typefaces

| Role | Family | Weights |
|------|--------|---------|
| `font-sans` | Space Grotesk | 400, 500, 600, 700 |
| `font-serif` | Playfair Display | 700 (Bold), 900 (Black italic) |
| `font-mono` | DM Mono | 400 |

### Scale & Usage

**Display headings** (Hero, section H2s): `clamp(40px, 5.5vw, 68px)` — `font-serif font-bold leading-[0.9] tracking-tight`

**Hero H1**: `clamp(52px, 10vw, 128px)` — tightest leading (`0.88`), split across three lines

**Animated cycling word**: `clamp(60px, 11vw, 140px)` — `font-serif italic` with `.gt` gradient

**Contact H2**: `clamp(48px, 8vw, 100px)` — three-line stack, `leading-[0.85]`

**Body**: `clamp(15px, 1.5vw, 17px)` — `text-white/50 leading-[1.75]`

**Section labels**: `0.7rem`, `tracking-[0.16em]`, uppercase, `font-mono`, `text-white/30`

**Tag pills**: `0.68rem`, `tracking-[0.14em]`, uppercase, `font-mono`, `text-accent`, `bg-accent/10`, `border-accent/22`, `rounded-full`

**Stats / metadata**: `font-mono text-xs text-white/30`

### Watermark (`.wm`)
```css
font-family: 'Playfair Display', serif;
font-weight: 900;
color: transparent;
-webkit-text-stroke: 1px rgba(255,255,255,0.055);
letter-spacing: -0.04em;
line-height: 1;
```
Used at `clamp(120px, 22vw, 320px)` in Hero ("BAO") and `clamp(100px, 18vw, 240px)` in Contact ("HELLO").

---

## Spacing & Layout

**Max content width:** `max-w-6xl` (1152px) — all sections except Contact which uses `max-w-4xl`

**Section padding:** `py-28 md:py-36 px-6`

**Content gap (two-column):** `gap-16 lg:gap-24`

**Card gap:** `gap-5` (project grid), `space-y-4` (service cards)

**Section label → content gap:** `mb-14`

---

## Atmosphere & Depth

### WebGL Smoke Background
Full-viewport `fixed` canvas rendered in `App.tsx` at `z-0`. Uses a WebGL2 fragment shader (fBm noise + chromatic shift) with two uniforms:
- `time` — drives continuous upward flow
- `u_scroll` — adds downward drift as user scrolls (`0.00018` per pixel)

Smoke color: `#8B1A00` (very dark red), tinting the white smoke toward a deep ember tone.

### Grain Overlay
`body::after` with `position: fixed; inset: 0; z-index: 1; opacity: 0.45` — SVG fractal noise at `baseFrequency: 0.9`, `numOctaves: 4`. Sits above the smoke but below all content.

### Grid Background (Hero only)
```css
background-image:
  linear-gradient(rgba(232,75,42,0.025) 1px, transparent 1px),
  linear-gradient(90deg, rgba(232,75,42,0.025) 1px, transparent 1px);
background-size: 64px 64px;
```

### Radial Glow (Hero)
```css
radial-gradient(ellipse 70% 60% at 60% 50%, rgba(232,75,42,0.13) 0%, transparent 70%)
```

### Floating Orb (Hero, desktop only)
`radial-gradient` circle at `right: -5%, top: 15%`, `480×480px`, blurred 50px. Animated with `orb-float` (`7s ease-in-out infinite`, translates `14px, -18px` + `scale(1.04)` at 50%).

---

## Motion

### Entry Animations
All scroll-triggered reveals use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`.

**Standard fade up:**
```js
{ initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
```

**Staggered children:** Add `delay: i * 0.1` (or `0.14` for skill bars).

**Hero H1:** `duration: 0.9, delay: 0.6`; badge at `delay: 0.4`; body at `delay: 0.9`; CTAs at `delay: 1.05`; scroll indicator at `delay: 1.5`.

### Hover States
- Cards: `whileHover={{ y: -6, boxShadow: "0 32px 60px rgba(0,0,0,0.6)" }}` (Work cards)
- Glass cards: `hover:-translate-y-1 hover:border-accent/30 transition-all duration-250`
- Service cards: `whileHover={{ y: -3, borderColor: "rgba(232,75,42,0.35)" }}`

### Cycling Word (Hero)
Spring: `stiffness: 55, damping: 14`. Words slide in from `y: "100%"` and exit to `y: "-120%"`. Interval: 2200ms.

### Skill Bars
`scaleX` from `0` to level value, `transformOrigin: left`, `duration: 1.3`, staggered `delay: i * 0.14`. Triggered by `useInView`.

### Counter (Hero stats)
Cubic-ease-out counting animation over 1800ms using `requestAnimationFrame`.

---

## Navigation

Fixed floating pill, centered, `top: 5`. Transitions from `bg-dark/70 backdrop-blur-xl` to `bg-dark/85 backdrop-blur-2xl border-white/10 shadow-lg` after `scrollY > 40`.

---

## Custom Cursor

`.cur-dot` (8px, `#E84B2A`) + `.cur-ring` (38px, `1.5px border rgba(232,75,42,0.5)`). On hover (`.grow`): dot scales `4×` with reduced opacity; ring expands to 60px. Active only on `pointer: fine` devices.

---

## Scrollbar

Width: 3px. Track: `#0A0A0A`. Thumb: `#E84B2A`, `border-radius: 3px`.

---

## Selection Color

```css
::selection { background: #E84B2A; color: white; }
```

---

## Component Inventory

| Component | File | Notes |
|-----------|------|-------|
| Smoke background | `ui/spooky-smoke-animation.tsx` | WebGL2, singleton in App |
| Hero | `ui/animated-hero.tsx` | Cycling word, stats counter |
| Nav | `Nav.tsx` | Pill, scroll-aware |
| Marquee | `Marquee.tsx` | 22s loop, pauses on hover |
| About | `sections/About.tsx` | 2-col: bio left, cards right |
| Work | `sections/Work.tsx` | 2-col project card grid |
| Skills | `sections/Skills.tsx` | 2-col: bars left, services right |
| Contact | `sections/Contact.tsx` | Channels + form |
| Footer | `Footer.tsx` | Minimal strip |
| Cursor | `Cursor.tsx` | Custom pointer |
| ProgressBar | `ProgressBar.tsx` | Scroll indicator |
| Button | `ui/button.tsx` | shadcn CVA primitive |
