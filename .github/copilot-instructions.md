<!-- Copilot instructions tailored for this repository -->
# Guidance for AI coding agents

This repository is a small single-page React + TypeScript portfolio built with Vite and Tailwind. Use the notes below to be immediately productive and avoid breaking UX patterns.

- Project entry: `src/main.tsx` — app is wrapped in `HashRouter` (routing via hash). Prefer hash-safe navigation when modifying routes.
- Layout pattern: `src/components/AppLayout.tsx` composes a `Sidebar` (`src/components/layout/*`) and a `main` area that renders section components (`About`, `Experience`, `Projects`, `Skills`).
- Scrolling navigation: `src/hooks/useActiveSection.ts` drives the active nav state using hard-coded section IDs `['about','experience','projects','skills']` and an `OFFSET = 160`. Keep these IDs in sync when changing section names or DOM ids.
- Nav behavior: `src/components/layout/Navigation.tsx` calls `scrollIntoView` and updates the URL fragment with `history.pushState(null,'', '#id')`. Do not remove hash handling without updating `useActiveSection`.
- Styling: Tailwind utility classes are used across components. File `tailwind.config.js` and `src/index.css` control globals — prefer utility edits over introducing new CSS files.
- Icons & small components: social icons live under `src/components/layout/components/*` and are used by `src/components/layout/SocialLinks.tsx`.
- TypeScript: Project is strongly typed. Build uses `tsc -b` followed by `vite build` (see `package.json`). Avoid introducing `any` unless necessary and documented.
- Scripts (package.json):
  - `npm run dev` → start Vite dev server
  - `npm run build` → type-check + bundle
  - `npm run preview` → preview production build
  - `npm run lint` → runs ESLint
  - `npm run deploy` → publishes `dist` via `gh-pages`
- Dev environment: Vite + React 19 + TypeScript + Tailwind. Expect fast HMR; prefer working locally with `npm run dev` for UI changes.
- Code comments: Some internal comments exist in Vietnamese (e.g., `useActiveSection.ts`). Preserve meaning when editing; ask if translation is needed.
- No tests detected: there are no test scripts in `package.json`. If adding tests, keep them isolated and update `package.json`.

Quick editing rules
- When adding/removing sections, update `SECTION_IDS` in `src/hooks/useActiveSection.ts` and ensure matching DOM `id` attributes in the section components (`src/components/About.tsx`, etc.).
- For navigation changes, update both `Navigation.tsx` and the hook so active state, hash behavior, and smooth scrolling remain consistent.
- Keep `Sidebar` structure (Profile, Navigation, SocialLinks) intact unless intentionally refactoring layout.

When unsure, inspect these files first:
- `src/main.tsx` — router and app mount
- `src/App.tsx` — composition of page sections
- `src/hooks/useActiveSection.ts` — scroll/hash driven active section logic
- `src/components/layout/Navigation.tsx` — navigation UI and pushState
- `src/components/layout/Sidebar.tsx` — sidebar composition
- `tailwind.config.js`, `vite.config.ts`, `eslint.config.js` — build/lint config

If you modify routing, navigation, or section IDs: run `npm run dev` and manually verify (1) clicking nav scrolls to the right section, (2) URL hash updates, (3) active indicator (left bar) appears correctly.

If this file needs more detail or examples, tell me which area to expand (build, CI, deeper file examples).
