import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { launch } from "../launch";
import { TextsCta, UserQuotes } from "../components/ProductBlocks";
import { ExampleText, PromptToggle } from "../components/TextThread";
import styles from "./ProductPage.module.css";
import { MandalaProgression } from "../components/MandalaProgression";
import sampleMandala from "../assets/reveal-hq/gratitude-v1-sample-88-tiles-hq.gif";

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
  const [prompt, setPrompt] = useState(0);
  return (
    <>
      <section className={styles.hero}>
        {/* Text on the left (two thirds), the sample mandala on the right (one third).
            Stacks on narrow screens. */}
        <div className={styles.heroSplitText}>
          <div className={styles.heroTextCol}>
            <h1 className={styles.heroTitle}>
              A guided journal,<br />
              <em>one text at a time.</em>
            </h1>
            <p className={styles.heroSub}>
              You move through the guided journal in small pieces,{" "}
              <br className={styles.heroSubBreak} />
              two to six prompts a week
            </p>
            <div className={styles.heroCtas}>
              <TextsCta from="web-texts" />
            </div>
          </div>
          {/* A sample design (88 of 147 tiles), transparent outside the mandala. */}
          <img className={styles.heroMandala} src={sampleMandala} alt="" />
        </div>
      </section>

      {/* ── WHAT A TEXT LOOKS LIKE ── */}
      <section className={`${styles.section} ${styles.sectionSurface}`}>
        {/* Wide screens: the heading and toggle on the left, vertically centred;
            the example text beside them, with the cloud floating off its right edge. */}
        <div className={`${styles.sectionInner} ${styles.centerHead} ${styles.lookLayout}`}>
          <h2 className={`${styles.title} ${styles.lookTitle}`}>
            What it <em>looks like.</em>
          </h2>
          <div className={styles.lookControls}>
            <PromptToggle active={prompt} onChange={setPrompt} className={styles.lookToggle} />
            <p className={styles.lookTagline}>One journal, two ways to engage.</p>
          </div>
          <ExampleText index={prompt} className={styles.lookThread} />
          <div className={styles.cloudStack}>
            <Cloud>
              <strong>Engaging with the question is the practice.</strong>{" "}
              Maybe you reply with <em>yes</em>, <em>maybe</em>, <em>3</em>,
              or <em>squirrel</em>.
            </Cloud>
          </div>
        </div>
      </section>

      {/* ── ANSWER SIMPLY ── */}
      <section className={`${styles.section} ${styles.sectionLilac}`}>
        <div className={styles.sectionNarrow}>
          <div className={styles.eyebrow}>Keep it simple</div>
          <h2 className={styles.title}>
            A single word <em>is enough.</em>
          </h2>
          <p className={styles.desc}>
            Every reply moves your mandala forward, whether it&rsquo;s one word,
            a number or a few sentences. If a prompt sparks something and you
            want to keep going, you can, but it&rsquo;s never required for
            progress.
          </p>
        </div>
      </section>

      {/* ── MANDALA MONDAYS ── */}
      <section className={styles.section}>
        <div className={`${styles.sectionInner} ${styles.mondayHead}`}>
          <div className={styles.mondayText}>
            <h2 className={styles.title}>
              Your mandala, <em>every Monday.</em>
            </h2>
            <p className={styles.desc}>
              You receive your mandala every Monday, revealing your progress.
            </p>
            <div className={styles.mondayCloud}>
              <svg className={styles.mondayCloudShape} viewBox="8 20 184 106" aria-hidden="true">
                <path d="M46 116A30 30 0 0 1 30 62A36 36 0 0 1 92 38A32 32 0 0 1 148 46A34 34 0 0 1 166 116Q106 124 46 116Z" />
              </svg>
              <p className={styles.mondayCloudText}>
                Sample design. Wouldn&rsquo;t want to spoil the reveal :)
              </p>
            </div>
          </div>
        </div>
        <MandalaProgression />
      </section>

      {/* ── WHAT PEOPLE SAY ── */}
      <UserQuotes status={launch.texts} />

      {/* ── PRIVACY ── */}
      <section className={`${styles.section} ${styles.sectionLilac}`}>
        <div className={`${styles.sectionInner} ${styles.centerHead}`}>
          <div className={styles.eyebrow}>A focus on privacy</div>
          <h2 className={styles.title}>
            Your answers <em>stay yours.</em>
          </h2>
          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Never shared publicly</h3>
              <p className={styles.cardText}>
                Your replies are never shown publicly or to other subscribers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Reviewed without your name</h3>
              <p className={styles.cardText}>
                When we review answers to improve the prompts, they don&rsquo;t
                include your name, number or other personal information.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Never sold</h3>
              <p className={styles.cardText}>
                We don&rsquo;t sell your information, and your number is never
                shared for marketing.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <Link to="/privacy" className={styles.cardLink}>
              Read the full privacy policy
            </Link>
          </div>
        </div>
      </section>

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
