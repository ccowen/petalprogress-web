import { directions, type SamplePrompt } from "../data/samplePrompts";
import styles from "./PromptCard.module.css";

/**
 * A sample prompt, shown as a static card. Nothing on it is clickable: the
 * journal and the texts are answered on paper or by reply, never on the site.
 */
export function PromptCard({ prompt }: { prompt: SamplePrompt }) {
  const dir = directions[prompt.direction];
  const choices =
    prompt.options ??
    (prompt.scale ? ["1", "2", "3", "4", "5"] : ["yes", "no"]);

  return (
    <div className={styles.card}>
      {prompt.format && (
        <div className={styles.meta}>
          <span className={styles.format}>{prompt.format}</span>
        </div>
      )}
      {/* The icon opens the first line, the way it arrives in a text. */}
      {prompt.lead && <p className={styles.lead}>{dir.icon} {prompt.lead}</p>}
      <p className={styles.text}>
        {!prompt.lead && <>{dir.icon} </>}
        {prompt.text}
      </p>
      {prompt.closing ? (
        <p className={styles.closing}>{prompt.closing}</p>
      ) : (
        <div className={prompt.scale ? styles.scaleRow : styles.options}>
          {choices.map((c) => (
            <span key={c} className={styles.option}>
              {c}
            </span>
          ))}
        </div>
      )}
      {prompt.scale && <div className={styles.scaleHint}>{prompt.scale}</div>}
    </div>
  );
}
