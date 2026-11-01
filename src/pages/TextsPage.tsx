import type { ReactNode } from "react";
// import { Link } from "react-router"; // restore with the Also-in-print section
import { launch } from "../launch";
import { TextsCta, UserQuotes } from "../components/ProductBlocks";
import TextThread from "../components/TextThread";
import styles from "./ProductPage.module.css";

/** A cloud-shaped note beside the example texts, under them on narrow screens. */
function Cloud({
  tone = "marigold",
  children,
}: {
  tone?: "marigold" | "blush";
  children: ReactNode;
}) {
  const cls = [styles.privacyBubble, tone === "blush" && styles.cloudBlush]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <svg className={styles.cloudShape} viewBox="0 0 258 172" aria-hidden="true">
        <path d="M62 150C27 150 10 123 27 102C4 82 26 44 58 50C64 17 110 6 130 33C150 8 200 18 205 52C240 46 256 88 230 106C250 130 228 156 192 150C172 166 132 166 122 152C106 166 78 166 62 150Z" />
      </svg>
      <p className={styles.cloudText}>{children}</p>
    </div>
  );
}

export function TextsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCentered}>
          <h1 className={styles.heroTitle}>
            A guided journal, <em>one text at a time.</em>
          </h1>
          <p className={styles.heroSub}>
            You move through the whole guided journal in small pieces, two
            to six prompts a week
          </p>
          <div className={styles.heroCtas}>
            <TextsCta from="web-texts" />
          </div>
        </div>
      </section>

      {/* ── WHAT A TEXT LOOKS LIKE ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        <div className={`${styles.sectionInner} ${styles.centerHead}`}>
          <h2 className={styles.title}>
            What it <em>looks like.</em>
          </h2>
          <div className={styles.threadStage}>
            <TextThread />
            <div className={styles.cloudStack}>
              <Cloud>
                <strong>Engaging with the question is the practice.</strong>{" "}
                Maybe you reply with <em>yes</em>, <em>maybe</em>, <em>3</em>,
                or <em>squirrel</em>.
              </Cloud>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT PEOPLE SAY ── */}
      <UserQuotes status={launch.texts} />

      {/* Also-in-print section hidden until the journal is in print — see RESTORE_LATER.md
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
      */}

      {/* ── SIGN UP ── */}
      <section className={styles.section}>
        <div className={styles.sectionNarrow}>
          <h2 className={styles.title}>
            Start your <em>guided journal.</em>
          </h2>
          <div className={styles.heroCtas} style={{ justifyContent: "center", marginTop: 28 }}>
            <TextsCta from="web-texts-bottom" onLight />
          </div>
        </div>
      </section>
    </>
  );
}
