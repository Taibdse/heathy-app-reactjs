import classNames from 'classnames';
import styles from './styles.module.css';

export default function RecordTypeCard(props: any) {
  const { recordType } = props;
  return (
    <div className={classNames([styles['record-section-card'], 'mx-auto'])} key={recordType.id}>
      <div className={styles['record-section-card__content']}>
        <img src={recordType.img} alt="" />
        <div>
          <div className={styles['record-section-card__content__title']}>{recordType.title}</div>
          <div className={styles['record-section-card__content__sub-title']}>{recordType.desc}</div>
        </div>
      </div>
    </div>
  )
}
