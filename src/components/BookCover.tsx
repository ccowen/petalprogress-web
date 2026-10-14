import { journalDetails } from "../launch";
import cover from "../assets/guided-journal-cover.png";
import styles from "./BookCover.module.css";

export function BookCover() {
  return (
    <img
      className={styles.cover}
      src={cover}
      width={1243}
      height={1243}
      alt={`${journalDetails.title} cover`}
    />
  );
}
