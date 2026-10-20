import { revealGifAlt } from "@ccowen/petalprogress-ui";
import day4 from "@ccowen/petalprogress-ui/assets/reveal/day-4-outward.gif";
import day75 from "@ccowen/petalprogress-ui/assets/reveal/day-75-inward.gif";
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
        <img className={styles.gif} src={day4} alt={revealGifAlt.day4Outward} />
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
        <img className={styles.gif} src={day75} alt={revealGifAlt.day75Inward} />
      </div>
    </div>
  );
}
