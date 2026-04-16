# Restore Later

Temporary cheatsheet for things hidden before launch. When you're ready to bring
features back, follow the section for that feature and then delete this file.

---

## 1. Auth flows (signup, login, onboarding, sign-in modal)

**Files still on disk (not currently imported):**
- `src/pages/LoginPage.tsx`
- `src/pages/SignupPage.tsx`
- `src/pages/IntentPage.tsx`
- `src/pages/OnboardingPage.tsx`
- `src/pages/AuthPage.module.css`, `IntentPage.module.css`, `OnboardingPage.module.css`
- `src/layout/SignInModal.tsx`, `SignInModal.module.css`
- `src/hooks/useSignInModal.ts`

**In `src/routes.tsx` — remove these redirects:**

```tsx
{ path: "login", element: <Navigate to="/" replace /> },
{ path: "signup", element: <Navigate to="/" replace /> },
{ path: "signup/intent", element: <Navigate to="/" replace /> },
{ path: "onboarding", element: <Navigate to="/" replace /> },
```

**And add back these imports + real routes:**

```tsx
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { IntentPage } from "./pages/IntentPage";
import { OnboardingPage } from "./pages/OnboardingPage";

// inside children: [...]
{ path: "login", element: <LoginPage /> },
{ path: "signup", element: <SignupPage /> },
{ path: "signup/intent", element: <IntentPage /> },
{ path: "onboarding", element: <OnboardingPage /> },
```

**In `src/layout/MarketingLayout.tsx` — restore the sign-in modal wiring:**

```tsx
// Add imports at top:
import { SignInModal } from "./SignInModal";
import { SignInModalContext } from "../hooks/useSignInModal";

// Add state inside the component (next to menuOpen):
const [signInOpen, setSignInOpen] = useState(false);

// Wrap the returned JSX in the context provider, replacing the current <>...</>:
<SignInModalContext.Provider value={{ open: () => setSignInOpen(true) }}>
  {/* ...existing nav, main, footer... */}
  <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
</SignInModalContext.Provider>
```

**In the desktop nav right-side block, add back:**

```tsx
<div className={styles.navRight}>
  <a
    href="#"
    className={styles.navSignIn}
    onClick={(e) => {
      e.preventDefault();
      setSignInOpen(true);
    }}
  >
    Sign in
  </a>
  <Link to="/signup" className={styles.navCta}>
    Sign up free
  </Link>
</div>
```

**In the mobile menu, add back (after the last nav link, before `</div>`):**

```tsx
<div className={styles.mobileDivider} />
<a
  href="#"
  className={styles.mobileLink}
  onClick={(e) => {
    e.preventDefault();
    setMenuOpen(false);
    setSignInOpen(true);
  }}
>
  Sign in
</a>
<Link to="/signup" className={styles.mobileCta}>
  Sign up free
</Link>
```

**Hero primary button** — in `src/pages/HomePage.tsx`, uncomment the block
marked `Signup CTA hidden pre-launch` and change `<a href="#">Create for free</a>`
to `<Link to="/signup">Sign up free</Link>` (add `import { Link } from "react-router"`
at the top if not already there).

**Hero checks** — in `src/pages/HomePage.tsx`, uncomment the block marked
`Hero checks hidden pre-launch` (the "3 habits / Free forever / No credit card"
checkmarks below the hero CTAs).

---

## 2. Pricing page

**File still on disk:** `src/pages/PricingPage.tsx` + `PricingPage.module.css`.

**In `src/routes.tsx`, swap the redirect for the real route:**

```tsx
// remove:
{ path: "pricing", element: <Navigate to="/" replace /> },

// add:
import { PricingPage } from "./pages/PricingPage";
{ path: "pricing", element: <PricingPage /> },
```

**Nav link — in `src/layout/MarketingLayout.tsx`, add to the `links` array:**

```tsx
{ label: "Pricing", to: "/pricing", page: "/pricing" },
```

**Home page pricing section** — was fully removed. The full original JSX
(dual pricing cards: Free vs. Petal+) is in git history. To restore, either:
- `git log --oneline -- src/pages/HomePage.tsx` and check out the section
  from a commit prior to the pre-launch cleanup, OR
