import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import Modal from 'shared/components/Modal/Modal';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import Button from 'components/Button/Button';

import styles from './Advantages.module.scss';

const Advantages = () => {
  const [showModalLinkMore, setShowModalLinkMore] = useState(false);
  const [showModalAuth, setShowModalAuth] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth >= 768);

  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const openModal = (text) => {
    setSelectedText(text);
    setShowModalLinkMore(true);
  };

  const clickBtnStartUse = () => {
    if (isAuth) {
      navigate('/app');
    } else {
      setShowModalLinkMore(false);
      setShowModalAuth(true);
    }
  };


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowWidth)

  const textTime = (
    <>
      <span>Якщо ви торгуєте через <b>Interactive Brokers</b>, користуєтеся послугами <b>Альфа-Банку</b>, <b>Укрбізнесбанку</b>, Фінансової компанії "<b>ФІНАМ</b>", <b>Ощадбанку</b>, <b>Промінвестбанку</b>, <b>ВТБ Банку</b>, <b>Укралсибу</b>, <b>Альпарі Україна</b>, <b>Кредит-Інвест Банку</b>, <b>ITI Капітал</b> або <b>Тас-Інвест</b>, то ви можете в автоматичному режимі перенести інформацію про портфель на сервіс. Для цього достатньо завантажити звіт про угоди та завантажити його на сторінці <b>"Імпорт"</b> після реєстрації.</span><br /><br />
      <span>Нові угоди - чи то зарахування дивідендів, чи то продаж облігацій - додаються в пару кліків з будь-якої сторінки сервісу.</span>
    </>
  );


  const textAnalytics = (
    <>
      <span>У вашому розпорядженні детальна аналітика, можливість об'єднувати різні брокерські рахунки та ІІС в один портфель для перегляду агрегованої інформації. Графік вартості портфеля, діаграми розподілу активів (за типом, галузям).</span >
    </>);

  const textSet = (
    <>
      <span>Простий і зрозумілий інтерфейс дозволяє зосередитися тільки на важливій інформації.</span><br /><br />
      <span>Гнучке налаштування відображених колонок у таблицях дозволяє контролювати те, що потрібно саме вам.</span ><br /><br />
      <span>Приховуйте непотрібні блоки з даними.</span ></>
  );

  const textTrueIndicators = (
    <>
      <span>Брокер відображає лише частину даних, необхідних для керування портфелем.</span><br /><br />
      <span>Дізнайтеся, які показники недоступні в особистому кабінеті Вашого брокера.</span>
    </>
  )

  const textChat = (
    <>
      <span>Відкрийте публічний доступ до портфеля та поділіться посиланням з колегами, друзями чи передплатниками!</span><br /><br />
      <span>Гнучке налаштування блоків, які ви хочете показати.</span><br /><br />
      <span>Використовуйте динамічні блоки Акції, Облігації, Графік вартості, Діаграми прямо у себе на сайті або блозі!</span>
    </>
  )

  return (
    <section id="advantages" className={styles.advantages}>
      <div className={styles.wrapper}>
        <div className={styles.advantages__сontainer}>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              {windowWidth && (
                <div className={`${styles.advantages__icon} ${styles.time}`}></div>
              )}
              <h2 className={styles.advantages__title}>Почніть всього за пару хвилин</h2>
              <p className={styles.advantages__text}>
                Одночасно імпортуйте всі свої угоди з брокерського терміналу або Excel. Додайте нові угоди до кількох кліків. Усе
                решта буде розраховано автоматично.</p>
              <button className={styles.advantages__linkMore} type="button" onClick={() => openModal(textTime)}>
                Дізнатись більше
              </button>
            </div>
            {windowWidth && (
              <div className={`${styles.advantages__image_block} ${styles.time}`}></div>
            )}
          </div>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              {windowWidth && (
                <div className={`${styles.advantages__icon} ${styles.analytics}`}></div>
              )}
              <h2 className={styles.advantages__title}>Повний контроль над портфелем</h2>
              <p className={styles.advantages__text}>
                Спостерігайте за прибутковістю ваших паперів та їх часткою в портфелі. Вивчайте графіки, оцінюйте прибуток та комісії. Тепер кожна копійка під вашим контролем.</p>
              <button className={styles.advantages__linkMore} type="button" onClick={() => openModal(textAnalytics)}>
                Дізнатись більше
              </button>
            </div>
            {windowWidth && (
              <div className={`${styles.advantages__image_block} ${styles.analytics}`}></div>
            )}
          </div>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              {windowWidth && (
                <div className={`${styles.advantages__icon} ${styles.set}`}></div>
              )}
              <h2 className={styles.advantages__title}>Налаштовуйте під себе</h2>
              <p className={styles.advantages__text}>
                Бажаєте бачити поточну прибутковість чи дивідендну? Діаграму чи таблицю? Гнучкий і простий інтерфейс дозволить переглядати дані, які потрібні саме вам</p>
              <button className={styles.advantages__linkMore} type="button" onClick={() => openModal(textSet)}>
                Дізнатись більше
              </button>
            </div>
            {windowWidth && (
              <div className={`${styles.advantages__image_block} ${styles.set}`}></div>
            )}
          </div>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              {windowWidth && (
                <div className={`${styles.advantages__icon} ${styles.true_indicators}`}></div>
              )}
              <h2 className={styles.advantages__title}>Прозорі дані</h2>
              <p className={styles.advantages__text}>
                Отримайте більше відкритих та зрозумілих показників порівняно з вашим брокером. Повні дані допоможуть приймати виважені рішення.</p>
              <button className={styles.advantages__linkMore} type="button" onClick={() => openModal(textTrueIndicators)}>
                Дізнатись більше
              </button>
            </div>
            {windowWidth && (
              <div className={`${styles.advantages__image_block} ${styles.true_indicators}`}></div>
            )}
          </div>
          <div className={styles.advantages__block}>
            <div className={styles.advantages__text_block}>
              {windowWidth && (
                <div className={`${styles.advantages__icon} ${styles.chat}`}></div>
              )}
              <h2 className={styles.advantages__title}>Діліться успіхами</h2>
              <p className={styles.advantages__text}>
                Зробіть портфель публічним та виберіть лише те, що хочете показати оточуючим. Вставте банер із показниками портфеля у ваш блог.</p>
              <button className={styles.advantages__linkMore} type="button" onClick={() => openModal(textChat)}>
                Дізнатись більше
              </button>
            </div>
            {windowWidth && (
              <div className={`${styles.advantages__image_block} ${styles.chat}`}></div>
            )}
          </div>
        </div>
      </div>

      {showModalLinkMore && (
        <Modal onClose={() => setShowModalLinkMore(false)}>
          <div className={styles.linkMore}>
            <div>
              <p className={styles.linkMore__text}>{selectedText}</p>
              <Button className={styles.linkMore__btn} type="button" onClick={clickBtnStartUse}>
                Почати користуватися <span>безкоштовно</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}
      {showModalAuth && (
        <Modal onClose={() => setShowModalAuth(false)}>
          {selectedComponent === 'LoginForm' ? (
            <LoginForm onRegisterClick={() => setSelectedComponent('RegisterForm')} />
          ) : (
            <RegisterForm onLoginClick={() => setSelectedComponent('LoginForm')} />
          )}
        </Modal>
      )}
    </section>
  );
};

export default Advantages;
