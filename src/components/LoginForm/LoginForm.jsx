import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './Yup';

// Icons
import { ReactComponent as EyeOpen } from 'images/icons/eye-open.svg';
import { ReactComponent as EyeClosed } from 'images/icons/eye-closed.svg';

import styles from './LoginForm.module.scss';

const LoginForm = ({ onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = data => {
    // logIn(data);
    reset();
  };

  return (
    <div className={styles.loginFormContainer}>
      <h2 className={styles.formTitle}>Вхід</h2>
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
                  errors.password ? styles.error : ''
                } ${
                  watch('password') && !errors.password ? styles.success : ''
                }`}
                placeholder="Пароль"
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
              />
              <button
                className={styles.showPasswordButton}
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeClosed className={styles.passwordIcon} />
                ) : (
                  <EyeOpen className={styles.passwordIcon} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className={styles.errorsMassage}>{errors.password.message}</p>
            )}
          </label>
        </div>
        <button className={styles.authBtn} type="submit">
          Увійти
        </button>
        <p className={styles.authScreenNavigation}>
          Немає облікового запису?&nbsp;
          <button
            onClick={onRegisterClick}
            className={styles.authScreenNavigationBtn}
          >
            Зареєструватися
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
