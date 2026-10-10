import { Link } from "react-router";
import { launch } from "../launch";
import { directions, samplePrompts } from "../data/samplePrompts";
import { BookCover } from "../components/BookCover";
import { PromptCard } from "../components/PromptCard";
import {
  BuyOptions,
  StatusPill,
  TextsCta,
} from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

export function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroEyebrow}>❋ Gratitude prompts, on paper and by text</div>
            <h1 className={styles.heroTitle}>
              One set of prompts.
              <br />
              <em>Two ways</em> to practice.
            </h1>
            <p className={styles.heroSub}>
              Gratitude prompts that meet you where you are. Write them in the
              journal and keep what you find, or answer them by text and let
              each one go.
            </p>
            <div className={styles.heroCtas}>
              <Link to="/journal" className={styles.btnPrimary}>
                Look inside the journal
              </Link>
              <Link to="/daily" className={styles.btnGhost}>
                How the daily texts work →
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <BookCover />
          </div>
        </div>
      </section>

      {/* ── TWO WAYS ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Same prompts, your choice</div>
          <h2 className={styles.title}>
            Keep it, or <em>let it go.</em>
          </h2>
          <p className={styles.desc}>
            Like a sand mandala, the value is in the doing. Some days you want
            a record in your own handwriting. Some days you just want to
            answer and move on. PetalProgress gives you both.
          </p>
          <div className={styles.grid2}>
            <div className={styles.card}>
              <StatusPill status={launch.journal} />
              <div className={styles.cardKicker}>On paper</div>
              <div className={styles.cardTitle}>
                The journal: <em>keep it.</em>
              </div>
              <p className={styles.cardText}>
                Answer each prompt by hand. Circle, rate, or write, then flip
                back through it whenever you want to see where you've been.
              </p>
              <Link to="/journal" className={styles.cardLink}>
                Look inside →
              </Link>
            </div>
            <div className={styles.card}>
              <StatusPill status={launch.texts} />
              <div className={styles.cardKicker}>By text</div>
              <div className={styles.cardTitle}>
                Daily texts: <em>let it go.</em>
              </div>
              <p className={styles.cardText}>
                Prompts arrive by text a few times a week. Reply in a word or a
                number. Answering is the practice, and nothing needs to be
                kept.
              </p>
              <Link to="/daily" className={styles.cardLink}>
                How it works →
              </Link>
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

      {/* ── TRY ONE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Try one</div>
          <h2 className={styles.title}>
            Answer it, then <em>let it go.</em>
          </h2>
          <p className={styles.desc}>
            This is how the daily texts feel. Pick an answer. Nothing is
            saved.
          </p>
          <div style={{ maxWidth: 420, margin: "40px auto 0" }}>
            <PromptCard prompt={samplePrompts[0]} letGo />
          </div>
        </div>
      </section>

      {/* ── WHERE TO FIND IT ── */}
      <section className={styles.section} id="buy">
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Where to find it</div>
          <h2 className={styles.title}>
            Get the <em>journal.</em>
          </h2>
          <BuyOptions />
          <div style={{ marginTop: 32 }}>
            <TextsCta light />
          </div>
        </div>
      </section>
    </>
  );
}
