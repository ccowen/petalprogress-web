import { Link } from "react-router";
import { BloomMandala } from "../components/BloomMandala";
import { HUB_LINKS, SOCIALS } from "../config/links";
import styles from "./LinkHubPage.module.css";

/* ══════════════════════════════════════════════════════
   LinkHubPage — the hub every printed QR code points at.
   Standalone (no site nav): this page *is* the menu.
   ══════════════════════════════════════════════════════ */
export function LinkHubPage() {
  const socials = SOCIALS.filter((s) => s.url);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.art}>
            <BloomMandala className={styles.mandala} stagger={0.008} />
          </div>
          <span className={styles.wordmark}>𖢻 PetalProgress</span>
          <h1 className={styles.tagline}>
            Everything, <em className={styles.taglineAccent}>in one place.</em>
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
