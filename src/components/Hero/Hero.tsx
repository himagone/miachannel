import { mia } from '../../data/mia';
import styles from './Hero.module.css';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  const chars = [...mia.name];

  return (
    <section className={styles.hero} data-visible={isVisible || undefined}>
      <div className={styles.videoBg}>
        <video
          className={styles.video}
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.decoWrap}>
          <div className={styles.deco1} />
          <div className={styles.deco2} />
          <div className={styles.deco3} />
        </div>

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

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
