import BodyRecordJpg from 'assets/img/body-record.jpg';
import MyExerciseRecordJpg from 'assets/img/my-exercise-record.jpg';
import MyDiaryRecordJpg from 'assets/img/my-diary-record.jpg';
import classNames from 'classnames';
import AppButton from 'components/AppButton';
import DiaryBox from 'components/DiaryBox';
import ExerciseList from 'components/ExerciesList';
import RecordTypeCard from 'components/RecordTypeCard';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import BodyRecordChart from './BodyRecordChart';
import styles from './styles.module.css';

const recordTypesData = [
  { id: 1, title: 'BODY RECORD', desc: '自分のカラダの記録', img: BodyRecordJpg },
  { id: 2, title: 'MY EXERCISE', desc: '自分の運動の記録', img: MyExerciseRecordJpg },
  { id: 3, title: 'MY DIARY', desc: '自分の日記', img: MyDiaryRecordJpg },
]

export default function RecordPage() {
  const [recordTypes, setRecordTypes] = useState(recordTypesData);
  const [diaryRecords, setDiaryRecords] = useState(Array.from({ length: 8 }));

  const handleLoadmore = () => {
    const newDiaryRecords = Array.from({ length: diaryRecords.length + 8 }).map((_, idx) => idx + 1);
    setDiaryRecords(newDiaryRecords);
  }

  return (
    <Container>
      <div className='row mt-5'>
        {recordTypes.map((recordType) => (
          <div
            className={classNames('col-sm-6 col-md-4 mb-3 d-flex justify-content-center')}
            key={recordType.id}
          >
            <RecordTypeCard recordType={recordType} />
          </div>
        ))}
      </div>
      <div className='row mt-5'>
        <div className='col-12'>
          <div className={styles['chart-wrapper']}>
            <div className={styles['chart-wrapper__header']}>
              <div>BODY RECORD</div>
              <div>2021.05.21</div>
            </div>
            <div>
              <BodyRecordChart />
            </div>
            <div className={styles['chart-wrapper__footer']}>
              <button className={styles['chart-wrapper__footer__btn']}>日</button>
              <button className={styles['chart-wrapper__footer__btn']}>週</button>
              <button className={styles['chart-wrapper__footer__btn']}>月</button>
              <button className={classNames(styles['chart-wrapper__footer__btn'], styles['active'])}>年</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-12'>
          <div className={styles['my-exercise-record-box']}>
            <div className={styles['my-exercise-record-box__header']}>
              <div>BODY EXERCIES</div>
              <div>2021.05.21</div>
            </div>
            <div className={styles['my-exercise-record-box__content']}>
              <div>
                <ExerciseList />
              </div>
              <div className=''>
                <ExerciseList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-diary-section mt-5'>
        <div className={styles['my-diary-section__header']}>MY DIARY</div>
        <div className='row'>
          {diaryRecords.map((it, idx) => (
            <div
              className={classNames('col-sm-6 col-md-4 col-lg-3 mb-3 d-flex px-0 justify-content-center')}
              key={idx}
            >
              <DiaryBox />
            </div>
          ))}
        </div>
        <div className='text-center'>
          <AppButton label='自分の日記をもっと見る' onClick={handleLoadmore} />
        </div>
      </div>

    </Container>
  )
}
