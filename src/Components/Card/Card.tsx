import { forwardRef, useCallback } from "react";
import styles from "./Card.module.scss";
import { CardProps } from "./Card.types";

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const handleOpenLink = useCallback(() => {
    window.open(
      "https://www.airbnb.ca/rooms/1308860065021844564?guests=1&adults=1&s=67&unique_share_id=88510475-6398-42ae-b095-30be69321ce7",
      "_blank"
    );
  }, []);

  return (
    <div ref={ref} className={styles.card} style={{ opacity: props.opacity }}>
      <h1 className={styles.text}>Congrats!!!</h1>
      <div>
        <p className={styles.text}>You've unlocked 10% off our condo in</p>
        <p className={styles.text}>Tulum, Mexico!!</p>
      </div>

      <button className={styles.button} onClick={handleOpenLink}>
        Visit Listing
      </button>
    </div>
  );
});

export default Card;
