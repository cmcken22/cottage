import Card from "@components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Card />
      </div>
    </div>
  );
};

export default Home;
