import styles from './styles.module.css';

export default function DiaryBox(props: any) {
  return (
    <div className={styles['diary-box']}>
      <div className={styles['diary-box__time']}>
        <div>2021.05.21</div>
        <div>23:25</div>
      </div>
      <div className={styles['diary-box__content']}>
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </div>
    </div>
  )
}
