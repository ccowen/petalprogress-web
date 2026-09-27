import { Link } from "react-router";
import styles from "./PhilosophyPage.module.css";

export function PhilosophyPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>❋ Philosophy</div>
        <h1 className={styles.title}>
          Be in the <em>present moment.</em>
        </h1>
        <p className={styles.sub}>
          Name your habit and color in your PetalProgress. Repeat with a new
          mandala as you mark your milestones.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.beliefs}>
          <div className={styles.belief}>
            <div className={styles.beliefIcon}>◎</div>
            <div className={styles.beliefTitle}>Presence over performance</div>
            <div className={styles.beliefText}>
              You're not optimizing. You're paying
              attention, right now, in this one small act, and marking that
              you were here.
            </div>
          </div>
          <div className={styles.belief}>
            <div className={styles.beliefIcon}>◈</div>
            <div className={styles.beliefTitle}>Focus on returning</div>
            <div className={styles.beliefText}>
              Not a log. We don't care which day you colored in which petal,
              or whether your record is accurate. PetalProgress isn't a
              record-keeping system.
            </div>
          </div>
          <div className={styles.belief}>
            <div className={styles.beliefIcon}>❋</div>
            <div className={styles.beliefTitle}>Milestones, not streaks</div>
            <div className={styles.beliefText}>
              Use a mandala to work toward a milestone. With one or multiple mandalas, you return to habits.
              When it closes, you begin a new one. There is no streak
              to break.
            </div>
          </div>
        </div>

        <div className={styles.prose}>
          <h2 className={styles.proseTitle}>
            Like mandalas of <em>sand.</em>
          </h2>
          <p className={styles.proseText}>
            Tibetan monks spend days, sometimes weeks, building intricate
            mandalas from colored sand, one grain at a time. When the mandala
            is finished, they sweep it away.
          </p>
          <p className={styles.proseText}>
            The practice was never about the object. It was about the
            attention. The coming back. The hours of presence. The mandala
            was always the doing of it, not the thing.
          </p>
          <p className={styles.proseText}>
            A PetalProgress mandala works the same way. Keep it, print it,
            frame it, give it away, let it go, it's yours to do with as you
            like. But the mandala was never meant to be a log you hold onto.
            It was the shape of your attention, while you were paying it.
          </p>
        </div>

        <div className={styles.prose}>
          <h2 className={styles.proseTitle}>
            A map of <em>return.</em>
          </h2>
          <p className={styles.proseText}>
            A mandala is, in almost every tradition that uses them, a map of
            return. A circle that starts at the center and spirals out, or
            starts at the edge and gathers inward — the practice of building
            one is the practice of coming back to the same place, day after
            day.
          </p>
          <p className={styles.proseText}>
            That's what a habit is, too. You return to the mat, to the page,
            to the trail, same place, different person each time.
          </p>
          <p className={styles.proseText}>
            We built PetalProgress to make that rhythm visible. Not to grade
            it. Not to preserve it. Just to hold it, for as long as you want
            to look.
          </p>
        </div>

        <div className={styles.prose}>
          <h2 className={styles.proseTitle}>
            What we keep, and <em>what we let go.</em>
          </h2>
          <p className={styles.proseText}>
            Our prompt texts work like the sand. You answer a prompt, and that's
            the practice complete. We don't hand your old answers back to you,
            because rereading happier days in a hard moment can make the
            contrast sharper, not softer.
          </p>
          <p className={styles.proseText}>
            Some people want to look back anyway, and that's a real choice
            too. So we made{" "}
            <Link to="/journal">a journal</Link> with the same prompts, to fill
            in by hand and keep for as long as you like. It's a deliberate
            choice, not a workaround.
          </p>
        </div>

        <p className={styles.closingQuote}>
          Not a record of where you've been. <em>A practice</em> of being here.
        </p>
      </div>
    </>
  );
}
