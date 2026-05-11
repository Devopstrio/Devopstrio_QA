import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Standard window scroll
    window.scrollTo(0, 0);
    
    // Fallback for cases where html/body might be the scroll container
    if (document.documentElement) {
      document.documentElement.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
