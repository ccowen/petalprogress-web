/* ══════════════════════════════════════════════════════
   Launch switches — the one place to flip what's live.
   Each product can go live on its own; pages read from here
   instead of hard-coding "coming soon" copy.
   ══════════════════════════════════════════════════════ */

export type Availability = "live" | "waitlist" | "coming";

export const launch = {
  /** The prompt journal (physical book). */
  journal: "live" as Availability,
  /** Daily prompts by text message. Flip to "live" once Twilio/A2P is approved. */
  texts: "waitlist" as Availability,
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
export const textsSignupUrl = "";

/** Details for the journal. Fill in once final. */
export const journalDetails = {
  title: "The PetalProgress Journal",
  subtitle: "A gratitude prompt journal",
  price: "",
};
