import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { fetchStocks, addStock, removeStock } from 'redux/stocks/opetations';
import { selectExchangeRate } from 'redux/currencyConverter/currencyConverterSlice';
import { getStockSuggestions } from 'shared/api/finnhubApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Popup from 'reactjs-popup';

import styles from './Stocks.module.scss';
import { selectCustomStyles } from './selectCustomStyles';

// Icons
import { ReactComponent as InfoIcon } from '../../images/icons/info-icon.svg'

const Stocks = () => {
    const [selectedStock, setSelectedStock] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [asyncSelectKey, setAsyncSelectKey] = useState(0);
    const [newStock, setNewStock] = useState({
        name: '',
        price: '',
        quantity: ''
    });

    const currencySymbols = useMemo(() => ({
        USD: '$',
        EUR: '€',
        GBP: '£',
        UAH: '₴'
    }), []);

    const dispatch = useDispatch();

    const stocks = useSelector(state => state.stocks.stocks);
    const exchangeRate = useSelector(selectExchangeRate);
    const selectedCurrency = useSelector(state => state.selectedCurrency.value);
    const currentCurrency = selectedCurrency ? selectedCurrency : 'USD';

    useEffect(() => {
        if (selectedStock !== null && newStock.price !== '' && newStock.quantity !== '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [selectedStock, newStock.price, newStock.quantity]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        let editedValue = value;

        if (name === 'price' || name === 'quantity') {
            const parsedValue = parseFloat(value);
            if (isNaN(parsedValue) || parsedValue <= 0) {
                editedValue = '';
            }
        }

        setNewStock({
            ...newStock,
            [name]: editedValue
        });
    };

    const handleAddStock = async () => {
        try {
            const stockData = {
                name: selectedStock.value,
                price: newStock.price,
                quantity: newStock.quantity,
            };

            await dispatch(addStock(stockData));

            Notify.success(`Акція ${selectedStock.value} успішно додана до вашого портфелю!`);
            setNewStock({
                name: '',
                price: '',
                quantity: ''
            });
            setAsyncSelectKey(prevKey => prevKey + 1);
        } catch (error) {
            Notify.info('Помилка при додаванні акції:', error.message);
        }
    };

    const handleRemoveStock = useCallback(async (id) => {
        try {
            await dispatch(removeStock(id));
            Notify.success(`Акція успішно видалена з вашого портфелю!`);
        } catch (error) {
            Notify.info('Помилка при видаленні акції:', error.message);
        }
    }, [dispatch]);


    const loadStockOptions = async (inputValue, callback) => {
        if (inputValue.trim() === '') {
            callback([]);
            return;
        }

        try {
            const suggestions = await getStockSuggestions(inputValue);
            const options = suggestions.map((stock) => ({
                value: stock.symbol,
                label: `${stock.symbol} - ${stock.description}`,
            }));
            callback(options);
        } catch (error) {
            console.log('Error fetching stock suggestions:', error.message);
            callback([]);
        }
    };

    const stocksTable = useMemo(() => {
        return (
            <table className={styles.stocksTable}>
                <thead className={styles.stocksTableThead}>
                    <tr>
                        <th>Актив</th>
                        <th>Ціна купівлі, {currencySymbols[currentCurrency]}</th>
                        <th>Кількість</th>
                        <th>Серед. ціна, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Середня ціна відкритої позиції. Якщо акція кілька разів купувалася та продавалася, то середня ціна буде підрахована серед тих паперів, що залишилися зараз у портфелі.
                                </div>
                            </Popup>
                        </th>
                        <th>Тепер. ціна, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Поточна біржова вартість акції. Якщо торги завершилися, відображається ціна закриття. *Дані надаються з доріжкою. Для архівних (не торгованих) акцій поточна ціна завжди буде 0.
                                </div>
                            </Popup>
                        </th>
                        <th>Тепер. дохід, %
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Це поточний прибуток, виражений у відсотках щодо вартості покупок відкритих на даний момент позицій. Інакше висловлюючись, це прибутковість від зміни ціни відкритої позиції.
                                </div>
                            </Popup>
                        </th>
                        <th>Сум. дохід, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Це сумарний прибуток за акціями за весь час роботи портфеля.
                                </div>
                            </Popup>
                        </th>
                        <th>
                            Дохідність, %
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Прибутковість річнихб розрахована за методом XIRR.
                                </div>
                            </Popup>
                        </th>
                        <th>Доля
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Частка паперу порахована до сумарної вартості активів, до якої належить папір.
                                </div>
                            </Popup>
                        </th>
                        <th>Видалити</th>
                    </tr>
                </thead>
                <tbody className={styles.stocksTableTbody}>
                    {stocks.map(({ id, name, price, quantity }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{(price * exchangeRate).toFixed(2)}</td>
                            <td>{quantity}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                                <button onClick={() => handleRemoveStock(id)}>Видалити</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }, [stocks, exchangeRate, currencySymbols, currentCurrency, handleRemoveStock]);


    useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch]);

    return (
        <div className={styles.stocksWrapper}>
            <div className={styles.stocksHeader}>
                <h2 className={styles.stocksTitle}>Акції</h2>
            </div>
            <div className={styles.stocksInputWrapper}>
                <AsyncSelect
                    key={asyncSelectKey}
                    cacheOptions
                    styles={selectCustomStyles}
                    isClearable={true}
                    loadOptions={loadStockOptions}
                    placeholder="Назва акції"
                    onChange={(selectedOption) => setSelectedStock(selectedOption)}
                />
                <input
                    type="number"
                    name="price"
                    value={newStock.price}
                    onChange={handleInputChange}
                    placeholder="Ціна, $"
                    autoComplete="off"
                    className={styles.stocksInput}
                />
                <input
                    type="number"
                    name="quantity"
                    value={newStock.quantity}
                    onChange={handleInputChange}
                    placeholder="Кількість, шт"
                    autoComplete="off"
                    className={styles.stocksInput}
                />
                <button
                    onClick={handleAddStock}
                    className={`${styles.stocksInputBtn} ${isFormValid ? '' : styles.stocksInputBtnDisabled}`}
                    disabled={!isFormValid}
                >
                    Додати акцію
                </button>
            </div>
            {stocksTable}
        </div>
    );
};

export default Stocks;
