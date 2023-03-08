import styles from './styles.module.css';
import ArrowUpsvg from 'assets/img/arrow-up.svg'

export default function MoveTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={styles['btn']} role="button" tabIndex={0} onClick={handleScrollTop}>
      <img src={ArrowUpsvg} alt="" />
    </div>
  )
}
