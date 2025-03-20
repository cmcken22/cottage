import { forwardRef, useCallback } from "react";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";
import cx from "classnames";
import { motion } from "framer-motion";

const Card = forwardRef<HTMLDivElement, CardProps>(({ hidden }, ref) => {
  const handleOpenLink = useCallback(() => {
    window.open(
      "https://www.airbnb.ca/rooms/1308860065021844564?guests=1&adults=1&s=67&unique_share_id=88510475-6398-42ae-b095-30be69321ce7",
      "_blank"
    );
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={hidden ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 200 }}
      animate={hidden ? { opacity: 0 } : { opacity: 1, scale: 1, y: 0 }}
      exit={hidden ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      // transition={{ duration: 0.5 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={cx(styles.card, {
        [styles["card--hidden"]]: hidden,
      })}
      // style={{ opacity: props.opacity }}
    >
      <h1 className={styles.text}>Congrats!!!</h1>
      <div>
        <p className={styles.text}>You've unlocked 10% off our condo in</p>
        <p className={styles.text}>Tulum, Mexico!!</p>
      </div>

      <div className={styles.flag} />

      <button className={styles.button} onClick={handleOpenLink}>
        View Listing
      </button>
    </motion.div>
  );
});

export default Card;
