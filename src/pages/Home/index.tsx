import Dinner0520DishJpg from 'assets/img/dish/dinner_0520.jpg';
import Dinner0521DishJpg from 'assets/img/dish/dinner_0521.jpg';
import Lunch0520DishJpg from 'assets/img/dish/lunch_0520.jpg';
import Lunch0521DishJpg from 'assets/img/dish/lunch_0521.jpg';
import DishTypeLogoSvg from 'assets/img/dish/morning.svg';
import Morning0520DishJpg from 'assets/img/dish/morning_0520.jpg';
import Morning0521DishJpg from 'assets/img/dish/morning_0521.jpg';
import SnackLogoSvg from 'assets/img/dish/snack.svg';
import Snack0520DishJpg from 'assets/img/dish/snack_0520.jpg';
import Snack0521DishJpg from 'assets/img/dish/snack_0521.jpg';
import classNames from 'classnames';
import AppButton from 'components/AppButton';
import CirclePercentage from 'components/CirclePercentage';
import GalleryCard from 'components/GalleryCard';
import MenuTypeBox from 'components/MenuTypeBox';
import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import LineChart from './LineChart';
import styles from './styles.module.css';

const menuItemsData = [
  { title: '05.21.Morning', thumbnail: Morning0521DishJpg },
  { title: '05.21.Lunch', thumbnail: Lunch0521DishJpg },
  { title: '05.21.Dinner', thumbnail: Dinner0521DishJpg },
  { title: '05.21.Snack', thumbnail: Snack0521DishJpg },
  { title: '05.20.Morning', thumbnail: Morning0520DishJpg },
  { title: '05.20.Lunch', thumbnail: Lunch0520DishJpg },
  { title: '05.20.Dinner', thumbnail: Dinner0520DishJpg },
  { title: '05.20.Snack', thumbnail: Snack0520DishJpg },
];

const menuTypesData = [
  { id: 1, name: 'Morning', icon: DishTypeLogoSvg },
  { id: 2, name: 'Lunch', icon: DishTypeLogoSvg },
  { id: 3, name: 'Dinner', icon: DishTypeLogoSvg },
  { id: 4, name: 'Snack', icon: SnackLogoSvg },
];

export default function HomePage() {
  const [menuItems, setMenuItems] = useState(menuItemsData.map((it, idx) => ({ ...it, id: idx })));
  const [menuTypes, setMenuTypes] = useState(menuTypesData);
  const [selectedMenuTypeId, setSelectedMenuTypeId] = useState(null);

  const filteredMenuItems = useMemo(() => {
    if (!selectedMenuTypeId) return menuItems;
    const selectedMenuType = menuTypes.find(it => it.id === selectedMenuTypeId);
    return menuItems.filter(menuItem => menuItem.title.includes(selectedMenuType?.name || ''))
  }, [menuItems, selectedMenuTypeId])

  const handleLoadMoreMenuItem = () => {
    setMenuItems([...menuItems, ...menuItemsData].map((it, idx) => ({ ...it, id: idx })));
  }

  const handleSelectMenyType = (menuType: any) => {
    setSelectedMenuTypeId(menuType.id);
  }

  return (
    <div>
      <div className={classNames([styles['page-header'], 'mb-5'])}>
        <div className={styles['page-header__left']}>
          <div className={styles['circle-wrapper']}>
            <CirclePercentage value={75} />
          </div>
        </div>
        <div className={styles['page-header__right']}>
          <LineChart />
        </div>
      </div>
      <Container>
        <div className='row px-5'>
          {menuTypes.map((menuType) => (
            <div
              className='col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center'
              key={menuType.id}
            >
              <MenuTypeBox
                menuType={menuType}
                onClick={() => handleSelectMenyType(menuType)}
              />
            </div>
          ))}
        </div>
        <div className='row'>
          {filteredMenuItems.map((menuItem) => (
            <div
              className='col-sm-6 col-md-4 col-lg-3 mb-4'
              key={menuItem.id}
            >
              <GalleryCard item={menuItem} />
            </div>
          ))}
          <div className='col-12 text-center'>
            <AppButton label='記録をもっと見る' onClick={handleLoadMoreMenuItem} />
          </div>
        </div>
      </Container>
    </div>
  )
}
