import { Link } from "react-router";
import { launch, buyLinks, textsSignupUrl, type Availability } from "../launch";
import styles from "../pages/ProductPage.module.css";

export function StatusPill({ status }: { status: Availability }) {
  if (status === "unannounced") return null;
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
          launch.journal !== "unannounced" && (
            <div className={styles.cardLink}>Online checkout opening soon</div>
          )
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
          launch.journal !== "unannounced" && (
            <div className={styles.cardLink}>Listing coming soon</div>
          )
        )}
      </div>
    </div>
  );
}

/**
 * "Sign up for texts" button, linking straight to the sign-up in the app.
 * `from` tags where the sign-up started (the app stores it as the source).
 * With no URL set: a link to `fallbackTo` if given, otherwise "opening soon"
 * copy (or nothing while texts are unannounced).
 */
export function TextsCta({
  from,
  fallbackTo,
  outline = false,
}: {
  from?: string;
  fallbackTo?: string;
  outline?: boolean;
}) {
  const className = outline ? styles.btnOutline : styles.btnPrimary;
  if (!textsSignupUrl) {
    if (fallbackTo) {
      return (
        <Link to={fallbackTo} className={className}>
          How the texts work
        </Link>
      );
    }
    if (launch.texts === "unannounced") return null;
    return <span className={styles.btnOutline}>Texts are opening soon</span>;
  }
  const href = from ? `${textsSignupUrl}?from=${encodeURIComponent(from)}` : textsSignupUrl;
  return (
    <a href={href} className={className}>
      Sign up for texts
    </a>
  );
}
