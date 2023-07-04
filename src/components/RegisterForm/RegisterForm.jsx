import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/auth/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from 'components/Form/Form';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onLoginClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
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
    </div>
  );
};

export default RegisterForm;
