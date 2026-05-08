import PrivateClassesClient from "./PrivateClassesClient";
import styles from "./PrivateClassesSection.module.scss";

export default function PrivateClassesSection() {
  return (
    <section aria-labelledby="private-classes-heading" className={styles.section}>
      <PrivateClassesClient />
    </section>
  );
}
