"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.scss";

type Theme = "light" | "dark";

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // On mount: read the theme already set by the blocking script in <head>.
  // We read from the <html> attribute (not localStorage) so we stay in sync
  // with whatever the init script resolved — avoids a double-read.
  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) ??
      "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cl-theme", next);
    } catch (_) {
      // localStorage may be unavailable in private browsing — fail silently
    }
  };

  const isDark = mounted && theme === "dark";

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo — Poxe font, -2% letter spacing */}
        <Link href="/" className={styles.logo} aria-label="ClayLabs — go to homepage">
          ClayLabs
        </Link>

        <div className={styles.actions}>
          <a href="#book" className={styles.cta}>
            get started
          </a>

          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {/* Render Moon by default (matches light-mode server render).
                After mount, switch to the correct icon for the active theme. */}
            {isDark ? (
              <Sun size={16} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Moon size={16} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
