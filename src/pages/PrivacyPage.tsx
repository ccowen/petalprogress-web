import styles from "./LegalPage.module.css";

export function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Legal</div>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.meta}>
        Last updated: October 30, 2026
      </p>

      <div className={styles.body}>
        <p>
          This policy explains what PetalProgress guided-journal texts collect,
          why, and who else handles it. The short version: your answers stay
          private, and we don't sell your information.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Your phone number</strong>, to text you prompts and to sign
            you in.
          </li>
          <li>
            <strong>Your signature</strong> (the name you pick at sign-up, like
            gentle_heron_42), shown on your mandala images.
          </li>
          <li>
            <strong>Your choices</strong>: how many prompts a week, the time of
            day, and your time zone.
          </li>
          <li>
            <strong>Your email address and payment details</strong>, collected
            by Stripe at checkout. We never see or store your full card number.
          </li>
          <li>
            <strong>Your consent</strong>: when you agreed to receive texts, the
            exact wording you agreed to, and the number it covers.
          </li>
          <li>
            <strong>Your replies and our texts</strong>: what we sent, what you
            replied, and when.
          </li>
        </ul>

        <h2>Your answers</h2>
        <ul>
          <li>
            Your replies are saved under a randomly generated user ID, so we can
            see which prompts resonate and keep improving them.
          </li>
          <li>They're never shown publicly or to other subscribers.</li>
          <li>
            If we ever shared any replies, they would never include your name,
            number or other personal information.
          </li>
        </ul>

        <h2>Who else handles your information</h2>
        <p>
          We use a few services to run PetalProgress. Each handles only what it
          needs to do its job:
        </p>
        <ul>
          <li>
            <strong>Twilio</strong> delivers our texts. It keeps a record of
            messages, as any texting service does.
          </li>
          <li>
            <strong>Stripe</strong> handles payments and your billing details.
          </li>
          <li>
            <strong>Supabase</strong> stores your account and your replies.
          </li>
          <li>
            <strong>Amazon Web Services</strong> runs the service that sends
            and receives texts.
          </li>
        </ul>
        <p>
          We don't sell your information. No mobile information will be shared
          with third parties or affiliates for marketing or promotional
          purposes. Your text-message opt-in and consent are never shared with
          any third party.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep your information while you're subscribed. If your
          subscription ends, we keep your progress so you can pick up where you
          left off if you return. You can ask us to delete your account and
          replies at any time (see below); records of your consent to receive
          texts may be kept after that, as the law requires us to be able to
          show it.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Reply STOP to any text to stop receiving them.</li>
          <li>
            To see, correct or delete your information, email{" "}
            <a href="mailto:hello@petalprogress.com">hello@petalprogress.com</a>.
          </li>
        </ul>

        <h2>Children</h2>
        <p>
          PetalProgress texts are for people 18 and older. We don't knowingly
          collect information from anyone younger.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change how we use your information in a way that matters, we'll
          tell you before it takes effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email <a href="mailto:hello@petalprogress.com">hello@petalprogress.com</a>.
        </p>
      </div>
    </div>
  );
}
