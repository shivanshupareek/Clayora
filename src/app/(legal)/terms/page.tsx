import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Clayora's Terms & Conditions — cancellation policy, refunds, gift vouchers, storage, and studio conduct.",
  alternates: {
    canonical: "https://clayora.com.au/terms",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions | Clayora",
    description:
      "Clayora's Terms & Conditions — cancellation policy, refunds, gift vouchers, storage, and studio conduct.",
    url: "https://clayora.com.au/terms",
    siteName: "Clayora",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Clayora",
    description:
      "Clayora's Terms & Conditions — cancellation policy, refunds, gift vouchers, storage, and studio conduct.",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content" className={styles.main}>
      <article
        className={styles.article}
        aria-labelledby="terms-heading"
      >
        <header className={styles.header}>
          <h1 id="terms-heading" className={styles.title}>
            Terms &amp; Conditions
          </h1>
        </header>

        <section aria-labelledby="classes-heading" className={styles.section}>
          <h2 id="classes-heading" className={styles.sectionHeading}>
            Classes &amp; Workshops
          </h2>
          <ol className={styles.list}>
            <li>
              To cancel and receive a full refund, you must notify{" "}
              <a href="mailto:clayora.studios@gmail.com" className={styles.link}>
                clayora.studios@gmail.com
              </a>{" "}
              at least 48 hours prior to the lesson. Within 48 hours of the
              scheduled lesson, there will be no refunds for cancellations or
              no-shows.
            </li>
          </ol>
        </section>

        <section aria-labelledby="courses-heading" className={styles.section}>
          <h2 id="courses-heading" className={styles.sectionHeading}>
            Courses &amp; Workshops
          </h2>
          <ol className={styles.list}>
            <li>
              To cancel and receive a full refund, you must notify{" "}
              <a href="mailto:clayora.studios@gmail.com" className={styles.link}>
                clayora.studios@gmail.com
              </a>{" "}
              at least 48 hours prior to your session time.
            </li>
            <li>
              Within 48 hours of the scheduled lesson, there will be no refunds
              for cancellations or no-shows.
            </li>
            <li>
              To book a makeup session you will have to email{" "}
              <a href="mailto:clayora.studios@gmail.com" className={styles.link}>
                clayora.studios@gmail.com
              </a>{" "}
              48 hours before. Makeup sessions are subject to class availability.
            </li>
          </ol>
        </section>

        <section aria-labelledby="privates-heading" className={styles.section}>
          <h2 id="privates-heading" className={styles.sectionHeading}>
            Privates &amp; Events
          </h2>
          <ol className={styles.list}>
            <li>
              To cancel and receive a full refund, a customer must notify{" "}
              <a href="mailto:clayora.studios@gmail.com" className={styles.link}>
                clayora.studios@gmail.com
              </a>{" "}
              at least 1 week prior to the event. Within 1 week of the scheduled
              event, there will be no refunds for cancellations or no-shows on
              the day.
            </li>
            <li>
              A minimum of 48 hours notice is required to reschedule your event
              or change final booking numbers.
            </li>
            <li>
              Please note only guests that have been booked in for the event are
              allowed to be in the studio while the session is running.
            </li>
          </ol>
        </section>

        <section aria-labelledby="vouchers-heading" className={styles.section}>
          <h2 id="vouchers-heading" className={styles.sectionHeading}>
            Gift Vouchers
          </h2>
          <p>
            Gift vouchers are valid for 3 years after purchase. They are not
            refundable.
          </p>
          <p>All gift vouchers are only valid at Clayora Studios.</p>
        </section>

        <section aria-labelledby="refund-heading" className={styles.section}>
          <h2 id="refund-heading" className={styles.sectionHeading}>
            Refund Policy
          </h2>
          <p>
            Clayora has 14 days to complete approved refunds. The refund will be
            provided using your original payment method.
          </p>
        </section>

        <section aria-labelledby="broken-heading" className={styles.section}>
          <h2 id="broken-heading" className={styles.sectionHeading}>
            Broken Pieces
          </h2>
          <p>
            From time to time, ceramics can break during the handling and firing
            process. While we do our best to ensure your pieces pass through the
            kilns safely, cracks or explosions can unfortunately happen.
          </p>
          <p>
            Because of this unpredictable nature, broken pieces are not entitled
            to a refund. However, please contact our team and we will gladly work
            with you to find a solution.
          </p>
        </section>

        <section aria-labelledby="noshows-heading" className={styles.section}>
          <h2 id="noshows-heading" className={styles.sectionHeading}>
            No Shows, Collections and Makeup Sessions
          </h2>

          <h3 className={styles.subHeading}>Late piece collection</h3>
          <p>
            If a student does not collect their work within 3 months of their
            scheduled class or course end date, the studio holds no
            responsibility for their work and may dispose of or use it at their
            discretion.
          </p>

          <h3 className={styles.subHeading}>Makeup workshop sessions</h3>
          <p>
            Makeup workshops are subject to availability, must be booked within
            60 days, and cannot be postponed or rescheduled once confirmed.
          </p>
        </section>

        <section aria-labelledby="storage-heading" className={styles.section}>
          <h2 id="storage-heading" className={styles.sectionHeading}>
            Storage &amp; Personal Belongings
          </h2>
          <ol className={styles.list}>
            <li>
              Clayora is not liable to you for any personal property that is
              damaged, lost, or stolen while on or around the studio including,
              but not limited to, any property left in the studio.
            </li>
            <li>
              Any unlabelled work or personal belongings left unclaimed in any
              communal spaces may be disposed of at our discretion to avoid
              congestion of communal areas.
            </li>
          </ol>
        </section>

        <section aria-labelledby="bullying-heading" className={styles.section}>
          <h2 id="bullying-heading" className={styles.sectionHeading}>
            Bullying &amp; Harassment Policy
          </h2>
          <h3 className={styles.subHeading}>Zero Tolerance Policy</h3>
          <p>
            At Clayora, we are committed to fostering a safe, inclusive, and
            supportive environment for everyone.
          </p>
          <p>
            We have zero tolerance for bullying, harassment, or discrimination of
            any kind. To uphold this standard, we reserve the right to terminate
            a student&apos;s membership or request their immediate removal from
            the premises if this policy is breached in any way. In such cases,
            no refunds will be issued.
          </p>
        </section>
      </article>
    </main>
  );
}
