# sbh.co.il — v2

Personal site of Sharon Ben Haim (SBH#DEV). AI-first CTO positioning, bilingual (Hebrew RTL at `/`, English at `/en`), light/dark themes.

**Stack:** Next.js 15 (App Router, static export) · Tailwind CSS v4 · TypeScript · Firebase Hosting + Firestore · EmailJS

## Run
```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static site in ./out
npm run deploy    # build + firebase deploy --only hosting
```

## Where to edit content
| What | File |
|---|---|
| All page copy (EN / HE) | `src/content/en.ts`, `src/content/he.ts` |
| Posts / articles | `src/content/articles.ts` |
| Highlighted GitHub repos | `src/content/repos.ts` (`featured: true` → home page) |
| Tech stack + AI toolbox | `src/content/stack.ts` |
| Theme colors | `src/app/globals.css` (`:root` / `[data-theme="dark"]`) |

## Routes
`/` `/services` `/ai` `/code` `/writing` `/about` `/discuss-project` + the same under `/en`.
Legacy Hebrew SEO URLs are preserved: `/AIToolsSmallBiz`, `/ChooseWebDeveloper`, `/CustomSoftwareIsrael`, `/WebdevTelAviv`.
New posts: `/writing/<slug>` (HE) and `/en/writing/<slug>` (EN).

## Notes
- Contact form writes to the same Firestore `contacts` collection and EmailJS template as v1.
- `firebase.json` now serves `out/` with `cleanUrls`.
- Theme is stored in `localStorage` and falls back to the OS preference; no flash on load.
