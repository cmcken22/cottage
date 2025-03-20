import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const getOrientation = () =>
  window.innerWidth > window.innerHeight ? "landscape" : "portrait";

export const useOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());
  const prevOrientation = useRef("");

  useEffect(() => {
    const handleResize = () => {
      const orientation = getOrientation();
      if (prevOrientation.current === orientation) return;
      prevOrientation.current = orientation;
      setOrientation(orientation);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const useDebugMode = () => {
  const query = useQuery();
  const debugMode = query.get("debug") === "true"; // Returns true if `?debug=true`
  return debugMode;
};
