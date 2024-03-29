import React, { useState, useEffect } from 'react';
import { addMonths, addYears } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { changeTariffsPlan } from 'redux/tariffsPlan/tariffsPlanOperations';
import { fetchTariffsPlan } from 'redux/tariffsPlan/tariffsPlanOperations';

import styles from './Tariffs.module.scss';

const Tariffs = () => {
    const today = new Date();
    const nextMonth = addMonths(today, 1);
    const nextYear = addYears(today, 1);

    const [subscription, setSubscription] = useState({
        typeSubscription: 'base', // Тип підписки за замовчуванням
        startSubscription: today, // Початок підписки за замовчуванням (сьогодні)
        endSubscription: 'unlimited', // Кінець підписки за замовчуванням (необмежений)
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTariffsPlan());
    }, [dispatch]);

    const tariffsPlan = useSelector((state) => state.tariffsPlan.tariffsPlan);
    if (tariffsPlan) {
        const firstTariff = tariffsPlan[0];
        console.log(firstTariff);
    }

    // Решта вашого коду

    // Функція для обробки зміни типу підписки
    const handleSubscriptionChange = (event) => {
        const { value } = event.target;

        // Якщо обрано "unlimited", то змінюємо тип підписки на "advanced"
        if (value === 'unlimited') {
            setSubscription((prevSubscription) => ({
                ...prevSubscription,
                typeSubscription: 'advanced',
            }));
        } else {
            setSubscription((prevSubscription) => ({
                ...prevSubscription,
                typeSubscription: value,
            }));
        }
    };

    // Функція для обробки зміни тривалості підписки
    const handleDurationChange = (event) => {
        const { value } = event.target;
        let endSubscription;

        // Встановлюємо кінець підписки відповідно до обраної тривалості
        if (value === 'month') {
            endSubscription = nextMonth;
        } else if (value === 'year') {
            endSubscription = nextYear;
        } else {
            endSubscription = 'unlimited'; // Тривалість "unlimited"
        }

        setSubscription((prevSubscription) => ({
            ...prevSubscription,
            endSubscription,
        }));
    };

    // Функція для обробки натискання на кнопку "Підписатись"
    const handleSubscribe = () => {
        // Відправляємо дані підписки до Redux
        dispatch(
            changeTariffsPlan({
                typeSubscription: subscription.typeSubscription,
                startSubscription: subscription.startSubscription,
                endSubscription: subscription.endSubscription,
            })
        );
    };

    return (
        <div className={styles.tariffsWrapper}>
            <h2>Тарифи</h2>
            <div>
                <h1>Інформація про тарифний план</h1>
                {/* <p>Тип підписки: {userTariffPlan?.typeSubscription}</p>
                <p>Початок підписки: {userTariffPlan?.startSubscription}</p>
                <p>Кінець підписки: {userTariffPlan?.endSubscription}</p> */}
            </div>
            <div>
                <h3>Виберіть тип підписки</h3>
                <label>
                    <input
                        type="radio"
                        value="base"
                        checked={subscription.typeSubscription === 'base'}
                        onChange={handleSubscriptionChange}
                    />
                    Базовий
                </label>
                <label>
                    <input
                        type="radio"
                        value="standart"
                        checked={subscription.typeSubscription === 'standart'}
                        onChange={handleSubscriptionChange}
                    />
                    Стандарт
                </label>
                <label>
                    <input
                        type="radio"
                        value="advanced"
                        checked={subscription.typeSubscription === 'advanced'}
                        onChange={handleSubscriptionChange}
                    />
                    Розширений
                </label>
                <label>
                    <input
                        type="radio"
                        value="unlimited"
                        checked={subscription.typeSubscription === 'unlimited'}
                        onChange={handleSubscriptionChange}
                    />
                    Необмежений
                </label>
            </div>

            <div>
                <h3>Виберіть тривалість підписки</h3>
                <label>
                    <input
                        type="radio"
                        value="month"
                        checked={subscription.endSubscription === nextMonth}
                        onChange={handleDurationChange}
                    />
                    1 місяць
                </label>
                <label>
                    <input
                        type="radio"
                        value="year"
                        checked={subscription.endSubscription === nextYear}
                        onChange={handleDurationChange}
                    />
                    1 рік
                </label>
                <label>
                    <input
                        type="radio"
                        value="unlimited"
                        checked={subscription.endSubscription === 'unlimited'}
                        onChange={handleDurationChange}
                    />
                    Назавжди
                </label>
            </div>

            <button onClick={handleSubscribe}>Підписатись</button>
        </div>
    );
};

export default Tariffs;
