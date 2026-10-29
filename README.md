# mi-cv-react — Portfolio

Interactive CV / portfolio for **Marcos Guerrero**, built with React 19, Vite, TypeScript, and Tailwind CSS 4.

## Features

- Bilingual UI (ES / EN) with persisted language preference
- Sections: Hero, Skills, Experience, Projects, Contact, Footer
- Mobile navigation, skip link, and basic SEO (meta tags + JSON-LD)
- Ready for [Vercel](#deploy-on-vercel) or [GitHub Pages](#deploy-on-github-pages)

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `VITE_FORMSPREE_FORM_ID` | Enables the contact form via [Formspree](https://formspree.io) |
| `VITE_CONTACT_EMAIL` | Fallback contact when Formspree is not set |

## Before deploy checklist

1. Add your PDF resume as `public/cv-marcos-guerrero.pdf`
2. Update `src/data/projects.ts` with real `githubUrl`, `liveUrl`, and `image` paths (e.g. `/projects/liga.png`)
3. Edit `src/data/experience.ts` with your real timeline
4. Update `src/data/site.ts` (`githubPortfolio`, canonical URL in `index.html`)
5. Set env vars in Vercel / GitHub Actions
6. Run `npm run build` locally

## Deploy on Vercel

1. Push the repo to GitHub (`MarcosG2/mi-cv-react` or your fork)
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite** — build command `npm run build`, output `dist`
4. Add environment variables from `.env.example`
5. Deploy — `vercel.json` handles SPA routing

Custom domain: Project Settings → Domains, then update `link rel="canonical"` and JSON-LD `url` in `index.html`.

## Deploy on GitHub Pages

GitHub Pages serves project sites from a subpath (`/repo-name/`). Configure Vite `base`:

```ts
// vite.config.ts
export default defineConfig({
  base: '/mi-cv-react/',
  // ...
})
```

Use the official [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) workflow or Vite’s `gh-pages` package. Prefer **Vercel** for a clean root domain (`marcosguerrero.dev`) without `base` path issues.

## Project images

Place screenshots under `public/projects/` and reference them in `projects.ts`:

```ts
image: '/projects/football-league.png',
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
