import { useState } from "react";
import styles from "./MandalaTypesPage.module.css";

/* ── Helpers ─────────────────────────────────────── */

/* Ring of petals */
function ringPetals(
  n: number,
  r: number,
  rx: number,
  ry: number,
  color: string,
  cx: number,
  cy: number,
  filledFrac = 1
) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i * (360 / n) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    const filled = ((i * 7 + 3) % 10) / 10 < filledFrac;
    return (
      <ellipse
        key={`${r}-${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx={rx}
        ry={ry}
        fill={filled ? color : "var(--pp-warm-1)"}
        opacity={filled ? 0.85 : 0.4}
        transform={`rotate(${(i * (360 / n)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  });
}

/* Ring of tick marks (for day markers) */
function ringTicks(
  n: number,
  r1: number,
  r2: number,
  cx: number,
  cy: number,
  color: string
) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i * (360 / n) * Math.PI) / 180;
    return (
      <line
        key={`t-${r1}-${i}`}
        x1={(cx + r1 * Math.cos(a)).toFixed(1)}
        y1={(cy + r1 * Math.sin(a)).toFixed(1)}
        x2={(cx + r2 * Math.cos(a)).toFixed(1)}
        y2={(cy + r2 * Math.sin(a)).toFixed(1)}
        stroke={color}
        strokeWidth={0.75}
        opacity={((i * 5) % 10) / 10 < 0.75 ? 0.9 : 0.25}
      />
    );
  });
}

const SIZE = 180;

