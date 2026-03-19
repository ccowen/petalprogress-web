import styles from "./LegalPage.module.css";

export function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Legal</div>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.meta}>Last updated: coming soon</p>

      <div className={styles.placeholder}>
        <div className={styles.placeholderIcon}>🌿</div>
        <div className={styles.placeholderTitle}>This page is on its way</div>
        <p className={styles.placeholderText}>
          Our Privacy Policy is being drafted and will be published before
          launch. It will cover data collection, usage, and your rights as a
          PetalProgress user.
        </p>
        <a href="/" className={styles.back}>
          ← Back to home
        </a>
      </div>
    </div>
  );
}
