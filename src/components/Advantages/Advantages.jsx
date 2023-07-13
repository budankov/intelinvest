import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import Modal from 'shared/components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Button from 'components/Button/Button';

import styles from './Advantages.module.scss';

const Advantages = () => {
  const [showModalLinkMore, setShowModalLinkMore] = useState(false);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedText, setSelectedText] = useState('');

  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const openModal = (text) => {
    setSelectedText(text);
    setShowModalLinkMore(true);
  };

  const clickBtnStartUse = () => {
    if (isAuth) {
      navigate('/app');
    } else {
      setShowModalLinkMore(false);
      setShowModalAuth(true);
    }
  };

  const text1 = 'Привіт світ 1';
  const text2 = 'Привіт світ 2';

  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.wrapper}>
        <div className={styles.advantages__сontainer}>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              <h2 className={styles.advantages__title}>Заголовок 1</h2>
              <p className={styles.advantages__text}>
                Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam quibusdam ducimus? Suscipit et, sit sequi tempora laudantium quaerat. Esse adipisci non repudiandae eos magni sint ullam incidunt, tenetur repellendus.
              </p>
              <button type="button" onClick={() => openModal(text1)}>
                Дізнатись більше
              </button>
            </div>
            <div className={styles.advantages__image_block}></div>
          </div>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              <h2 className={styles.advantages__title}>Заголовок 2</h2>
              <p className={styles.advantages__text}>
                Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam quibusdam ducimus? Suscipit et, sit sequi tempora laudantium quaerat. Esse adipisci non repudiandae eos magni sint ullam incidunt, tenetur repellendus.
              </p>
              <button type="button" onClick={() => openModal(text2)}>
                Дізнатись більше
              </button>
            </div>
            <div className={styles.advantages__image_block}></div>
          </div>
        </div>
      </div>

      {showModalLinkMore && (
        <Modal onClose={() => setShowModalLinkMore(false)}>
          <div className={styles.linkMore}>
            <div>
              <p className={styles.linkMore__text}>{selectedText}</p>
              <Button className={styles.hero__btn} type="button" onClick={clickBtnStartUse}>
                Почати користуватися <span>безкоштовно</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {showModalAuth && (
        <Modal onClose={() => setShowModalAuth(false)}>
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

export default Advantages;
