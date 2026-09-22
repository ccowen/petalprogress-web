import { Link } from "react-router";
import { launch, buyLinks, textsSignupUrl, type Availability } from "../launch";
import styles from "../pages/ProductPage.module.css";

export function StatusPill({ status }: { status: Availability }) {
  const label =
    status === "live" ? "Available now" : status === "waitlist" ? "Opening soon" : "Coming later";
  return (
    <span className={`${styles.pill} ${status === "live" ? styles.pillLive : styles.pillSoon}`}>
      {label}
    </span>
  );
}

/** Where to get the journal. Options with no URL set in launch.ts are hidden. */
export function BuyOptions() {
  return (
    <div className={styles.grid3}>
      <div className={styles.card}>
        <div className={styles.cardIcon}>◎</div>
        <div className={styles.cardTitle}>From us</div>
        <div className={styles.cardText}>
          Order the journal directly and it ships to your door.
        </div>
        {buyLinks.checkout ? (
          <a href={buyLinks.checkout} className={styles.cardLink}>
            Buy the journal →
          </a>
        ) : (
          <div className={styles.cardLink}>Online checkout opening soon</div>
        )}
      </div>
      <div className={styles.card}>
        <div className={styles.cardIcon}>❋</div>
        <div className={styles.cardTitle}>Partner studios</div>
        <div className={styles.cardText}>
          Find it in person at select wellness studios, yoga spaces, and
          community shops, where you can hold it before you take it home.
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cardIcon}>◈</div>
        <div className={styles.cardTitle}>Etsy</div>
        <div className={styles.cardText}>
          Prefer to shop small online? The journal is also listed on our Etsy
          shop.
        </div>
        {buyLinks.etsy ? (
          <a href={buyLinks.etsy} className={styles.cardLink} target="_blank" rel="noopener">
            Visit our Etsy shop →
          </a>
        ) : (
          <div className={styles.cardLink}>Listing coming soon</div>
        )}
      </div>
    </div>
  );
}

/** Texts sign-up button, or "opening soon" copy until a URL is set. */
export function TextsCta({ light = false }: { light?: boolean }) {
  const label = launch.texts === "live" ? "Start daily texts" : "Join the texts waitlist";
  if (!textsSignupUrl) {
    return (
      <span className={light ? styles.btnOutline : styles.btnGhost}>
        Daily texts are opening soon
      </span>
    );
  }
  return (
    <a href={textsSignupUrl} className={styles.btnPrimary}>
      {label}
    </a>
  );
}

/** Quiet teaser for the habit-mandala app, which launches later. */
export function AppBand() {
  return (
    <section className={styles.appBand}>
      <div className={styles.appBandInner}>
        <StatusPill status={launch.app} />
        <div>
          <div className={styles.appBandTitle}>
            Next: the PetalProgress <em>app.</em>
          </div>
          <p className={styles.appBandText}>
            A habit tracker that turns every day you show up into a living
            mandala. Not a streak counter, a growing work of art.
          </p>
        </div>
        <Link to="/app" className={styles.appBandLink}>
          See what's coming →
        </Link>
      </div>
    </section>
  );
}
