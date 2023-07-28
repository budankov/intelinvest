import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { currency, customStyles } from './CurrencyCustom';

// Icons
import { ReactComponent as ArrowIcon } from '../../images/side-bar/arrow_icon.svg'
import { ReactComponent as BriefcaseСashIcon } from '../../images/side-bar/briefcase_cash_icon.svg';

import styles from './AppTopBar.module.scss';

const AppTopBar = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);

    const dispatch = useDispatch();

    const openSideBar = useSelector((state) => state.open);

    const handleCurrencyChange = (selectedOption) => {
        setSelectedCurrency(selectedOption);
        dispatch({ type: 'SET_SELECTED_CURRENCY', payload: selectedOption });
    };

    const notificationPopUp = () => {
        Notify.info('Цей компонент на стадії розробки, вибачте за незручності.');
    }

    return (
        <div className={`${styles.appTopBar} ${openSideBar ? styles.activeSideBar : ''}`}>
            {/* <div className={styles.appTopBar}> */}
            <div className={styles.appTopBar__leftPart} >
                <div className={styles.portfolioSelect}>
                    <BriefcaseСashIcon className={styles.portfolioSelect__icon} />
                </div>
                <div className={styles.portfolioSelectNameBlock}>
                    <p className={styles.portfolioSelectNameBlock__title}>Портфель за замовчування</p>
                    <p className={styles.portfolioSelectNameBlock__text}>Фондовий</p>
                </div>
                <Select options={currency} value={selectedCurrency} onChange={handleCurrencyChange} styles={customStyles} />
            </div>
            <div className={styles.appTopBar__rightPart}>
                <button className={styles.fillter} onClick={notificationPopUp}>
                    <span className={styles.fillter__title}>Глобальний фільтр</span>
                    <ArrowIcon className={styles.fillter__icon} />
                </button>
                <button className={styles.import} onClick={notificationPopUp}>Імпорт</button>
            </div>
        </div>
    );
};

export default AppTopBar;
