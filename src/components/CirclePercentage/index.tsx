import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.css'

interface CirclePercentageProps {
  value: number
}

export default function CirclePercentage(props: CirclePercentageProps) {
  const { value, ...rest } = props;
  return (
    <CircularProgressbarWithChildren
      value={value}
      strokeWidth={2}
      background={true}
      styles={buildStyles({
        textColor: 'var(--white-color)',
        backgroundColor: 'transparent',
        pathColor: 'var(--white-color)',
        textSize: 18,
        strokeLinecap: false,
        trailColor: 'transparent',
      })}
      {...rest}
    >
      <div className='flex align-items-center '>
        <span className={styles['sub-title']}>05/21</span>
        <span className={styles['title']}>{value}%</span>
      </div>
    </CircularProgressbarWithChildren>
  )
}
