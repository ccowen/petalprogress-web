# petalprogress-web

Marketing website for PetalProgress. Built with Vite + React + TypeScript.

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage — hero, how it works, showcase, reading the mandala, pricing, teams |
| `/pricing` | Pricing — billing toggle, plan cards, comparison table, shop, FAQ |
| `/teams` | Teams — audience tabs, permissions, print section, teams pricing |
| `/contact` | Contact — form with reason cards |
| `/login` | Login — auth card with SSO + email/password |
| `/signup` | Signup — auth card with SSO + email/password |
| `/signup/intent` | Intent selection — individual, referred, or admin |
| `/onboarding` | Onboarding — 5-step wizard with mandala preview |
| `/privacy` | Privacy policy (placeholder) |
| `/terms` | Terms of service (placeholder) |

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
    HomePage.tsx            # + .module.css (each page has its own CSS module)
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
