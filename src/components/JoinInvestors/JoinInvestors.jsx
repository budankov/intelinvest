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
    <section className={styles.joinInvestors}>
      <div className={styles.wrapper}>
        <div className={styles.joinInvestors__container}>
          <h2 className={styles.joinInvestors__title}>Приєднуйтесь до більш ніж <span>300 000</span> інвесторів!</h2>
          <Button className={styles.joinInvestors__btn} type="button" onClick={clickBtnHero}>Почати користуватися <span>безкоштовно</span></Button>
        </div>
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
