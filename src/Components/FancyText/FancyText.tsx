import { useQuery } from "@hooks/index";
import styles from "./FancyText.module.scss";
import { FancyTextProps } from "./FancyText.types";
import cx from "classnames";

const FancyText = ({ children }: FancyTextProps) => {
  const query = useQuery();
  const blackMode = query.get("black") === "true";

  return (
    <div
      className={cx(styles.fancyText, {
        [styles["fancyText--black"]]: blackMode,
      })}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.dropText}>{children}</span>
    </div>
  );
};

export default FancyText;
