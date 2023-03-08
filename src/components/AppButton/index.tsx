import styles from './styles.module.css';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  label: string,
}

export default function AppButton(props: AppButtonProps) {
  const { className, label, ...rest } = props;
  return (
    <button
      className={`${styles['btn']} ${className || ''} `}
      {...rest}
    >{label}</button>
  )
}
