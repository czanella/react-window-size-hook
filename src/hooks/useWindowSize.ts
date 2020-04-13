import { useState, useEffect } from "react";

export function useWindowSize(): [Number, Number] {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onResize = (): void => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return [width, height];
}
