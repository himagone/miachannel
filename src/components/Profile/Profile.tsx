import { mia } from '../../data/mia';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import styles from './Profile.module.css';

export default function Profile() {
  return (
    <section id="profile" className={styles.section}>
      <SectionTitle en="PROFILE" ja="プロフィール" />
      <dl className={styles.features}>
        {mia.features.map((item, i) => (
          <div
            key={item.label}
            className={styles.featureItem}
            style={{ '--item-index': i } as React.CSSProperties}
          >
            <dt className={styles.featureLabel}>{item.label}</dt>
            <dd className={styles.featureValue}>{item.value}</dd>
          </div>
        ))}
      </dl>
      <h3 className={styles.favoritesHeading}>すきなもの</h3>
      <div className={styles.favorites}>
        {mia.favorites.map((fav, i) => (
          <div
            key={fav.label}
            className={styles.favCard}
            style={{ '--fav-index': i } as React.CSSProperties}
          >
            <span className={styles.favEmoji}>{fav.emoji}</span>
            <span className={styles.favLabel}>{fav.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
