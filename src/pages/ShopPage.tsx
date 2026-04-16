import styles from "./ShopPage.module.css";

export function ShopPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Our shop is beginning in <em>local spaces</em>
        </h1>
        <p className={styles.sub}>
          Printed mandalas, posters, and practice tools are launching through a
          handful of partner studios and community shops. We want to see how
          people actually hold these objects — in their hands, on their walls —
          before we ship them out into the world at large.
        </p>

        <div className={styles.previewRow}>
          <div className={styles.previewCard}>
            <div className={styles.previewIcon}>❋</div>
            <div className={styles.previewTitle}>Partner studios</div>
            <div className={styles.previewDesc}>
              Find our prints and tools at select wellness studios, yoga
              spaces, and community shops.
            </div>
          </div>
          <div className={styles.previewCard}>
            <div className={styles.previewIcon}>◈</div>
            <div className={styles.previewTitle}>Shaped by feedback</div>
            <div className={styles.previewDesc}>
              What we carry — and how — will grow from what the first
              practitioners tell us they actually want.
            </div>
          </div>
          <div className={styles.previewCard}>
            <div className={styles.previewIcon}>◎</div>
            <div className={styles.previewTitle}>Online, later</div>
            <div className={styles.previewDesc}>
              Once the shape is right, we'll open a direct online market. No
              rush — we want to get this right.
            </div>
          </div>
        </div>

        {/* Email capture — disabled until Supabase is wired. See RESTORE_LATER.md
        <form
          className={styles.notifyForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className={styles.notifyInput}
            type="email"
            placeholder="your@email.com"
          />
          <button type="submit" className={styles.notifyBtn}>
            Keep me posted
          </button>
        </form>
        <div className={styles.fineprint}>
          We'll email when the online shop opens, or if a partner studio opens
          near you. No newsletter, no spam.
        </div>
        */}
      </div>
    </div>
  );
}
