import { useScrolled } from '../../hooks/useScrolled';
import styles from './Header.module.css';

export default function Header() {
  const isScrolled = useScrolled();

  return (
    <header className={styles.header} data-scrolled={isScrolled || undefined}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          🐾 mia
        </a>
        <nav className={styles.nav}>
          <a href="#profile" className={styles.navLink}>Profile</a>
          <a href="#gallery" className={styles.navLink}>Gallery</a>
          <a href="#traits" className={styles.navLink}>Personality</a>
        </nav>
      </div>
    </header>
  );
}
