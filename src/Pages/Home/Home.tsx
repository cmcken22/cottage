import Card from "@components/Card";
import styles from "./Home.module.scss";
import Leaf from "@components/Leaf";
import { leafMap } from "@components/Leaf/Leaf";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Card />
        <div className={styles.jungle}>
          {/* <Leaf right={-40} top={40} width={150} rotate={10} /> */}
          {/* <Leaf left={-40} top={120} width={150} rotate={10} flipX /> */}
          <Leaf
            type="palm1"
            left={-40}
            top={120}
            width={150}
            rotate={10}
            flipX
            zIndex={2}
          />
          <Leaf
            type="palm2"
            left={-74}
            top={173}
            width={150}
            rotate={0}
            flipX
            flipY
          />
          <Leaf
            type="palm3"
            left={-40}
            top={227}
            width={150}
            rotate={10}
            flipX
            zIndex={4}
          />
          <Leaf
            type="palm2"
            left={-40}
            top={356}
            width={150}
            rotate={-80}
            flipX
            zIndex={3}
          />
          <Leaf
            type="palm3"
            left={-96}
            top={380}
            width={200}
            rotate={80}
            flipX
            zIndex={2}
          />
          <Leaf
            type="flower1"
            left={-5}
            top={217}
            rotate={50}
            width={40}
            zIndex={3}
          />
          {/* RIGHT */}
          <Leaf
            type="palm3"
            right={-80}
            top={31}
            rotate={46}
            width={150}
            zIndex={3}
          />
          <Leaf
            type="palm1"
            right={-48}
            top={171}
            rotate={8}
            width={150}
            zIndex={2}
          />
          <Leaf type="palm2" right={-74} top={259} rotate={0} width={150} />
          <Leaf
            type="palm1"
            right={-15}
            top={346}
            rotate={10}
            width={150}
            zIndex={3}
          />
          <Leaf
            type="palm3"
            right={-21}
            top={374}
            rotate={48}
            width={150}
            zIndex={2}
          />
          <Leaf
            type="flower2"
            right={-20}
            top={363}
            rotate={33}
            width={50}
            zIndex={3}
            flipX
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
