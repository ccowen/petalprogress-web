import { useState, type ReactNode } from "react";
import styles from "./Tabs.module.css";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div>
      <div className={styles.tabList}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div key={active} className={styles.panel}>
        {tabs[active].content}
      </div>
    </div>
  );
}
