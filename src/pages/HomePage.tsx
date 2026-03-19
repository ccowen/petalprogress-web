import { useState } from "react";
import styles from "./HomePage.module.css";

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
        : "#EDE9E3";
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
        fill="rgba(30,26,23,0.6)"
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
      {buildRingPetals(24, 134, 6, 16, "rgba(196,90,90,0.75)", 18, cx, cy, true)}
      {/* Ring 3 */}
      {buildRingPetals(16, 104, 5.5, 14, "rgba(196,90,90,0.85)", 12, cx, cy, true)}
      {/* Ring 2 */}
      {buildRingPetals(12, 74, 5.5, 13, "rgba(196,136,122,0.9)", 10, cx, cy, true)}
      {/* Ring 1 (innermost) */}
      {buildRingPetals(8, 46, 5, 12, "rgba(143,166,140,0.9)", undefined, cx, cy, true)}
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
        fill="rgba(30,26,23,0.8)"
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
        stroke="rgba(143,166,140,0.25)"
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
          fill={filled ? color : "#EDE9E3"}
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
        fill="rgba(248,246,243,0.6)"
        stroke="#EDE9E3"
        strokeWidth={0.5}
      />
      {petals}
      <circle cx={cx} cy={cy} r={size * 0.1} fill="#FDFCFA" />
    </svg>
  );
}

/* ── Showcase data ── */
const showcaseData = [
  { color: "#C45A5A", name: "Morning Meditation" },
  { color: "#8FA68C", name: "Evening Walk" },
  { color: "#7B9BAF", name: "Daily Reading" },
  { color: "#C4887A", name: "Gratitude Journal" },
  { color: "#9B8FA6", name: "Creative Practice" },
];

/* ── Reading card component ── */
function ReadCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className={`${styles.readCard} ${styles.rc}`}>
      <div className={styles.readHeader}>
        <div className={styles.readIconWrap}>{icon}</div>
        <div className={styles.readTitle}>{title}</div>
      </div>
      <div className={styles.readDesc}>{desc}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   HomePage
   ══════════════════════════════════════════════════════ */
