import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import Modal from 'shared/components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Button from 'components/Button/Button';

import styles from './Hero.module.scss';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const navigate = useNavigate(); // Використовуйте useNavigate замість useHistory

  const clickBtnHero = () => {
    if (isAuth) {
      navigate('/app'); // Використовуйте navigate для переходу на /app
    } else {
      setShowModal(true);
    }
  };

  const { isAuth } = useAuth();

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.hero__title}>Облік та контроль ваших інвестицій!</h1>
        <ul className={styles.hero__list}>
          <li className={styles.hero__item}>Додайте куплені акції та облігації</li>
          <li className={styles.hero__item}>Слідкуйте за портфелем</li>
          <li className={styles.hero__item}>Аналізуйте прибутковість</li>
        </ul>
        <Button className={styles.hero__btn} type="button" onClick={clickBtnHero}>
          Почати користуватися <span>безкоштовно</span>
        </Button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {selectedComponent === 'LoginForm' ? (
            <LoginForm onRegisterClick={() => setSelectedComponent('RegisterForm')} />
          ) : (
            <RegisterForm onLoginClick={() => setSelectedComponent('LoginForm')} />
          )}
        </Modal>
      )}
    </section>
  );
};

export default Hero;
