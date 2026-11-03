import { Link } from "react-router";
import styles from "./NextPage.module.css";

/* ── Helper: build a ring of ellipse petals ── */
function buildRingPetals(
  n: number,
  r: number,
  rx: number,
  ry: number,
  color: string,
  filledN: number | undefined,
  cx: number,
  cy: number,
  dark: boolean
) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i * (360 / n) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const filled = filledN === undefined || i < filledN;
    const fill = filled
      ? color
      : dark
        ? "rgba(255,255,255,0.06)"
        : "var(--pp-warm-1)";
    const op = filled ? 1 : 0.55;
    return (
      <ellipse
        key={`${r}-${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx={rx}
        ry={ry}
        fill={fill}
        opacity={op}
        transform={`rotate(${(i * (360 / n)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  });
}

/* ── Helper: build week ticks ── */
function buildTicks(
  n: number,
  r1: number,
  r2: number,
  cx: number,
  cy: number
) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i * (360 / n) * Math.PI) / 180;
    const major = i % 4 === 0;
    const r2b = major ? r2 + 3 : r2;
    return (
      <line
        key={`tick-${i}`}
        x1={(cx + r1 * Math.cos(a)).toFixed(1)}
        y1={(cy + r1 * Math.sin(a)).toFixed(1)}
        x2={(cx + r2b * Math.cos(a)).toFixed(1)}
        y2={(cy + r2b * Math.sin(a)).toFixed(1)}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={major ? 1.5 : 0.75}
      />
    );
  });
}

/* ── Hero Mandala SVG ── */
function HeroMandala() {
  const cx = 180;
  const cy = 180;

  return (
    <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
      <circle
        cx={cx}
        cy={cy}
        r={172}
        fill="color-mix(in srgb, var(--pp-dark) 60%, transparent)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={1}
      />
      {/* Outermost ring */}
      <circle
        cx={cx}
        cy={cy}
        r={165}
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={0.75}
        strokeDasharray="3 4"
        fill="none"
      />
      {/* Ring 4 (outermost petals) */}
      {buildRingPetals(24, 134, 6, 16, "color-mix(in srgb, var(--pp-coral) 75%, transparent)", 18, cx, cy, true)}
      {/* Ring 3 */}
      {buildRingPetals(16, 104, 5.5, 14, "color-mix(in srgb, var(--pp-coral) 85%, transparent)", 12, cx, cy, true)}
      {/* Ring 2 */}
      {buildRingPetals(12, 74, 5.5, 13, "color-mix(in srgb, var(--pp-marigold) 90%, transparent)", 10, cx, cy, true)}
      {/* Ring 1 (innermost) */}
      {buildRingPetals(8, 46, 5, 12, "color-mix(in srgb, var(--pp-primary) 90%, transparent)", undefined, cx, cy, true)}
      {/* Week ticks */}
      {buildTicks(52, 152, 160, cx, cy)}
      {/* Center */}
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
      {/* Progress arc */}
      <circle
        cx={cx}
        cy={cy}
        r={158}
        fill="none"
        stroke="color-mix(in srgb, var(--pp-primary) 25%, transparent)"
        strokeWidth={2}
        strokeDasharray="628 1000"
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
    </svg>
  );
}

