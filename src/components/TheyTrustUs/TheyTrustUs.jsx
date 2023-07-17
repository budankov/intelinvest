import styles from './TheyTrustUs.module.scss';

const TheyTrustUs = () => {
  return (
    <div id="they-trust-us" className={styles.wrapper}>
      <h2 className={styles.theyTrustUs__title}>Чому нам довіряють</h2>
      <div className={styles.theyTrustUs__list}>
        <div className={styles.theyTrustUs__item}>
          <h3 className={styles.theyTrustUs__subTitle}>Понад дев'ять років роботи</h3>
          <p className={styles.theyTrustUs__text}>Понад 100 млн. долларів активів знаходиться у портфелях наших користувачів</p>
        </div>
        <div className={styles.theyTrustUs__item}>
          <h3 className={styles.theyTrustUs__subTitle}>Команда професіоналів</h3>
          <p className={styles.theyTrustUs__text}>Кожен розробник сервісу має брокерський рахунок та досвід на біржі</p>
        </div>
        <div className={styles.theyTrustUs__item}>
          <h3 className={styles.theyTrustUs__subTitle}>Повна анонімність</h3>
          <p className={styles.theyTrustUs__text}>Ми не вимагаємо жодних документів і не зберігаємо ваші персональні дані</p>
        </div>
        <div className={styles.theyTrustUs__item}>
          <h3 className={styles.theyTrustUs__subTitle}>Оперативна підтримка</h3>
          <p className={styles.theyTrustUs__text}>Поставте питання на <a href="mailto:web@intelinvest.com">web@intelinvest.com</a> і ми гарантовано відповімо вам протягом 24 годин
          </p>
        </div>
      </div>
    </div>
  );
};
export default TheyTrustUs;
