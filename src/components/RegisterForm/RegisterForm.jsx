import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './Yup';

// Firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { app, googleAuthProvider } from 'shared/api/firebaseApi';

// Icons
import { ReactComponent as EyeOpen } from 'images/icons/eye-open.svg';
import { ReactComponent as EyeClosed } from 'images/icons/eye-closed.svg';

import styles from './RegisterForm.module.scss';

const RegisterForm = ({ onLoginClick }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(username => {
      if (username != null) {
        setUser(username);
      }
    });

    return unsubscribe;
  }, [auth]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const watchPassword1 = watch('password1', '');
  const watchPassword2 = watch('password2', '');

  const validatePassword = () => {
    return watchPassword1 === watchPassword2 || "Passwords don't match";
  };

  const onSubmit = ({ email, password1 }) => {
    createUserWithEmailAndPassword(auth, email, password1)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        navigate('/app', { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(credentials => {
        const user = credentials.user;
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className={styles.registerFormContainer}>
      <h2 className={styles.formTitle}>Реєстрація</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formLabelConteiner}>
          <label className={styles.formLabel}>
            <input
              className={`${styles.formInput} ${
                errors.email ? styles.error : ''
              } ${watch('email') && !errors.email ? styles.success : ''}`}
              placeholder="Ел. пошта"
              {...register('email')}
              type="email"
            />
            {errors.email && (
              <p className={styles.errorsMassage}>{errors.email.message}</p>
            )}
          </label>
          <label className={styles.formLabel}>
            <div className={styles.formLabelPasswordConteiner}>
              <input
                className={`${styles.formInput} ${
                  errors.password1 ? styles.error : ''
                } ${
                  watch('password1') && !errors.password1 ? styles.success : ''
                }`}
                placeholder="Пароль"
                {...register('password1', {
                  required: true,
                })}
                type={showPassword1 ? 'text' : 'password'}
              />
              <button
                className={styles.showPasswordButton}
                type="button"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? (
                  <EyeClosed className={styles.passwordIcon} />
                ) : (
                  <EyeOpen className={styles.passwordIcon} />
                )}
              </button>
            </div>
            {errors.password1 && (
              <p className={styles.errorsMassage}>{errors.password1.message}</p>
            )}
          </label>
          <label className={styles.formLabel}>
            <div className={styles.formLabelPasswordConteiner}>
              <input
                className={`${styles.formInput} ${
                  errors.password2 ? styles.error : ''
                } ${
                  watch('password2') && !errors.password2 ? styles.success : ''
                }`}
                placeholder="Підтвердьте пароль"
                {...register('password2', { validate: validatePassword })}
                type={showPassword2 ? 'text' : 'password'}
              />
              <button
                className={styles.showPasswordButton}
                type="button"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? (
                  <EyeClosed className={styles.passwordIcon} />
                ) : (
                  <EyeOpen className={styles.passwordIcon} />
                )}
              </button>
            </div>

            {errors.password2 && (
              <p className={styles.errorsMassage}>{errors.password2.message}</p>
            )}
          </label>
        </div>
        <button className={styles.authBtn} type="submit">
          Зареєструватися
        </button>
        <button className={styles.authBtn} onClick={handleGoogleSignIn}>
          Увійти через Google
        </button>
        <p className={styles.authScreenNavigation}>
          Вже є аккаунт?&nbsp;
          <button
            onClick={onLoginClick}
            className={styles.authScreenNavigationBtn}
          >
            Увійти
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
