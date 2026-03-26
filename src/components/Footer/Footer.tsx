import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.icon}>🐾</span>
      <p className={styles.copy}>&copy; 2025 mia&apos;s page</p>
    </footer>
  );
}
