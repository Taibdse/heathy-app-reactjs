import classNames from 'classnames';
import styles from './styles.module.css';

export default function GalleryCard(props: any) {
  const { item, showContent } = props;
  return (
    <div className={styles['dish-card']}>
      <div className={classNames(styles['dish-card__thumbnail'], { [styles['sm']]: showContent })} >
        <img src={item.thumbnail} alt="" />
        <div className={styles['dish-card__thumbnail__title']}>{item.title}</div>
      </div>
      {showContent && (
        <div className={styles['dish-card__content']}>
          <div className={styles['dish-card__content__desc']}>{item.desc}</div>
          <div className={styles['dish-card__content__tags']}>
            {item.tags.map((tag: any) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
