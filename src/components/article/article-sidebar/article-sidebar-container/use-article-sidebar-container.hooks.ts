import { useEffect, useState } from "react";

export function useArticleSidebarContainer() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const deferredUpdateIsScrolledDown = () => {
    setTimeout(() => {
      const nextIsScrolledDown = window.scrollY > 84;

      setIsScrolledDown(() => nextIsScrolledDown);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", deferredUpdateIsScrolledDown);

    deferredUpdateIsScrolledDown();

    return () => {
      window.removeEventListener("scroll", deferredUpdateIsScrolledDown);
    };
  }, []);

  return {
    isScrolledDown,
  };
}
