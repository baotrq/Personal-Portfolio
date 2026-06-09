# Bao — Personal Portfolio

Personal portfolio site for Bao, a Robotics & AI Engineer at RMIT University Vietnam and VinRobotics Foundation AI.

Live at: https://baotrq.github.io/Personal-Portfolio/

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** — custom dark palette, utility classes
- **Framer Motion** — scroll-triggered animations, spring transitions
- **WebGL2** — custom fragment shader smoke background with scroll-driven parallax
- **React Router** — single-page routing (`/` and `/projects`)
- **shadcn/ui** pattern — CVA-based Button primitive

## Features

- Atmospheric WebGL smoke background that drifts as you scroll
- Animated cycling hero headline
- Scroll-reveal section animations
- Project card modal (center overlay)
- All Projects page
- Custom cursor, scroll progress bar, horizontal marquee
- Fully responsive

## Sections

`Hero` → `About` → `Work` → `Skills` → `Contact`

## Getting Started

```bash
npm install
npm run dev
```

```bash
npm run build    # production build
npm run preview  # preview build locally
```

## Project Structure

```
src/
  App.tsx                          # Root layout + routes
  components/
    ui/
      spooky-smoke-animation.tsx   # WebGL2 smoke renderer
      animated-hero.tsx            # Hero section
      ProjectModal.tsx             # Centered project detail modal
    sections/
      About.tsx
      Work.tsx
      Skills.tsx
      Contact.tsx
  pages/
    AllProjects.tsx                # /projects placeholder page
```

## License

MIT — see [LICENSE](LICENSE)
