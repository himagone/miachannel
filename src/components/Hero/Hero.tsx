import { mia } from '../../data/mia';
import styles from './Hero.module.css';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  const chars = [...mia.name];

  return (
    <section className={styles.hero} data-visible={isVisible || undefined}>
      <div className={styles.inner}>
        <div className={styles.photoSide}>
          <div className={styles.photoFrame}>
            <div className={styles.photoPlaceholder}>PHOTO</div>
          </div>
          <div className={styles.deco1} />
          <div className={styles.deco2} />
          <div className={styles.deco3} />
        </div>
        <div className={styles.textSide}>
          <h1 className={styles.name}>
            {chars.map((char, i) => (
              <span
                key={i}
                className={styles.char}
                style={{ '--char-index': i } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className={styles.nameEn}>{mia.nameEn}</p>
          <div className={styles.line} />
          <p className={styles.breed}>Minuet</p>
        </div>
      </div>
    </section>
  );
}
