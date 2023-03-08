import styles from './styles.module.css';

interface RecommendationBoxProps {
  recommendation: any
}

export default function RecommendationBox(props: RecommendationBoxProps) {
  const { recommendation } = props;
  return (
    <div className={styles['recomendation-box']}>
      <div className={styles['recomendation-box__title']}>{recommendation.title}</div>
      <div className={styles['recomendation-box__sub-title']}>{recommendation.subTitle}</div>
    </div>
  )
}
