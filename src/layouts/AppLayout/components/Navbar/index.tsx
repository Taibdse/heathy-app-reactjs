import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './styles.module.css';
import LogoSvg from 'assets/img/logo.svg';
import NavbarEditSvg from 'assets/img/navbar-edit.svg';
import NavbarInfoSvg from 'assets/img/navbar-info.svg';
import NavbarRewardSvg from 'assets/img/navbar-reward.svg';
import MenuSvg from 'assets/img/icon_menu.svg';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const OFF_CANVAS_WIDTH = '280px';

export default function AppNavbar() {
  const expand = 'md';
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = (e: any) => {
    e.preventDefault();
    setShow(true);
  }

  const isMatchRoute = (route: string) => {
    return location.pathname.includes(route)
  }

  return (
    <>
      <Navbar expand={expand} variant="dark" className={`${styles.navbar}`}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={LogoSvg} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ width: OFF_CANVAS_WIDTH }}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link
                  as={Link}
                  to="/record"
                  className={classNames(styles['nav-link'], { [styles.active]: isMatchRoute('/record') })}
                >
                  <img src={NavbarEditSvg} className={styles['nav-link-icon']} />
                  <span className='ml-5'>自分の記録</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/blog"
                  className={classNames(styles['nav-link'], { [styles.active]: isMatchRoute('/blog') })}
                >
                  <img src={NavbarRewardSvg} className={styles['nav-link-icon']} />
                  <span className='ml-5'>チャレンジ</span>
                </Nav.Link>
                <Nav.Link href="#" className={styles['nav-link']}>
                  <img src={NavbarInfoSvg} className={styles['nav-link-icon']} />
                  <span className='ml-5'>お知らせ</span>
                </Nav.Link>
                <Nav.Link onClick={handleShow} href="#" className={styles['nav-link']}>
                  <img src={MenuSvg} className={styles['nav-link-icon']} />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className={`custom-off-canvas ${styles['menu-dropdown']}`}
        placement="end"
        style={{ width: OFF_CANVAS_WIDTH }}
        backdrop={false}
      >
        <Offcanvas.Header closeButton style={{ color: 'var(--primary-color)' }}>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className={styles['menu-dropdown-list']}>
            <div>自分の記録</div>
            <div>自分の記録</div>
            <div>自分の記録</div>
            <div>自分の記録</div>
            <div>自分の記録</div>
            <div>自分の記録</div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
