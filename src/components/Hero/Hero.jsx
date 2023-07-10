import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.hero__title}>Облік та контроль ваших інвестицій</h1>
        <ul className={styles.hero__list}>
          <li className={styles.hero__item}>Додайте куплені акції та облігації</li>
          <li className={styles.hero__item}>Слідкуйте за портфелем</li>
          <li className={styles.hero__item}> Аналізуйте прибутковість</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
