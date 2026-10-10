import { Link } from "react-router";
import styles from "./Footer.module.css";

const sitemap = [
  {
    heading: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "Journal", to: "/journal" },
      { label: "Texts", to: "/texts" },
      { label: "Philosophy", to: "/philosophy" },
    ],
  },
  {
    heading: "Coming soon",
    links: [
      { label: "What's next", to: "/next" },
      { label: "Mandala types", to: "/mandala-types" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <a href="/" className={styles.logo}>
              𖢻 PetalProgress
            </a>
            <div className={styles.tagline}>
              A guided journal, on paper and by text, and soon, habits that
              bloom into a living mandala.
            </div>
          </div>
          <nav className={styles.sitemap} aria-label="Sitemap">
            {sitemap.map((col) => (
              <div key={col.heading} className={styles.sitemapCol}>
                <div className={styles.sitemapHeading}>{col.heading}</div>
                {col.links.map((l) => (
                  <Link key={l.to} to={l.to} className={styles.sitemapLink}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          {/* Social media buttons hidden pre-launch — see RESTORE_LATER.md
          <div className={styles.socialRow}>
            <a href="#" className={styles.socialBtn} title="Instagram">
              📷
            </a>
            <a href="#" className={styles.socialBtn} title="TikTok">
              🎵
            </a>
            <a href="#" className={styles.socialBtn} title="Twitter/X">
              ✕
            </a>
            <a href="#" className={styles.socialBtn} title="Pinterest">
              📌
            </a>
          </div>
          */}
        </div>
        <div className={styles.bottom}>
          <div className={styles.copy}>
            © 2026 PetalProgress. All rights reserved.
          </div>
          <div className={styles.links}>
            <a href="/privacy" target="_blank" rel="noopener">Privacy</a>
            <a href="/terms" target="_blank" rel="noopener">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
