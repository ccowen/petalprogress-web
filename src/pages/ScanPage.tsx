import { Link } from "react-router";
import { TextsCta } from "../components/ProductBlocks";
import styles from "./ProductPage.module.css";

/**
 * QR-code landing for people holding a printed PetalProgress product.
 * Keep this URL stable (petalprogress.com/scan); change what's here instead
 * of reprinting codes.
 */
export function ScanPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCentered}>
          <div className={styles.heroEyebrow}>❋ Welcome</div>
          <h1 className={styles.heroTitle}>
            You found us <em>from the page.</em>
          </h1>
          <p className={styles.heroSub}>
            Thank you for practicing with PetalProgress. Here's how to keep
            going when the journal isn't in your hands.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={styles.sectionInner}>
          <div className={styles.grid3} style={{ marginTop: 0 }}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>✉</div>
              <div className={styles.cardTitle}>Get prompts by text</div>
              <p className={styles.cardText}>
                The same prompts as your journal, one a day, by text. Answer,
                and let it go.
              </p>
              <div style={{ marginTop: 20 }}>
                <TextsCta light />
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>◎</div>
              <div className={styles.cardTitle}>Why we let go</div>
              <p className={styles.cardText}>
                The idea behind the practice, and why the journal is there
                for the things you want to keep.
              </p>
              <Link to="/philosophy" className={styles.cardLink}>
                Read our philosophy →
              </Link>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>❋</div>
              <div className={styles.cardTitle}>Coming later</div>
              <p className={styles.cardText}>
                The PetalProgress app turns your habits into a living mandala.
              </p>
              <Link to="/app" className={styles.cardLink}>
                See what's coming →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