- Copy the equivalent content from `src/pages/PricingPage.tsx` which still has
  the full comparison cards.

---

## 3. Teams page

**File still on disk:** `src/pages/TeamsPage.tsx` + `TeamsPage.module.css`.

**In `src/routes.tsx`, swap the redirect for the real route:**

```tsx
// remove:
{ path: "teams", element: <Navigate to="/" replace /> },

// add:
import { TeamsPage } from "./pages/TeamsPage";
{ path: "teams", element: <TeamsPage /> },
```

**Nav link — in `src/layout/MarketingLayout.tsx`, add to the `links` array:**

```tsx
{ label: "For Teams", to: "/teams", page: "/teams" },
```

**Home page teams section** — currently a compact "coming soon" teaser.
The full original admin/teams section (with the admin mockup showing members,
completion %, at-risk counts) is in git history. Retrieve with:

```bash
git log --oneline -- src/pages/HomePage.tsx
git show <commit>:src/pages/HomePage.tsx
```

Or rebuild from `src/pages/TeamsPage.tsx` which shares much of the same content.

---

## 4. Shop email capture form

**Currently commented out** in `src/pages/ShopPage.tsx` (look for
`/* Email capture — disabled until Supabase is wired */`).

**When Supabase is ready:**

1. Create a `waitlist` table in Supabase with columns:
   - `id uuid primary key default gen_random_uuid()`
   - `email text not null`
   - `source text` (e.g. `"shop"`, `"contact"`)
   - `created_at timestamptz default now()`
2. Add a row-level security policy allowing `insert` for anonymous users,
   and **no select** (prevents scraping).
3. `npm install @supabase/supabase-js`
4. Add env vars to `.env.local`:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
5. Uncomment the JSX in `ShopPage.tsx` and wire the `onSubmit` handler to
   insert into the `waitlist` table with `source: "shop"`.

The same pattern will apply to the contact form at `src/pages/ContactPage.tsx`.

---

## 5. Contact page

**File still on disk:** `src/pages/ContactPage.tsx` + `ContactPage.module.css`.

**In `src/routes.tsx`, swap the redirect for the real route:**

```tsx
// remove:
{ path: "contact", element: <Navigate to="/" replace /> },

// add:
import { ContactPage } from "./pages/ContactPage";
{ path: "contact", element: <ContactPage /> },
```

**Footer link — in `src/layout/Footer.tsx`, add back inside the `.links` block:**

```tsx
<a href="/contact">Contact</a>
```

**Form submission** — the contact form is currently `onSubmit={(e) => e.preventDefault()}`. When Supabase is ready, wire it to insert into a `contact_submissions` table (same pattern as section 4's shop form, with fields: `first_name`, `last_name`, `email`, `topic`, `message`).

Until Supabase is live, a Formspree/Getform/Basin endpoint is a valid stopgap
(change the form's `action` attribute to the provider's URL).

**Note:** `src/pages/TeamsPage.tsx` also links to `/contact` in two places (when the Teams page is restored, those links will need the Contact page live too).

---

## 6. Social media buttons

**Currently commented out** in `src/layout/Footer.tsx` (look for
`Social media buttons hidden pre-launch`).

**When the accounts are live:** uncomment the block and replace the `href="#"`
placeholders with the real profile URLs (Instagram, TikTok, Twitter/X,
Pinterest). The emoji placeholders inside the buttons can also be swapped for
proper icons at that point.

---

## 7. Checklist for "ready to launch"

- [ ] Supabase project provisioned, `waitlist` table created
- [ ] Auth routes restored (section 1)
- [ ] Pricing page + route restored (section 2)
- [ ] Teams page + route restored (section 3)
- [ ] Shop form wired to Supabase (section 4)
- [ ] Hero CTA points to `/signup` instead of `#`
- [ ] Contact page restored and form wired up (section 5)
- [ ] Social media buttons restored with real URLs (section 6)
- [ ] Delete this file
