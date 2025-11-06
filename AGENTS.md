# Repository Guidelines

## Project Structure & Module Organization
Nuxt 3 boots from `app/`, `app.vue`, and `layouts/default.vue`, with routes in `pages/` and shared UI split across `components/global`, `components/home`, and `components/shared`. Cross-cutting logic lives in `composables/`, Vue directives in `directives/`, and browser-only helpers register under `plugins/`. Tailwind sources live in `assets/css/styles.css`, with tokens in the `tailwind.settings.*` files. Sanity configuration (`sanity.config.js`, `sanity.cli.js`, `schemas.ts`) feeds the generated `.sanity/runtime/`, while server preview helpers reside in `server/api/draft.get.ts`. Build artefacts land in `dist/` and `.output/`; leave them untouched.

## Build, Test, and Development Commands
Install with `npm install`, then run `npm run dev` to serve `http://localhost:3000`. Use `npm run build` for production bundles, `npm run preview` to smoke-test the build, and `npm run generate` when targeting static hosting. After dependency updates, `npm run postinstall` refreshes Nuxt types in `.nuxt/`.

## Coding Style & Naming Conventions
Prefer `<script setup>`; add `lang="ts"` when the Sanity data layer benefits from typing. Components follow PascalCase filenames, composables adopt the `useFeature.ts` pattern, and server handlers stay kebab-case. Stick to Tailwind utilities, evolving palettes and typography via `tailwind.config.js` and the helper settings. Maintain two-space indentation, single quotes in scripts, and rely on editor auto-formatting. Icons come from `@nuxt/icon` or `nuxt-icon`; use their collection keys instead of inlining SVG.

## Testing Guidelines
There is no committed suite yet. New features should introduce Vitest or Playwright specs under `tests/`, mirroring the source tree. Name files `<Component>.spec.ts`, cover Sanity-driven rendering, navigation, and recaptcha flows, and ensure the suite passes before requesting review.

## Commit & Pull Request Guidelines
Keep commit messages short and imperative (`changed fonts`, `location change`). Group related work, avoid mixing refactors with features, and reference issues when available. For PRs, provide a concise summary, proof of local verification (`npm run build` or test output), screenshots for visual tweaks, and note any environment or sitemap changes. Rebase onto `main` before pushing and confirm CI once it exists.

## Sanity & Draft Mode Workflow
The portfolio uses `@sanity/presentation` plus `/api/draft` for previews. Populate `.env` with `NUXT_SANITY_API_READ_TOKEN` and `NUXT_SANITY_STUDIO_URL`, then toggle drafts via `/api/draft?enable=true|false`. Extend `schemas.ts` using Sanity validation helpers and keep field names consistent with frontend queries.

## Security & Configuration Notes
Never commit live secrets—override `runtimeConfig.public.recaptcha` and Sanity presentation tokens through environment variables (`NUXT_PUBLIC_RECAPTCHA_SITE_KEY`, `NUXT_PUBLIC_RECAPTCHA_SECRET_KEY`, `NUXT_SANITY_API_READ_TOKEN`). Update the CSP and header rules in `nuxt.config.ts` whenever adding third-party services, and validate new fonts or scripts before whitelisting them.
