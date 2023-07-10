import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1>Облік та контроль ваших інвестицій</h1>
        <ul>
          <li>Додайте куплені акції та облігації</li>
          <li>Слідкуйте за портфелем</li>
          <li> Аналізуйте прибутковість</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
