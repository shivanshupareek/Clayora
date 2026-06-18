"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Clayora — go to homepage"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/assets/favicons/favicon.svg"
              alt=""
              width={36}
              height={36}
              unoptimized
              aria-hidden="true"
            />
            <span className={styles.logoText}>
              <span className={styles.logoName}>CLAYORA</span>
              <span className={styles.logoTagline}>Earth to Elegance</span>
            </span>
          </Link>
          <a href="#book" className={styles.cta}>
            get started
          </a>
        </div>

        <div className={styles.contactRow}>
          <a href="mailto:hello@clayora.com.au" className={styles.contactLink}>
            hello@clayora.com.au
          </a>
          <a href="tel:+61481305911" className={styles.contactLink}>
            0481 305 911
          </a>
        </div>

        <div className={styles.bottomRow}>
          <nav aria-label="Legal navigation" className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>
              terms
            </Link>
            <Link href="/privacy" className={styles.legalLink}>
              privacy policy
            </Link>
            <Link href="/sitemap" className={styles.legalLink}>
              sitemap
            </Link>
          </nav>
          <p className={styles.copyright}>©Clayora. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
