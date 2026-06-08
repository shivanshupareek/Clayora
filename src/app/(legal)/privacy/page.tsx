import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Clayora's Privacy Policy — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
  alternates: {
    canonical: "https://clayora.com.au/privacy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy | Clayora",
    description:
      "Clayora's Privacy Policy — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
    url: "https://clayora.com.au/privacy",
    siteName: "Clayora",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Clayora",
    description:
      "Clayora's Privacy Policy — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className={styles.main}>
      <article
        className={styles.article}
        aria-labelledby="privacy-heading"
      >
        <header className={styles.header}>
          <h1 id="privacy-heading" className={styles.title}>
            Privacy Policy
          </h1>
          <p className={styles.abn}>Clayora ABN: 86 698 285 497</p>
        </header>

        <section aria-labelledby="respect-heading" className={styles.section}>
          <h2 id="respect-heading" className={styles.sectionHeading}>
            We respect your privacy
          </h2>
          <p>
            Clayora respects your right to privacy and is committed to
            safeguarding the privacy of our customers and website visitors. We
            adhere to the Australian Privacy Principles contained in the Privacy
            Act 1988 (Cth). This policy sets out how we collect and treat your
            personal information.
          </p>
          <p>
            &ldquo;Personal information&rdquo; is information we hold which is
            identifiable as being about you.
          </p>
        </section>

        <section aria-labelledby="collection-heading" className={styles.section}>
          <h2 id="collection-heading" className={styles.sectionHeading}>
            Collection of personal information
          </h2>
          <p>
            Clayora will, from time to time, receive and store personal
            information you enter onto our website, provided to us directly or
            given to us in other forms.
          </p>
          <p>
            You may provide basic information such as your name, phone number,
            address and email address to enable us to send information, provide
            updates and process your product or service order. We may collect
            additional information at other times, including but not limited to,
            when you provide feedback, when you provide information about your
            personal or business affairs, change your content or email
            preference, respond to surveys and/or promotions, provide financial
            or credit card information, or communicate with our customer
            support.
          </p>
          <p>
            Additionally, we may also collect any other information you provide
            while interacting with us.
          </p>
        </section>

        <section aria-labelledby="how-collect-heading" className={styles.section}>
          <h2 id="how-collect-heading" className={styles.sectionHeading}>
            How we collect your personal information
          </h2>
          <p>
            Clayora collects personal information from you in a variety of
            ways, including when you interact with us electronically or in
            person, when you access our website and when we provide our services
            to you. We may receive personal information from third parties. If
            we do, we will protect it as set out in this Privacy Policy.
          </p>
        </section>

        <section aria-labelledby="use-heading" className={styles.section}>
          <h2 id="use-heading" className={styles.sectionHeading}>
            Use of your personal information
          </h2>
          <p>
            Clayora may use personal information collected from you to provide
            you with information, updates and our services. We may also make you
            aware of new and additional products, services and opportunities
            available to you. We may use your personal information to improve
            our products and services and better understand your needs.
          </p>
          <p>
            Clayora may contact you by a variety of measures including, but not
            limited to telephone, email, sms or mail.
          </p>
        </section>

        <section aria-labelledby="disclosure-heading" className={styles.section}>
          <h2 id="disclosure-heading" className={styles.sectionHeading}>
            Disclosure of your personal information
          </h2>
          <p>
            We may disclose your personal information to any of our employees,
            officers, insurers, professional advisers, agents, suppliers or
            subcontractors insofar as reasonably necessary for the purposes set
            out in this Policy. Personal information is only supplied to a third
            party when it is required for the delivery of our services.
          </p>
          <p>
            We may from time to time need to disclose personal information to
            comply with a legal requirement, such as a law, regulation, court
            order, subpoena, warrant, in the course of a legal proceeding or in
            response to a law enforcement agency request.
          </p>
          <p>
            We may also use your personal information to protect the copyright,
            trademarks, legal rights, property or safety of Clayora its
            customers or third parties.
          </p>
          <p>
            Information that we collect may from time to time be stored,
            processed in or transferred between parties located in countries
            outside of Australia.
          </p>
          <p>
            If there is a change of control in our business or a sale or
            transfer of business assets, we reserve the right to transfer to
            the extent permissible at law our user databases, together with any
            personal information and non-personal information contained in those
            databases. This information may be disclosed to a potential
            purchaser under an agreement to maintain confidentiality. We would
            seek to only disclose information in good faith and where required
            by any of the above circumstances.
          </p>
          <p>
            By providing us with personal information, you consent to the terms
            of this Privacy Policy and the types of disclosure covered by this
            Policy. Where we disclose your personal information to third
            parties, we will request that the third party follow this Policy
            regarding handling your personal information.
          </p>
        </section>

        <section aria-labelledby="security-heading" className={styles.section}>
          <h2 id="security-heading" className={styles.sectionHeading}>
            Security of your personal information
          </h2>
          <p>
            Clayora is committed to ensuring that the information you provide
            to us is secure. In order to prevent unauthorised access or
            disclosure, we have put in place suitable physical, electronic and
            managerial procedures to safeguard and secure information and
            protect it from misuse, interference, loss and unauthorised access,
            modification and disclosure.
          </p>
          <p>
            The transmission and exchange of information is carried out at your
            own risk. We cannot guarantee the security of any information that
            you transmit to us, or receive from us. Although we take measures
            to safeguard against unauthorised disclosures of information, we
            cannot assure you that personal information that we collect will not
            be disclosed in a manner that is inconsistent with this Privacy
            Policy.
          </p>
        </section>

        <section aria-labelledby="access-heading" className={styles.section}>
          <h2 id="access-heading" className={styles.sectionHeading}>
            Access to your personal information
          </h2>
          <p>
            You may request details of personal information that we hold about
            you in accordance with the provisions of the Privacy Act 1988 (Cth).
            A small administrative fee may be payable for the provision of
            information. If you would like a copy of the information which we
            hold about you or believe that any information we hold on you is
            inaccurate, out of date, incomplete, irrelevant or misleading,
            please email us at{" "}
            <a
              href="mailto:hello@clayora.com.au"
              className={styles.link}
            >
              hello@clayora.com.au
            </a>
            .
          </p>
          <p>
            We reserve the right to refuse to provide you with information that
            we hold about you, in certain circumstances set out in the Privacy
            Act.
          </p>
        </section>

        <section aria-labelledby="complaints-heading" className={styles.section}>
          <h2 id="complaints-heading" className={styles.sectionHeading}>
            Complaints about privacy
          </h2>
          <p>
            If you have any complaints about our privacy practices, please feel
            free to send in details of your complaints to{" "}
            <a
              href="mailto:hello@clayora.com.au"
              className={styles.link}
            >
              hello@clayora.com.au
            </a>
            . We take complaints very seriously and will respond shortly after
            receiving written notice of your complaint.
          </p>
        </section>

        <section aria-labelledby="changes-heading" className={styles.section}>
          <h2 id="changes-heading" className={styles.sectionHeading}>
            Changes to Privacy Policy
          </h2>
          <p>
            Please be aware that we may change this Privacy Policy in the
            future. We may modify this Policy at any time, in our sole
            discretion and all modifications will be effective immediately upon
            our posting of the modifications on our website or notice board.
            Please check back from time to time to review our Privacy Policy.
          </p>
        </section>

        <section aria-labelledby="website-heading" className={styles.section}>
          <h2 id="website-heading" className={styles.sectionHeading}>
            Website
          </h2>

          <h3 className={styles.subHeading}>When you visit our website</h3>
          <p>
            When you come to our website{" "}
            <a
              href="https://www.clayora.com.au"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              www.clayora.com.au
            </a>{" "}
            we may collect certain information such as browser type, operating
            system, website visited immediately before coming to our site, etc.
            This information is used in an aggregated manner to analyse how
            people use our site, such that we can improve our service.
          </p>

          <h3 className={styles.subHeading}>Cookies</h3>
          <p>
            We may from time to time use cookies on our website. Cookies are
            very small files which a website uses to identify you when you come
            back to the site and to store details about your use of the site.
            Cookies are not malicious programs that access or damage your
            computer. Most web browsers automatically accept cookies but you can
            choose to reject cookies by changing your browser settings. However,
            this may prevent you from taking full advantage of our website. Our
            website may from time to time use cookies to analyse website traffic
            and help us provide a better website visitor experience. In
            addition, cookies may be used to serve relevant ads to website
            visitors through third party services such as Google Adwords. These
            ads may appear on this website or other websites you visit.
          </p>

          <h3 className={styles.subHeading}>Third party sites</h3>
          <p>
            Our site may from time to time have links to other websites not
            owned or controlled by us. These links are meant for your
            convenience only. Links to third party websites do not constitute
            sponsorship or endorsement or approval of these websites. Please be
            aware that Clayora is not responsible for the privacy practices of
            other such websites. We encourage our users to be aware, when they
            leave our website, to read the privacy statements of each and every
            website that collects personal identifiable information.
          </p>
        </section>
      </article>
    </main>
  );
}
