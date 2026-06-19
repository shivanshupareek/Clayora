import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Clayora Studio",
  description:
    "Pottery studio in Rouse Hill, NSW. Opening hours, location, and contact details.",
  alternates: {
    canonical: "https://clayora.com.au/studio",
  },
  robots: { index: false, follow: false },
};

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.23a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.44 17z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function StudioPage() {
  return (
    <main id="main-content" className={styles.main}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
          </li>
          <li aria-current="page">Studio</li>
        </ol>
      </nav>

      <article className={styles.card} aria-label="Clayora Studio">
        <section aria-labelledby="hours-heading" className={styles.section}>
          <h2 id="hours-heading" className={styles.sectionHeading}>
            <ClockIcon />
            Opening hours
          </h2>
          <dl className={styles.hoursList}>
            <div className={styles.hoursRow}>
              <dt>Saturday</dt>
              <dd>09:00am – 05:00pm</dd>
            </div>
            <div className={styles.hoursRow}>
              <dt>Sunday</dt>
              <dd>09:00am – 08:00pm</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="location-heading" className={styles.section}>
          <h2 id="location-heading" className={styles.sectionHeading}>
            <MapPinIcon />
            Location
          </h2>
          <a
            href="https://maps.google.com/?q=2+Crab+Apple+Lane+Rouse+Hill+NSW+2155+Australia"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Clayora Studio location in Google Maps"
          >
            2, Crab Apple Lane, Rouse Hill, NSW-2155, Australia
          </a>
        </section>

        <section aria-labelledby="contact-heading" className={styles.section}>
          <h2 id="contact-heading" className={styles.sectionHeading}>
            Contact
          </h2>
          <ul className={styles.contactList}>
            <li>
              <a
                href="tel:0481305911"
                className={styles.contactLink}
                aria-label="Call Clayora"
              >
                <PhoneIcon />
                0481 305 911
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/61481305911"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:clayora.studios@gmail.com"
                className={styles.contactLink}
                aria-label="Email Clayora"
              >
                <MailIcon />
                clayora.studios@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://clayora.com.au"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Clayora website"
              >
                <GlobeIcon />
                clayora.com.au
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="about-heading" className={styles.section}>
          <h2 id="about-heading" className={styles.sectionHeading}>
            About
          </h2>
          <p className={styles.aboutText}>
            At Clayora studio, we believe there is a magic in getting your hands
            messy.
          </p>
        </section>

        <section aria-label="Social media" className={styles.socialSection}>
          <a
            href="https://www.facebook.com/Clayora.studios/?http_ref=eyJ0cyI6MTc4MTc4NTk1NDAwMCwiciI6IiJ9"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clayora on Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/clayora.studios?igsh=ZXhqNjFwbnVtY2Zn"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Clayora on Instagram"
          >
            <InstagramIcon />
          </a>
        </section>
      </article>
    </main>
  );
}
