import Card from "@components/Card";
import styles from "./Home.module.scss";
import Leaf from "@components/Leaf";
import { use, useCallback, useRef, useState } from "react";

const Home = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const jungleRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const loadedRefs = useRef<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(true);

  const handleCreateRef = useCallback(
    (node: HTMLDivElement | null, type: string) => {
      if (type === "card") {
        cardRef.current = node;
      }
      if (type === "jungle") {
        jungleRef.current = node;
      }
      if (jungleRef.current && cardRef.current) {
        const topPosition = cardRef.current.getBoundingClientRect().top;
        jungleRef.current.style.top = `${topPosition - 64}px`;
      }
    },
    []
  );

  const handleCreateImageRef = useCallback(
    (node: HTMLDivElement | null, type: string) => {
      imageRefs.current[type] = node;
      loadedRefs.current[type] = false;
    },
    []
  );

  const handleImageLoad = useCallback(
    (name: string) => {
      loadedRefs.current[name] = true;
      const allLoaded = Object.values(loadedRefs.current).every((v) => v);
      if (allLoaded) {
        console.log("All images loaded");
        setLoading(false);
      }
    },
    [setLoading]
  );

  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <Card
          ref={(r) => handleCreateRef(r, "card")}
          opacity={loading ? 0 : 1}
        />
        <div
          ref={(r) => handleCreateRef(r, "jungle")}
          className={styles.jungle}
        >
          <Leaf
            ref={(r) => handleCreateImageRef(r, "1")}
            onLoad={() => handleImageLoad("1")}
            type="palm1"
            left={-40}
            top={120}
            width={150}
            rotate={10}
            flipX
            zIndex={2}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "2")}
            onLoad={() => handleImageLoad("2")}
            type="palm2"
            left={-74}
            top={173}
            width={150}
            rotate={0}
            flipX
            flipY
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "3")}
            onLoad={() => handleImageLoad("3")}
            type="palm3"
            left={-40}
            top={227}
            width={150}
            rotate={10}
            flipX
            zIndex={4}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "4")}
            onLoad={() => handleImageLoad("4")}
            type="palm2"
            left={-40}
            top={356}
            width={150}
            rotate={-80}
            flipX
            zIndex={3}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "5")}
            onLoad={() => handleImageLoad("5")}
            type="palm3"
            left={-96}
            top={380}
            width={200}
            rotate={80}
            flipX
            zIndex={2}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "6")}
            onLoad={() => handleImageLoad("6")}
            type="flower1"
            left={-5}
            top={217}
            rotate={50}
            width={40}
            zIndex={3}
          />
          {/* RIGHT */}
          <Leaf
            ref={(r) => handleCreateImageRef(r, "7")}
            onLoad={() => handleImageLoad("7")}
            type="palm3"
            right={-80}
            top={31}
            rotate={46}
            width={150}
            zIndex={3}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "8")}
            onLoad={() => handleImageLoad("8")}
            type="palm1"
            right={-48}
            top={171}
            rotate={8}
            width={150}
            zIndex={2}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "9")}
            onLoad={() => handleImageLoad("9")}
            type="palm2"
            right={-74}
            top={259}
            rotate={0}
            width={150}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "10")}
            onLoad={() => handleImageLoad("10")}
            type="palm1"
            right={-15}
            top={346}
            rotate={10}
            width={150}
            zIndex={3}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "11")}
            onLoad={() => handleImageLoad("11")}
            type="palm3"
            right={-21}
            top={374}
            rotate={48}
            width={150}
            zIndex={2}
          />
          <Leaf
            ref={(r) => handleCreateImageRef(r, "12")}
            onLoad={() => handleImageLoad("12")}
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
