import styles from "./LegalPage.module.css";

export function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Legal</div>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.meta}>Last updated: coming soon</p>

      <div className={styles.placeholder}>
        <div className={styles.placeholderIcon}>🌿</div>
        <div className={styles.placeholderTitle}>This page is on its way</div>
        <p className={styles.placeholderText}>
          Our Terms of Service are being drafted and will be published before
          launch. They will cover acceptable use, subscription terms, and your
          relationship with PetalProgress.
        </p>
        <a href="/" className={styles.back}>
          ← Back to home
        </a>
      </div>
    </div>
  );
}
