import { Link } from "react-router";
import { journalDetails } from "../launch";
import { BookCover } from "../components/BookCover";
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
              A book of <em>guided prompts.</em>
            </h1>
            <p className={styles.heroSub}>
              {journalDetails.title} is a guided journal you answer by hand:
              circle a choice, rate a feeling, or write it out. Move tiles
              to reveal your mandala as you continue through the journal.
            </p>
            <div className={styles.heroCtas}>
              <a href="#buy" className={styles.btnJournal}>
                Get the journal
                {journalDetails.price ? ` · ${journalDetails.price}` : ""}
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <BookCover />
          </div>
        </div>
      </section>

      {/* ── WHY PAPER ── */}
      <section className={`${styles.section} ${styles.sectionSky}`}>
        <div className={styles.skyPanel}>
          <div className={styles.eyebrow}>Your mandala</div>
          <h2 className={styles.title}>
            Move tiles to <em>reveal your mandala.</em>
          </h2>
          <p className={styles.desc}>
            As you continue through the journal, you move tiles to reveal
            your mandala. By the last prompt, it's all there on the page.
          </p>
          <p className={styles.desc} style={{ marginTop: 16 }}>
            <Link to="/philosophy" className={styles.panelLink}>
              Read our philosophy →
            </Link>
          </p>
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
