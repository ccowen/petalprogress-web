import { useState } from "react";
import { directions, type SamplePrompt } from "../data/samplePrompts";
import styles from "./PromptCard.module.css";

/**
 * A sample prompt you can answer. When `letGo` is set, answering fades the
 * card and nothing is kept, the same way the texts work.
 */
export function PromptCard({
  prompt,
  letGo = false,
}: {
  prompt: SamplePrompt;
  letGo?: boolean;
}) {
  const [answered, setAnswered] = useState(false);
  const dir = directions[prompt.direction];
  const choices =
    prompt.options ??
    (prompt.scale ? ["1", "2", "3", "4", "5"] : ["yes", "no"]);
  const interactive = letGo && !answered;

  return (
    <div className={`${styles.card} ${answered ? styles.released : ""}`}>
      <div className={styles.meta}>
        <span className={styles.dir}>
          {dir.icon} {dir.label}
        </span>
        <span className={styles.format}>{prompt.format}</span>
      </div>
      <p className={styles.text}>{prompt.text}</p>
      <div className={prompt.scale ? styles.scaleRow : styles.options}>
        {choices.map((c) =>
          interactive ? (
            <button
              key={c}
              type="button"
              className={styles.option}
              onClick={() => setAnswered(true)}
            >
              {c}
            </button>
          ) : (
            <span key={c} className={styles.option}>
              {c}
            </span>
          )
        )}
      </div>
      {prompt.scale && <div className={styles.scaleHint}>{prompt.scale}</div>}
      {answered && (
        <div className={styles.releasedNote} role="status">
          Answered, and let go. Nothing was saved.
        </div>
      )}
    </div>
  );
}