/* ── Freeform mandala (sliced pie) ───────────────── */
function SlicedMandala({ slices }: { slices: { color: string }[] }) {
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const outerR = SIZE * 0.47;
  const n = slices.length;
  const step = 360 / n;

  const sliceEls = slices.map((slice, i) => {
    const startDeg = -90 + i * step;
    const endDeg = startDeg + step;
    const a1 = (startDeg * Math.PI) / 180;
    const a2 = (endDeg * Math.PI) / 180;
    const x1 = cx + outerR * Math.cos(a1);
    const y1 = cy + outerR * Math.sin(a1);
    const x2 = cx + outerR * Math.cos(a2);
    const y2 = cy + outerR * Math.sin(a2);
    const largeArc = step > 180 ? 1 : 0;
    const path = `M ${cx.toFixed(1)} ${cy.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${outerR.toFixed(1)} ${outerR.toFixed(1)} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;

    const petals: React.ReactElement[] = [];
    const ringsInSlice = 2;
    const petalsPerRing = 2;
    for (let ri = 0; ri < ringsInSlice; ri++) {
      const pr = outerR * (0.45 + ri * 0.3);
      for (let pi = 0; pi < petalsPerRing; pi++) {
        const frac = (pi + 0.5) / petalsPerRing;
        const pa = a1 + (a2 - a1) * frac;
        const px = cx + pr * Math.cos(pa);
        const py = cy + pr * Math.sin(pa);
        const rot = (pa * 180) / Math.PI + 90;
        const filled = ((i * 5 + ri * 3 + pi) % 10) / 10 < 0.75;
        petals.push(
          <ellipse
            key={`p-${i}-${ri}-${pi}`}
            cx={px.toFixed(1)}
            cy={py.toFixed(1)}
            rx={2.5}
            ry={7}
            fill={filled ? slice.color : "var(--pp-warm-1)"}
            opacity={filled ? 0.88 : 0.45}
            transform={`rotate(${rot.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)})`}
          />
        );
      }
    }

    return (
      <g key={`s-${i}`}>
        <path d={path} fill={slice.color} opacity={0.08} />
        {petals}
      </g>
    );
  });

  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <circle
        cx={cx}
        cy={cy}
        r={outerR + 2}
        fill="color-mix(in srgb, var(--pp-bg) 60%, transparent)"
        stroke="var(--pp-warm-1)"
        strokeWidth={0.5}
      />
      {sliceEls}
      <circle cx={cx} cy={cy} r={10} fill="var(--pp-surface)" />
    </svg>
  );
}

function FreeformLifeMandala() {
  return (
    <SlicedMandala
      slices={[
        { color: "var(--pp-primary)" },
        { color: "var(--pp-coral)" },
        { color: "var(--pp-sky)" },
        { color: "var(--pp-marigold)" },
      ]}
    />
  );
}

function FreeformDateMandala() {
  return (
    <SlicedMandala
      slices={[
        { color: "var(--pp-primary)" },
        { color: "var(--pp-olive)" },
        { color: "var(--pp-marigold)" },
        { color: "var(--pp-coral)" },
        { color: "var(--pp-mauve)" },
        { color: "var(--pp-sky)" },
        { color: "var(--pp-teal)" },
      ]}
    />
  );
}

/* ── Partitioned overview mandala (used in overview card) ─ */

function YearlyMandala() {
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <circle cx={cx} cy={cy} r={SIZE / 2 - 2} fill="color-mix(in srgb, var(--pp-bg) 60%, transparent)" stroke="var(--pp-warm-1)" strokeWidth={0.5} />
      {ringTicks(365, 76, 82, cx, cy, "var(--pp-marigold)")}
      {ringTicks(52, 60, 68, cx, cy, "var(--pp-marigold)")}
      {ringPetals(12, 38, 4, 14, "var(--pp-marigold)", cx, cy, 0.92)}
      <circle cx={cx} cy={cy} r={10} fill="var(--pp-surface)" />
    </svg>
  );
}

/* ── Data ────────────────────────────────────────── */

type MandalaType = {
  name: string;
  span: string;
  tagline: string;
  description: string;
  features: { label: string; count: string }[];
  visual: () => React.ReactElement;
};

const freeformTypes: MandalaType[] = [
  {
    name: "Life categories",
    span: "Ongoing",
    tagline: "A mandala organized by the parts of your life.",
    description:
      "Each slice is a category that matters to you. Health, relationships, creative work, a spiritual practice. Every time you act within one, a petal fills in that slice. It's a quiet reflection of where your attention has been living.",
    features: [
      { count: "Any", label: "number of slices" },
      { count: "Self-set", label: "milestones" },
      { count: "Flexible", label: "rebalance anytime" },
    ],
    visual: FreeformLifeMandala,
  },
  {
    name: "Date categories",
    span: "Ongoing",
    tagline: "A mandala organized by recurring periods of time.",
    description:
      "Each slice is a recurring date category: a day of the week, a month of the year. Over time it shows your pattern across the calendar. Which Mondays you showed up, which Mays you leaned in. A slower, quieter kind of data.",
    features: [
      { count: "7 or 12", label: "common slice counts" },
      { count: "Self-set", label: "milestones" },
      { count: "Reveals", label: "seasonal patterns" },
    ],
    visual: FreeformDateMandala,
  },
];

/* ── Reading card ────────────────────────────────── */

function ReadCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className={`${styles.readCard} ${styles.rc}`}>
      <div className={styles.readHeader}>
        <div className={styles.readIconWrap} />
        <div className={styles.readTitle}>{title}</div>
      </div>
      <div className={styles.readDesc}>{desc}</div>
    </div>
  );
}

/* ── Reusable card ───────────────────────────────── */

function TypeCard({ t }: { t: MandalaType }) {
  const Visual = t.visual;
  return (
    <div className={styles.typeCard}>
      <div className={styles.typeVisual}>
        <Visual />
      </div>
      <div className={styles.typeText}>
        <div className={styles.typeHeader}>
          <h3 className={styles.typeName}>{t.name}</h3>
          <span className={styles.typeSpan}>{t.span}</span>
        </div>
        <div className={styles.typeTagline}>{t.tagline}</div>
        <p className={styles.typeDesc}>{t.description}</p>
        <div className={styles.typeFeatures}>
          {t.features.map((f) => (
            <div key={f.label} className={styles.typeFeature}>
              <strong>{f.count}</strong>
              {f.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────── */

export function MandalaTypesPage() {
  const [monthlyView, setMonthlyView] = useState<1 | 2>(1);
  const [quarterlyView, setQuarterlyView] = useState<1 | 2>(1);

  return (
    <>
      <section className={`${styles.section} ${styles.sectionOverview}`}>
        <div className={styles.sectionInner}>
          <div className={styles.hero}>
            <div className={styles.eyebrow}>◈ Mandala types</div>
            <h1 className={styles.title}>
              Your mandala can be shaped in two ways.
            </h1>
            <p className={styles.sub}>
              Every PetalProgress mandala is built the same way. You show up in the present moment,
              color in your PetalProgress, and you move toward your milestones. How the
              mandala is organized is up to you.
            </p>
          </div>
          <div className={styles.overview}>
            <div className={styles.overviewCol}>
              <div className={styles.overviewVisual}>
                <FreeformLifeMandala />
              </div>
              <div className={styles.overviewEyebrow}>Freeform</div>
              <h2 className={styles.overviewTitle}>
                Organized by <em>category.</em>  Cycle through categories.
              </h2>
              <p className={styles.overviewDesc}>
                Slices representing parts of your life or recurring dates. You
                cycle and set your own milestones.
              </p>
            </div>
            <div className={styles.overviewCol}>
              <div className={styles.overviewVisual}>
                <YearlyMandala />
              </div>
              <div className={styles.overviewEyebrow}>Partitioned</div>
              <h2 className={styles.overviewTitle}>
                Organized by <em>time.</em> Specific shapes by date.
              </h2>
              <p className={styles.overviewDesc}>
                Rings and petals that cover a defined span, with the milestone
                built into the shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionFreeform}`}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>Freeform</div>
            <h2 className={styles.sectionTitle}>
              Cycle through <em>categories.</em>
            </h2>
            <p className={styles.sectionDesc}>
              Freeform mandalas are divided into slices, and each slice is a
              category. You cycle around the mandala as long as the practice
              is useful, and you choose your own milestones — a full cycle, a
              filled slice, or a marker you set.
            </p>
          </header>
          <div className={styles.typeGrid}>
            {freeformTypes.map((t) => (
              <TypeCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionPartitioned}`}>
        <div className={styles.sectionInner}>
          <header className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>Partitioned</div>
            <h2 className={styles.sectionTitle}>
              Specific shapes by <em>date.</em>
            </h2>
            <p className={styles.sectionDesc}>
              Partitioned mandalas cover a specific span of time. When the mandala closes,
              you can start a new mandala.
            </p>
          </header>
          <div className={styles.readingRows}>
              {/* Weekly */}
              <div
                className={`${styles.readingRow} ${styles.readingRowSage}`}
              >
                <div className={styles.readingRowLbl}>Weekly</div>
                <ReadCard
                  title="Daily Petals"
                  desc="Seven petals, one for each day of the week. The most focused mandala, where every single day has a shape."
                />
              </div>

              {/* Monthly (toggleable) */}
              {monthlyView === 1 ? (
                <div
                  className={`${styles.readingRow} ${styles.readingRowBlue}`}
                >
                  <div className={styles.monthlyLblWrap}>
                    <div className={styles.readingRowLbl}>Monthly</div>
                    <div
                      className={styles.mToggle}
                      onClick={() =>
                        setMonthlyView(monthlyView === 1 ? 2 : 1)
                      }
                    >
                      <div
                        className={`${styles.mToggleOpt} ${styles.mToggleOptActive}`}
                      >
                        A
                      </div>
                      <div className={styles.mToggleOpt}>B</div>
                    </div>
                  </div>
                  <ReadCard
                    title="Daily Petals"
                    desc="28–31 day petals trace your daily completions. The simplest monthly mandala, every petal is a day you showed up."
                  />
                </div>
              ) : (
                <div
                  className={`${styles.readingRow} ${styles.readingRowBlue}`}
                >
                  <div className={styles.monthlyLblWrap}>
                    <div className={styles.readingRowLbl}>Monthly</div>
                    <div
                      className={styles.mToggle}
                      onClick={() => setMonthlyView((v) => (v === 1 ? 2 : 1))}
                    >
                      <div className={styles.mToggleOpt}>A</div>
                      <div
                        className={`${styles.mToggleOpt} ${styles.mToggleOptActive}`}
                      >
                        B
                      </div>
                    </div>
                  </div>
                  <ReadCard
                    title="Daily Shapes"
                    desc="28–31 day markers trace your daily completions. The clearest view of how consistently you showed up through the month."
                  />
                  <ReadCard
                    title="Weekly Petals"
                    desc="4–5 week petals break the month into segments. Highlighted petals mark weeks where you met your weekly target."
                  />
                </div>
              )}

              {/* Quarterly (toggleable) */}
              {quarterlyView === 1 ? (
                <div
                  className={`${styles.readingRow} ${styles.readingRowSage}`}
                >
                  <div className={styles.quarterlyLblWrap}>
                    <div className={styles.readingRowLbl}>Quarterly</div>
                    <div
                      className={styles.qToggle}
                      onClick={() =>
                        setQuarterlyView(quarterlyView === 1 ? 2 : 1)
                      }
                    >
                      <div
                        className={`${styles.qToggleOpt} ${styles.qToggleOptActive}`}
                      >
                        A
                      </div>
                      <div className={styles.qToggleOpt}>B</div>
                    </div>
                  </div>
                  <ReadCard
                    title="Daily Shapes"
                    desc="91 day markers fill the outer ring over one quarter. Each shape shows whether you checked in that day."
                  />
                  <ReadCard
                    title="Weekly Petals"
                    desc="13 week petals mark the weeks of the quarter. Each petal highlights a week where you hit your weekly goal."
                  />
                </div>
              ) : (
                <div
                  className={`${styles.readingRow} ${styles.readingRowSage}`}
                >
                  <div className={styles.quarterlyLblWrap}>
                    <div className={styles.readingRowLbl}>Quarterly</div>
                    <div
                      className={styles.qToggle}
                      onClick={() =>
                        setQuarterlyView((v) => (v === 1 ? 2 : 1))
                      }
                    >
                      <div className={styles.qToggleOpt}>A</div>
                      <div
                        className={`${styles.qToggleOpt} ${styles.qToggleOptActive}`}
                      >
                        B
                      </div>
                    </div>
                  </div>
                  <ReadCard
                    title="Daily Shapes"
                    desc="91 day markers fill the outer ring over one quarter. Each shape shows whether you checked in that day."
                  />
                  <ReadCard
                    title="Weekly Markers"
                    desc="13 week markers for the weeks of the quarter. Each highlights a week where you hit your weekly goal."
                  />
                  <ReadCard
                    title="Monthly Petals"
                    desc="Each of the 3 petals represents a month. It blooms fully when you meet your monthly goal."
                  />
                </div>
              )}

              {/* Yearly */}
              <div
                className={`${styles.readingRow} ${styles.readingRowBlue}`}
              >
                <div className={styles.readingRowLbl}>Yearly</div>
                <ReadCard
                  title="Daily Shapes"
                  desc="Each marker is one day of the year. 365 shapes fill the outer ring, highlighted days are ones you completed your habit."
                />
                <ReadCard
                  title="Weekly Markers"
                  desc="52 weekly markers sit between each month segment. A marker highlights when you hit your weekly target, small wins made visible."
                />
                <ReadCard
                  title="Monthly Petals"
                  desc="Each of the 12 petals represents a month. It blooms fully when you meet your monthly goal, a year of practice in one image."
                />
              </div>
            </div>
          </div>
        </section>

      <section className={`${styles.section} ${styles.sectionClosing}`}>
        <div className={styles.sectionInner}>
          <div className={styles.closingContent}>
            <h2 className={styles.closingTitle}>
              Not sure where to <em>start?</em>
            </h2>
            <p className={styles.closingText}>
              Start with what fits the practice. There's no wrong shape, and
              no commitment to any one. You can begin another mandala later,
              in a different shape, whenever the practice asks for it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
