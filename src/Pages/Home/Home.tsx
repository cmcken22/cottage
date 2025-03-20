import Card from "@components/Card";
import styles from "./Home.module.scss";
import Leaf from "@components/Leaf";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Fireworks from "@components/Fireworks";
import { JungleItems } from "./JungleItems";

const DEBOUNCE_DELAY = 300;

const Home = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const jungleRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const loadedRefs = useRef<{ [key: string]: boolean }>({});
  const timerRef = useRef<NodeJS.Timeout>(null);
  const [loading, setLoading] = useState(true);
  const [allowFireworks, setAllowFireworks] = useState(false);

  const handleJunglePlacement = useCallback(() => {
    if (jungleRef.current && cardRef.current) {
      const topPosition = cardRef.current.getBoundingClientRect().top;
      jungleRef.current.style.top = `${topPosition - 64}px`;
    }
  }, []);

  const handleCreateRef = useCallback(
    (node: HTMLDivElement | null, type: string) => {
      if (type === "card") {
        cardRef.current = node;
      }
      if (type === "jungle") {
        jungleRef.current = node;
      }
      handleJunglePlacement();
    },
    [handleJunglePlacement]
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
        setLoading(false);
      }
    },
    [setLoading]
  );

  const debouncedHandleJunglePlacement = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setTimeout(() => {
      handleJunglePlacement();
    }, DEBOUNCE_DELAY);
  }, [handleJunglePlacement]);

  useEffect(() => {
    debouncedHandleJunglePlacement();
    window.addEventListener("resize", debouncedHandleJunglePlacement);
    return () => {
      window.removeEventListener("resize", debouncedHandleJunglePlacement);
    };
  }, [debouncedHandleJunglePlacement]);

  return (
    <>
      <div className={styles.home}>
        {allowFireworks && <Fireworks loop />}
        <div className={styles.content}>
          <Card ref={(r) => handleCreateRef(r, "card")} hidden />
          <AnimatePresence>
            {!loading && (
              <Card onAnimationStart={() => setAllowFireworks(true)} />
            )}
          </AnimatePresence>
          <div
            ref={(r) => handleCreateRef(r, "jungle")}
            className={styles.jungle}
          >
            {JungleItems.map((item) => (
              <Leaf
                key={item.id}
                ref={(r) => handleCreateImageRef(r, item.id)}
                onLoad={() => handleImageLoad(item.id)}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
