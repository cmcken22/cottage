import Card from "@components/Card";
import styles from "./Home.module.scss";
import Leaf from "@components/Leaf";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Fireworks from "@components/Fireworks";
import { JungleItems } from "./JungleItems";
import cx from "classnames";
import ConsoleLogViewer from "@components/ConsoleLogViewer";
import { useDebugMode } from "@hooks/index";

const DEBOUNCE_DELAY = 300;

const Home = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const jungleRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const loadedRefs = useRef<{ [key: string]: boolean }>({});
  const timerRef = useRef<NodeJS.Timeout>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prevWindowWidth = useRef(0);
  const [loading, setLoading] = useState(true);
  const [allowFireworks, setAllowFireworks] = useState(false);
  const [largeScreen, setLargeScreen] = useState(false);
  const debugMode = useDebugMode();

  const handleJunglePlacement = useCallback(() => {
    if (jungleRef.current && cardRef.current) {
      const topPosition = cardRef.current.getBoundingClientRect().top;
      jungleRef.current.style.top = `${topPosition - 64}px`;
    }
  }, []);

  const handleCreateRef = useCallback(
    (node: HTMLDivElement | null, type: string) => {
      if (type === "card" && !cardRef.current) {
        cardRef.current = node;
        handleJunglePlacement();
      }
      if (type === "jungle" && !jungleRef.current) {
        jungleRef.current = node;
        handleJunglePlacement();
      }
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

  const checkLargeScreen = useCallback(() => {
    if (!contentRef.current) return;
    const contentWidth = contentRef.current.getBoundingClientRect().width;
    const screenWidth = window.innerWidth;
    if (screenWidth > contentWidth) {
      console.log("too big!!!!!!", "sw:", screenWidth, "cw:", contentWidth);
    }
    setLargeScreen(screenWidth > contentWidth);
  }, [setLargeScreen]);

  const handleCreateContentRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        contentRef.current = node;
        checkLargeScreen();
      }
    },
    [checkLargeScreen]
  );

  const debouncedResize = useCallback(() => {
    if (prevWindowWidth.current === window.innerWidth) return;
    prevWindowWidth.current = window.innerWidth;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setTimeout(() => {
      console.log("resize");
      checkLargeScreen();
      handleJunglePlacement();
    }, DEBOUNCE_DELAY);
  }, [checkLargeScreen, handleJunglePlacement]);

  useEffect(() => {
    debouncedResize();
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [debouncedResize]);

  return (
    <>
      {debugMode && <ConsoleLogViewer />}
      <div
        className={cx(styles.home, {
          [styles["home--large"]]: largeScreen,
        })}
      >
        {allowFireworks && <Fireworks loop />}
        <div
          ref={handleCreateContentRef}
          className={cx(styles.content, {
            [styles["content--large"]]: largeScreen,
          })}
        >
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
