import { Link } from "react-router";
import lotus from "@ccowen/petalprogress-ui/assets/logo/lotus-header.png";
import sampleMandala from "../assets/reveal-hq/gratitude-v1-sample-88-tiles-hq.gif";
import type { CSSProperties } from "react";
import { Butterfly } from "../components/Butterfly";
import { HUB_LINKS, SOCIALS } from "../config/links";
import styles from "./LinkHubPage.module.css";

/* Four butterflies in a loose arc over the top of the content column, all flying
   upward at different angles (r: 0 is straight up, negative leans left,
   positive leans right). x/y place the center as a % of the column, w is
   the width in px. mx is an optional x for phones, where the column fills
   the screen, to pull edge butterflies in so they are not cut off. */
const FLOCK = [
  { x: 68, y: -8, w: 67, r: -30 },
  { x: 88, mx: 83, y: 16, w: 58, r: 22 },
  { x: 12, mx: 17, y: 16, w: 68, r: 32 },
  { x: 32, y: -5, w: 57, r: -8 },
];

/* ══════════════════════════════════════════════════════
   LinkHubPage — the hub every printed QR code points at.
   Standalone (no site nav): this page *is* the menu.
   ══════════════════════════════════════════════════════ */
export function LinkHubPage() {
  const socials = SOCIALS.filter((s) => s.url);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.flock} aria-hidden="true">
          {FLOCK.map((b, i) => (
            <Butterfly
              key={i}
              className={styles.butterfly}
              style={
                {
                  "--x": `${b.x}%`,
                  "--mx": `${b.mx ?? b.x}%`,
                  "--y": `${b.y}%`,
                  "--w": `${b.w}px`,
                  "--r": `${b.r}deg`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <header className={styles.head}>
          <div className={styles.art}>
            {/* A sample design (88 of 147 tiles), transparent outside the mandala. */}
            <img className={styles.mandala} src={sampleMandala} alt="" />
          </div>
          <h1 className={styles.wordmark}>
            <img className={styles.logo} src={lotus} alt="" />
            PetalProgress
          </h1>
        </header>

        <nav className={styles.links} aria-label="PetalProgress links">
          {HUB_LINKS.map((l) => {
            const className = `${styles.link}${l.featured ? ` ${styles.linkFeatured}` : ""}`;
            const inner = (
              <>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{l.label}</span>
                  {l.note && <span className={styles.linkNote}>{l.note}</span>}
                </span>
                <span className={styles.linkArrow} aria-hidden="true">
                  →
                </span>
              </>
            );

            return l.internal ? (
              <Link key={l.href} to={l.href} className={className}>
                {inner}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={className}>
                {inner}
              </a>
            );
          })}
        </nav>

        {socials.length > 0 && (
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className={styles.social}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <span aria-hidden="true">{s.icon}</span>
              </a>
            ))}
          </div>
        )}

        <footer className={styles.foot}>
          <Link to="/privacy" className={styles.footLink}>
            Privacy
          </Link>
          <span className={styles.footDot} aria-hidden="true">
            ·
          </span>
          <Link to="/terms" className={styles.footLink}>
            Terms
          </Link>
        </footer>
      </div>
    </main>
  );
}
