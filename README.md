# Waitlist landing page

Standby page for Skills Economy (`app.chargingthefuture.com`). It goes up when the app is switched
off because a month of hosting is not covered, and it does one job: explain why the app is paused
and send people to the waitlist.

## How joining works

There is no sign-up form in this repo. The single "Join the waitlist" button opens Clerk's hosted
sign-up page in a new tab:

```
https://accounts.app.chargingthefuture.com/sign-up
```

Clerk's own waitlist switch decides what that page shows. Switch it on and the page collects an
email for the waitlist; switch it off and the same page signs people up normally. Nothing here
needs to change either way. The URL lives in `lib/config.ts`.

The older self-hosted form (`/api/waitlist`, the `waitlist_signups` table, and the `pg` client) has
been removed. `migrations/2026-02-28-create-waitlist-signups.sql` is kept as the record of the table
that holds the earlier sign-ups.

## Stack

Next.js (app router) + Tailwind CSS v4 + shadcn/ui, deployed on Vercel.

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Deploy note

This app sits at the repository root. It used to live in a `waitlist-landing-page/` folder inside
the monorepo, so the Vercel project's Root Directory must be blank — while it still says
`waitlist-landing-page/`, every build fails with "The specified Root Directory ... does not exist".