export function HomePage() {
  const [monthlyView, setMonthlyView] = useState<1 | 2>(1);
  const [quarterlyView, setQuarterlyView] = useState<1 | 2>(1);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
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
              <a href="#" className={styles.btnPrimaryHero}>
                Create for free
              </a>
              <a href="#how-it-works" className={styles.btnGhostHero}>
                See how it works →
              </a>
            </div>
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
              <div className={styles.hiwTag}>Obvious + Easy</div>
            </div>
            <div className={styles.hiwCard}>
              <div className={styles.hiwNum}>02</div>
              <div className={styles.hiwTitle}>Make it yours</div>
              <div className={styles.hiwDesc}>
                Choose from 4 themes and 6 petal colors — 24 combinations. Add a
                center figure. Give your mandala a name. The more it feels like
                you, the more you'll return to it.
              </div>
              <div className={styles.hiwTag}>Attractive</div>
            </div>
            <div className={styles.hiwCard}>
              <div className={styles.hiwNum}>03</div>
              <div className={styles.hiwTitle}>Check in daily</div>
              <div className={styles.hiwDesc}>
                Every day you complete your habit, a new layer blooms. Your
                weekly goal shapes the outer ring. Miss a day — it's okay. Just
                show up tomorrow.
              </div>
              <div className={styles.hiwTag}>Satisfying</div>
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
          <div className={styles.sectionEyebrow}>Reading your mandala</div>
          <h2 className={styles.sectionTitle}>
            Every layer <em>means something.</em>
          </h2>
          <p className={styles.sectionDesc}>
            Your mandala is a data visualization — but one you can feel. Here's
            how to read it.
          </p>

          <div className={styles.readingRows}>
            {/* Weekly — 1 cell */}
            <div
              className={`${styles.readingRow} ${styles.readingRowSage}`}
            >
              <div className={styles.readingRowLbl}>Weekly</div>
              <ReadCard
                icon="◈"
                title="Daily Petals"
                desc="Seven petals — one for each day of the week. The most focused mandala, where every single day has a shape."
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
                    onClick={() => setMonthlyView(monthlyView === 1 ? 2 : 1)}
                  >
                    <div
                      className={`${styles.mToggleOpt} ${styles.mToggleOptActive}`}
                    >
                      1
                    </div>
                    <div className={styles.mToggleOpt}>2</div>
                  </div>
                </div>
                <ReadCard
                  icon="◈"
                  title="Daily Shapes"
                  desc="28–31 day markers trace your daily completions. The clearest view of how consistently you showed up through the month."
                />
                <ReadCard
                  icon="◎"
                  title="Weekly Petals"
                  desc="4–5 week petals break the month into segments. Highlighted petals mark weeks where you met your weekly target."
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
                    <div className={styles.mToggleOpt}>1</div>
                    <div
                      className={`${styles.mToggleOpt} ${styles.mToggleOptActive}`}
                    >
                      2
                    </div>
                  </div>
                </div>
                <ReadCard
                  icon="◈"
                  title="Daily Petals"
                  desc="28–31 day petals trace your daily completions. The simplest monthly mandala — every petal is a day you showed up."
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
                      1
                    </div>
                    <div className={styles.qToggleOpt}>2</div>
                  </div>
                </div>
                <ReadCard
                  icon="◈"
                  title="Daily Shapes"
                  desc="91 day markers fill the outer ring over one quarter. Each shape shows whether you checked in that day."
                />
                <ReadCard
                  icon="◎"
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
                    <div className={styles.qToggleOpt}>1</div>
                    <div
                      className={`${styles.qToggleOpt} ${styles.qToggleOptActive}`}
                    >
                      2
                    </div>
                  </div>
                </div>
                <ReadCard
                  icon="◈"
                  title="Daily Shapes"
                  desc="91 day markers fill the outer ring over one quarter. Each shape shows whether you checked in that day."
                />
                <ReadCard
                  icon="◎"
                  title="Weekly Markers"
                  desc="13 week markers for the weeks of the quarter. Each highlights a week where you hit your weekly goal."
                />
                <ReadCard
                  icon="❋"
                  title="Monthly Petals"
                  desc="Each of the 3 petals represents a month. It blooms fully when you meet your monthly goal."
                />
              </div>
            )}

            {/* Yearly — 3 cells */}
            <div
              className={`${styles.readingRow} ${styles.readingRowBlue}`}
            >
              <div className={styles.readingRowLbl}>Yearly</div>
              <ReadCard
                icon="◈"
                title="Daily Shapes"
                desc="Each marker is one day of the year. 365 shapes fill the outer ring — highlighted days are ones you completed your habit."
              />
              <ReadCard
                icon="◎"
                title="Weekly Markers"
                desc="52 weekly markers sit between each month segment. A marker highlights when you hit your weekly target — small wins, made visible."
              />
              <ReadCard
                icon="❋"
                title="Monthly Petals"
                desc="Each of the 12 petals represents a month. It blooms fully when you meet your monthly goal — a year of practice in one image."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.pricingHome} id="pricing">
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>Pricing</div>
          <h2 className={styles.sectionTitle}>
            Create for free. <em>Bloom further</em> for $1.99.
          </h2>
          <p className={styles.sectionDesc}>
            You don't need to subscribe to actually use PetalProgress. Track 3
            habits for a full year — free, no expiry. Petal+ is for the people
            who want to go deeper.
          </p>

          <div className={styles.pricingCards}>
            {/* Free */}
            <div className={styles.priceCard}>
              <div className={styles.priceCardTitle}>Free</div>
              <div className={styles.priceAmountRow}>
                <div className={styles.priceBig}>$0</div>
              </div>
              <div className={styles.priceAnnualHint}>&nbsp;</div>
              <div className={styles.priceDesc}>
                Everything you need to start a habit and watch it grow. No credit
                card required.
              </div>
              <div className={styles.priceFeatList}>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>3 active mandalas</strong> — full check-in &amp;
                    gallery
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>All 4 themes + 6 petal colors</strong>
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Calendar view</strong> + weekly progress
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Mandala shop</strong> at full price
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={`${styles.pfDot} ${styles.pfDotOff}`}>–</div>
                  <div className={styles.pfText}>
                    Multiple habits per mandala option
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={`${styles.pfDot} ${styles.pfDotOff}`}>–</div>
                  <div className={styles.pfText}>Email reminders</div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={`${styles.pfDot} ${styles.pfDotOff}`}>–</div>
                  <div className={styles.pfText}>
                    Year-end high-res export
                  </div>
                </div>
              </div>
              <a href="#" className={styles.btnPriceGhost}>
                Get started free
              </a>
            </div>

            {/* Petal+ */}
            <div className={`${styles.priceCard} ${styles.priceFeatured}`}>
              <div className={styles.priceFeaturedPill}>Most popular</div>
              <div className={styles.priceCardTitle}>Petal+</div>
              <div className={styles.priceAmountRow}>
                <div className={styles.priceBig}>$1.99</div>
                <div className={styles.pricePer}>/mo</div>
              </div>
              <div className={styles.priceAnnualHint}>
                Or $1.66/mo billed annually — 2 months free
              </div>
              <div className={styles.priceDesc}>
                For the committed practitioner. Reminders, unlimited mandalas,
                and a discount every time you order from the shop.
              </div>
              <div className={styles.priceFeatList}>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Unlimited mandalas</strong>
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>All 4 themes + 6 petal colors</strong>
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Calendar view</strong> + weekly progress
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>20% off everything in the shop</strong>
                    <span className={styles.pfBadge}>Petal+ discount</span>
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Multiple habits per mandala option</strong>
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Email reminders</strong> — daily, weekly, or custom
                  </div>
                </div>
                <div className={styles.priceFeat}>
                  <div className={styles.pfDot}>✓</div>
                  <div className={styles.pfText}>
                    <strong>Year-end export</strong> — high-res PNG + SVG, free
                  </div>
                </div>
              </div>
              <a href="#" className={styles.btnPricePaid}>
                Start Petal+ free for 7 days
              </a>
            </div>
          </div>

          <div className={styles.pricingSeeMore}>
            <a href="/pricing">
              See full comparison including Teams &amp; Shop pricing →
            </a>
          </div>
        </div>
      </section>

      {/* ── ADMIN / TEAMS ── */}
      <section
        className={`${styles.adminSection} ${styles.section}`}
        id="teams"
      >
        <div className={styles.sectionInner}>
          <div className={styles.adminInner}>
            <div>
              <div className={styles.sectionEyebrow}>
                For teams &amp; organizations
              </div>
              <h2 className={styles.sectionTitle}>
                Also available for <em>coaches,</em> gyms, and wellness
                programs.
              </h2>
              <p
                className={`${styles.sectionDesc} ${styles.adminSectionDesc}`}
              >
                Assign habits to your clients, monitor progress, and let
                PetalProgress do the motivating for you — all without disrupting
                how your members use the app.
              </p>

              <div className={styles.adminBadgeRow}>
                <div className={`${styles.adminBadge} ${styles.abTrainer}`}>
                  Personal trainers
                </div>
                <div className={`${styles.adminBadge} ${styles.abGym}`}>
                  Gyms &amp; studios
                </div>
                <div className={`${styles.adminBadge} ${styles.abWellness}`}>
                  Wellness coaches
                </div>
              </div>

              <div className={styles.adminFeatures}>
                <div className={styles.adminFeature}>
                  <div className={styles.adminFeatureIcon}>◎</div>
                  <div>
                    <div className={styles.adminFeatureTitle}>
                      Assign or gift habits
                    </div>
                    <div className={styles.adminFeatureDesc}>
                      Assign a habit to your clients with your settings, or give
                      them access to set up their own. You control how much they
                      can edit.
                    </div>
                  </div>
                </div>
                <div className={styles.adminFeature}>
                  <div className={styles.adminFeatureIcon}>◇</div>
                  <div>
                    <div className={styles.adminFeatureTitle}>
                      Monitor without micromanaging
                    </div>
                    <div className={styles.adminFeatureDesc}>
                      See streaks, weekly completion, and at-risk members at a
                      glance. Get notified when someone hasn't checked in for a
                      week.
                    </div>
                  </div>
                </div>
                <div className={styles.adminFeature}>
                  <div className={styles.adminFeatureIcon}>✦</div>
                  <div>
                    <div className={styles.adminFeatureTitle}>
                      Generate printed mandalas
                    </div>
                    <div className={styles.adminFeatureDesc}>
                      At the end of a program or year, generate a beautiful
                      printed mandala for each member — a tangible record of
                      their work.
                    </div>
                  </div>
                </div>
                <div className={styles.adminFeature}>
                  <div className={styles.adminFeatureIcon}>◈</div>
                  <div>
                    <div className={styles.adminFeatureTitle}>
                      Independent user accounts
                    </div>
                    <div className={styles.adminFeatureDesc}>
                      Members keep their accounts and mandalas forever — even if
                      they leave your program. Their data is theirs.
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className={styles.btnAdminLearn}>
                Learn more about Teams →
              </a>
            </div>

            {/* Admin mockup */}
            <div className={styles.adminMockup}>
              <div className={styles.mockTopbar}>
                <div
                  className={styles.mockDot}
                  style={{ background: "#C45A5A", opacity: 0.7 }}
                />
                <div
                  className={styles.mockDot}
                  style={{ background: "#C4887A", opacity: 0.5 }}
                />
                <div
                  className={styles.mockDot}
                  style={{ background: "#8FA68C", opacity: 0.5 }}
                />
                <div className={styles.mockTitle}>Bloom Wellness Studio</div>
                <div className={styles.mockBadgeAdmin}>Teams</div>
              </div>

              <div className={styles.mockStatRow}>
                <div className={styles.mockStat}>
                  <div className={styles.mockStatN}>12</div>
                  <div className={styles.mockStatL}>Members</div>
                </div>
                <div className={styles.mockStat}>
                  <div className={styles.mockStatN}>
                    71
                    <span className={styles.mockStatNPct}>%</span>
                  </div>
                  <div className={styles.mockStatL}>Avg completion</div>
                </div>
                <div className={styles.mockStat}>
                  <div
                    className={`${styles.mockStatN} ${styles.mockStatNDanger}`}
                  >
                    3
                  </div>
                  <div className={styles.mockStatL}>At risk</div>
                </div>
              </div>

              <div className={styles.mockMembersLabel}>Members</div>

              {/* Sarah K. */}
              <div className={styles.mockMemberRow}>
                <div
                  className={styles.mockAv}
                  style={{ background: "#C45A5A" }}
                >
                  SK
                </div>
                <div className={styles.mockName}>Sarah K.</div>
                <div className={styles.mockProg}>
                  <div className={styles.mockProgBar}>
                    <div
                      className={styles.mockProgFill}
                      style={{ width: "80%", background: "#8FA68C" }}
                    />
                  </div>
                  <div className={styles.mockPct}>80% · 🔥 12 days</div>
                </div>
              </div>

              {/* Maya R. */}
              <div className={styles.mockMemberRow}>
                <div
                  className={styles.mockAv}
                  style={{ background: "#8FA68C" }}
                >
                  MR
                </div>
                <div className={styles.mockName}>Maya R.</div>
                <div className={styles.mockProg}>
                  <div className={styles.mockProgBar}>
                    <div
                      className={styles.mockProgFill}
                      style={{ width: "95%", background: "#8FA68C" }}
                    />
                  </div>
                  <div className={styles.mockPct}>95% · 🔥 21 days</div>
                </div>
              </div>

              {/* Alex P. */}
              <div className={styles.mockMemberRow}>
                <div
                  className={styles.mockAv}
                  style={{ background: "#C45A5A", opacity: 0.6 }}
                >
                  AP
                </div>
                <div
                  className={`${styles.mockName} ${styles.mockNameDim}`}
                >
                  Alex P.
                </div>
                <div className={styles.mockProg}>
                  <div className={styles.mockProgBar}>
                    <div
                      className={styles.mockProgFill}
                      style={{ width: "0%", background: "#C45A5A" }}
                    />
                  </div>
                  <div
                    className={`${styles.mockPct} ${styles.mockPctDanger}`}
                  >
                    No check-in · 7 days
                  </div>
                </div>
              </div>

              {/* Jordan T. */}
              <div className={styles.mockMemberRow}>
                <div
                  className={styles.mockAv}
                  style={{ background: "#7B9BAF" }}
                >
                  JT
                </div>
                <div className={styles.mockName}>Jordan T.</div>
                <div className={styles.mockProg}>
                  <div className={styles.mockProgBar}>
                    <div
                      className={styles.mockProgFill}
                      style={{ width: "50%", background: "#C4887A" }}
                    />
                  </div>
                  <div className={styles.mockPct}>50% · 🔥 4 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
