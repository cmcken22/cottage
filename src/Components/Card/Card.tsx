import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.text}>Congrats!!!</h1>
      <div>
        <p className={styles.text}>You've unlocked 10% off our condo in</p>
        <p className={styles.text}>Tulum, Mexico!!</p>
      </div>
    </div>
  );
};

export default Card;
