import { Link } from "react-router";
import { Button } from "@ccowen/petalprogress-ui";
import { BloomMandala } from "../components/BloomMandala";
import { APP_URL, LOGIN_URL } from "../config/links";
import styles from "./OnlinePage.module.css";

/* ── What keeping a mandala online involves ── */
const STEPS = [
  { n: "01", label: "Pick a practice" },
  { n: "02", label: "Mark your days" },
  { n: "03", label: "Watch the mandala fill" },
];

/* ══════════════════════════════════════════════════════
   OnlinePage — what PetalProgress is on the web.
   Reached from the /scan hub.

   Two framing rules, both easy to break by accident:

   1. The web version is an ALTERNATIVE to paper, not an
      upgrade. Paper is complete on its own. Never imply
      the tracker is missing something or that moving
      online is the goal — plenty of people will look at
      this and rightly stick with paper.

   2. Anyone may land here. A scanner might have never
      heard of us, or might have kept a mandala for a
      year and just bought a notepad. Copy must not
      assume first contact, and both doors (start one /
      open the one you have) stay visible.
   ══════════════════════════════════════════════════════ */
export function OnlinePage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.art}>
          <BloomMandala className={styles.mandala} />
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>𖢻 PetalProgress</span>

          <h1 className={styles.title}>
            PetalProgress,
            <br />
            <em className={styles.titleAccent}>on the web.</em>
          </h1>

          <p className={styles.lede}>
            Whether you're starting your first mandala or picking up one
            you've kept for a while — this is where it lives. Your paper
            tracker is complete exactly as it is; this is simply another
            place to keep the practice.
          </p>

          <p className={styles.body}>
            Either way the idea is the same: each day you show up becomes a
            single petal, and a season of ordinary days becomes a mandala you
            can actually see. On the web it draws itself and remembers what
            came before. Some people prefer that. Plenty of people prefer
            paper — both are a real answer.
          </p>

          <div className={styles.ctaRow}>
            <Button as="a" href={APP_URL} className={styles.cta}>
              Start a mandala
            </Button>
            <Button
              as="a"
              href={LOGIN_URL}
              variant="secondary"
              className={styles.ctaAlt}
            >
              Open the one I have
            </Button>
          </div>
          <span className={styles.ctaHint}>
            Both continue at app.petalprogress.com
          </span>

          <p className={styles.stepsCaption}>If it's new to you, it goes:</p>
          <ol className={styles.steps}>
            {STEPS.map((s) => (
              <li key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <span className={styles.stepLabel}>{s.label}</span>
              </li>
            ))}
          </ol>

          <Link to="/" className={styles.secondary}>
            New here? See what PetalProgress is about
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
