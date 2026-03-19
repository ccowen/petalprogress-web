import { useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={styles.item}>
            <button
              className={styles.trigger}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.question}
              <span
                className={`${styles.caret} ${isOpen ? styles.caretOpen : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`${styles.content} ${isOpen ? styles.contentOpen : ""}`}
            >
              <div className={styles.answer}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
