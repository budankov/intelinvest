import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from 'components/Form/Form';

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
      })
      .catch(() => alert('Invalid user!'));
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
    </div>
  );
};

export default LoginForm;
