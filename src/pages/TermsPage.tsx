import styles from "./LegalPage.module.css";

export function TermsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.eyebrow}>Legal</div>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.meta}>
        Last updated: October 30, 2026
      </p>

      <div className={styles.body}>
        <p>
          These terms cover PetalProgress guided-journal texts: a series of
          journaling prompts sent to your phone by text message. By signing up
          you agree to them. They're an agreement between you and
          PetalProgress LLC ("PetalProgress", "we", "us").
        </p>

        <h2>Who can sign up</h2>
        <p>
          You must be 18 or older and have a US mobile number that can receive
          text messages. The number must be yours, or one you're allowed to
          sign up.
        </p>

        <h2>Your subscription</h2>
        <ul>
          <li>
            Guided-journal texts cost <strong>$3 per month</strong>, charged to
            your card through our payment provider, Stripe.
          </li>
          <li>
            Your subscription <strong>renews automatically every month</strong>{" "}
            until it ends in one of the ways described below.
          </li>
          <li>
            Nothing is texted until your first payment goes through and you
            reply YES to our confirmation text.
          </li>
          <li>
            We don't refund the rest of a billing period already paid for when
            a subscription ends.
          </li>
        </ul>

        <h2>The texts</h2>
        <ul>
          <li>
            You choose how many prompts you get each week (up to 6) and a time
            of day. We choose which days.
          </li>
          <li>
            We only text between 8am and 8pm in your time zone.
          </li>
          <li>
            If you haven't answered a prompt, we'll send it again rather than
            move on, so you never skip ahead.
          </li>
          <li>
            Message and data rates may apply. Carriers are not liable for
            delayed or undelivered messages.
          </li>
          <li>
            Reply <strong>HELP</strong> at any time for help.
          </li>
        </ul>

        <h2>Stopping your texts</h2>
        <p>
          Reply <strong>STOP</strong> at any time to stop your prompts. END,
          CANCEL, QUIT and UNSUBSCRIBE also work. We also do our best to
          recognize other clear requests to stop, but replying STOP is the
          surest way.
        </p>
        <ul>
          <li>Your texts stop right away.</li>
          <li>
            Your subscription is set to end at the close of your current
            billing period. You won't be charged again.
          </li>
          <li>
            If you change your mind before the period ends, reply{" "}
            <strong>START</strong>. Your subscription continues and your
            prompts pick up where you left off.
          </li>
          <li>
            After your subscription ends, replying START won't restart billing.
            Your progress is saved if you return.
          </li>
        </ul>

        <h2>Pausing your texts</h2>
        <p>
          Reply <strong>PAUSE</strong> to take a break. We won't send any
          prompts until you reply <strong>START</strong>.
        </p>
        <ul>
          <li>
            Your subscription stays active, and billing continues while you're
            paused.
          </li>
          <li>
            <strong>After 2 weeks paused</strong>, we'll send one text to check
            in, including the date your subscription will end if you stay
            paused.
          </li>
          <li>
            <strong>After 1 month paused</strong>, your subscription is set to
            end at the close of your current billing period, and we'll text you
            to let you know. You won't be charged again.
          </li>
          <li>
            Reply START at any time before then to resume. Your prompts pick up
            where you left off, and the 2-week and 1-month clocks start over
            the next time you pause.
          </li>
        </ul>

        <h2>Finishing the journal</h2>
        <p>
          There are 147 prompts. When you've answered the last one, your
          subscription ends automatically and we'll send one closing text. You
          won't be billed for a month with no prompts.
        </p>

        <h2>Your answers</h2>
        <p>
          Your replies are private. How we store and use them is explained in
          our <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms. If a change affects your subscription or
          billing, we'll tell you by text or email before it takes effect, and
          you can stop at any time.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reply HELP to any of our texts, or email <a href="mailto:hello@petalprogress.com">hello@petalprogress.com</a>.
        </p>

        <p className={styles.small}>
          These terms are governed by the laws of the State of Illinois.
        </p>
      </div>
    </div>
  );
}
