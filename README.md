# Bao — Personal Portfolio

Personal portfolio site for Bảo Trương, a Robotics & Mechatronics engineer at RMIT University Vietnam.

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
- Real project cards with images and looping video, backed by `src/data/projects.ts`
- Project modal with media switcher, stats, highlights and ←/→ navigation
- All Projects page with Hardware / Mobile / Web filters
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
npm run deploy   # publish to GitHub Pages (gh-pages branch)
```

## Project Structure

```
src/
  App.tsx                          # Root layout + routes
  components/
    ui/
      spooky-smoke-animation.tsx   # WebGL2 smoke renderer
      animated-hero.tsx            # Hero section
      ProjectCard.tsx              # Project card
      ProjectModal.tsx             # Project detail modal
      ProjectMedia.tsx             # Image / video / fallback
    sections/
      About.tsx
      Work.tsx
      Skills.tsx
      Contact.tsx
  data/
    projects.ts                    # All project content
  pages/
    AllProjects.tsx                # /projects filterable grid
public/
  projects/                        # Project images and videos
```

## License

MIT — see [LICENSE](LICENSE)