/* ── Showcase Mandala SVG ── */
function ShowcaseMandala({ color, size = 130 }: { color: string; size?: number }) {
  const cx = size / 2;
  const cy = size / 2;

  const rings = [
    { n: 8, r: size * 0.38, rx: size * 0.04, ry: size * 0.13, fillRate: 1 },
    { n: 12, r: size * 0.27, rx: size * 0.035, ry: size * 0.1, fillRate: 0.8 },
    { n: 6, r: size * 0.17, rx: size * 0.03, ry: size * 0.08, fillRate: 1 },
  ];

  // Use a seeded-ish approach per ring so it's deterministic per render
  const petals = rings.flatMap((ring, ri) =>
    Array.from({ length: ring.n }, (_, i) => {
      const a = (i * (360 / ring.n) * Math.PI) / 180;
      const x = cx + ring.r * Math.cos(a);
      const y = cy + ring.r * Math.sin(a);
      // Deterministic "random" based on index
      const filled = ((ri * 7 + i * 13) % 10) / 10 < ring.fillRate;
      return (
        <ellipse
          key={`${ri}-${i}`}
          cx={x.toFixed(1)}
          cy={y.toFixed(1)}
          rx={ring.rx.toFixed(2)}
          ry={ring.ry.toFixed(2)}
          fill={filled ? color : "var(--pp-warm-1)"}
          opacity={filled ? 0.85 : 0.4}
          transform={`rotate(${(i * (360 / ring.n)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
        />
      );
    })
  );

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={cx}
        cy={cy}
        r={size / 2 - 1}
        fill="color-mix(in srgb, var(--pp-bg) 60%, transparent)"
        stroke="var(--pp-warm-1)"
        strokeWidth={0.5}
      />
      {petals}
      <circle cx={cx} cy={cy} r={size * 0.1} fill="var(--pp-surface)" />
    </svg>
  );
}

/* ── Showcase data ── */
const showcaseData = [
  { color: "var(--pp-coral)", name: "Morning Meditation" },
  { color: "var(--pp-primary)", name: "Evening Walk" },
  { color: "var(--pp-sky)", name: "Daily Reading" },
  { color: "var(--pp-marigold)", name: "Journaling" },
  { color: "var(--pp-mauve)", name: "Creative Practice" },
];

/* ══════════════════════════════════════════════════════
   NextPage — future plans (the original homepage)
   ══════════════════════════════════════════════════════ */
export function NextPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.comingSoonPill}>◈ The app — coming later</div>
            <h1 className={styles.heroTitle}>
              Visualize your habits
              <br />
              with your own
              <br />
              <em>personal</em> mandala.
            </h1>
            <p className={styles.heroSub}>
              PetalProgress turns your daily habits into a personalized mandala
              — a visual record of every day you showed up. Not a streak
              counter. A growing work of art.
            </p>
            <div className={styles.heroCtas}>
              {/* Signup CTA hidden pre-launch — see RESTORE_LATER.md
              <a href="#" className={styles.btnPrimaryHero}>
                Create for free
              </a>
              */}
              <a href="#how-it-works" className={styles.btnGhostHero}>
                See how it works →
              </a>
            </div>
            {/* Hero checks hidden pre-launch — see RESTORE_LATER.md
            <div className={styles.heroChecks}>
              <div className={styles.heroCheck}>
                <span className={styles.heroCheckMark}>✓</span> 3 habits,
                tracked for a full year
              </div>
              <div className={styles.heroCheck}>
                <span className={styles.heroCheckMark}>✓</span> Free forever
              </div>
              <div className={styles.heroCheck}>
                <span className={styles.heroCheckMark}>✓</span> No credit card
              </div>
            </div>
            */}
          </div>

          {/* Hero mandala SVG */}
          <div className={styles.heroVisual}>
            <div className={styles.mandalaHeroWrap}>
              <div className={styles.mandalaGlow} />
              <HeroMandala />
              <div className={styles.heroRingsLbl}>
                <div className={styles.ringLbl}>Day arrows</div>
                <div className={styles.ringLbl}>Week markers</div>
                <div className={styles.ringLbl}>Month petals</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        className={`${styles.howItWorks} ${styles.section}`}
        id="how-it-works"
      >
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>How it works</div>
          <h2 className={styles.sectionTitle}>
            Pick a habit. <em>Show up.</em> Watch it bloom.
          </h2>
          <p className={styles.sectionDesc}>
            A single habit tracked over a year becomes something beautiful. Each
            element of your mandala encodes your data in a way no spreadsheet
            can.
          </p>

          <div className={styles.hiwGrid}>
            <div className={styles.hiwCard}>
              <div className={styles.hiwNum}>01</div>
              <div className={styles.hiwTitle}>Pick your habit</div>
              <div className={styles.hiwDesc}>
                Walking, meditating, reading, playing guitar — or a theme you
                work toward in different ways. Single habits or multiple daily
                goals, it's up to you.
              </div>
            </div>
            <div className={styles.hiwCard}>
              <div className={styles.hiwNum}>02</div>
              <div className={styles.hiwTitle}>Make it yours</div>
              <div className={styles.hiwDesc}>
                Choose your themes and colors. Add a
                center figure. Give your mandala a name. The more it feels like
                you, the more you'll return to it.
              </div>
            </div>
            <div className={styles.hiwCard}>
              <div className={styles.hiwNum}>03</div>
              <div className={styles.hiwTitle}>Check in</div>
              <div className={styles.hiwDesc}>
                Every day you complete your habit, a new layer blooms. Miss a
                day — it's okay. Your mandala will be here when you return
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOWCASE GALLERY ── */}
      <section className={`${styles.showcase} ${styles.section}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>Your shape is your own</div>
          <h2 className={styles.sectionTitle}>
            Every mandala is <em>unique.</em>
          </h2>
          <p className={styles.sectionDesc}>
            Your data, your color choices, your figure — no two mandalas look
            the same. At the end of the year, you'll have a one-of-a-kind
            artifact of your practice.
          </p>

          <div className={styles.showcaseGrid}>
            {showcaseData.map((m) => (
              <div key={m.name} className={styles.showcasePin}>
                <div className={styles.showcaseDisc}>
                  <ShowcaseMandala color={m.color} />
                </div>
                <div className={styles.showcaseLbl}>{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READING THE MANDALA ── */}
      <section className={styles.reading}>
        <div className={styles.sectionInner}>
          <div className={styles.readingLayout}>
            <div className={styles.readingContent}>
              <div className={styles.sectionEyebrow}>Reading your mandala</div>
              <h2 className={styles.sectionTitle}>
                Every layer <em>means something.</em>
              </h2>
              <p className={styles.sectionDesc}>
                Your mandala is a data visualization, but one you can feel.
                Each element encodes something specific, from the days and
                weeks you showed up to the milestones you closed.
              </p>
            </div>
            <div className={styles.readingCtaWrap}>
              <Link to="/mandala-types" className={styles.readingLink}>
                See how to read each mandala type →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMIN / TEAMS (coming soon teaser) ── */}
      <section
        className={`${styles.comingSoon} ${styles.comingSoonBgWarm}`}
        id="teams"
      >
        <div className={styles.comingSoonInner}>
          <div
            className={`${styles.comingSoonPill} ${styles.comingSoonPillBold}`}
          >
            ◈ For teams — coming soon
          </div>
          <h2 className={styles.comingSoonTitle}>
            Built for <em>coaches,</em> gyms, and wellness programs.
          </h2>
          <p className={styles.comingSoonDesc}>
            Assign habits to your clients, monitor progress without
            micromanaging, and generate printed mandalas at the end of each
            program. We're rolling this out after launch — get in touch if
            you'd like early access.
          </p>
          <div className={styles.comingSoonChips}>
            <div className={styles.comingSoonChip}>Personal trainers</div>
            <div className={styles.comingSoonChip}>Gyms &amp; studios</div>
            <div className={styles.comingSoonChip}>Wellness coaches</div>
          </div>
        </div>
      </section>
    </>
  );
}
