import styles from "./FancyText.module.scss";
import { FancyTextProps } from "./FancyText.types";

const FancyText = ({ children }: FancyTextProps) => {
  return (
    <div className={styles.fancyText}>
      <span className={styles.text}>{children}</span>
      <span className={styles.dropText}>{children}</span>
    </div>
  );
};

export default FancyText;
