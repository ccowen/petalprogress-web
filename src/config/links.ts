/* ══════════════════════════════════════════════════════
   ⚑ THE ONE BLOCK TO EDIT ⚑

   /scan is the stable URL printed on physical products.
   Everything a scanner can reach is defined here — edit
   this file to change where products send people, with
   no reprinting of QR codes.
   ══════════════════════════════════════════════════════ */

export const APP_URL = "https://app.petalprogress.com";
export const SHOP_URL = "https://shop.petalprogress.com";

/* Where returning users go. Same destination as APP_URL
   for now — the app root can route signed-in people to
   their mandala and everyone else to sign-in. Point this
   at a dedicated sign-in route once one exists. */
export const LOGIN_URL = APP_URL;

export interface HubLink {
  label: string;
  /** Optional second line of context. */
  note?: string;
  href: string;
  /** true → routed in-app; false/omitted → full page load. */
  internal?: boolean;
  /** The standout link. Exactly one should carry this. */
  featured?: boolean;
}

/* The main link rows on /scan. Returning users get a
   lighter "Sign in" line beneath these rather than a row
   of their own — an app row here read as a duplicate of
   the "try" row. */
export const HUB_LINKS: HubLink[] = [
  {
    label: "The guided journal",
    note: "Prompts to answer by hand, and keep",
    href: "/journal",
    internal: true,
    featured: true,
  },
  {
    label: "The guided journal by text",
    note: "The same prompts, a few times a week. Answer, and let go",
    href: "/texts",
    internal: true,
  },
  {
    label: "PetalProgress on the web",
    note: "Start a mandala, or open one you've kept",
    href: "/online",
    internal: true,
  },
  {
    label: "Shop trackers & refills",
    note: "Whiteboards, notepads, reorders",
    href: SHOP_URL,
  },
  {
    label: "How it works",
    note: "The thinking behind the petals",
    href: "/philosophy",
    internal: true,
  },
  {
    label: "Explore mandala types",
    note: "Every practice has its own shape",
    href: "/mandala-types",
    internal: true,
  },
];

/* Social profiles. Add a url and the icon appears —
   entries left empty are simply not rendered, so no
   dead links ship. */
export const SOCIALS = [
  { label: "Instagram", icon: "📷", url: "" },
  { label: "TikTok", icon: "🎵", url: "" },
  { label: "Pinterest", icon: "📌", url: "" },
];
