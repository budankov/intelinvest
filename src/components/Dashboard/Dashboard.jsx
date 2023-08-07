import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
    selectTotalCurrentValue,
    selectTotalProfitability,
    selectTotalProfitabilityPercentage,
    selectBestStock,
} from '../../redux/stocksDashboard/stocksDashboardSlice.js';
import { selectExchangeRate } from 'redux/currencyConverter/currencyConverterSlice';
import Popup from 'reactjs-popup';

// Icons
import { ReactComponent as InfoIcon } from '../../images/icons/info-icon.svg'

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    const exchangeRate = useSelector(selectExchangeRate);
    const totalCurrentValue = useSelector(selectTotalCurrentValue);
    const totalProfitability = useSelector(selectTotalProfitability);
    const totalProfitabilityPercentage = useSelector(selectTotalProfitabilityPercentage);
    const bestStock = useSelector(selectBestStock);
    const selectedCurrency = useSelector(state => state.selectedCurrency.value);
    const currentCurrency = selectedCurrency ? selectedCurrency : 'USD';

    const currencySymbols = useMemo(() => ({
        USD: '$',
        EUR: '€',
        GBP: '£',
        UAH: '₴'
    }), []);

    return (
        <div className={styles.dashboard__wrapper}>
            <div className={styles.dashboard__item}>
                <p className={styles.dashboard__title}>Вартість
                    <Popup
                        trigger={<InfoIcon className={styles.tooltipIcon} />}
                        position="bottom center"
                        on="hover"
                    >
                        <div className={styles.tooltipContent}>
                            Це загальна поточна вартість всіх активів в портфелі.
                        </div>
                    </Popup>
                </p>
                <p className={styles.dashboard__value}>
                    {(totalCurrentValue * exchangeRate).toFixed(2)}{currencySymbols[currentCurrency]}
                </p>
            </div>
            <div className={`${styles.dashboard__item} ${styles.border}`}>
                <p className={styles.dashboard__title}>Сумарний прибуток
                    <Popup
                        trigger={<InfoIcon className={styles.tooltipIcon} />}
                        position="bottom center"
                        on="hover"
                    >
                        <div className={styles.tooltipContent}>
                            Це загальна прибуток з всіх активів в портфелі. Відображає на скільки ваш портфель в плюсі/мінусі від вкладених коштів.
                        </div>
                    </Popup>
                </p>
                <p className={styles.dashboard__value}>
                    {(totalProfitability * exchangeRate).toFixed(2)}{currencySymbols[currentCurrency]}
                </p>
            </div>
            <div className={`${styles.dashboard__item} ${styles.border}`}>
                <p className={styles.dashboard__title}>Дохідність
                    <Popup
                        trigger={<InfoIcon className={styles.tooltipIcon} />}
                        position="bottom center"
                        on="hover"
                    >
                        <div className={styles.tooltipContent}>
                            Прибуток портфелю по відношеню до вкладених коштів.
                        </div>
                    </Popup>
                </p>
                <p className={styles.dashboard__value}>
                    <span className={totalProfitabilityPercentage >= 0 ? styles.greenText : styles.redText}>{totalProfitabilityPercentage}%</span>
                </p>
            </div>
            <div className={`${styles.dashboard__item} ${styles.border}`}>
                <p className={styles.dashboard__title}>Кращий актив
                    <Popup
                        trigger={<InfoIcon className={styles.tooltipIcon} />}
                        position="bottom center"
                        on="hover"
                    >
                        <div className={styles.tooltipContent}>
                            Відображає найкращий прибутковий актив з портфелю, його назву і відсоток.
                        </div>
                    </Popup>
                </p>
                <p className={styles.dashboard__value}>{bestStock.name}: <span className={bestStock.percentage >= 0 ? styles.greenText : styles.redText}>{bestStock.percentage}%</span></p>
            </div>
        </div>
    );
};

export default Dashboard;
