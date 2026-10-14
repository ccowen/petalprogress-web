import styles from "./BloomMandala.module.css";

/* ── Bloom mandala ───────────────────────────────────
   Petals fade in ring by ring so the mandala "grows"
   the way a real one fills in, one day at a time.
   Sizing is left to the caller via className.
   ─────────────────────────────────────────────────── */
const RINGS = [
  { n: 8, r: 46, rx: 5, ry: 12, color: "color-mix(in srgb, var(--pp-primary) 90%, transparent)" },
  { n: 12, r: 74, rx: 5.5, ry: 13, color: "color-mix(in srgb, var(--pp-marigold) 90%, transparent)" },
  { n: 16, r: 104, rx: 5.5, ry: 14, color: "color-mix(in srgb, var(--pp-coral) 85%, transparent)" },
  { n: 24, r: 134, rx: 6, ry: 16, color: "color-mix(in srgb, var(--pp-coral) 70%, transparent)" },
];

export interface BloomMandalaProps {
  className?: string;
  /** Seconds before the first petal opens. */
  delay?: number;
  /** Seconds between each petal. Lower = quicker bloom. */
  stagger?: number;
}

export function BloomMandala({
  className,
  delay = 0.35,
  stagger = 0.018,
}: BloomMandalaProps) {
  const cx = 180;
  const cy = 180;
  let order = 0;

  return (
    <svg
      className={[styles.svg, className].filter(Boolean).join(" ")}
      viewBox="0 0 360 360"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <circle
        cx={cx}
        cy={cy}
        r={172}
        fill="color-mix(in srgb, var(--pp-dark) 60%, transparent)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      <circle
        cx={cx}
        cy={cy}
        r={165}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={0.75}
        strokeDasharray="3 4"
        fill="none"
      />

      {RINGS.map((ring, ri) =>
        Array.from({ length: ring.n }, (_, i) => {
          const deg = i * (360 / ring.n);
          const a = (deg * Math.PI) / 180;
          const x = cx + ring.r * Math.cos(a);
          const y = cy + ring.r * Math.sin(a);
          const d = delay + order++ * stagger;
          return (
            <ellipse
              key={`${ri}-${i}`}
              className={styles.petal}
              style={{ animationDelay: `${d.toFixed(2)}s` }}
              cx={x.toFixed(1)}
              cy={y.toFixed(1)}
              rx={ring.rx}
              ry={ring.ry}
              style={{ fill: ring.color }}
              transform={`rotate(${deg.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
            />
          );
        })
      )}

      <circle
        cx={cx}
        cy={cy}
        r={30}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1.5}
      />
      <circle
        cx={cx}
        cy={cy}
        r={20}
        fill="color-mix(in srgb, var(--pp-dark) 80%, transparent)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      <text x={cx} y={188} textAnchor="middle" fontSize={20}>
        🌸
      </text>
    </svg>
  );
}
