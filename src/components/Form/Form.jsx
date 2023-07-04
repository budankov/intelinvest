import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './Yup';

// Icons
import { ReactComponent as EyeOpen } from 'images/icons/eye-open.svg';
import { ReactComponent as EyeClosed } from 'images/icons/eye-closed.svg';

import styles from './Form.module.scss';

const Form = ({ title, handleClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    handleClick(data);
    reset();
  };

  return (
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
              } ${watch('password') && !errors.password ? styles.success : ''}`}
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
        {title}
      </button>
    </form>
  );
};

export default Form;
