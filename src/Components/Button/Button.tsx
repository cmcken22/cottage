import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
