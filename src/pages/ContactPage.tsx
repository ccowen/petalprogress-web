import styles from "./ContactPage.module.css";

export function ContactPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>✉ Get in touch</div>
        <h1 className={styles.title}>
          We'd love to <em>hear from you</em>
        </h1>
        <p className={styles.sub}>
          Questions, feedback, or interested in setting up PetalProgress for
          your team or gym? Reach out below.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>How can we help?</h2>
          <p className={styles.infoText}>
            Whether you have a question about the app or want to explore what
            PetalProgress can do for a team, we're happy to talk.
          </p>

          <div className={styles.reasons}>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>🌸</div>
              <div className={styles.reasonText}>
                <strong>General question</strong>
                Curious about how the app works, your account, or subscription
                options.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>◈</div>
              <div className={styles.reasonText}>
                <strong>Teams &amp; demo request</strong>
                Setting up PetalProgress for a gym, studio, or coaching
                practice. We'll walk you through the admin tools.
              </div>
            </div>
            <div className={styles.reason}>
              <div className={styles.reasonIcon}>◎</div>
              <div className={styles.reasonText}>
                <strong>Feedback</strong>
                Something we could do better, or an idea you'd like to share.
              </div>
            </div>
          </div>

          <p className={styles.response}>
            We typically respond within 1–2 business days.
          </p>
        </div>

        <div className={styles.formCard}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>First name</label>
                <input
                  className={styles.fieldInput}
                  type="text"
                  placeholder="Alex"
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Last name</label>
                <input
                  className={styles.fieldInput}
                  type="text"
                  placeholder="Rivera"
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                className={styles.fieldInput}
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>What brings you here?</label>
              <select className={styles.fieldSelect} defaultValue="">
                <option value="" disabled>
                  Select a topic…
                </option>
                <option>General question</option>
                <option>Teams &amp; demo request</option>
                <option>Billing or subscription</option>
                <option>Feedback or suggestion</option>
                <option>Something else</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                className={styles.fieldTextarea}
                placeholder="Tell us what's on your mind…"
              />
            </div>

            <button type="submit" className={styles.formSubmit}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
