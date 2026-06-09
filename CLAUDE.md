# CLAUDE.md — Bao Portfolio

Personal portfolio site for Bao, a Robotics & AI Engineer at RMIT Vietnam / VinRobotics. Single-page React app with a dark editorial aesthetic, WebGL smoke background, and scroll-driven animations.

## Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS v3 with custom config (`tailwind.config.ts`)
- **Animations:** Framer Motion (scroll-triggered `whileInView`, spring transitions)
- **UI primitives:** shadcn/ui pattern (`@radix-ui/react-slot`, `cva`, `clsx`, `tailwind-merge`)
- **Icons:** Lucide React
- **WebGL:** Custom WebGL2 renderer in `spooky-smoke-animation.tsx` — no external GL library

## Project Structure

```
src/
  App.tsx                          # Root: smoke bg (fixed) + section order
  index.css                        # Tailwind layers, custom utilities, scrollbar, grain overlay
  components/
    Nav.tsx                        # Fixed floating pill nav, scroll-aware blur
    Footer.tsx                     # Minimal footer strip
    Cursor.tsx                     # Custom cursor (dot + ring)
    ProgressBar.tsx                # Scroll progress bar
    Marquee.tsx                    # Horizontal marquee strip between Hero and About
    ui/
      animated-hero.tsx            # Hero section with cycling animated word
      spooky-smoke-animation.tsx   # WebGL2 smoke shader — renderer class + React component
      button.tsx                   # shadcn Button primitive
    sections/
      About.tsx                    # 01 — bio, role card, education card, quote
      Work.tsx                     # 02 — project grid cards
      Skills.tsx                   # 03 — skill bars + service cards
      Contact.tsx                  # 04 — channel links + contact form
```

## Key Patterns

**Smoke background:** `SmokeBackground` is mounted once in `App.tsx` as `fixed inset-0 z-0`. It has two uniforms driving the smoke drift: time-based (`T * 0.015`) and scroll-based (`u_scroll * 0.00018`). Update scroll by calling `renderer.updateScroll(scrollY)` — already wired via a passive scroll listener inside the component.

**Section layout:** All sections use `relative py-28 md:py-36 px-6` with a `max-w-6xl mx-auto` inner container. No section has an opaque background — they sit transparently over the fixed smoke.

**Section labels:** Each section opens with a mono uppercase label + horizontal rule: `"01 — About"`, `"02 — Work"`, etc.

**Animations:** Use `initial / whileInView / viewport={{ once: true, margin: "-80px" }}` for scroll reveals. Entry easing is always `[0.4, 0, 0.2, 1]`. Hover lifts are `y: -3` to `y: -6`.

**Glass cards:** Use the `.glass` utility class (`rgba(255,255,255,0.03)` bg, `rgba(255,255,255,0.07)` border, `backdrop-blur(12px)`). On hover: `hover:border-accent/30 hover:-translate-y-1`.

**Gradient text:** Use the `.gt` utility class for the accent gradient spans in headings.

**Watermark text:** Use the `.wm` utility class for large outlined background text (used in Hero and Contact).

**Fonts:**
- Sans: `Space Grotesk` — body, UI, labels
- Serif: `Playfair Display` — headings, `.wm` watermarks
- Mono: `DM Mono` — labels, tags, stats

## Tailwind Custom Tokens

| Token | Value |
|-------|-------|
| `accent` / `accent-DEFAULT` | `#E84B2A` |
| `accent-mid` | `#F26845` |
| `accent-lit` | `#F4906B` |
| `dark` | `#0A0A0A` |
| `surface` | `#111111` |
| `surf-2` | `#181818` |

## Rules

- Never add `bg-surface` or any opaque background to section elements — sections must stay transparent so the smoke shows through.
- Never add a second `SmokeBackground` instance. The one in `App.tsx` is the single source.
- Keep all section `z-index` above `z-0` so they render over the smoke canvas.
- The grain overlay lives in `index.css` as `body::after` with `position: fixed` — do not duplicate it.
- Framer Motion spring configs: `stiffness: 55, damping: 14` for the Hero word cycle. Use `[0.4, 0, 0.2, 1]` cubic-bezier for all other transitions.
- Form submission in `Contact.tsx` is currently simulated with `setTimeout`. Do not connect a real backend without the user asking.
- `@/` path alias resolves to `src/` (configured in `tsconfig.json` and `vite.config.ts`).

## Dev Commands

```bash
npm run dev      # start Vite dev server
npm run build    # tsc + vite build
npm run preview  # preview production build
```
