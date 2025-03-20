import FireworkAnimation from "react-canvas-confetti/dist/presets/fireworks";
import { useWindowSize } from "react-use";
import styles from "./Fireworks.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { FireworksProps } from "./Fireworks.types";

const DELAY = 500;
const DURATION = 2000;
const CYCLE_DELAY = 1000 * 10;

const Fireworks = ({ loop }: FireworksProps) => {
  const [key, setKey] = useState(0);
  const { width, height } = useWindowSize();
  const timerRef = useRef<NodeJS.Timeout>(null);

  const handleCycle = useCallback(() => {
    if (!loop) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    timerRef.current = setTimeout(() => {
      setTimeout(() => {
        setKey((prev) => prev + 1);
        handleCycle();
      }, CYCLE_DELAY);
    }, DELAY + DURATION);
  }, [loop]);

  useEffect(() => {
    handleCycle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FireworkAnimation
      key={key}
      className={styles.fireworks}
      autorun={{
        speed: 1,
        delay: DELAY,
        duration: DURATION,
      }}
      height={height}
      width={width}
      decorateOptions={(options) => {
        return {
          ...options,
          shapes: ["square"],
          colors: ["#ffffff"],
          zIndex: 1000,
        };
      }}
    />
  );
};

export default Fireworks;
