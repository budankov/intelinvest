import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth/userSlice';
import { addTariffsPlan } from 'redux/tariffsPlan/tariffsPlanOperations';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Form from 'components/Form/Form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Icons
import { ReactComponent as GoogleAuth } from 'images/icons/google-icon.svg';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onLoginClick }) => {
  const today = new Date();

  const defaultTariffPlan = {
    typeSubscription: 'base',
    startSubscription: today,
    endSubscription: 'unlimited',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async ({ email, password }) => {
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Використовуйте діспатч для додавання тарифного плану
      await dispatch(addTariffsPlan(defaultTariffPlan));

      // Збереження інформації про користувача в Redux
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );

      navigate('/app');
      Notify.success('Ви успішно зареєструвались');
    } catch (error) {
      Notify.failure('Такий користувач вже існує');
    }
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    try {
      const { user } = await signInWithPopup(auth, provider);

      // Використовуйте діспатч для додавання тарифного плану
      await dispatch(addTariffsPlan(defaultTariffPlan));

      // Збереження інформації про користувача в Redux
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );

      navigate('/app');
      Notify.success(`${user.email} доброго дня`);
    } catch (error) {
      Notify.failure('Помилка під час авторизації через Google');
    }
  };

  return (
    <div className={styles.registerFormContainer}>
      <h2 className={styles.formTitle}>Реєстрація</h2>
      <Form title="Зареєструватися" handleClick={handleRegister} />
      <p className={styles.authScreenNavigation}>
        Вже є аккаунт?&nbsp;
        <button
          onClick={onLoginClick}
          className={styles.authScreenNavigationBtn}
        >
          Увійти
        </button>
      </p>
      <button onClick={handleGoogleLogin} className={styles.googleAuth}>
        <div className={styles.googleAuth__container}>
          <GoogleAuth className={styles.googleAuth__icon} />
          <span className={styles.googleAuth__title}>Увійти через Google</span>
        </div>
      </button>
    </div>
  );
};

export default RegisterForm;
