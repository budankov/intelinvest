import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react';

import styles from './AppBar.module.scss';

import logo from '../../images/index_logo.png';

const AppBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header className={styles.header}>
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
            <Link className={styles.nav__link} to="/" onClick={closeMenu}>
              О сервесі
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/" onClick={closeMenu}>
              Переваги
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/" onClick={closeMenu}>
              Нам довіряють
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link className={styles.nav__link} to="/" onClick={closeMenu}>
              Можливості
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link
              className={styles.nav__link}
              to="/cabinet"
              onClick={closeMenu}
            >
              Повернутися до портфелю
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
