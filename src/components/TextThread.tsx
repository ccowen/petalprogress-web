import { useState } from "react";
import { revealGifAlt } from "@ccowen/petalprogress-ui";
import tiles14 from "@ccowen/petalprogress-ui/assets/reveal/14-tiles.gif";
import tiles88 from "@ccowen/petalprogress-ui/assets/reveal/88-tiles.gif";
import styles from "./TextThread.module.css";

/* Two real prompts and replies. Only one shows at a time: both at once is a
   lot to take in, so a toggle switches between them. */
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

export default function TextThread() {
  const [active, setActive] = useState(0);
  const t = threads[active];

  return (
    <div className={styles.threads}>
      <div className={styles.toggle} role="group" aria-label="Choose an example text">
        {threads.map((th, i) => (
          <button
            key={th.label}
            type="button"
            className={styles.toggleBtn}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {th.label}
          </button>
        ))}
      </div>
      <div key={active} className={styles.thread} role="group" aria-label={`Example text thread: ${t.label}`}>
        <div className={styles.stamp}>{t.stamp}</div>
        <div className={styles.bubble}>{t.prompt}</div>
        <div className={styles.bubbleMe}>{t.reply}</div>
        <div className={styles.bubble}>{t.thanks}</div>
        <div className={styles.bubble}>Sample design. Wouldn't want to spoil the reveal :)</div>
        <img className={styles.gif} src={t.gif} alt={t.alt} />
      </div>
    </div>
  );
}
