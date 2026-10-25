import styles from "./PhilosophyPage.module.css";

export function PhilosophyPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.eyebrow}>❋ Philosophy</div>
        <h1 className={styles.title}>
          A focus on the <em>present moment.</em>
        </h1>
        {/* Habit subtitle hidden pre-launch — see RESTORE_LATER.md
        <p className={styles.sub}>
          Name your habit and color in your PetalProgress. Repeat with a new
          mandala as you mark your milestones.
        </p>
        */}
      </div>

      <div className={styles.body}>
        {/* Habit belief cards hidden pre-launch — see RESTORE_LATER.md
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
        */}

        <div className={styles.prose}>
          <h2 className={styles.proseTitle}>A map of return.</h2>
          <p className={styles.proseText}>
            A mandala is, in almost every tradition that uses them, a map of
            return. A circle that starts at the center and spirals out, or
            starts at the edge and gathers inward. The practice of building
            one is the practice of coming back to the same place, day after
            day.
          </p>
          <p className={styles.proseText}>
            If you use PetalProgress, you return to a practice, again and
            again. Think about how you might also return to the mat, to the
            page, to the trail. Same place, different person each time.
          </p>
        </div>

        <div className={styles.prose}>
          <h2 className={styles.proseTitle}>Like mandalas of sand.</h2>
          <p className={styles.proseText}>
            Tibetan monks spend days, sometimes weeks, building intricate
            mandalas from colored sand, one grain at a time. When the mandala
            is finished, they sweep it away. The practice was about the
            intention and attention of coming back.
          </p>
          <p className={styles.proseText}>
            A PetalProgress mandala works the same way. Keep it, print it,
            frame it, give it away, let it go, it's yours to do with as you
            like. It's the shape of your attention, while you were paying it.
          </p>
        </div>

        {/* Closing line, replaced by the About box:
        <p className={styles.closingQuote}>
          Not a record of where you've been. <em>A practice</em> of being here.
        </p>
        */}

        <section className={styles.about}>
          <h2 className={styles.aboutTitle}>About the creator</h2>
          <p className={styles.aboutText}>
            Hi, my name is Caitlin Cowen, based in Chicago, USA. I am following
            a creative idea to see where it lands. I think the last prompt in
            the guided journal will make my views on creativity pretty clear,
            but before you might get to that point, I'll say that I believe in
            following inspiration. This is a small business. It's just me
            hoping this can be something!
          </p>
        </section>
      </div>
    </>
  );
}
