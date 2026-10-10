import { Link } from "react-router";
import { journalDetails } from "../launch";
import { directions, samplePrompts } from "../data/samplePrompts";
import { BookCover } from "../components/BookCover";
import { PromptCard } from "../components/PromptCard";
import { BuyOptions } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

export function JournalPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.heroEyebrow}>❋ {journalDetails.subtitle}</div>
            <h1 className={styles.heroTitle}>
              A place to <em>keep</em> what you notice.
            </h1>
            <p className={styles.heroSub}>
              {journalDetails.title} is a guided journal you answer by hand:
              circle a choice, rate a feeling, or write it out. When
              you want to look back, it's all there in your own handwriting.
            </p>
            <div className={styles.heroCtas}>
              <a href="#buy" className={styles.btnPrimary}>
                Get the journal
                {journalDetails.price ? ` · ${journalDetails.price}` : ""}
              </a>
              <a href="#inside" className={styles.btnGhost}>
                Look inside →
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <BookCover />
          </div>
        </div>
      </section>

      {/* ── WHY A BOOK ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Why a book</div>
          <h2 className={styles.title}>
            The texts let go. <em>The page remembers.</em>
          </h2>
          <p className={styles.desc}>
            Our digital practice is built like a sand mandala: you answer, and
            it's done. But some people want a record, and that's a real
            choice, not a workaround. The journal holds the same prompts on
            paper, for anyone who wants to keep what they find.
          </p>
          <p className={styles.desc} style={{ marginTop: 16 }}>
            <Link to="/philosophy" style={{ color: "var(--pp-sage)" }}>
              Read our philosophy →
            </Link>
          </p>
        </div>
      </section>

      {/* ── THREE DIRECTIONS ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>How it's organized</div>
          <h2 className={styles.title}>
            Moon, sprout, <em>mountain.</em>
          </h2>
          <p className={styles.desc}>
            Every prompt points in one of three directions, marked with a
            small icon, so you can follow whichever one you need today.
          </p>
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

      {/* ── INSIDE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`} id="inside">
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Inside the journal</div>
          <h2 className={styles.title}>
            Prompts you can answer in <em>a moment.</em>
          </h2>
          <p className={styles.desc}>
            No blank-page pressure. Most prompts give you choices to circle or
            a scale to mark, and "something else" or "unsure" are always
            there as answers too. Write more when you want to.
          </p>
          <div className={styles.promptStack}>
            {samplePrompts.map((p) => (
              <PromptCard key={p.text} prompt={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIRS WITH TEXTS ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Pairs with</div>
          <h2 className={styles.title}>
            The same prompts, <em>by text.</em>
          </h2>
          <p className={styles.desc}>
            On days you're away from the book, get a prompt by text instead.
            Scan the code inside the cover to get started.
          </p>
          <div style={{ marginTop: 28 }}>
            <Link to="/daily" className={styles.btnOutline}>
              How the texts work
            </Link>
          </div>
        </div>
      </section>

      {/* ── BUY ── */}
      <section className={styles.section} id="buy">
        <div className={styles.sectionInner}>
          <div className={styles.eyebrow}>Where to find it</div>
          <h2 className={styles.title}>
            Get the <em>journal.</em>
          </h2>
          <BuyOptions />
        </div>
      </section>
    </>
  );
}
