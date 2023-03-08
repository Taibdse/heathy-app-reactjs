import styles from './styles.module.css';

export default function ExerciseList(props: any) {
  return (
    <ul className={styles['exercie-list']}>
      {Array.from({ length: 20 }).map((it, idx) => (
        <li className={styles['exercie-list__item']} key={idx}>
          <div>
            <span className={styles['exercie-list__item__title']}>家事全般（立位・軽い</span>
            <span className={styles['exercie-list__item__calo']}>26kcal</span>
          </div>
          <div className={styles['exercie-list__item__time']}>10 min</div>
        </li>
      ))}
    </ul>
  )
}
