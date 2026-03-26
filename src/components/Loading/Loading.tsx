import styles from './Loading.module.css';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  return (
    <div className={`${styles.overlay}${className ? ` ${className}` : ''}`}>
      <div className={styles.logoWrap}>
        <svg
          className={styles.pawLogo}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 小さい楕円 × 4 */}
          <ellipse className={styles.pawPad1} cx="30" cy="25" rx="10" ry="12" />
          <ellipse className={styles.pawPad2} cx="50" cy="18" rx="9"  ry="11" />
          <ellipse className={styles.pawPad3} cx="70" cy="25" rx="10" ry="12" />
          <ellipse
            className={styles.pawPad4}
            cx="82" cy="45" rx="8" ry="10"
            transform="rotate(20 82 45)"
          />
          {/* ハート型 */}
          <path
            className={styles.pawPad0}
            d="M50 88
              C50 88, 20 68, 20 55
              C20 45, 28 38, 36 38
              C42 38, 46 42, 50 47
              C54 42, 58 38, 64 38
              C72 38, 80 45, 80 55
              C80 68, 50 88, 50 88Z"
          />
        </svg>
        <span className={styles.nameText}>MIA</span>
      </div>
    </div>
  );
}
