import { Modal, Input } from "@petalprogress/ui";
import styles from "./SignInModal.module.css";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

export function SignInModal({ open, onClose }: SignInModalProps) {
  return (
    <Modal open={open} onClose={onClose} maxWidth={400}>
      <span className={styles.logo}>𖢻 PetalProgress</span>
      <h2 className={styles.title}>Welcome back</h2>
      <p className={styles.sub}>Sign in to continue your practice.</p>

      <a href="#" className={styles.sso}>
        Continue with Google
      </a>
      <a href="#" className={styles.sso}>
        Continue with Apple
      </a>

      <div className={styles.divider}>or continue with email</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles.field}>
          <Input label="Email" type="email" placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <Input label="Password" type="password" placeholder="••••••••" />
        </div>
        <button type="submit" className={styles.submit}>
          Sign in
        </button>
      </form>

      <p className={styles.switchText}>
        No account yet?{" "}
        <a href="/signup">Sign up free →</a>
      </p>
    </Modal>
  );
}
