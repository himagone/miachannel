import { mia } from '../../data/mia';
import SectionTitle from '../common/SectionTitle/SectionTitle';
import styles from './Traits.module.css';

export default function Traits() {
  return (
    <section id="traits" className={styles.section}>
      <SectionTitle en="PERSONALITY" ja="せいかく" dark />
      <div className={styles.tags}>
        {mia.personality.map((tag, i) => (
          <span
            key={tag}
            className={styles.tag}
            style={{ '--tag-index': i } as React.CSSProperties}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className={styles.description}>
        みあはとっても甘えん坊で、いつもそばにいたがる女の子。
        <br />
        お気に入りのじゃらしを見つけると目をまんまるにして飛びかかります。
        <br />
        ひなたぼっこが大好きで、窓辺でまどろむ姿は最高の癒し。
      </p>
    </section>
  );
}
