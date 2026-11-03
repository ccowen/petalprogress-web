import React, { useState } from "react";
import { Accordion } from "../components/Accordion";
import styles from "./PricingPage.module.css";

/* ── Mini Mandala SVG helpers ── */

function MiniMandalaDownload() {
  const cx = 40, cy = 40;
  const color = "var(--pp-coral)";
  const petals: React.ReactElement[] = [];

  // outer ring: 8 petals
  for (let i = 0; i < 8; i++) {
    const a = (i * (360 / 8) * Math.PI) / 180;
    const x = cx + 28 * Math.cos(a);
    const y = cy + 28 * Math.sin(a);
    petals.push(
      <ellipse
        key={`o${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="3.5"
        ry="9"
        fill={color}
        opacity="0.85"
        transform={`rotate(${(i * (360 / 8)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  // inner ring: 12 petals, 9 filled
  for (let i = 0; i < 12; i++) {
    const a = (i * (360 / 12) * Math.PI) / 180;
    const x = cx + 18 * Math.cos(a);
    const y = cy + 18 * Math.sin(a);
    const filled = i < 9;
    petals.push(
      <ellipse
        key={`i${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="2.5"
        ry="6"
        fill={filled ? color : "rgba(255,255,255,0.06)"}
        opacity={filled ? 0.85 : 0.3}
        transform={`rotate(${(i * (360 / 12)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  // center
  petals.push(
    <circle key="center" cx={cx} cy={cy} r="8" fill="color-mix(in srgb, var(--pp-dark) 80%, transparent)" />
  );

  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {petals}
    </svg>
  );
}

function MiniMandalaPrint() {
  const cx = 36, cy = 48;
  const color = "var(--pp-marigold)";
  const petals: React.ReactElement[] = [];

  // paper background
  petals.push(
    <rect key="paper1" x="8" y="4" width="56" height="82" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />,
    <rect key="paper2" x="8" y="4" width="56" height="82" rx="3" fill="rgba(255,255,255,0.04)" />
  );

  for (let i = 0; i < 8; i++) {
    const a = (i * (360 / 8) * Math.PI) / 180;
    const x = cx + 24 * Math.cos(a);
    const y = cy + 24 * Math.sin(a);
    petals.push(
      <ellipse
        key={`p${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="3"
        ry="8"
        fill={color}
        opacity="0.7"
        transform={`rotate(${(i * 45).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  petals.push(
    <circle key="center" cx={cx} cy={cy} r="7" fill="color-mix(in srgb, var(--pp-surface) 15%, transparent)" />
  );

  return (
    <svg width="72" height="90" viewBox="0 0 72 90">
      {petals}
    </svg>
  );
}

function MiniMandalaButton() {
  const cx = 40, cy = 40;
  const color = "var(--pp-primary)";
  const petals: React.ReactElement[] = [];

  // button background
  petals.push(
    <circle key="bg1" cx="40" cy="40" r="34" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />,
    <circle key="bg2" cx="40" cy="40" r="30" fill="rgba(255,255,255,0.04)" />
  );

  // outer ring: 8 petals
  for (let i = 0; i < 8; i++) {
    const a = (i * (360 / 8) * Math.PI) / 180;
    const x = cx + 22 * Math.cos(a);
    const y = cy + 22 * Math.sin(a);
    petals.push(
      <ellipse
        key={`o${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="3"
        ry="8"
        fill={color}
        opacity="0.85"
        transform={`rotate(${(i * (360 / 8)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  // inner ring: 6 petals
  for (let i = 0; i < 6; i++) {
    const a = (i * (360 / 6) * Math.PI) / 180;
    const x = cx + 13 * Math.cos(a);
    const y = cy + 13 * Math.sin(a);
    petals.push(
      <ellipse
        key={`i${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="2"
        ry="5"
        fill={color}
        opacity="0.85"
        transform={`rotate(${(i * (360 / 6)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  petals.push(
    <circle key="center" cx={cx} cy={cy} r="8" fill="color-mix(in srgb, var(--pp-dark) 80%, transparent)" />
  );

  return (
    <svg width="80" height="80" viewBox="0 0 80 80">
      {petals}
    </svg>
  );
}

function MiniMandalaMagnet() {
  const cx = 44, cy = 35;
  const color = "var(--pp-sky)";
  const petals: React.ReactElement[] = [];

  // magnet background
  petals.push(
    <rect key="bg" x="4" y="10" width="80" height="50" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
  );

  for (let i = 0; i < 10; i++) {
    const a = (i * 36 * Math.PI) / 180;
    const x = cx + 18 * Math.cos(a);
    const y = cy + 18 * Math.sin(a);
    petals.push(
      <ellipse
        key={`p${i}`}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="2.5"
        ry="7"
        fill={color}
        opacity={i % 3 === 0 ? 0.3 : 0.7}
        transform={`rotate(${(i * 36).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  }
  petals.push(
    <circle key="center" cx={cx} cy={cy} r="5" fill="color-mix(in srgb, var(--pp-dark) 60%, transparent)" />
  );

  return (
    <svg width="88" height="70" viewBox="0 0 88 70">
      {petals}
    </svg>
  );
}

/* ── Data ── */

const faqItems = [
  {
    question: "What happens to my mandalas if I cancel Petal+?",
    answer:
      "Your mandalas and all your progress are always yours. If you cancel, you\u2019ll keep up to 3 active mandalas and all completed ones. Nothing is deleted.",
  },
  {
    question: "Can I order from the shop without a subscription?",
    answer:
      "Yes \u2014 the shop is open to everyone. Petal+ members get 20% off automatically applied at checkout. One print order at Petal+ prices covers more than a month of subscription.",
  },
  {
    question: "How do email reminders work?",
    answer:
      "You set the schedule \u2014 daily at a specific time, or weekly on certain days. You can customize or turn them off any time from your settings.",
  },
  {
    question: "Is Petal+ available for teams and organizations?",
    answer:
      "The Teams plan is separate and includes everything in Petal+ plus team tools \u2014 habit assignment, member monitoring, and bulk print generation. See the Teams page for details and pricing.",
  },
  {
    question: "What does the year-end export include?",
    answer:
      "Petal+ members get a free high-res PNG and SVG of each mandala at the end of the year (or whenever you close a mandala). The same files are available as paid downloads in the shop for free users.",
  },
];

interface CompareRow {
  type: "section" | "row";
  label: string;
  free?: string;
  freeStyle?: "check-y" | "check-n" | "val";
  paid?: string;
  paidStyle?: "check-y" | "check-n" | "val";
}

const compareData: CompareRow[] = [
  { type: "section", label: "Mandalas" },
  { type: "row", label: "Active mandalas", free: "3", freeStyle: "val", paid: "Unlimited", paidStyle: "val" },
  { type: "row", label: "Completed mandalas saved", free: "\u2713", freeStyle: "check-y", paid: "\u2713", paidStyle: "check-y" },
  { type: "row", label: "All themes & petal colors", free: "\u2713", freeStyle: "check-y", paid: "\u2713", paidStyle: "check-y" },
  { type: "row", label: "Multiple habits per mandala option", free: "\u2013", freeStyle: "check-n", paid: "\u2713", paidStyle: "check-y" },
  { type: "row", label: "Year-end high-res export", free: "\u2013", freeStyle: "check-n", paid: "\u2713 free", paidStyle: "check-y" },
  { type: "section", label: "Tracking" },
  { type: "row", label: "Daily check-in", free: "\u2713", freeStyle: "check-y", paid: "\u2713", paidStyle: "check-y" },
  { type: "row", label: "Calendar view", free: "\u2713", freeStyle: "check-y", paid: "\u2713", paidStyle: "check-y" },
  { type: "row", label: "Email reminders", free: "\u2013", freeStyle: "check-n", paid: "\u2713", paidStyle: "check-y" },
  { type: "section", label: "Shop" },
  { type: "row", label: "Access to mandala shop", free: "\u2713 full price", freeStyle: "check-y", paid: "\u2713 20% off", paidStyle: "check-y" },
  { type: "row", label: "High-res downloads", free: "$2.99 each", freeStyle: "val", paid: "$2.39 each", paidStyle: "val" },
  { type: "row", label: "Physical prints", free: "Full price", freeStyle: "val", paid: "20% off", paidStyle: "val" },
  { type: "row", label: "Buttons & magnets", free: "Full price", freeStyle: "val", paid: "20% off", paidStyle: "val" },
];

interface ShopProduct {
  name: string;
  desc: string;
  price: string;
  priceSub: string;
  petalPrice: string;
  visualClass: string;
  Visual: () => React.ReactElement;
}

const shopProducts: ShopProduct[] = [
  {
    name: "Digital Download",
    desc: "High-res PNG + SVG of your mandala. Print it yourself, frame it, use it anywhere.",
    price: "$2.99",
    priceSub: "per mandala",
    petalPrice: "$2.39",
    visualClass: "visualDownload",
    Visual: MiniMandalaDownload,
  },
  {
    name: "Art Print",
    desc: "Gallery-quality print on archival paper, mailed to you. Available in 5\u00d75 and 8\u00d78.",
    price: "$14.99",
    priceSub: "from / free shipping over $35",
    petalPrice: "$11.99",
    visualClass: "visualPrint",
    Visual: MiniMandalaPrint,
  },
  {
    name: "Button Pin",
    desc: "1.75\u201d or 2.25\u201d pinback button. Your mandala on a badge you can wear or gift.",
    price: "$4.99",
    priceSub: "per button",
    petalPrice: "$3.99",
    visualClass: "visualButton",
    Visual: MiniMandalaButton,
  },
  {
    name: "Magnet",
    desc: "3\u201d \u00d7 2.5\u201d high-gloss fridge magnet. Same beautiful image, different backing.",
    price: "$4.99",
    priceSub: "per magnet",
    petalPrice: "$3.99",
    visualClass: "visualMagnet",
    Visual: MiniMandalaMagnet,
  },
];

/* ── Component ── */

export function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [compareOpen, setCompareOpen] = useState(false);

  const isAnnual = billing === "annual";
  const petalPrice = isAnnual ? "$1.66" : "$1.99";
  const annualNote = isAnnual ? "Billed $19.90/year \u2014 save $3.98" : "\u00a0";
  const billingNote = isAnnual ? "2 months free with annual billing" : "";

  return (
    <>
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.eyebrow}>{"\u2726"} Simple pricing</div>
        <h1 className={styles.title}>
          Start free.<br />
          <em>Bloom further</em> for $1.99.
        </h1>
        <p className={styles.sub}>
          You don&rsquo;t need to subscribe to use PetalProgress. The free plan
          lets you track 3 habits for a full year &mdash; no trial, no expiry,
          no credit card. Petal+ is for people who want to go deeper.
        </p>

        <div className={styles.billingToggle}>
          <div
            className={`${styles.billingOpt} ${billing === "monthly" ? styles.billingOptActive : ""}`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </div>
          <div
            className={`${styles.billingOpt} ${billing === "annual" ? styles.billingOptActive : ""}`}
            onClick={() => setBilling("annual")}
          >
            Annual
          </div>
        </div>
        <div className={styles.billingNote}>
          {billingNote}
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <div className={styles.cardsWrap}>

        {/* Free card */}
        <div className={styles.planCard}>
          <div className={styles.planName}>Free</div>
          <div className={styles.planPriceRow}>
            <div className={styles.planPrice}>$0</div>
          </div>
          <div className={styles.planPriceAnnual}>&nbsp;</div>
          <div className={styles.planDesc}>
            Everything you need to genuinely track a habit. Not a trial &mdash; 3
            habits, each for a full year, free forever.
          </div>
          <div className={styles.planDivider} />
          <div className={styles.featureList}>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>3 active mandalas</strong>
                <br />
                <span className={styles.dim}>Full check-in, gallery</span>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>All 4 themes + 6 petal colors</strong>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Calendar view</strong> + weekly progress
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Mandala shop</strong> &mdash; full price
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckNo}`}>&ndash;</div>
              <div className={`${styles.featText} ${styles.featTextMuted}`}>
                Multiple habits per mandala option
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckNo}`}>&ndash;</div>
              <div className={`${styles.featText} ${styles.featTextMuted}`}>
                Email reminders
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckNo}`}>&ndash;</div>
              <div className={`${styles.featText} ${styles.featTextMuted}`}>
                Year-end export
              </div>
            </div>
          </div>
          <a href="#" className={`${styles.planCta} ${styles.freeCta}`}>
            Start tracking free
          </a>
          <div className={styles.planFootnote}>
            No credit card &middot; No trial &middot; Free forever
          </div>
        </div>

        {/* Petal+ card */}
        <div className={`${styles.planCard} ${styles.featured}`}>
          <div className={styles.planPill}>Most popular</div>
          <div className={styles.planName}>Petal+</div>
          <div className={styles.planPriceRow}>
            <div className={styles.planPrice}>{petalPrice}</div>
            <div className={styles.planPricePer}>/mo</div>
          </div>
          <div className={styles.planPriceAnnual}>{annualNote}</div>
          <div className={styles.planDesc}>
            For the committed practitioner. Reminders, unlimited mandalas, and a
            discount every time you order from the shop.
          </div>
          <div className={styles.planDivider} />
          <div className={styles.featureList}>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Unlimited mandalas</strong>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>All 4 themes + 6 petal colors</strong>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Calendar view</strong> + weekly progress
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>20% off everything in the shop</strong>
                <span className={styles.featTag}>Petal+ discount</span>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Multiple habits per mandala option</strong>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Email reminders</strong>
                <br />
                <span className={styles.dim}>Daily, weekly, or custom schedule</span>
              </div>
            </div>
            <div className={styles.feat}>
              <div className={`${styles.featCheck} ${styles.featCheckYes}`}>{"\u2713"}</div>
              <div className={styles.featText}>
                <strong>Year-end export</strong>
                <br />
                <span className={styles.dim}>High-res PNG + SVG, free</span>
              </div>
            </div>
          </div>
          <a href="#" className={`${styles.planCta} ${styles.paidCta}`}>
            Start Petal+ free for 7 days
          </a>
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div className={styles.compareWrap}>
        <div className={styles.compareToggle}>
          <button
            className={styles.compareToggleBtn}
            onClick={() => setCompareOpen((o) => !o)}
          >
            See full comparison{" "}
            <span className={`${styles.caret} ${compareOpen ? styles.caretOpen : ""}`}>
              {"\u25BC"}
            </span>
          </button>
        </div>

        {compareOpen && (
          <table className={styles.compareTable}>
            <thead className={styles.ctHead}>
              <tr>
                <th style={{ width: "50%" }}>Feature</th>
                <th>Free</th>
                <th className={styles.thPetal}>Petal+</th>
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => {
                if (row.type === "section") {
                  return (
                    <tr key={i} className={styles.ctSection}>
                      <td colSpan={3}>{row.label}</td>
                    </tr>
                  );
                }
                return (
                  <tr key={i} className={styles.ctRow}>
                    <td>{row.label}</td>
                    <td
                      className={
                        row.freeStyle === "check-y"
                          ? styles.ctCheckY
                          : row.freeStyle === "check-n"
                            ? styles.ctCheckN
                            : styles.ctVal
                      }
                    >
                      {row.free}
                    </td>
                    <td
                      className={`${
                        row.paidStyle === "check-y"
                          ? styles.ctCheckY
                          : row.paidStyle === "check-n"
                            ? styles.ctCheckN
                            : styles.ctVal
                      } ${styles.ctPetal}`}
                    >
                      {row.paid}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* ── SHOP SECTION ── */}
      <section className={styles.shopSection}>
        <div className={styles.shopInner}>
          <div className={styles.shopHeader}>
            <div className={styles.shopEyebrow}>The Mandala Shop</div>
            <h2 className={styles.shopTitle}>
              Your practice, <em>made physical.</em>
            </h2>
            <p className={styles.shopSub}>
              Every mandala you grow is yours to hold. Order prints, buttons, and
              magnets &mdash; or download high-res files to print yourself.
            </p>
          </div>

          <div className={styles.petalPlusBanner}>
            <div className={styles.ppbIcon}>{"\u2726"}</div>
            <div className={styles.ppbText}>
              <strong>Petal+ members get 20% off everything in the shop.</strong>{" "}
              At $1.99/mo, one print order pays for itself.
            </div>
          </div>

          <div className={styles.shopGrid}>
            {shopProducts.map((product) => (
              <div key={product.name} className={styles.shopCard}>
                <div
                  className={`${styles.shopCardVisual} ${
                    styles[product.visualClass as keyof typeof styles]
                  }`}
                >
                  <product.Visual />
                </div>
                <div className={styles.shopCardBody}>
                  <div className={styles.shopCardName}>{product.name}</div>
                  <div className={styles.shopCardDesc}>{product.desc}</div>
                  <div className={styles.shopPriceRow}>
                    <div className={styles.priceBlock}>
                      <div className={styles.priceMain}>{product.price}</div>
                      <div className={styles.priceSub}>{product.priceSub}</div>
                    </div>
                    <div className={styles.pricePetal}>
                      <span className={styles.pricePetalAmt}>
                        {product.petalPrice}
                      </span>
                      <span style={{ opacity: 0.6 }}>Petal+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <div className={styles.guarantee}>
        <div className={styles.guaranteeIcon}>{"\ud83c\udf3f"}</div>
        <div className={styles.guaranteeTitle}>Try Petal+ free for 7 days</div>
        <div className={styles.guaranteeText}>
          No charge until your trial ends. Cancel any time &mdash; your mandalas
          and progress are always yours, even if you go back to free.
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className={styles.faqSection}>
        <div className={styles.faqTitle}>Questions</div>
        <Accordion items={faqItems} />
      </div>
    </>
  );
}
