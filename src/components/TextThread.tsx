import { revealGifAlt } from "@ccowen/petalprogress-ui";
import tiles14 from "@ccowen/petalprogress-ui/assets/reveal/14-tiles.gif";
import tiles88 from "@ccowen/petalprogress-ui/assets/reveal/88-tiles.gif";
import styles from "./TextThread.module.css";

/* Two real prompts and replies. Only one shows at a time: both at once is a
   lot to take in, so a toggle switches between them. The toggle and the
   thread are separate pieces so the page can place them apart. */
const threads = [
  {
    label: "Prompt 14",
    stamp: "Tuesday 8:04 AM",
    prompt:
      "🌱 Please consider this. Your yes could lose intention if you default to saying yes.\n\n" +
      "Did you personally, deeply value saying yes to something recently?\n\n" +
      "All responses welcome, including yes no maybe unsure",
    reply: "maybe...",
    thanks: "Thanks for your thought. Now you can see another tile.",
    gif: tiles14,
    alt: revealGifAlt.tiles14,
  },
  {
    label: "Prompt 88",
    stamp: "Friday 7:12 PM",
    prompt:
      "🌙 Which of these animal quirks fits you right about now? Or pick one you like.\n\n" +
      "- a squirrel burying a decoy nut pile\n" +
      "- an emperor penguin rotating in its group huddle\n" +
      "- a pufferfish drawing sand circles\n" +
      "- something else\n" +
      "- unsure",
    reply: "DEF SQUIRREL",
    thanks: "Thanks for your thought. Here's your progress image.",
    gif: tiles88,
    alt: revealGifAlt.tiles88,
  },
];

/** The Prompt 14 / Prompt 88 switch. */
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

/** One example text thread: the prompt, a reply, and the reveal gif. */
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
      <div className={styles.bubble}>{t.prompt}</div>
      <div className={styles.bubbleMe}>{t.reply}</div>
      <div className={styles.bubble}>{t.thanks}</div>
      <div className={styles.bubble}>Sample design. Wouldn't want to spoil the reveal :)</div>
      <img className={styles.gif} src={t.gif} alt={t.alt} />
    </div>
  );
}
