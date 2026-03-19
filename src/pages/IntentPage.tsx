import { useState } from "react";
import styles from "./IntentPage.module.css";

type IntentType = "individual" | "referred" | "admin" | null;
type View = "selection" | "confirmation";

export function IntentPage() {
  const [selected, setSelected] = useState<IntentType>(null);
  const [view, setView] = useState<View>("selection");
  const [chosenType, setChosenType] = useState<IntentType>(null);

  function handleSelect(type: IntentType) {
    setSelected(type);
  }

  function handleConfirm(type: IntentType) {
    setChosenType(type);
    setView("confirmation");
  }

  const stepClasses = (idx: number) => {
    if (view === "confirmation") {
      if (idx < 2) return `${styles.step} ${styles.stepDone}`;
      return `${styles.step} ${styles.stepActive}`;
    }
    if (idx === 0) return `${styles.step} ${styles.stepDone}`;
    if (idx === 1) return `${styles.step} ${styles.stepActive}`;
    return `${styles.step} ${styles.stepFuture}`;
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <a href="/" className={styles.logo}>
          𖢻 PetalProgress
        </a>

        <div className={styles.steps}>
          {[0, 1, 2].map((i) => (
            <div key={i} className={stepClasses(i)} />
          ))}
        </div>

        {view === "selection" && (
          <>
            <h1 className={styles.title}>What brings you here?</h1>
            <p className={styles.sub}>
              We'll personalise your setup based on how you plan to use
              PetalProgress.
            </p>

            <div className={styles.options}>
              {/* Individual */}
              <div
                className={`${styles.option} ${styles.optionPrimary} ${selected === "individual" ? styles.optionSelected : ""}`}
                onClick={() => handleSelect("individual")}
              >
                <div className={styles.optionIcon}>🌸</div>
                <div className={styles.optionBody}>
                  <div className={styles.optionLabel}>
                    I'm tracking a habit for myself
                  </div>
                  {selected !== "individual" && (
                    <div className={styles.optionDesc}>
                      Build a personal mandala and track your daily practice.
                    </div>
                  )}
                </div>
                {selected === "individual" ? (
                  <button
                    className={styles.confirmBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConfirm("individual");
                    }}
                  >
                    →
                  </button>
                ) : (
                  <div className={styles.optionArrow}>→</div>
                )}
              </div>

              {/* Referred */}
              <div
                className={`${styles.option} ${styles.optionPrimary} ${selected === "referred" ? styles.optionSelected : ""}`}
                onClick={() => handleSelect("referred")}
              >
                <div className={styles.optionIcon}>◑</div>
                <div className={styles.optionBody}>
                  <div className={styles.optionLabel}>
                    I was referred by a gym or coach
                  </div>
                  {selected !== "referred" && (
                    <div className={styles.optionDesc}>
                      Your coach will assign your habits — you just check in
                      daily.
                    </div>
                  )}
                  {selected === "referred" && (
                    <input
                      className={styles.referralInput}
                      type="text"
                      placeholder="Referral code (optional)"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
                {selected === "referred" ? (
                  <button
                    className={styles.confirmBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConfirm("referred");
                    }}
                  >
                    →
                  </button>
                ) : (
                  <div className={styles.optionArrow}>→</div>
                )}
              </div>
            </div>

            {/* Admin */}
            <div
              className={`${styles.option} ${selected === "admin" ? styles.optionSelected : ""}`}
              onClick={() => handleSelect("admin")}
            >
              <div className={styles.optionIcon}>◈</div>
              <div className={styles.optionBody}>
                <div className={styles.optionLabel}>
                  I'm setting up a gym or studio
                </div>
                {selected !== "admin" && (
                  <div className={styles.optionDesc}>
                    Invite members, assign habits, and track your whole team
                    from one dashboard.
                  </div>
                )}
              </div>
              {selected === "admin" ? (
                <button
                  className={styles.confirmBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConfirm("admin");
                  }}
                >
                  →
                </button>
              ) : (
                <div className={styles.optionArrow}>→</div>
              )}
            </div>
          </>
        )}

        {view === "confirmation" && chosenType === "individual" && (
          <div className={styles.confirmBlock}>
            <div className={styles.confirmIcon}>🌸</div>
            <h1 className={styles.title}>You're set to start tracking</h1>
            <p className={styles.sub}>
              You'll set up your first habit inside the app — it only takes a
              minute.
            </p>
            <div className={styles.confirmDetails}>
              <div className={styles.confirmRow}>
                <div className={styles.confirmDot} />
                Your mandala starts empty and fills as you check in each day
              </div>
              <div className={styles.confirmRow}>
                <div className={styles.confirmDot} />
                You can create multiple habits and track them together
              </div>
            </div>
            <a href="/onboarding" className={styles.btnConfirm}>
              Go to my mandala →
            </a>
          </div>
        )}

        {view === "confirmation" && chosenType === "referred" && (
          <div className={styles.confirmBlock}>
            <div className={styles.confirmIcon}>◑</div>
            <h1 className={styles.title}>Welcome — your mandala is waiting</h1>
            <p className={styles.sub}>
              Your coach will assign habits to you. All you need to do is check
              in each day.
            </p>
            <div className={styles.confirmDetails}>
              <div className={styles.confirmRow}>
                <div className={styles.confirmDot} />
                Habits assigned by your coach will appear automatically
              </div>
              <div className={styles.confirmRow}>
                <div className={styles.confirmDot} />
                You can also add your own personal habits alongside them
              </div>
            </div>
            <a href="/onboarding" className={styles.btnConfirm}>
              Go to my mandala →
            </a>
          </div>
        )}

        {view === "confirmation" && chosenType === "admin" && (
          <div className={styles.confirmBlock}>
            <div className={styles.confirmIcon}>◈</div>
            <h1 className={styles.title}>Setting up your team workspace</h1>
            <p className={styles.sub}>
              We'll walk you through the first steps once you're in the
              dashboard.
            </p>
            <div className={styles.confirmDetails}>
              <div className={styles.confirmRow}>
                <div className={`${styles.confirmDot} ${styles.confirmDotAmber}`} />
                Free 7-day trial — up to 10 members, no card required
              </div>
              <div className={styles.confirmRow}>
                <div className={`${styles.confirmDot} ${styles.confirmDotAmber}`} />
                Create habits, invite members, and track progress from one place
              </div>
            </div>
            <a
              href="#"
              className={`${styles.btnConfirm} ${styles.btnConfirmAmber}`}
            >
              Go to teams dashboard →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
