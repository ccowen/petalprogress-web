import styles from "./StepIndicator.module.css";

interface StepIndicatorProps {
  total: number;
  current: number;
}

export function StepIndicator({ total, current }: StepIndicatorProps) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`${styles.dot} ${
            i < current ? styles.done : i === current ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
}
