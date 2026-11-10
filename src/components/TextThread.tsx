import { revealGifAlt } from "@ccowen/petalprogress-ui";
import tiles88 from "@ccowen/petalprogress-ui/assets/reveal/88-tiles.gif";
import styles from "./TextThread.module.css";

/* Two example texts, the same in the app (WelcomeStep.tsx) and on the web
   (TextThread.tsx): keep them in step, and with what petalprogress-sms really
   sends (lib/copy.py). Both are real prompts (14 and 88), as sent: plain text
   with the footer and no emoji. The reply is "Got it, logged." with a flower
   and the symbol of the prompt's category (outward is the mountain, growth the
   seedling). Replies are acknowledged, never read. Prompt 88 is a Mandala
   Monday text: the progress image comes with that day's prompt, opened by
   MANDALA_WITH_PROMPT. The sample GIF has 88 tiles; the real one that day would have 87.
   The "sample design" note is not sent; it is a small blush cloud beside the picture that keeps it honest.
   Send times are real ones: the morning send goes at 8:30. */
const threads: {
  label: string;
  stamp: string;
  /** An image that arrives with the text, shown above it. */
  media?: { src: string; alt: string };
  messages: { me?: boolean; text: string }[];
  /** A cloud about the sample (not a sent text), shown to the right of the image. */
  note?: string;
}[] = [
  {
    label: "Prompt 14",
    stamp: "Tuesday 8:30 AM",
    messages: [
      {
        text:
          "Please consider this. Your yes could lose intention if you default to saying yes.\n\n" +
          "Did you personally, deeply value saying yes to something recently?\n\n" +
          "All responses welcome, including yes no maybe unsure\n\n" +
          "From PetalProgress. Reply HELP for help, STOP to opt out.",
      },
      { me: true, text: "maybe..." },
      { text: "Got it, logged. 🌸⛰️" },
    ],
  },
  {
    label: "Prompt 88 (Mandala Monday)",
    stamp: "Monday 8:30 AM",
    note: "Sample design. Wouldn't want to spoil the reveal :)",
    media: { src: tiles88, alt: revealGifAlt.tiles88 },
    messages: [
      {
        text:
          "Here's your updated Monday mandala 🌸 You also get a prompt today:\n\n" +
          "Which of these animal quirks fits you right about now? Or pick one you like.\n\n" +
          "- a squirrel burying a decoy nut pile\n" +
          "- an emperor penguin rotating in my group huddle\n" +
          "- a pufferfish drawing sand circles\n" +
          "- something else\n" +
          "- unsure\n\n" +
          "From PetalProgress. Reply HELP for help, STOP to opt out.",
      },
      { me: true, text: "DEF SQUIRREL" },
      { text: "Got it, logged. 🌸🌙" },
    ],
  },
];

/** The Prompt 14 / Prompt 88 (Mandala Monday) switch. */
export function PromptToggle({
  active,
  onChange,
  className,
}: {
  active: number;
  onChange: (index: number) => void;
  className?: string;
}) {
  return (
    <div
      className={className ? `${styles.toggle} ${className}` : styles.toggle}
      role="group"
      aria-label="Choose an example text"
    >
      {threads.map((th, i) => (
        <button
          key={th.label}
          type="button"
          className={styles.toggleBtn}
          aria-pressed={i === active}
          onClick={() => onChange(i)}
        >
          {th.label}
        </button>
      ))}
    </div>
  );
}

/** One example text: a prompt and a reply, with the progress image when it is a Mandala Monday text. */
export function ExampleText({ index, className }: { index: number; className?: string }) {
  const t = threads[index];
  return (
    <div
      key={index}
      className={className ? `${styles.thread} ${className}` : styles.thread}
      role="group"
      aria-label={`Example text thread: ${t.label}`}
    >
      <div className={styles.stamp}>{t.stamp}</div>
      {(t.media || t.note) && (
        <div className={styles.mediaRow}>
          {t.media && <img className={styles.gif} src={t.media.src} alt={t.media.alt} />}
          {t.note && (
            <div className={styles.sampleCloud}>
              {/* A rounder, simpler cloud than the notes beside the thread, so the two don't read as the same thing. Same shape as the app's. */}
              <svg className={styles.sampleCloudShape} viewBox="8 20 184 106" aria-hidden="true">
                <path d="M46 116A30 30 0 0 1 30 62A36 36 0 0 1 92 38A32 32 0 0 1 148 46A34 34 0 0 1 166 116Q106 124 46 116Z" />
              </svg>
              <p className={styles.sampleCloudText}>{t.note}</p>
            </div>
          )}
        </div>
      )}
      {t.messages.map((m, i) => (
        <div key={i} className={m.me ? styles.bubbleMe : styles.bubble}>
          {m.text}
        </div>
      ))}
    </div>
  );
}
