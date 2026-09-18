# Dhvani — Portfolio

A premium, bilingual (EN/DE) personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Customize everything from one file

Almost all editable content lives in **`src/data/portfolioData.ts`**:

- Name, roles, bio, intro, social links, resume path
- Skill categories
- Work experience
- Projects (with category + bilingual description)
- Education timeline
- Certifications
- Achievements
- "Journey to Germany" points
- Theme color hex values (also mirrored in `tailwind.config.js`)

Any field shaped like `{ en: "...", de: "..." }` is bilingual — fill in both languages and the site's language switch will show the right one automatically.

UI labels (nav, buttons, section eyebrows) live in `src/i18n/en.json` and `src/i18n/de.json`.

## Adding your own assets

- **Photo**: drop an image into `public/` and point `profile.photo` in `portfolioData.ts` to it (e.g. `/profile-photo.jpg`).
- **CV/Resume**: drop your PDF into `public/` and update `profile.resumeUrl`.
- **Favicon**: replace `public/favicon.svg`.
- **Open Graph image**: add `public/og-image.jpg` (referenced in `index.html`).

## Contact form (EmailJS)

The contact form is wired to [EmailJS](https://www.emailjs.com/). To activate real sending:

1. Create a free EmailJS account, an email service, and a template.
2. Open `src/components/Contact.tsx` and replace:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

Until configured, the form still validates input but shows a friendly error toast on submit.

## Theming

- Dark/light mode toggle is in the navbar and persists via `localStorage`.
- Colors are defined as Tailwind tokens in `tailwind.config.js` (`ink`, `cream`, `gold`) — change hex values there to re-theme the whole site at once.

## Deployment (Vercel)

```bash
npm i -g vercel
vercel
```

Or connect the repo directly in the Vercel dashboard — no special build settings are needed (`npm run build`, output directory `dist`).

## Tech stack

React 19 · Vite · TypeScript · Tailwind CSS · Framer Motion · react-i18next · Lenis (smooth scroll) · react-icons · react-countup · EmailJS
