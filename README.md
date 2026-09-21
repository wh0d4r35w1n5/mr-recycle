# We Assist Co

Marketing site for **We Assist Co** — a Melbourne-based business development agency.
In the habit of growing businesses.

**Live:** https://wh0d4r35w1n5.github.io/weassistco/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion — staggered character reveals, scroll-triggered fade-downs
- Lucide React icons
- Custom `BoomerangVideoBg` — captures video frames via `requestVideoFrameCallback`
  (60fps `setInterval` fallback) and ping-pongs them on `<canvas>` for a seamless
  infinite loop

## Sections

Hero (video background) · Stats · Who We Assist (Bootstrapper / SMB / Enterprise) ·
Services (Strategy, Sourcing, Design) · Case Studies · About + Team · Testimonials ·
Insights · Marquee CTA + Contact · Footer

All content lives in `src/data.ts` — edit there to update services, team,
testimonials, articles, stats, contact details and socials.

## Develop

```bash
npm install
npm run dev
```

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages
on every push to `main`. The Vite `base` is set to `/weassistco/` automatically in
CI (`process.env.GITHUB_ACTIONS`); local dev uses `/`.

Assets referenced from `public/` use `import.meta.env.BASE_URL` so they resolve
correctly in both environments.
