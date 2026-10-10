/* Sample prompts shown on the site.
   PLACEHOLDERS — written in the style of the book, not taken from it.
   Replace with prompts approved for public use before launch. */

export type Direction = "inward" | "growth" | "outward";

export type SamplePrompt = {
  direction: Direction;
  format: string;
  /** Optional line set before the question, as the texts do. */
  lead?: string;
  text: string;
  options?: string[];
  scale?: string;
};

export const directions: Record<
  Direction,
  { icon: string; name: string; label: string; desc: string }
> = {
  inward: {
    icon: "☾",
    name: "Moon",
    label: "Inward",
    desc: "Prompts that turn toward your own inner weather: rest, feeling, and the quiet things you almost missed.",
  },
  growth: {
    icon: "🌱",
    name: "Sprout",
    label: "Growth",
    desc: "Prompts about becoming: patience with yourself, trying new things, and what hard seasons taught you.",
  },
  outward: {
    icon: "⛰",
    name: "Mountain",
    label: "Outward",
    desc: "Prompts that look outward: the people, places, and patterns in nature that hold your life together.",
  },
};

/* Real prompts, the same two the app's /guided-journal sign-up shows
   (petalprogress-app TextsSignupPage). Keep them in step with the app. */
export const appPrompts: SamplePrompt[] = [
  {
    direction: "growth",
    format: "Yes / No / Maybe",
    lead: "Please consider this. Your yes could lose intention if you default to saying yes.",
    text: "Did you personally, deeply value saying yes to something recently?",
    options: ["yes", "no", "maybe", "unsure"],
  },
  {
    direction: "inward",
    format: "Multiple choice",
    text: "Which of these animal quirks fits you right about now? Or pick one you like.",
    options: [
      "a squirrel burying a decoy nut pile",
      "an emperor penguin rotating in its group huddle",
      "a pufferfish drawing sand circles",
      "something else",
      "unsure",
    ],
  },
];

export const samplePrompts: SamplePrompt[] = [
  {
    direction: "inward",
    format: "Multiple choice",
    text: "Which of these would feel like a small comfort right now?",
    options: [
      "a slow, full breath",
      "a warm drink in both hands",
      "a minute with my eyes closed",
      "something else",
      "unsure",
    ],
  },
  {
    direction: "growth",
    format: "Scale",
    text: "On a scale from one to five, how gentle have you been with yourself this week?",
    scale: "1 for least gentle, 5 for most gentle",
  },
  {
    direction: "outward",
    format: "Yes / No",
    text: "Did someone make your day a little easier recently?",
  },
];
