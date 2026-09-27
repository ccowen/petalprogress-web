import { Link } from "react-router";
import { launch } from "../launch";
import { samplePrompts } from "../data/samplePrompts";
import { PromptCard } from "../components/PromptCard";
import { StatusPill, TextsCta } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

export function DailyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCentered}>
          <div className={styles.heroEyebrow}>❋ Daily texts</div>
          <h1 className={styles.heroTitle}>
            A prompt, by text. <em>Then let it go.</em>
          </h1>
          <p className={styles.heroSub}>
            Gratitude prompts arrive by text, two to six times a week, on days
            we pick to keep it a small surprise. Reply with a word, a number,
            or a choice. Answering is the practice, and when you've
            answered, you're done.
          </p>
          <div className={styles.heroCtas}>
            <TextsCta />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={styles.sectionInner}>
          <StatusPill status={launch.texts} />
          <div className={styles.eyebrow}>How it works</div>
          <h2 className={styles.title}>
            Small enough to <em>fit any day.</em>
          </h2>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.cardTitle}>Sign up</div>
              <p className={styles.cardText}>
                Choose how many prompts a week and a time of day, then confirm
                by text. You can stop any time by replying STOP.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.cardTitle}>Get a prompt</div>
              <p className={styles.cardText}>
                Each one looks inward, outward, or toward growth. Most take a
                few seconds to answer.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.cardTitle}>Reply, and release</div>
              <p className={styles.cardText}>
                Send your answer back. Like a sand mandala, it isn't there to
                be reread: replies are never saved to your account or linked to
                your number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRY ONE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>A prompt like this</div>
          <h2 className={styles.title}>
            Try <em>one.</em>
          </h2>
          <div style={{ maxWidth: 420, margin: "36px auto 0" }}>
            <PromptCard prompt={samplePrompts[1]} letGo />
          </div>
        </div>
      </section>

      {/* ── PAIRS WITH THE BOOK ── */}
      <section className={styles.section}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Want to keep your answers?</div>
          <h2 className={styles.title}>
            That's what <em>the journal</em> is for.
          </h2>
          <p className={styles.desc}>
            The journal holds the same prompts on paper, so you can keep a
            record in your own handwriting and look back whenever you like.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link to="/journal" className={styles.btnOutline}>
              Look inside the journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
