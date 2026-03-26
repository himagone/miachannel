import SectionTitle from '../common/SectionTitle/SectionTitle';
import styles from './Gallery.module.css';

const placeholderColors = [
  'var(--color-rose)',
  'var(--color-calico-beige)',
  'var(--color-mint)',
  'var(--color-lavender)',
  'var(--color-blush)',
  'var(--color-cream)',
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section}>
      <SectionTitle en="GALLERY" ja="ギャラリー" />
      <div className={styles.grid}>
        {placeholderColors.map((color, i) => (
          <div
            key={i}
            className={styles.item}
            style={
              {
                '--gallery-index': i,
                backgroundColor: color,
              } as React.CSSProperties
            }
          >
            <span className={styles.label}>PHOTO</span>
          </div>
        ))}
      </div>
    </section>
  );
}
