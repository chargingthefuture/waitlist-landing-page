# Waitlist landing page

Next.js app that takes waitlist sign-ups for [Charging the Future](https://chargingthefuture.com)
and stores them in Postgres. It began as a v0.app project and lived in the product monorepo; it
is maintained in this repository now.

## What it does

| Route | What it is |
|---|---|
| `/` | The landing page with the sign-up form |
| `/look-ma-i-fixed-it` | Problem-and-solution cards that map a situation to the part of the app that answers it |
| `POST /api/waitlist` | Stores one sign-up in the `waitlist_signups` table |
| `GET /api/waitlist/count` | Returns the number of sign-ups |

The schema is in `migrations/`. Links to the app, the blog, the Signal group, and the terms and
privacy pages live in `lib/config.ts`. Fonts are self-hosted; there is no request to Google
Fonts. Sentry is wired through `@sentry/nextjs`.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

Set `DATABASE_URL` to a Postgres connection string before running; `lib/db.ts` turns SSL on for
any host that is not local.

## Deploy

Deployed by Vercel: merges to `main` deploy production and pull requests get preview deployments.
There are no GitHub Actions workflows in this repository.

## Branches and pull requests

Descriptive branch names (`<type>/<short-description>`), never an auto-generated session name.
Use a Conventional Commit PR title. The writing and process rules of the product repository
(`chargingthefuture/chargingthefuture`, `CLAUDE.md`) apply here.
