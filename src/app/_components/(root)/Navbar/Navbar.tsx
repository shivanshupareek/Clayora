"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.scss";

type Theme = "light" | "dark";

// Lazy initializer — reads the data-theme attribute already set by the
// blocking script in <head>. Runs once on the client; returns "light" on
// the server (SSR). No useEffect needed, no cascading re-render.
function readThemeFromDOM(): Theme {
  if (typeof window === "undefined") return "light";
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) ?? "light"
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState<Theme>(readThemeFromDOM);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("cl-theme", next);
    } catch {
      // localStorage unavailable in private browsing — fail silently
    }
  };

  const isDark = theme === "dark";

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo — Poxe font, -2% letter spacing */}
        <Link
          href="/"
          className={styles.logo}
          aria-label="ClayLabs — go to homepage"
        >
          ClayLabs
        </Link>

        <div className={styles.actions}>
          <a href="#book" className={styles.cta}>
            get started
          </a>

          {/* suppressHydrationWarning: server renders "light" default; client
              reads the real data-theme set by the init script. The aria-label
              and icon may differ — this is intentional and cosmetically safe. */}
          <button
            type="button"
            suppressHydrationWarning
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
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
