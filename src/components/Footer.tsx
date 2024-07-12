import styles from "./Sidebar.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
}
