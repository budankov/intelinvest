import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

  const scrollToElement = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

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
            <a
              className={styles.nav__link}
              href="/#about-the-service"
              onClick={() => {
                closeMenu();
                scrollToElement('about-the-service');
              }}
            >
              О сервісі
            </a>
          </li>
          <li className={styles.nav__item}>
            <a
              className={styles.nav__link}
              href="/#advantages"
              onClick={() => {
                closeMenu();
                scrollToElement('advantages');
              }}
            >
              Переваги
            </a>
          </li>
          <li className={styles.nav__item}>
            <a
              className={styles.nav__link}
              href="/#they-trust-us"
              onClick={() => {
                closeMenu();
                scrollToElement('they-trust-us');
              }}
            >
              Нам довіряють
            </a>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/features"
              onClick={closeMenu}
            >
              Можливості
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={styles.nav__link}
              to="/login"
              onClick={closeMenu}
            >
              Увійти
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              className={`${styles.nav__link} ${styles.lastItem}`}
              to="/register"
              onClick={closeMenu}
            >
              Реєстрація
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
