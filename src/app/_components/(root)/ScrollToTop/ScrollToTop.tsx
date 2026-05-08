"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import styles from "./ScrollToTop.module.scss";

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className={styles.inner} aria-hidden="true">
        <ChevronUp size={16} focusable={false} />
      </span>
    </button>
  );
}
