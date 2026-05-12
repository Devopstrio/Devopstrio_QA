import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Standard window scroll with instant behavior to prevent conflicts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Fallback for cases where html/body might be the scroll container
    if (document.documentElement) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
    
    // Additional fallback for slower renders
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, search]);

  return null;
}
