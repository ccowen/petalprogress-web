import { useState } from "react";
import styles from "./OnboardingPage.module.css";

const STEPS = [
  {
    title: "How do you think about habits?",
    sub: "This shapes how we frame your progress — no wrong answer.",
  },
  {
    title: "Name your habit",
    sub: "What are you committing to? Be specific enough to act on.",
  },
  {
    title: "How often will you show up?",
    sub: "Make it easy. A smaller goal you keep beats an ambitious one you don't.",
  },
  {
    title: "Choose your petal color",
    sub: "Each check-in grows one petal. Pick a color that feels like your practice.",
  },
  {
    title: "Your first mandala is ready",
    sub: "Check in every day and watch it grow.",
  },
];

const COLORS = [
  "var(--pp-primary)",
  "var(--pp-sky)",
  "var(--pp-marigold)",
  "var(--pp-coral)",
  "var(--pp-mauve)",
  "var(--pp-text)",
];

function MandalaRevealSvg({ color }: { color: string }) {
  const cx = 100;
  const cy = 100;
  const r = 76;
  const petals = Array.from({ length: 30 }, (_, i) => {
    const deg = i * 12 - 90;
    const rad = (deg * Math.PI) / 180;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    const filled = i === 0;
    return (
      <ellipse
        key={i}
        cx={x.toFixed(1)}
        cy={y.toFixed(1)}
        rx="3"
        ry="10"
        fill={filled ? color : "color-mix(in srgb, var(--pp-text) 7%, transparent)"}
        opacity={filled ? 0.85 : 1}
        transform={`rotate(${deg.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})`}
      />
    );
  });

  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      {petals}
      <circle cx="100" cy="100" r="14" fill="color-mix(in srgb, var(--pp-bg) 97%, transparent)" />
    </svg>
  );
}

export function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [framing, setFraming] = useState("systems");
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("5x");
  const [color, setColor] = useState(COLORS[0]);

  const isLast = step === STEPS.length - 1;

  function nextStep() {
    if (!isLast) {
      setStep((s) => s + 1);
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <a href="/" className={styles.logo}>
          𖢻 PetalProgress
        </a>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.stepDone}`} />
          <div className={`${styles.step} ${styles.stepDone}`} />
          <div className={`${styles.step} ${styles.stepActive}`} />
        </div>

        <div className={styles.substepRow}>
          {STEPS.map((_, i) => {
            let cls = styles.substepDot;
            if (i < step) cls += ` ${styles.substepDone}`;
            else if (i === step) cls += ` ${styles.substepActive}`;
            else cls += ` ${styles.substepFuture}`;
            return <div key={i} className={cls} />;
          })}
        </div>

        <h1 className={styles.title}>{STEPS[step].title}</h1>
        <p className={styles.sub}>{STEPS[step].sub}</p>

        {/* Step 1: Framing */}
        {step === 0 && (
          <div className={styles.framingCards}>
            <div
              className={`${styles.framingCard} ${framing === "systems" ? styles.framingSelected : ""}`}
              onClick={() => setFraming("systems")}
            >
              <div className={styles.framingTitle}>Systems</div>
              <div className={styles.framingDesc}>
                I show up every day. The results take care of themselves.
              </div>
            </div>
            <div
              className={`${styles.framingCard} ${framing === "goals" ? styles.framingSelected : ""}`}
              onClick={() => setFraming("goals")}
            >
              <div className={styles.framingTitle}>Goals</div>
              <div className={styles.framingDesc}>
                I'm working toward a specific outcome by a specific date.
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Habit name */}
        {step === 1 && (
          <>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                What habit are you building?
              </label>
              <input
                className={styles.fieldInput}
                type="text"
                placeholder="e.g. Morning meditation"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
              />
              <div className={styles.fieldHint}>
                Keep it short — this becomes your mandala's name.
              </div>
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>
                What triggers this habit?{" "}
                <span className={styles.fieldLabelOptional}>(optional)</span>
              </label>
              <input
                className={styles.fieldInput}
                type="text"
                placeholder="e.g. After my morning coffee"
              />
            </div>
          </>
        )}

        {/* Step 3: Frequency */}
        {step === 2 && (
          <>
            <div className={styles.freqOpts}>
              {[
                { value: "daily", label: "Daily", desc: "every day" },
                { value: "5x", label: "5×", desc: "per week" },
                { value: "3x", label: "3×", desc: "per week" },
              ].map((opt) => (
                <div
                  key={opt.value}
                  className={`${styles.freqOpt} ${frequency === opt.value ? styles.freqSelected : ""}`}
                  onClick={() => setFrequency(opt.value)}
                >
                  <div className={styles.freqMain}>{opt.label}</div>
                  {opt.desc}
                </div>
              ))}
            </div>
            <div
              className={styles.fieldHint}
              style={{ textAlign: "center", marginTop: "4px" }}
            >
              Start easy — you can always increase frequency later.
            </div>
          </>
        )}

        {/* Step 4: Color */}
        {step === 3 && (
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Petal color</label>
            <div className={styles.swatchRow}>
              {COLORS.map((c) => (
                <div
                  key={c}
                  className={`${styles.swatch} ${color === c ? styles.swatchSelected : ""}`}
                  style={{ background: c }}
                  onClick={() => setColor(c)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Reveal */}
        {step === 4 && (
          <div className={styles.mandalaReveal}>
            <div className={styles.revealLabel}>Your mandala is ready</div>
            <MandalaRevealSvg color={color} />
            <div className={styles.revealName}>
              {habitName || "Morning Meditation"}
            </div>
            <div className={styles.revealSub}>
              30 petals to grow · check in tomorrow
            </div>
          </div>
        )}

        <div className={styles.stepNav}>
          {step > 0 && (
            <button className={styles.btnBack} onClick={prevStep}>
              ← Back
            </button>
          )}
          <button
            className={`${styles.btnNext} ${isLast ? styles.btnNextSage : ""}`}
            onClick={nextStep}
          >
            {isLast ? "Start my practice →" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}
