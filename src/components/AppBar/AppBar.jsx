import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
        <a className={styles.logo} href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className={styles.menu__icon}>
          <Hamburger toggled={menuOpen} toggle={handleToggleMenu} />
        </div>
        {menuOpen && (
          <div className={styles.overlay} onClick={handleToggleMenu} />
        )}
        <ul className={`${styles.nav__list} ${menuOpen ? styles.open : ''}`}>
          <li className={styles.nav__item}>
            <ScrollLink
              className={styles.nav__link}
              to="about-the-service"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              О сервісі
            </ScrollLink>
          </li>
          <li className={styles.nav__item}>
            <ScrollLink
              className={styles.nav__link}
              to="advantages"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Переваги
            </ScrollLink>
          </li>
          <li className={styles.nav__item}>
            <ScrollLink
              className={styles.nav__link}
              to="they-trust-us"
              onClick={closeMenu}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Нам довіряють
            </ScrollLink>
          </li>
          <li className={styles.nav__item}>
            <RouterLink
              className={styles.nav__link}
              to="/features"
              onClick={closeMenu}
            >
              Можливості
            </RouterLink>
          </li>
          <li className={styles.nav__item}>
            <RouterLink
              className={styles.nav__link}
              to="/login"
              onClick={closeMenu}
            >
              Увійти
            </RouterLink>
          </li>
          <li className={styles.nav__item}>
            <RouterLink
              className={`${styles.nav__link} ${styles.lastItem}`}
              to="/register"
              onClick={closeMenu}
            >
              Реєстрація
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
