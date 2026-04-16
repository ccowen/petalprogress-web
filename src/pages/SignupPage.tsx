import { Input } from "@ccowen/petalprogress-ui";
import { useSignInModal } from "../hooks/useSignInModal";
import styles from "./AuthPage.module.css";

export function SignupPage() {
  const { open: openSignIn } = useSignInModal();

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

        <h1 className={styles.title}>Start your practice</h1>
        <p className={styles.sub}>Free to start. No credit card required.</p>

        <a href="/signup/intent" className={styles.sso}>
          Continue with Google
        </a>
        <a href="/signup/intent" className={styles.sso}>
          Continue with Apple
        </a>

        <div className={styles.divider}>or sign up with email</div>

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
            <Input
              label="Password"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
          <button type="submit" className={styles.submitSage}>
            Create free account
          </button>
        </form>

        <p className={styles.legal}>
          By signing up you agree to our{" "}
          <a href="/terms" target="_blank" rel="noopener">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </p>
        <p className={styles.switchText}>
          Already have an account?{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openSignIn();
            }}
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
