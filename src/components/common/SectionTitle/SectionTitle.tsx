import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  en: string;
  ja: string;
  dark?: boolean;
}

export default function SectionTitle({ en, ja, dark }: SectionTitleProps) {
  return (
    <div className={styles.wrapper} data-dark={dark || undefined}>
      <span className={styles.en}>{en}</span>
      <h2 className={styles.ja}>{ja}</h2>
      <div className={styles.line} />
    </div>
  );
}
