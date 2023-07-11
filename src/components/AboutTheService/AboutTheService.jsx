import AppStoreLogo from '../../images/home-page/about-the-service/apple-store.svg';
import GooglePlayLogo from '../../images/home-page/about-the-service/google-play-store.svg';

import styles from './AboutTheService.module.scss';

const AboutTheService = () => {
  return (
    <section id="about-the-service" className={styles.aboutTheService}>
      <div className={styles.wrapper}>
        <div className={styles.aboutTheService__container}>
          <h2 className={styles.aboutTheService__title}>Інтелектуальна заміна Excel та звітам брокера</h2>
          <p className={styles.aboutTheService__text}>Просто додавайте угоди з акціями та облігаціями – ваш дохід розрахується автоматично.
            Слідкуйте за вашим портфелем, вивчайте детальну аналітику та отримуйте важливі сповіщення з будь-якого пристрою.</p>
          <p className={styles.aboutTheService__text}>З мобільним додатком портфель завжди під рукою.</p>
          <div className={styles.appBtns}>
            <a className={styles.appBtn} href="https://apps.apple.com/ru/app"><img className={styles.appBtn__icon} src={AppStoreLogo} alt="App Store" /><span className={styles.appBtn__iconText} >App Store</span></a>
            <a className={styles.appBtn} href="https://play.google.com/store/apps"><img className={styles.appBtn__icon} src={GooglePlayLogo} alt="Google Play" /><span className={styles.appBtn__iconText} >Google Play</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheService;