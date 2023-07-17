

// Icons
import telegram from "../../images/home-page/footer/telegram.svg"
import youtube from "../../images/home-page/footer/youtube.svg"
import instagram from "../../images/home-page/footer/instagram.svg"
import facebook from "../../images/home-page/footer/facebook.svg"
import appleStore from "../../images/home-page/footer/apple-store.svg"
import googlePlayStore from "../../images/home-page/footer/google-play-store.svg"
import visa from "../../images/home-page/footer/visa.svg"
import masterCard from "../../images/home-page/footer/master-card.svg"

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTop__socialInfo}>
                        <div className={styles.footerTop__socialInfo_copmanyName}>Intelinvest <span>Intelligent investments</span></div>
                        <div className={styles.footerTop__socialInfo_socialLinks}>
                            <a target="_blank" rel="noopener noreferrer" href="https://t.me"><img src={telegram} alt="telegram"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com"><img src={youtube} alt="youtube"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"><img src={instagram} alt="instagram"></img></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"><img src={facebook} alt="facebook"></img></a>
                        </div>
                        <div className={styles.footerTop__socialInfo_applLinks}>
                            <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/app"><img src={appleStore} alt="Завантажте програму в App Store"></img>App Store</a>
                            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps"><img src={googlePlayStore} alt="Завантажте програму в Google Play"></img>Google Play</a>
                        </div>
                    </div>
                    <div className={styles.footerTop__links}>
                        <div className={styles.footerTop__links_title}>Продукт</div>
                        <a href="/intelinvest">Можливості</a>
                        <a href="/intelinvest">Інвестотека</a>
                        <a href="/intelinvest">Блог</a>
                        <a href="/intelinvest">Партнерам</a>
                        <a href="/intelinvest">Тарифи</a>
                        <a href="/intelinvest">Допомога</a>
                    </div>
                    <div className={styles.footerTop__links}>
                        <div className={styles.footerTop__links_title}>Документи</div>
                        <a href="/intelinvest">Ліцензійну угоду</a>
                        <a href="/intelinvest">Політика конфіденційності</a>
                    </div>
                    <div className={styles.footerTop__links}>
                        <p>OOO "Інтелінвест" ОГРН 1271632121270</p>
                        <p>ІПН 1613326205</p>
                    </div>
                </div>
            </div>
            <div className={styles.footerMiddle}>
                <div className={styles.wrapper}>
                    <p className={styles.footerMiddle__text}>ТОВ "Інтелінвест" використовує файли "cookie", з метою покращення якості продукту.
                        “Cookie” – це невеликі файли, які містять інформацію про попередні відвідування веб-сайту.
                        Якщо ви не бажаєте використовувати файли cookie, змініть налаштування браузера.</p>
                    <div className={styles.footerMiddle__paymentSystems}>
                        <img src={visa} alt="visa"></img>
                        <img src={masterCard} alt="masterCard"></img>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.footerBottom}>
                    <div className={styles.footerBottom__copyright}>
                        <p className={styles.footerBottom__copyright_links}>© Intelligent Investments 2012-2023 версія 3.7.5 збірка 256 від 2023-06-11</p>
                        <div className={styles.footerBottom__copyright_links}>
                            <a className={`${styles.footerBottom__copyright_link} ${styles.footerBottom__copyright_link_mail}`} href="mailto:web@intelinvest.com">Напишіть нам</a>
                            <a className={`${styles.footerBottom__copyright_link} ${styles.footerBottom__copyright_link_telegram}`} target="_blank" rel="noopener noreferrer" href="https://t.me">Telegram</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
