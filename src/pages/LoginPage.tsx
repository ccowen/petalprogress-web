import { Input } from "@ccowen/petalprogress-ui";
import styles from "./AuthPage.module.css";

export function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <a href="/" className={styles.logo}>
          𖢻 PetalProgress
        </a>

        <div className={styles.steps}>
          <div className={`${styles.step} ${styles.stepActive}`} />
          <div className={`${styles.step} ${styles.stepFuture}`} />
          <div className={`${styles.step} ${styles.stepFuture}`} />
        </div>

        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.sub}>Sign in to continue your practice.</p>

        <a href="/signup/intent" className={styles.sso}>
          Continue with Google
        </a>
        <a href="/signup/intent" className={styles.sso}>
          Continue with Apple
        </a>

        <div className={styles.divider}>or continue with email</div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/signup/intent";
          }}
        >
          <div className={styles.fieldGroup}>
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
          <div className={styles.fieldGroup}>
            <div className={styles.fieldRow}>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--pp-text-soft)",
                  letterSpacing: "0.02em",
                }}
              >
                Password
              </span>
              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
            </div>
            <Input type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className={styles.submitDark}>
            Sign in
          </button>
        </form>

        <p className={styles.switchText}>
          Don't have an account?{" "}
          <a href="/signup">Sign up free</a>
        </p>
      </div>
    </div>
  );
}
