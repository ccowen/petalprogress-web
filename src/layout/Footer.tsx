import styles from "./Footer.module.css";

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
              A habit tracker that turns your daily practice into a living
              mandala. Built on the science of habit formation.
            </div>
          </div>
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
        </div>
        <div className={styles.bottom}>
          <div className={styles.copy}>
            © 2026 PetalProgress. All rights reserved.
          </div>
          <div className={styles.links}>
            <a href="/privacy" target="_blank" rel="noopener">Privacy</a>
            <a href="/terms" target="_blank" rel="noopener">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
