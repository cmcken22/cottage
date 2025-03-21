import styles from "./FancyText.module.scss";
import { FancyTextProps } from "./FancyText.types";
import cx from "classnames";

const FancyText = ({ children }: FancyTextProps) => {
  return (
    <div className={cx(styles.fancyText)}>
      <span className={styles.text}>{children}</span>
      <span className={styles.dropText}>{children}</span>
    </div>
  );
};

export default FancyText;
