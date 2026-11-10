import { useEffect, useRef, useState } from "react";
import styles from "../pages/ProductPage.module.css";
import gif1 from "../assets/mandala-progression/001.gif";
import gif12 from "../assets/mandala-progression/012.gif";
import gif40 from "../assets/mandala-progression/040.gif";
import gif75 from "../assets/mandala-progression/075.gif";
import gif147 from "../assets/mandala-progression/147.gif";
import still1 from "../assets/mandala-progression/001.png";
import still12 from "../assets/mandala-progression/012.png";
import still40 from "../assets/mandala-progression/040.png";
import still75 from "../assets/mandala-progression/075.png";
import still147 from "../assets/mandala-progression/147.png";

/* A sample mandala at five points along the way, from the reveal renderer
   (petalprogress-reveal-renderer, gratitude-v1-sample). Fewer tiles on the
   left, the finished design on the right. Each still is the GIF's held last frame. */
const items = [
  { gif: gif1, still: still1, tiles: 1, label: "Your first reveal" },
  { gif: gif12, still: still12, tiles: 12, label: "" },
  { gif: gif40, still: still40, tiles: 40, label: "" },
  { gif: gif75, still: still75, tiles: 75, label: "" },
  { gif: gif147, still: still147, tiles: 147, label: "The finished mandala" },
];

const AT_ONCE = 2;
const SWAP_EVERY_MS = 5000;
// A beat of stillness between one GIF stopping and the next starting, so the halos fade out and in.
const GAP_MS = 800;

/** A GIF can't be paused, so "playing" swaps the still for the GIF (restarting it) and "stopped" swaps it back. */
type Playing = { idx: number; run: number };

export function MandalaProgression() {
  const [playing, setPlaying] = useState<Playing[]>([]);
  const runs = useRef(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  // While someone hovers one (or has pressed its play button), it is the only one running,
  // and the random rotation waits.
  const [manual, setManual] = useState(false);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const start = (list: Playing[], idx: number): Playing[] =>
    [...list.filter((p) => p.idx !== idx), { idx, run: ++runs.current }].slice(-AT_ONCE);

  const hold = (idx: number) => {
    setManual(true);
    setPlaying((cur) => [cur.find((x) => x.idx === idx) ?? { idx, run: ++runs.current }]);
  };
  const release = () => {
    setManual(false);
    setPlaying([]);
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Two at a time, at random. Every few seconds the longest-running one stops, there is a short
  // pause, then a new random one starts.
  useEffect(() => {
    if (reduced || !inView || manual) return;
    let gap: number | undefined;
    const add = () =>
      setPlaying((cur) => {
        const free = items.map((_, i) => i).filter((i) => !cur.some((p) => p.idx === i));
        return start(cur, free[Math.floor(Math.random() * free.length)]);
      });
    const swap = () => {
      setPlaying((cur) => (cur.length >= AT_ONCE ? cur.slice(1) : cur));
      gap = window.setTimeout(add, GAP_MS);
    };
    gap = window.setTimeout(add, GAP_MS);
    const t = window.setInterval(swap, SWAP_EVERY_MS);
    return () => {
      window.clearInterval(t);
      window.clearTimeout(gap);
    };
  }, [reduced, inView, manual]);

  return (
    <div ref={rootRef} className={`${styles.sectionInner} ${styles.progression}`}>
      {items.map((p, idx) => {
        const run = playing.find((x) => x.idx === idx);
        return (
          <figure
            key={p.tiles}
            className={styles.progressionItem}
            // Hovering (or focusing) the column, the picture or anything above or below it,
            // plays just that one. Touch has no hover, so a tap toggles it instead.
            tabIndex={0}
            aria-label={`${p.tiles}-tile sample mandala`}
            onPointerEnter={(e) => e.pointerType !== "touch" && hold(idx)}
            onPointerLeave={(e) => e.pointerType !== "touch" && release()}
            onFocus={() => hold(idx)}
            onBlur={release}
            onClick={(e) => {
              if ((e.nativeEvent as PointerEvent).pointerType !== "touch") return;
              if (run) release();
              else hold(idx);
            }}
            data-playing={run ? "" : undefined}
          >
            <div className={`${styles.progressionHalo} ${run ? styles.progressionHaloOn : ""}`} aria-hidden="true" />
            <div className={styles.progressionFrame}>
              <img
                // A new key per run reloads the GIF so it starts from its first frame.
                key={run ? run.run : "still"}
                src={run ? p.gif : p.still}
                alt={`A sample mandala with ${p.tiles} of 147 tiles revealed`}
                loading="lazy"
              />
            </div>
            <figcaption className={run ? styles.progressionCaptionOn : undefined}>
              <strong>{p.tiles}</strong> {p.tiles === 1 ? "tile" : "tiles"}
              {p.label && <span>{p.label}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
