import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TeamsPage.module.css";

/* ── Mandala SVG generator (ported from wireframe) ── */
function generateMandala(color: string, sz: number): string {
  const cx = sz / 2;
  const cy = sz / 2;
  let h = "";
  const rings = [
    { n: 8, r: sz * 0.38, rx: sz * 0.04, ry: sz * 0.13, filled: undefined as number | undefined },
    { n: 12, r: sz * 0.27, rx: sz * 0.035, ry: sz * 0.1, filled: 9 },
    { n: 6, r: sz * 0.17, rx: sz * 0.03, ry: sz * 0.07, filled: undefined as number | undefined },
  ];
  rings.forEach((ring) => {
    for (let i = 0; i < ring.n; i++) {
      const a = (i * (360 / ring.n) * Math.PI) / 180;
      const x = cx + ring.r * Math.cos(a);
      const y = cy + ring.r * Math.sin(a);
      const isFilled = ring.filled === undefined ? true : i < ring.filled;
      h += `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="${ring.rx.toFixed(2)}" ry="${ring.ry.toFixed(2)}" fill="${isFilled ? color : "rgba(255,255,255,0.08)"}" opacity="${isFilled ? 0.8 : 0.3}" transform="rotate(${(i * (360 / ring.n)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }
  });
  h += `<circle cx="${cx}" cy="${cy}" r="${sz * 0.09}" fill="rgba(253,252,250,0.15)"/>`;
  return h;
}

function MandalaSvg({ color, size }: { color: string; size: number }) {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = generateMandala(color, size);
    }
  }, [color, size]);
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    />
  );
}

/* ── Audience data ── */
interface AudiencePoint {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
}

interface ScenarioStep {
  text: string;
}

interface AudienceData {
  id: string;
  label: string;
  title: string;
  desc: string;
  points: AudiencePoint[];
  scenarioEyebrow: string;
  scenario: string;
  steps: ScenarioStep[];
}

const audiences: AudienceData[] = [
  {
    id: "trainer",
    label: "Personal Trainers",
    title: "Deep accountability for every client",
    desc: "You know your clients individually. PetalProgress gives you a window into their daily practice \u2014 not just what they do in session, but how they show up between them.",
    points: [
      {
        icon: "\uD83D\uDCCB",
        iconBg: "rgba(196,136,122,.1)",
        title: "Assign habits per client",
        desc: "Each client gets a habit tailored to their program. You control whether they can adjust it or not.",
      },
      {
        icon: "\u25D1",
        iconBg: "rgba(143,166,140,.1)",
        title: "Check in before sessions",
        desc: "Pull up a client\u2019s mandala before their appointment. You can see their week at a glance \u2014 no asking required.",
      },
      {
        icon: "\u2726",
        iconBg: "rgba(123,155,175,.1)",
        title: "Celebrate with a print",
        desc: "At the end of a program, generate a printed mandala. A tangible record of what they built.",
      },
    ],
    scenarioEyebrow: "How it works \u00B7 Personal Trainer",
    scenario:
      "\u201CI have 8 clients. I want each of them tracking their recovery walks between sessions \u2014 but I want to see who\u2019s actually doing it.\u201D",
    steps: [
      {
        text: 'You create a <strong>\u201CDaily Recovery Walk\u201D</strong> habit in your teams dashboard and assign it to all 8 clients',
      },
      {
        text: "Each client gets the habit added to their PetalProgress automatically. Their mandala starts blooming every day they walk",
      },
      {
        text: "You see their completion rates in your dashboard. <strong>Alex hasn\u2019t checked in for 5 days</strong> \u2014 you know to follow up",
      },
      {
        text: "At the end of the 12-week program, you generate a <strong>printed mandala</strong> for each client \u2014 their year in one image",
      },
    ],
  },
  {
    id: "gym",
    label: "Gyms & Studios",
    title: "A membership perk that actually motivates",
    desc: "Gyms don\u2019t struggle to get people in the door. They struggle to keep them coming back. PetalProgress gives members a visual reason to maintain their habit \u2014 and a beautiful artifact when they do.",
    points: [
      {
        icon: "\u25CE",
        iconBg: "rgba(123,155,175,.1)",
        title: "Gifted access model",
        desc: "Include Petal+ as a membership benefit. Members set their own habits \u2014 you give them the tool.",
      },
      {
        icon: "\u25B3",
        iconBg: "rgba(196,136,122,.1)",
        title: "Spot drop-off before it happens",
        desc: "The \u201Cat risk\u201D view flags members who haven\u2019t checked in. A timely message can save a cancellation.",
      },
      {
        icon: "\u274B",
        iconBg: "rgba(143,166,140,.1)",
        title: "Year-end mandala prints",
        desc: "Members who frame their mandala become your best marketing. People share beautiful things.",
      },
    ],
    scenarioEyebrow: "How it works \u00B7 Gym",
    scenario:
      "\u201CWe want to give our members something that keeps them engaged between classes \u2014 and shows them their progress over the year.\u201D",
    steps: [
      {
        text: "You enable <strong>gifted Petal+ access</strong> for all active members as part of their membership",
      },
      {
        text: "Members set their own habits \u2014 attendance, class goals, personal challenges \u2014 and their mandala grows all year",
      },
      {
        text: "Your dashboard shows <strong>aggregate engagement</strong> \u2014 who\u2019s active, who\u2019s at risk of churning, milestones to celebrate",
      },
      {
        text: "In December, you run a <strong>year-end print event</strong>. Members collect their mandala. Some frame it. They post it. You get referrals.",
      },
    ],
  },
  {
    id: "wellness",
    label: "Wellness Coaches",
    title: "Gentle accountability for behavior change",
    desc: "Wellness coaching is about meeting people where they are. PetalProgress lets you assign habits with the right amount of flexibility \u2014 locked down for accountability, or open for autonomy.",
    points: [
      {
        icon: "\u25C7",
        iconBg: "rgba(143,166,140,.1)",
        title: "Control per client",
        desc: "Some clients need structure. Others need ownership. Set permissions individually \u2014 who can edit their habit, their goal, their mandala.",
      },
      {
        icon: "\u25D1",
        iconBg: "rgba(196,90,90,.1)",
        title: "Progress without pressure",
        desc: "The mandala is inherently positive \u2014 it shows what was done, not what was missed. A better frame for habit change conversations.",
      },
      {
        icon: "\uD83C\uDF00",
        iconBg: "rgba(196,136,122,.1)",
        title: "Personal habits alongside assigned ones",
        desc: "Clients can add their own habits to the same mandala. The habit you assigned is a thread in their larger practice.",
      },
    ],
    scenarioEyebrow: "How it works \u00B7 Wellness Coach",
    scenario:
      "\u201CMy clients all have different needs. I want to assign habits but give some of them the freedom to adapt the goal themselves.\u201D",
    steps: [
      {
        text: 'You assign a <strong>\u201CMorning Meditation\u201D</strong> habit to a client. You set it to 5\u00D7 per week, but allow them to adjust the target',
      },
      {
        text: "The client adjusts to 3\u00D7 per week \u2014 right for where they are. Their mandala reflects their actual commitment, not an impossible goal",
      },
      {
        text: 'They add a personal <strong>\u201CJournaling\u201D</strong> habit alongside yours. You have the option to see it \u2014 or leave it private to them',
      },
      {
        text: "In your next session, you open their mandala together. <strong>The visual does more than a spreadsheet ever could.</strong>",
      },
    ],
  },
];

/* ── AudiencePanel component ── */
function AudiencePanel({ data }: { data: AudienceData }) {
  return (
    <div className={styles.audiencePanel}>
      <div className={styles.audLeft}>
        <div className={styles.audTitle}>{data.title}</div>
        <div className={styles.audDesc}>{data.desc}</div>
        <div className={styles.audPoints}>
          {data.points.map((p, i) => (
            <div key={i} className={styles.audPoint}>
              <div
                className={styles.audPointIcon}
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>
              <div>
                <div className={styles.audPointTitle}>{p.title}</div>
                <div className={styles.audPointDesc}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scenarioCard}>
        <div className={styles.scEyebrow}>{data.scenarioEyebrow}</div>
        <div
          className={styles.scScenario}
          dangerouslySetInnerHTML={{ __html: data.scenario }}
        />
        <div className={styles.scSteps}>
          {data.steps.map((s, i) => (
            <div key={i} className={styles.scStep}>
              <div className={styles.scNum}>{i + 1}</div>
              <div
                className={styles.scText}
                dangerouslySetInnerHTML={{ __html: s.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export function TeamsPage() {
  const [activeAudience, setActiveAudience] = useState(0);

  const handleAudienceSwitch = useCallback((index: number) => {
    setActiveAudience(index);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>
              <span>\u25C8</span> For organizations
            </div>
            <h1 className={styles.heroTitle}>
              Your clients build <em>habits.</em> You see them bloom.
            </h1>
            <p className={styles.heroSub}>
              PetalProgress gives coaches, gyms, and wellness programs a quiet
              way to assign habits, monitor progress, and celebrate the people
              doing the work.
            </p>
            <div className={styles.heroCtas}>
              <a href="/signup" className={styles.btnHeroPrimary}>
                Set up your team
              </a>
              <a href="#how-it-works" className={styles.btnHeroGhost}>
                See how it works &rarr;
              </a>
            </div>
            <div className={styles.audienceChips}>
              {audiences.map((a, i) => (
                <div
                  key={a.id}
                  className={`${styles.chip} ${i === activeAudience ? styles.chipActive : ""}`}
                  onClick={() => handleAudienceSwitch(i)}
                >
                  {a.label}
                </div>
              ))}
            </div>
          </div>

          {/* Admin panel preview */}
          <div className={styles.heroVisual}>
            <div className={styles.adminPanelPreview}>
              <div className={styles.apTopbar}>
                <div
                  className={styles.apDot}
                  style={{ background: "#C45A5A", opacity: 0.7 }}
                />
                <div
                  className={styles.apDot}
                  style={{ background: "#C4887A", opacity: 0.5 }}
                />
                <div
                  className={styles.apDot}
                  style={{ background: "#8FA68C", opacity: 0.5 }}
                />
                <div className={styles.apTitle}>Bloom Wellness Studio</div>
                <div className={styles.apBadge}>Teams</div>
              </div>
              <div className={styles.apStats}>
                <div className={styles.apStat}>
                  <div className={styles.apStatN}>12</div>
                  <div className={styles.apStatL}>Members</div>
                </div>
                <div className={styles.apStat}>
                  <div className={styles.apStatN}>
                    71
                    <span
                      style={{
                        fontSize: "12px",
                        color: "rgba(255,255,255,.35)",
                      }}
                    >
                      %
                    </span>
                  </div>
                  <div className={styles.apStatL}>Avg completion</div>
                </div>
                <div className={styles.apStat}>
                  <div
                    className={styles.apStatN}
                    style={{ color: "#C45A5A" }}
                  >
                    3
                  </div>
                  <div className={styles.apStatL}>At risk</div>
                </div>
              </div>
              <div className={styles.apMember}>
                <div
                  className={styles.apAv}
                  style={{ background: "#C45A5A" }}
                >
                  SK
                </div>
                <div className={styles.apMname}>Sarah K.</div>
                <div className={styles.apProgWrap}>
                  <div className={styles.apProgBar}>
                    <div
                      className={styles.apProgFill}
                      style={{ width: "80%", background: "#8FA68C" }}
                    />
                  </div>
                  <div className={styles.apProgPct}>
                    80% &middot; &#x1F525; 12 days
                  </div>
                </div>
              </div>
              <div className={styles.apMember}>
                <div
                  className={styles.apAv}
                  style={{ background: "#8FA68C" }}
                >
                  MR
                </div>
                <div className={styles.apMname}>Maya R.</div>
                <div className={styles.apProgWrap}>
                  <div className={styles.apProgBar}>
                    <div
                      className={styles.apProgFill}
                      style={{ width: "95%", background: "#8FA68C" }}
                    />
                  </div>
                  <div className={styles.apProgPct}>
                    95% &middot; &#x1F525; 21 days
                  </div>
                </div>
              </div>
              <div className={styles.apMember} style={{ opacity: 0.6 }}>
                <div
                  className={styles.apAv}
                  style={{ background: "#C45A5A" }}
                >
                  AP
                </div>
                <div
                  className={styles.apMname}
                  style={{ color: "rgba(255,255,255,.35)" }}
                >
                  Alex P.
                </div>
                <div className={styles.apProgWrap}>
                  <div className={styles.apProgBar}>
                    <div
                      className={styles.apProgFill}
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div
                    className={styles.apProgPct}
                    style={{ color: "#C45A5A" }}
                  >
                    7 days &middot; no check-in
                  </div>
                </div>
              </div>
              <div className={styles.apFade} />
            </div>
          </div>
        </div>
      </div>

      {/* ── AUDIENCE SECTION ── */}
      <section className={styles.audienceSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>Who it&rsquo;s for</div>
          <h2 className={styles.sectionTitle}>
            Built for the people <em>guiding</em> others.
          </h2>
          <p className={styles.sectionDesc}>
            Whether you work with 5 clients or 500 members, the team tools
            scale to fit your relationship with the people you serve.
          </p>

          <div className={styles.audienceTabs}>
            {audiences.map((a, i) => (
              <div
                key={a.id}
                className={`${styles.atab} ${i === activeAudience ? styles.atabOn : ""}`}
                onClick={() => handleAudienceSwitch(i)}
              >
                {a.label}
              </div>
            ))}
          </div>

          <AudiencePanel
            key={audiences[activeAudience].id}
            data={audiences[activeAudience]}
          />
        </div>
      </section>

      {/* ── HOW ADMIN WORKS ── */}
      <section className={styles.howAdmin} id="how-it-works">
        <div className={styles.sectionInner}>
          <div className={styles.sectionEyebrow}>How teams works</div>
          <h2 className={styles.sectionTitle}>
            You&rsquo;re in control.{" "}
            <em>Your members aren&rsquo;t locked in.</em>
          </h2>
          <p className={styles.sectionDesc}>
            Every habit has its own permission settings. You decide how much
            control members have over their own practice.
          </p>

          <div className={styles.permissionShowcase}>
            {/* Assigned & Locked */}
            <div className={styles.permCard}>
              <div className={styles.permCardIcon}>&#x1F512;</div>
              <div className={styles.permCardTitle}>Assigned &amp; locked</div>
              <div className={styles.permCardDesc}>
                You set the habit, the name, and the weekly target. Members
                check in &mdash; that&rsquo;s it. Best for structured programs
                where consistency is the point.
              </div>
              <div className={styles.permToggles}>
                <div
                  className={`${styles.permToggleRow} ${styles.permToggleRowAlways}`}
                >
                  <div className={styles.permToggleLbl}>
                    &#x2726; You can edit habit &mdash; name, description,
                    weekly target
                  </div>
                  <div className={styles.permCheck}>&#x2713;</div>
                </div>
                <div
                  className={`${styles.permToggleRow} ${styles.permToggleRowAlways}`}
                >
                  <div className={styles.permToggleLbl}>
                    &#x2726; User can edit design &mdash; colors and theme
                  </div>
                  <div className={styles.permCheck}>&#x2713;</div>
                </div>
                <div className={styles.permToggleRow}>
                  <div className={styles.permToggleLbl}>
                    User can edit habit
                    <span className={styles.permToggleSub}>
                      Name, description, and weekly target
                    </span>
                  </div>
                  <div className={`${styles.tog} ${styles.togOff}`} />
                </div>
              </div>
              <div className={styles.permNote}>
                Members always keep their own account and can create up to 3
                personal mandalas independently. Assigned mandalas never count
                against that limit.
              </div>
            </div>

            {/* Assigned & Flexible */}
            <div className={styles.permCard}>
              <div className={styles.permCardIcon}>&#x1F33F;</div>
              <div className={styles.permCardTitle}>
                Assigned &amp; flexible
              </div>
              <div className={styles.permCardDesc}>
                You assign the habit but let members make it their own &mdash;
                they can adapt the name, description, and weekly target to fit
                where they are.
              </div>
              <div className={styles.permToggles}>
                <div
                  className={`${styles.permToggleRow} ${styles.permToggleRowAlways}`}
                >
                  <div className={styles.permToggleLbl}>
                    &#x2726; You can edit habit &mdash; name, description,
                    weekly target
                  </div>
                  <div className={styles.permCheck}>&#x2713;</div>
                </div>
                <div
                  className={`${styles.permToggleRow} ${styles.permToggleRowAlways}`}
                >
                  <div className={styles.permToggleLbl}>
                    &#x2726; User can edit design &mdash; colors and theme
                  </div>
                  <div className={styles.permCheck}>&#x2713;</div>
                </div>
                <div className={styles.permToggleRow}>
                  <div className={styles.permToggleLbl}>
                    User can edit habit
                    <span className={styles.permToggleSub}>
                      Name, description, and weekly target
                    </span>
                  </div>
                  <div className={`${styles.tog} ${styles.togOn}`} />
                </div>
              </div>
              <div className={styles.permNoteGreen}>
                &ldquo;Morning Meditation&rdquo; might become &ldquo;Breathing
                practice before coffee&rdquo; &mdash; still the habit you
                assigned, just made personal to them.
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className={styles.featureStrip}>
            <div className={styles.fsCard}>
              <div className={styles.fsIcon}>{"\u25CE"}</div>
              <div className={styles.fsTitle}>Member roster</div>
              <div className={styles.fsDesc}>
                See all your members at a glance &mdash; completion rates and
                at-risk alerts. Click any member for a detailed view.
              </div>
            </div>
            <div className={styles.fsCard}>
              <div className={styles.fsIcon}>{"\u25B3"}</div>
              <div className={styles.fsTitle}>At-risk alerts</div>
              <div className={styles.fsDesc}>
                Members who haven&rsquo;t checked in for 7+ days are flagged
                automatically. Reach out before the habit breaks.
              </div>
            </div>
            <div className={styles.fsCard}>
              <div className={styles.fsIcon}>{"\u2726"}</div>
              <div className={styles.fsTitle}>Milestone moments</div>
              <div className={styles.fsDesc}>
                First mandala completed, 6-month anniversaries, petal
                milestones &mdash; surfaced so you can celebrate them.
              </div>
            </div>
            <div className={styles.fsCard}>
              <div className={styles.fsIcon}>{"\u25C8"}</div>
              <div className={styles.fsTitle}>Member data stays theirs</div>
              <div className={styles.fsDesc}>
                If a member leaves your program, they keep their account and
                mandalas. No data held hostage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINT SECTION ── */}
      <section className={styles.printSection}>
        <div className={styles.printInner}>
          <div className={styles.printText}>
            <div className={styles.printEyebrow}>The mandala shop</div>
            <h2 className={styles.printTitle}>
              End the year with something <em>tangible.</em>
            </h2>
            <p className={styles.printDesc}>
              At the end of a program or year, generate a printed mandala for
              each member. A real object that captures a year of showing up.
            </p>
            <div className={styles.printPoints}>
              <div className={styles.printPoint}>
                <div className={styles.printPointDot} />
                High-quality archival paper prints, mailed directly
              </div>
              <div className={styles.printPoint}>
                <div className={styles.printPointDot} />
                Batch generation &mdash; order for your whole roster at once
              </div>
              <div className={styles.printPoint}>
                <div className={styles.printPointDot} />
                Members who frame it share it. Organic referrals, no ad spend
              </div>
              <div className={styles.printPoint}>
                <div className={styles.printPointDot} />
                Buttons and magnets available as smaller celebration items
              </div>
            </div>
          </div>

          <div className={styles.printVisual}>
            <div className={styles.printStack}>
              <div className={`${styles.printPaper} ${styles.pp1}`}>
                <MandalaSvg color="rgba(196,90,90,0.6)" size={160} />
              </div>
              <div className={`${styles.printPaper} ${styles.pp2}`}>
                <MandalaSvg color="rgba(143,166,140,0.6)" size={160} />
              </div>
              <div className={`${styles.printPaper} ${styles.pp3}`}>
                <MandalaSvg color="rgba(196,136,122,0.7)" size={160} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBER EXPERIENCE ── */}
      <section className={styles.memberExp}>
        <div className={styles.sectionInner}>
          <div className={styles.meGrid}>
            <div className={styles.meText}>
              <div className={styles.sectionEyebrow}>Member experience</div>
              <h2 className={styles.meTitle}>
                From your client&rsquo;s <em>perspective.</em>
              </h2>
              <p className={styles.meDesc}>
                Your members don&rsquo;t experience PetalProgress as a
                management tool. They experience it as their own beautiful
                habit tracker that happens to include a habit you gave them.
              </p>
              <div className={styles.mePoints}>
                <div className={styles.mePoint}>
                  <div className={styles.meDot} />
                  They see their own mandala growing &mdash; not a dashboard
                  you control
                </div>
                <div className={styles.mePoint}>
                  <div className={styles.meDot} />
                  Assigned habits blend naturally alongside personal ones
                </div>
                <div className={styles.mePoint}>
                  <div className={styles.meDot} />
                  Their account and data are theirs forever, regardless of your
                  program
                </div>
                <div className={styles.mePoint}>
                  <div className={styles.meDot} />
                  The app doesn&rsquo;t feel like accountability software
                  &mdash; it feels like theirs
                </div>
              </div>
            </div>

            <div className={styles.meJourney}>
              <div className={styles.mjStep}>
                <div
                  className={styles.mjIconWrap}
                  style={{ background: "rgba(196,136,122,.1)" }}
                >
                  &#x1F4E7;
                </div>
                <div className={styles.mjBody}>
                  <div className={styles.mjTitle}>
                    Receive an invite from their coach
                  </div>
                  <div className={styles.mjDesc}>
                    A simple email invite. They create their own account
                    &mdash; independent of you.
                  </div>
                </div>
                <div
                  className={`${styles.mjBadge} ${styles.mjBadgeAdminAssigned}`}
                >
                  From you
                </div>
              </div>
              <div className={styles.mjConnector} />
              <div className={styles.mjStep}>
                <div
                  className={styles.mjIconWrap}
                  style={{ background: "rgba(143,166,140,.1)" }}
                >
                  &#x1F338;
                </div>
                <div className={styles.mjBody}>
                  <div className={styles.mjTitle}>
                    See their assigned habit in their gallery
                  </div>
                  <div className={styles.mjDesc}>
                    The habit you created appears in their mandala. They
                    customize the theme and colors.
                  </div>
                </div>
                <div
                  className={`${styles.mjBadge} ${styles.mjBadgeAdminAssigned}`}
                >
                  Assigned habit
                </div>
              </div>
              <div className={styles.mjConnector} />
              <div className={styles.mjStep}>
                <div
                  className={styles.mjIconWrap}
                  style={{ background: "rgba(143,166,140,.1)" }}
                >
                  &#x2795;
                </div>
                <div className={styles.mjBody}>
                  <div className={styles.mjTitle}>
                    Add their own habit alongside
                  </div>
                  <div className={styles.mjDesc}>
                    Reading, journaling, something personal. Their mandala,
                    their practice.
                  </div>
                </div>
                <div
                  className={`${styles.mjBadge} ${styles.mjBadgePersonal}`}
                >
                  Personal habit
                </div>
              </div>
              <div className={styles.mjConnector} />
              <div className={styles.mjStep}>
                <div
                  className={styles.mjIconWrap}
                  style={{ background: "rgba(123,155,175,.1)" }}
                >
                  &#x2726;
                </div>
                <div className={styles.mjBody}>
                  <div className={styles.mjTitle}>
                    Keep their mandala after the program ends
                  </div>
                  <div className={styles.mjDesc}>
                    Their account stays active. Their mandalas are permanently
                    theirs.
                  </div>
                </div>
                <div className={`${styles.mjBadge} ${styles.mjBadgeOwned}`}>
                  Always theirs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.teamsPricing}>
        <div className={styles.pricingInner}>
          <div className={styles.sectionEyebrow}>Teams pricing</div>
          <h2 className={styles.sectionTitle}>
            Simple and <em>scalable.</em>
          </h2>
          <p className={styles.sectionDesc}>
            Start with a small group and grow. No seat minimums, no annual
            lock-in required.
          </p>

          <div className={styles.teamsPlans}>
            {/* Starter */}
            <div className={styles.tpCard}>
              <div className={styles.tpLabel}>For small groups</div>
              <div className={styles.tpName}>Starter</div>
              <div className={styles.tpPrice}>
                $19
                <span className={styles.tpPricePer}>/mo</span>
              </div>
              <div className={styles.tpPriceNote}>
                Up to 10 members &middot; billed monthly
              </div>
              <div className={styles.tpDivider} />
              <div className={styles.tpFeatures}>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Up to 10 members</strong>
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Assign habits</strong> with permission controls
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Teams dashboard</strong> &mdash; roster, at-risk
                    alerts
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    Members get <strong>Petal+ included</strong>
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    Print mandala generation
                  </div>
                </div>
              </div>
              <a href="/signup" className={`${styles.tpCta} ${styles.tpCtaGhost}`}>
                Start free trial
              </a>
            </div>

            {/* Studio (featured) */}
            <div className={`${styles.tpCard} ${styles.tpCardFeatured}`}>
              <div className={styles.tpLabel}>For larger programs</div>
              <div className={styles.tpName}>Studio</div>
              <div className={styles.tpPrice}>
                $49
                <span className={styles.tpPricePerFeatured}>/mo</span>
              </div>
              <div className={styles.tpPriceNote}>
                Up to 50 members &middot; save 15% annually
              </div>
              <div className={styles.tpDivider} />
              <div className={styles.tpFeatures}>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Up to 50 members</strong>
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    Everything in Starter
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Bulk print ordering</strong> &mdash; one order for
                    all members
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>
                    <strong>Milestone alerts</strong> + engagement reporting
                  </div>
                </div>
                <div className={styles.tpFeat}>
                  <div className={styles.tpCheck}>&#x2713;</div>
                  <div className={styles.tpFeatText}>Priority support</div>
                </div>
              </div>
              <a
                href="/signup"
                className={`${styles.tpCta} ${styles.tpCtaPrimary}`}
              >
                Start free trial
              </a>
            </div>
          </div>
          <div className={styles.tpNote}>
            Need more than 50 members?{" "}
            <a href="/contact" className={styles.tpNoteLink}>
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className={styles.finalCta}>
        <div className={styles.fcInner}>
          <h2 className={styles.fcTitle}>
            Ready to give your clients something <em>beautiful?</em>
          </h2>
          <p className={styles.fcDesc}>
            Set up your team in minutes. Your first 14 days are free &mdash; no
            credit card required.
          </p>
          <div className={styles.fcCtas}>
            <a href="/signup" className={styles.fcBtnPrimary}>
              Set up your team
            </a>
            <a href="/contact" className={styles.fcBtnGhost}>
              Request a demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
