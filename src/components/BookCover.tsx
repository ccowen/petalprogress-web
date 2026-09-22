import { journalDetails } from "../launch";
import styles from "./BookCover.module.css";

/* Petal ring for the cover mandala */
function ring(n: number, r: number, rx: number, ry: number, color: string) {
  return Array.from({ length: n }, (_, i) => {
    const deg = i * (360 / n);
    const a = (deg * Math.PI) / 180;
    const x = (80 + r * Math.cos(a)).toFixed(1);
    const y = (80 + r * Math.sin(a)).toFixed(1);
    return (
      <ellipse
        key={`${r}-${i}`}
        cx={x}
        cy={y}
        rx={rx}
        ry={ry}
        fill={color}
        transform={`rotate(${deg.toFixed(1)} ${x} ${y})`}
      />
    );
  });
}

/** Illustrative journal cover. Swap for a real cover photo when available. */
export function BookCover() {
  return (
    <div className={styles.book} aria-label={`${journalDetails.title} cover`}>
      <div className={styles.spine} />
      <div className={styles.cover}>
        <svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true">
          <circle cx="80" cy="80" r="76" fill="none" stroke="rgba(255,255,255,0.12)" />
          {ring(16, 58, 4.5, 12, "rgba(196,136,122,0.8)")}
          {ring(12, 38, 4, 10, "rgba(143,166,140,0.85)")}
          {ring(8, 20, 3.5, 8, "rgba(123,155,175,0.85)")}
          <circle cx="80" cy="80" r="7" fill="rgba(255,255,255,0.85)" />
        </svg>
        <div className={styles.coverTitle}>{journalDetails.title}</div>
        <div className={styles.coverSub}>{journalDetails.subtitle}</div>
        <div className={styles.icons} aria-hidden="true">
          ☾ &nbsp;·&nbsp; 🌱 &nbsp;·&nbsp; ⛰
        </div>
      </div>
    </div>
  );
}
