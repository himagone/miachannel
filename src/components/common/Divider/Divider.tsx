import styles from './Divider.module.css';

export default function Divider() {
  return (
    <div className={styles.divider}>
      <svg
        className={styles.paw}
        viewBox="0 0 100 100"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <ellipse cx="50" cy="65" rx="22" ry="18" fill="currentColor" />
        <ellipse cx="28" cy="38" rx="10" ry="12" fill="currentColor" />
        <ellipse cx="50" cy="30" rx="10" ry="12" fill="currentColor" />
        <ellipse cx="72" cy="38" rx="10" ry="12" fill="currentColor" />
      </svg>
    </div>
  );
}
