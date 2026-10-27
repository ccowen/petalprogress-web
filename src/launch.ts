/* ══════════════════════════════════════════════════════
   Launch switches — the one place to flip what's live.
   Each product can go live on its own; pages read from here
   instead of hard-coding "coming soon" copy.
   ══════════════════════════════════════════════════════ */

/**
 * "unannounced" shows no status and no "soon" copy at all, for when we
 * don't want to say yet which product comes first.
 */
export type Availability = "live" | "waitlist" | "coming" | "unannounced";

export const launch = {
  /** The prompt journal (physical book). */
  journal: "unannounced" as Availability,
  /** The same prompts by text message (2–6 a week), signed up for in the app. */
  texts: "unannounced" as Availability,
  /** The mandala habit-tracking app. Pages under /app. */
  app: "coming" as Availability,
};

/**
 * Where to buy the journal. Leave a URL empty to hide that option.
 * `checkout` is the direct-from-us link (e.g. a Stripe Payment Link or
 * Shopify buy button URL).
 */
export const buyLinks = {
  checkout: "",
  etsy: "",
};

/**
 * Texts sign-up. While `launch.texts` is "waitlist" this should point at a
 * waitlist form (Formspree/Tally/etc. until Supabase is wired — see
 * RESTORE_LATER.md). Once "live", point it at the real opt-in flow.
 * Leave empty to show "opening soon" copy with no button.
 */
// The guided-journal sign-up flow in petalprogress-app (pay → number → reply YES).
export const textsSignupUrl = "https://app.petalprogress.com/guided-journal";

/** Where returning subscribers sign in to manage their texts. */
export const textsSignInUrl = "https://app.petalprogress.com/guided-journal/signin";

/** Details for the journal. Fill in once final. */
export const journalDetails = {
  title: "The PetalProgress Journal",
  subtitle: "A guided journal",
  /** Prompts in the book, and so in a full run of texts (petalprogress-app PROMPT_COUNT). */
  promptCount: 147,
  price: "",
};
