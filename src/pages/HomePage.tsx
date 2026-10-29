import { Link } from "react-router";
import { journalDetails } from "../launch";
import { appPrompts, directions } from "../data/samplePrompts";
import { PromptCard } from "../components/PromptCard";
import { ButterflyRing } from "../components/Butterfly";
import { TextsCta } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

/*
 * Texts come first: they're available now, and the journal is coming soon.
 */
export function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={`${styles.hero} ${styles.heroFramedSection}`}>
        <div className={styles.heroFrame}>
          <ButterflyRing
            className={styles.butterflyRing}
            itemClassName={styles.ringButterfly}
          />
          <div className={styles.heroWide}>
            <h1 className={styles.heroTitle}>
              A guided <em>journal.</em>
            </h1>
            <p className={styles.heroSub}>
              {journalDetails.promptCount} prompts, each crafted for open
              thought, looking inward, outward, and toward growth.
            </p>
            <div className={styles.heroSplit}>
              <div className={styles.heroCard}>
                <TextsCta from="web-home" fallbackTo="/texts" />
              </div>
              <div className={styles.heroCard}>
                <Link to="/journal" className={`${styles.btnJournal} ${styles.btnNeutral}`}>
                  Journal coming soon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAMPLE PROMPTS ── */}
      <section className={`${styles.section} ${styles.sectionSky}`}>
        <div className={styles.sectionInner}>
          <div className={styles.promptSplit}>
            <h2 className={`${styles.title} ${styles.promptSplitTitle}`}>
              Simple to answer. <em>Open to anything.</em>
            </h2>
            <div className={styles.promptColumn}>
              {appPrompts.map((p) => (
                <PromptCard key={p.text} prompt={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE DIRECTIONS ── */}
      <section className={`${styles.section} ${styles.sectionPlum}`}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Inside every prompt</div>
          <h2 className={styles.title}>
            Three directions to <em>look.</em>
          </h2>
          <div className={styles.grid3}>
            {Object.values(directions).map((d) => (
              <div key={d.label} className={`${styles.card} ${styles.directionCard}`}>
                <div className={styles.directionIcon}>{d.icon}</div>
                <div className={styles.cardKicker}>{d.name}</div>
                <div className={styles.cardTitle}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── START ── */}
      <section className={styles.section}>
        <div className={styles.sectionNarrow}>
          <h2 className={styles.title}>
            Start your <em>guided journal.</em>
          </h2>
          <div className={styles.heroCtas} style={{ justifyContent: "center", marginTop: 28 }}>
            <TextsCta from="web-home" fallbackTo="/texts" />
            <Link to="/journal" className={`${styles.btnJournal} ${styles.btnNeutral}`}>
              Journal coming soon
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
