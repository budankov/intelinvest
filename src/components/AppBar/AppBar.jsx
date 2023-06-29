import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';

import styles from './AppBar.module.scss';

import logo from '../../images/index_logo.png';

const AppBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.fixed : ''}`}>
      <nav className={styles.nav__container}>
        <div>
          <a className={styles.logo} href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={styles.nav__wrapper}>
          <div className={styles.menu__icon}>
            <Hamburger toggled={menuOpen} toggle={handleToggleMenu} />
          </div>
          {menuOpen && (
            <div className={styles.overlay} onClick={handleToggleMenu} />
          )}
          <ul className={`${styles.nav__list} ${menuOpen ? styles.open : ''}`}>
            <li className={styles.nav__item}>
              <Link
                className={styles.nav__link}
                to="about-the-service"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                О сервісі
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link
                className={styles.nav__link}
                to="advantages"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Переваги
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link
                className={styles.nav__link}
                to="they-trust-us"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Нам довіряють
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link
                className={styles.nav__link}
                to="features"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Можливості
              </Link>
            </li>
          </ul>
          <div className={styles.nav__btn}>
            <button type="button" className={styles.btnSignIn}>
              Увійти
            </button>
            <button type="button" className={styles.btnRegister}>
              Реєстрація
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
