import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Link as SrollLink } from 'react-scroll';
import { useAuth } from 'shared/hooks/useAuth';
import Modal from 'shared/components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './AppBar.module.scss';

import logo from '../../images/index_logo.png';

const AppBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const { isAuth } = useAuth();
  console.log(isAuth);

  const handleModal = componentName => {
    setSelectedComponent(componentName);
    setShowModal(true);
  };

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
    setShowModal(false);
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
        <div className={`${styles.logoWrapper} ${menuOpen ? styles.active : ''}`}>
          <a className={styles.logo} href="/intelinvest">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className={`${styles.nav__wrapper} ${menuOpen ? styles.active : ''}`}>
          <ul className={`${styles.nav__list} ${menuOpen ? styles.hidden : ''}`}>
            <li className={styles.nav__item}>
              <SrollLink
                className={styles.nav__link}
                to="about-the-service"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                О сервісі
              </SrollLink>
            </li>
            <li className={styles.nav__item}>
              <SrollLink
                className={styles.nav__link}
                to="advantages"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
              >
                Переваги
              </SrollLink>
            </li>
            <li className={styles.nav__item}>
              <SrollLink
                className={styles.nav__link}
                to="they-trust-us"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
              >
                Нам довіряють
              </SrollLink>
            </li>
            <li className={styles.nav__item}>
              <SrollLink
                className={styles.nav__link}
                to="features"
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Можливості
              </SrollLink>
            </li>
          </ul>
          {isAuth ? (
            <Link className={styles.btnRegister} to="/app">
              Повернутись до портфелю
            </Link>
          ) : (
            <div className={`${styles.nav__btnAuth} ${menuOpen ? styles.active : ''}`}>
              <button
                className={`${styles.btnSignIn} ${menuOpen ? styles.active : ''}`}
                type="button"
                onClick={() => handleModal('LoginForm')}
              >
                Увійти
              </button>
              <button
                className={`${styles.btnRegister} ${menuOpen ? styles.active : ''}`}
                type="button"
                onClick={() => handleModal('RegisterForm')}
              >
                Реєстрація
              </button>
            </div>
          )}

        </div>
        <button className={!menuOpen ? styles.btnHamburgerMenu : `${styles.btnHamburgerMenu} ${styles.active}`} onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      {menuOpen && (
        <div className={styles.overlay} onClick={handleToggleMenu} />
      )}
      {
        showModal && (
          <Modal onClose={() => setShowModal(false)}>
            {selectedComponent === 'LoginForm' ? (
              <LoginForm
                onRegisterClick={() => setSelectedComponent('RegisterForm')}
              />
            ) : (
              <RegisterForm
                onLoginClick={() => setSelectedComponent('LoginForm')}
              />
            )}
          </Modal>
        )
      }
    </header >
  );
};

export default AppBar;
