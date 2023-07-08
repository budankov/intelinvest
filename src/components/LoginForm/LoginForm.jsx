import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth/userSlice';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Form from 'components/Form/Form';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Icons
import { ReactComponent as GoogleAuth } from 'images/icons/google-icon.svg';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onRegisterClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/app');
        Notify.success(`${user.email} доброго дня`);
      })
      .catch(() => Notify.failure('Недійсний користувач!'));
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/app');
        Notify.success(`${user.email} доброго дня`);
      })
      .catch(() => Notify.failure('Помилка під час авторизації через Google'));
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2 className={styles.formTitle}>Вхід</h2>
      <Form title="Увійти" handleClick={handleLogin} />
      <p className={styles.authScreenNavigation}>
        Немає облікового запису?&nbsp;
        <button
          onClick={onRegisterClick}
          className={styles.authScreenNavigationBtn}
        >
          Зареєструватися
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

export default LoginForm;
