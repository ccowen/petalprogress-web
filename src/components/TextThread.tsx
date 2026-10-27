import { revealGifAlt } from "@ccowen/petalprogress-ui";
import tiles14 from "@ccowen/petalprogress-ui/assets/reveal/14-tiles.gif";
import tiles88 from "@ccowen/petalprogress-ui/assets/reveal/88-tiles.gif";
import styles from "./TextThread.module.css";

/** Two real prompts and replies, each in its own phone-sized thread. */
export default function TextThread() {
  return (
    <div className={styles.threads}>
      <div className={styles.thread} role="group" aria-label="Example text thread: Tuesday">
        <div className={styles.stamp}>Tuesday 8:04 AM</div>
        <div className={styles.bubble}>
          {"🌱 Please consider this. Your yes could lose intention if you default to saying yes.\n\n" +
            "Did you personally, deeply value saying yes to something recently?\n\n" +
            "All responses welcome, including yes no maybe unsure"}
        </div>
        <div className={styles.bubbleMe}>maybe...</div>
        <div className={styles.bubble}>Nice!</div>
        <img className={styles.gif} src={tiles14} alt={revealGifAlt.tiles14} />
      </div>
      <div className={styles.thread} role="group" aria-label="Example text thread: Friday">
        <div className={styles.stamp}>Friday 7:12 PM</div>
        <div className={styles.bubble}>
          {"🌙 Which of these animal quirks fits you right about now? Or pick one you like.\n\n" +
            "- a squirrel burying a decoy nut pile\n" +
            "- an emperor penguin rotating in its group huddle\n" +
            "- a pufferfish drawing sand circles\n" +
            "- something else\n" +
            "- unsure"}
        </div>
        <div className={styles.bubbleMe}>DEF SQUIRREL</div>
        <div className={styles.bubble}>Love that.</div>
        <img className={styles.gif} src={tiles88} alt={revealGifAlt.tiles88} />
      </div>
    </div>
  );
}
