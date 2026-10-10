import { Link } from "react-router";
import { journalDetails } from "../launch";
import { appPrompts, directions } from "../data/samplePrompts";
import { PromptCard } from "../components/PromptCard";
import { TextsCta } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

/*
 * The journal and the texts get equal weight here on purpose: we don't yet
 * know which will be more popular, so neither is featured over the other.
 */
export function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroWide}>
          <h1 className={styles.heroTitle}>
            A guided <em>journal.</em>
          </h1>
          <p className={styles.heroSub}>
            {journalDetails.promptCount} prompts, each crafted for open
            thought, looking inward, outward, and toward growth. Answer them
            in the journal, or one text at a time.
          </p>
          <div className={styles.heroSplit}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardKicker}>Journal</div>
              <p className={styles.heroCardText}>
                Answer each prompt by hand: circle, rate, or write. Keep what
                you find and flip back through it whenever you like.
              </p>
              <Link to="/journal" className={styles.btnPrimary}>
                Look inside the journal
              </Link>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardKicker}>Texts</div>
              <p className={styles.heroCardText}>
                Prompts arrive two to six times a week. Reply with a word, a
                number, or a choice, and let it go.
              </p>
              <TextsCta from="web-home" fallbackTo="/texts" />
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE DIRECTIONS ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Inside every prompt</div>
          <h2 className={styles.title}>
            Three directions to <em>look.</em>
          </h2>
          <div className={styles.grid3}>
            {Object.values(directions).map((d) => (
              <div key={d.label} className={styles.card}>
                <div className={styles.cardIcon}>{d.icon}</div>
                <div className={styles.cardKicker}>{d.name}</div>
                <div className={styles.cardTitle}>{d.label}</div>
                <p className={styles.cardText}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE PROMPTS ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.sectionNarrow} style={{ maxWidth: 860 }}>
          <div className={styles.eyebrow}>Sample prompts</div>
          <h2 className={styles.title}>
            Simple to answer. <em>Open to anything.</em>
          </h2>
          <p className={styles.desc}>
            Your answer can be a single word or anything at all. Engaging
            with the question is the practice.
          </p>
          <div className={styles.promptPair}>
            {appPrompts.map((p) => (
              <PromptCard key={p.text} prompt={p} />
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
            <Link to="/journal" className={styles.btnOutline}>
              Look inside the journal
            </Link>
            <TextsCta from="web-home" fallbackTo="/texts" outline />
          </div>
        </div>
      </section>
    </>
  );
}
