import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import Modal from 'shared/components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Button from 'components/Button/Button';

import styles from './JoinInvestors.module.scss';

const JoinInvestors = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const navigate = useNavigate();

  const clickBtnHero = () => {
    if (isAuth) {
      navigate('/app');
    } else {
      setShowModal(true);
    }
  };

  const { isAuth } = useAuth();
  return (
    <section className={styles.importTransactions}>
      <div className={styles.importTransactions__wrapper}>
        <div className={styles.wrapper}>
          <div className={styles.importTransactions__container}>
            <h2 className={styles.importTransactions__title}>Імпорт угод від 18 брокерів</h2>
            <p className={styles.importTransactions__text}>Заощаджуємо час за рахунок швидкого завантаження угод від брокера в один крок.</p>
            <Button className={styles.importTransactions__btn} type="button" onClick={clickBtnHero}>Імпортувати угоди</Button>
          </div></div>
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
export default JoinInvestors;
