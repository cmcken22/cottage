import styles from "./Leaf.module.scss";
import palm1 from "@assets/palm1.png";
import palm2 from "@assets/palm2.png";
import palm3 from "@assets/palm3.png";
import hibiscus from "@assets/hibiscus.png";
import hibiscus2 from "@assets/hibiscus2.png";
import flower1 from "@assets/flower1.png";
import flower2 from "@assets/flower2.png";
import flower3 from "@assets/flower3.png";
import { LeafProps } from "./Leaf.types";
import { useMemo } from "react";

export const leafMap = {
  palm1,
  palm2,
  palm3,
  hibiscus,
  hibiscus2,
  flower1,
  flower2,
  flower3,
};

const Leaf = ({
  type = "palm",
  width = 100,
  zIndex = 1,
  right,
  left,
  top,
  bottom,
  rotate,
  flipX,
  flipY,
}: LeafProps) => {
  const leaf = useMemo(() => {
    return leafMap[type];
  }, [type]);

  const transform = useMemo(() => {
    const res = [];
    if (flipX) res.push("scaleX(-1)");
    if (flipY) res.push("scaleY(-1)");
    if (!isNaN(rotate)) res.push(`rotate(${rotate}deg)`);
    return res.join(" ");
  }, [flipX, flipY, rotate]);

  console.log("transform", transform);

  return (
    <div
      className={styles.leafContainer}
      style={{
        ...(!isNaN(right) && { right: `${right}px` }),
        ...(!isNaN(left) && { left: `${left}px` }),
        ...(!isNaN(top) && { top: `${top}px` }),
        ...(!isNaN(bottom) && { bottom: `${bottom}px` }),
        ...(!isNaN(zIndex) && { zIndex }),
        ...(transform && { transform }),
      }}
    >
      <img
        src={leaf}
        alt="Leaf shadow"
        className={styles.shadow}
        style={{
          width: `${width}px`,
        }}
      />
      <img
        src={leaf}
        alt="Leaf"
        className={styles.leaf}
        style={{
          width: `${width}px`,
        }}
      />
    </div>
  );
};

export default Leaf;
