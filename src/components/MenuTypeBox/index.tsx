import classNames from 'classnames';
import styles from './styles.module.css';

export default function MenuTypeBox(props: any) {
  const { menuType, ...rest } = props;
  return (
    <div className={`${styles['menu-type-card']}`} {...rest}>
      <img src={menuType.icon} alt="" />
      <div>{menuType.name}</div>
    </div>
  )
}
