import styles from "./Leaf.module.scss";
import { LeafProps } from "./Leaf.types";
import { forwardRef, useMemo } from "react";

export const leafMap = {
  palm1: "https://ik.imagekit.io/cmckenna/palm1.png?updatedAt=1742442231234",
  palm2: "https://ik.imagekit.io/cmckenna/palm2.png?updatedAt=1742442216696",
  palm3: "https://ik.imagekit.io/cmckenna/palm3.png?updatedAt=1742442219547",
  hibiscus:
    "https://ik.imagekit.io/cmckenna/hibiscus.png?updatedAt=1742442234998",
  hibiscus2:
    "https://ik.imagekit.io/cmckenna/hibiscus2.png?updatedAt=1742442227303",
  flower1:
    "https://ik.imagekit.io/cmckenna/flower1.png?updatedAt=1742442215872",
  flower2:
    "https://ik.imagekit.io/cmckenna/flower2.png?updatedAt=1742442216451",
  flower3:
    "https://ik.imagekit.io/cmckenna/flower3.png?updatedAt=1742442215775",
};

const Leaf = forwardRef<HTMLDivElement, LeafProps>(
  (
    {
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
      onLoad,
    },
    ref
  ) => {
    const leaf = useMemo(() => leafMap[type], [type]);

    const transform = useMemo(() => {
      const res = [];
      if (flipX) res.push("scaleX(-1)");
      if (flipY) res.push("scaleY(-1)");
      if (!isNaN(rotate)) res.push(`rotate(${rotate}deg)`);
      return res.join(" ");
    }, [flipX, flipY, rotate]);

    return (
      <div
        ref={ref}
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
          style={{ width: `${width}px` }}
          onLoad={onLoad}
        />
        <img
          src={leaf}
          alt="Leaf"
          className={styles.leaf}
          style={{ width: `${width}px` }}
        />
      </div>
    );
  }
);

export default Leaf;
