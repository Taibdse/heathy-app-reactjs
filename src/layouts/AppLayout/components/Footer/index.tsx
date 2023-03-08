import Container from 'react-bootstrap/esm/Container';
import styles from './styles.module.css';

export default function AppFooter() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles['nav-list']}>
          <div>会員登録</div>
          <div>運営会社</div>
          <div>利用規約</div>
          <div>個人情報の取扱について</div>
          <div>特定商取引法に基づく表記</div>
          <div>お問い合わせ</div>
        </div>
      </Container>
    </div>
  )
}
