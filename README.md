# petalprogress-web

Marketing website for PetalProgress. Built with Vite + React + TypeScript.

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage: the journal and daily texts ("one set of prompts, two ways"), try-a-prompt, where to buy, app teaser |
| `/journal` | The prompt journal: why a book, three directions, sample prompts, where to buy |
| `/daily` | Daily texts: how it works, try-a-prompt, sign-up or waitlist |
| `/link-hub` | QR-code link hub for every printed product. It sits outside the site layout, and its links are set in `src/config/links.ts`. Keep this URL stable. The old `/scan` URL redirects here. |
| `/online` | PetalProgress on the web: the app as an alternative to paper trackers. Reached from `/link-hub` |
| `/philosophy` | Philosophy: sand mandalas, and what we keep vs. let go |
| `/app` | The mandala habit-tracking app (coming later): how it works, showcase, reading the mandala |
| `/mandala-types` | Reading each mandala type (part of the app story) |
| `/privacy` | Privacy policy (placeholder) |
| `/terms` | Terms of service (placeholder) |

Hidden until the app launches (redirect to `/`): `/pricing`, `/teams`, `/contact`,
`/login`, `/signup`, `/signup/intent`, `/onboarding`. `/shop` redirects to
`/journal#buy`. See `RESTORE_LATER.md`.

## What's live: `src/launch.ts`

Each product can go live on its own. Flip the switches in `src/launch.ts`:

- `launch.journal` / `launch.texts` / `launch.app`: `"live"`, `"waitlist"`, or `"coming"`. This controls the status pills and button labels.
- `buyLinks.checkout` / `buyLinks.etsy`: when a link is empty, the page shows "coming soon" in its place.
- `textsSignupUrl`: the waitlist or opt-in link for the texts. When it's empty, the page shows "opening soon".
- `journalDetails`: the title, subtitle, and price shown on the site.

Sample prompts shown on the site live in `src/data/samplePrompts.ts`. They are
**placeholders**. Replace them with prompts approved for public use.

## Setup

```bash
npm install
npm run dev      # starts dev server (default: http://localhost:5173)
npm run build    # production build → dist/
```

## Project structure

```
src/
  main.tsx                  # entry point
  routes.tsx                # React Router route definitions
  App.css                   # global resets
  layout/
    MarketingLayout.tsx     # nav + footer + sign-in modal wrapper
    Footer.tsx
    SignInModal.tsx
  components/
    Accordion.tsx           # FAQ accordion
    Tabs.tsx                # tab switcher
    StepIndicator.tsx       # dot progress indicator
  pages/
    HomePage.tsx            # product pages share ProductPage.module.css
    JournalPage.tsx
    DailyPage.tsx
    ScanPage.tsx            # standalone QR hub, own .module.css
    OnlinePage.tsx          # standalone, reached from /link-hub
    AppPage.tsx             # former homepage (app story), own .module.css
    PricingPage.tsx
    TeamsPage.tsx
    ContactPage.tsx
    LoginPage.tsx
    SignupPage.tsx
    IntentPage.tsx
    OnboardingPage.tsx
    PrivacyPage.tsx
    TermsPage.tsx
  hooks/
    useSignInModal.ts       # context for opening sign-in modal from any page
```

## Dependencies

- **@ccowen/petalprogress-ui** — shared design tokens and components. Linked locally via `file:../petalprogress-ui` for development; Vercel builds install the published version from GitHub Packages (see `scripts/vercel-install.mjs`).
- **react-router** — client-side routing

## Deployment

Hosted on **Vercel**. The project deploys from the GitHub `main` branch automatically.

The UI package (`@ccowen/petalprogress-ui`) is installed via `file:../petalprogress-ui` locally but Vercel doesn't have access to that sibling directory. `vercel.json` overrides the install command to run `scripts/vercel-install.mjs` first, which rewrites the `file:` reference to the published version (`^0.1.0`) before `npm install` runs. Vercel then pulls the package from GitHub Packages using the `NODE_AUTH_TOKEN` environment variable.

**When you publish a new version of `@ccowen/petalprogress-ui`**, bump the version string in `scripts/vercel-install.mjs` to pick it up on the next Vercel deploy.

**Required Vercel env var:** `NODE_AUTH_TOKEN` — a GitHub personal access token (classic) with `read:packages` scope.

## Working with the UI package

This project imports `@petalprogress/ui` as a local file dependency. If you make changes to the UI package:

1. Rebuild it: `cd ../petalprogress-ui && npm run build`
2. Restart this dev server: `npm run dev`

Vite caches resolved dependencies, so a restart is needed to pick up UI package changes.

## Tech stack

- Vite
- React 19
- TypeScript
- React Router v7
- CSS Modules + CSS custom properties (`--pp-*` tokens from UI package)
