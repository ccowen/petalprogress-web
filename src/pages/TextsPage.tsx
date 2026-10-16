import { Link } from "react-router";
import { launch } from "../launch";
import { StatusPill, TextsCta } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

export function TextsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCentered}>
          <div className={styles.heroEyebrow}>❋ The guided journal, by text</div>
          <h1 className={styles.heroTitle}>
            One text at a time. <em>Then let it go.</em>
          </h1>
          <p className={styles.heroSub}>
            You move through the whole guided journal in small pieces, two
            to six prompts a week, on days we pick to keep it a small
            surprise. Each prompt is crafted for open thought, and your answer
            can be simple or anything. Engaging with the question is the
            practice.
          </p>
          <div className={styles.heroCtas}>
            <TextsCta from="web-texts" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={`${styles.section} ${styles.sectionSky}`}>
        <div className={`${styles.sectionInner} ${styles.centerHead}`}>
          <StatusPill status={launch.texts} />
          <div className={styles.eyebrow}>How it works</div>
          <h2 className={styles.title}>
            Small enough to <em>fit any day.</em>
          </h2>
          <div className={styles.grid3}>
            <div className={`${styles.card} ${styles.stepCard}`}>
              <div className={styles.stepNum}>01</div>
              <div className={styles.cardTitle}>Sign up</div>
              <p className={styles.cardText}>
                Choose how many prompts a week and a time of day, then reply
                YES to the text we send. Cancel any time by replying STOP.
              </p>
            </div>
            <div className={`${styles.card} ${styles.stepCard}`}>
              <div className={styles.stepNum}>02</div>
              <div className={styles.cardTitle}>Get a prompt</div>
              <p className={styles.cardText}>
                Each one looks inward, outward, or toward growth. Most take a
                few seconds to answer.
              </p>
            </div>
            <div className={`${styles.card} ${styles.stepCard}`}>
              <div className={styles.stepNum}>03</div>
              <div className={styles.cardTitle}>Reply, and release</div>
              <p className={styles.cardText}>
                Send your answer back, and every answer reveals more of your
                mandala. Like a sand mandala, the words aren't there to be
                reread: replies are never saved to your account or linked to
                your number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIRS WITH THE JOURNAL ── */}
      <section className={styles.section}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Also in print</div>
          <h2 className={styles.title}>
            The same prompts, <em>in the journal.</em>
          </h2>
          <p className={styles.desc}>
            The journal holds the same prompts on paper: answer by hand, move
            tiles to reveal your mandala, and keep your answers in your own
            handwriting.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link to="/journal" className={styles.btnJournalOutline}>
              Look inside the journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
