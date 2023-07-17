import { useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import gogoladze from '../../images/home-page/follow-popular-investors/photo-gogoladze.svg'
import tolstyakov from '../../images/home-page/follow-popular-investors/photo-tolstyakov.svg'
import yuhtenko from '../../images/home-page/follow-popular-investors/photo-yuhtenko.svg'
import styles from './FollowPopularInvestors.module.scss';

const FollowPopularInvestors = () => {
  const navigate = useNavigate();

  const handleInvestorsCardClick = (page) => {
    if (page === 1) {
      Notify.info(`Портфель Ольги Гоголадзе скоро буде доступний`);
      navigate('/public-portfolio/99520');
    } else if (page === 2) {
      Notify.info(`Портфель Кіри Юхтенко скоро буде доступний`);
      navigate('/public-portfolio/99521');
    } else if (page === 3) {
      Notify.info(`Портфель Дмитра Толстякова скоро буде доступний`);
      navigate('/public-portfolio/99522');
    }
  };
  return (
    <section className={styles.followPopularInvestors}>
      <div className={styles.wrapper}>
        <h2 className={styles.followPopularInvestors__title}>Слідкуйте за популярними інвесторами</h2>
        <p className={styles.followPopularInvestors__text}>Використовуйте публічні портфелі, <br />щоб скористатися знаннями досвідчених інвесторів</p>
        <div className={styles.investorsCards}>
          <div className={styles.investorsCard} onClick={() => handleInvestorsCardClick(1)}>
            <div className={styles.investorsCard__top}>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарна вартість</span>
                <span className={styles.investorsCard__top__textRight}>1 692 429,30 ₴</span>
              </div>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарний прибуток</span>
                <span className={styles.investorsCard__top__textRight}>
                  <div className={styles.investorsCard__top__textRight_column}>
                    <span>671 038,76 ₴</span>
                    <span className={styles.percent}><span>↑</span> 39,65 %</span>
                  </div>
                </span>
              </div>
              <div className={styles.investorsCard__top__row}>
                <span className={styles.investorsCard__top__textLeft}>Середньорічна прибутковість</span>
                <span className={styles.investorsCard__top__textRight}>26,60 %</span>
              </div>
            </div>
            <div className={styles.investorsCard__titile}>
              <img className={styles.investorsCard__titile_img} src={gogoladze} alt="gogoladze" />
              <div>
                <span className={styles.investorsCard__titile_header}>Ольга Гоголадзе</span><br />
                <span className={styles.investorsCard__titile_description}>PRO.FINANSY</span>
              </div>
            </div>
            <div className={styles.investorsCard__bottom}>
              Формую пенсійне накопичення (точніше його карбованцеву частину), яке вкладається в акції на російських біржах. Частка акцій – 85%.
            </div>
          </div>
          <div className={styles.investorsCard} onClick={() => handleInvestorsCardClick(2)}>
            <div className={styles.investorsCard__top}>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарна вартість</span>
                <span className={styles.investorsCard__top__textRight}>1 232 639,14 ₴</span>
              </div>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарний прибуток</span>
                <span className={styles.investorsCard__top__textRight}>
                  <div className={styles.investorsCard__top__textRight_column}>
                    <span>315 390,81 ₴</span>
                    <span className={styles.percent}><span>↑</span> 35,76 %</span>
                  </div>
                </span>
              </div>
              <div className={styles.investorsCard__top__row}>
                <span className={styles.investorsCard__top__textLeft}>Середньорічна прибутковість</span>
                <span className={styles.investorsCard__top__textRight}>35,76 %</span>
              </div>
            </div>
            <div className={styles.investorsCard__titile}>
              <img className={styles.investorsCard__titile_img} src={yuhtenko} alt="yuhtenko" />
              <div>
                <span className={styles.investorsCard__titile_header}>Кіра Юхтенко</span><br />
                <span className={styles.investorsCard__titile_description}>InvestFuture</span>
              </div>
            </div>
            <div className={styles.investorsCard__bottom}>
              Щотижня інвестую 10 т. ₴ в індивідуальні акції США та України з горизонтом інвестування від 10 років. Частка акцій – 95%.
            </div>
          </div>
          <div className={styles.investorsCard} onClick={() => handleInvestorsCardClick(3)}>
            <div className={styles.investorsCard__top}>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарна вартість</span>
                <span className={styles.investorsCard__top__textRight}>458 261,02 ₴</span>
              </div>
              <div className={`${styles.investorsCard__top__row} ${styles.border}`}>
                <span className={styles.investorsCard__top__textLeft}>Сумарний прибуток</span>
                <span className={styles.investorsCard__top__textRight}>
                  <div className={styles.investorsCard__top__textRight_column}>
                    <span>82 742,62 ₴</span>
                    <span className={styles.percent}><span>↑</span> 18,06 %</span>
                  </div>
                </span>
              </div>
              <div className={styles.investorsCard__top__row}>
                <span className={styles.investorsCard__top__textLeft}>Середньорічна прибутковість</span>
                <span className={styles.investorsCard__top__textRight}>21,51 %</span>
              </div>
            </div>
            <div className={styles.investorsCard__titile}>
              <img className={styles.investorsCard__titile_img} src={tolstyakov} alt="tolstyakov" />
              <div>
                <span className={styles.investorsCard__titile_header}>Дмитро Толстяков</span><br />
                <span className={styles.investorsCard__titile_description}>FIN-RA</span>
              </div>
            </div>
            <div className={styles.investorsCard__bottom}>
              Щотижня інвестую 4,2 т. ₴ у дитячий портфель через амереканські біржі. Частка ETF 70%.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FollowPopularInvestors;
