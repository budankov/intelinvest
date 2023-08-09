import React, { useEffect, useState, useMemo, useCallback } from 'react';
import AsyncSelect from 'react-select/async';
import Popup from 'reactjs-popup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks, addStock, removeStock } from 'redux/stocks/opetations';
import { selectExchangeRate } from 'redux/currencyConverter/currencyConverterSlice';
import { updateTotalCurrentValue, updateTotalProfitability, updateTotalProfitabilityPercentage, updateBestStock } from 'redux/stocksDashboard/stocksDashboardSlice';
import { fetchStockSuggestions, fetchStockPrice } from 'redux/stockSuggestions/stockSuggestionsOperations';

import styles from './Stocks.module.scss';
import { selectCustomStyles } from './selectCustomStyles';

// Icons
import { ReactComponent as InfoIcon } from '../../images/icons/info-icon.svg'
import { ReactComponent as TrashIcon } from '../../images/icons/trash-icon.svg'

const Stocks = () => {
    const [selectedStock, setSelectedStock] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const [asyncSelectKey, setAsyncSelectKey] = useState(0);
    const [stockPrices, setStockPrices] = useState({});
    const [newStock, setNewStock] = useState({
        name: '',
        price: '',
        quantity: ''
    });

    const dispatch = useDispatch();
    const stocks = useSelector(state => state.stocks.stocks);
    const exchangeRate = useSelector(selectExchangeRate);
    const selectedCurrency = useSelector(state => state.selectedCurrency.value);
    const currentCurrency = selectedCurrency ? selectedCurrency : 'USD';

    const currencySymbols = useMemo(() => ({
        USD: '$',
        EUR: '€',
        GBP: '£',
        UAH: '₴'
    }), []);

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
            const response = await dispatch(fetchStockSuggestions(inputValue));
            const suggestions = response.payload; // Отримання данних зі стору
            const options = suggestions.map((stock) => ({
                value: stock.symbol,
                label: `${stock.symbol} - ${stock.description}`,
            }));
            callback(options);
        } catch (error) {
            console.log('Error fetching stock options:', error.message);
            callback([]);
        }
    };

    const calculateRowValues = useCallback((name, price, quantity) => {
        const totalPositionValue = (quantity * price).toFixed(2);
        const currentStockPrice = stockPrices[name] !== undefined ? stockPrices[name] : 0;
        const currentTotalPositionValue = (quantity * currentStockPrice).toFixed(2);
        const profitability = (currentTotalPositionValue - totalPositionValue).toFixed(2);
        const profitabilityPercentage = ((profitability / totalPositionValue) * 100).toFixed(2);

        return {
            totalPositionValue,
            currentStockPrice,
            currentTotalPositionValue,
            profitability,
            profitabilityPercentage,
        };
    }, [stockPrices]);

    const calculateStocksSummary = useCallback(() => {
        let totalCurrentValue = 0;
        let totalProfitability = 0;
        let totalPositionValue = 0;
        let bestStock = {
            name: '',
            percentage: 0,
        };

        stocks.forEach(({ name, price, quantity }) => {
            const {
                totalPositionValue: rowTotalPositionValue,
                currentTotalPositionValue,
                profitability,
                profitabilityPercentage,
            } = calculateRowValues(name, price, quantity);

            totalCurrentValue += parseFloat(currentTotalPositionValue);
            totalProfitability += parseFloat(profitability);
            totalPositionValue += parseFloat(rowTotalPositionValue);

            if (parseFloat(profitabilityPercentage) > bestStock.percentage) {
                bestStock = {
                    name,
                    percentage: parseFloat(profitabilityPercentage),
                };
            }
        });

        const totalProfitabilityPercentage = ((totalProfitability / totalPositionValue) * 100).toFixed(2);

        dispatch(updateTotalCurrentValue(totalCurrentValue));
        dispatch(updateTotalProfitability(totalProfitability));
        dispatch(updateTotalProfitabilityPercentage(totalProfitabilityPercentage));
        dispatch(updateBestStock(bestStock));
    }, [stocks, calculateRowValues, dispatch]);


    useEffect(() => {
        calculateStocksSummary();
    }, [stocks, calculateStocksSummary]);

    const stocksTable = useMemo(() => {
        return (
            <table className={styles.stocksTable}>
                <thead className={styles.stocksTableThead}>
                    <tr>
                        <th>Актив</th>
                        <th>Кількість, шт</th>
                        <th>Ціна купівлі, {currencySymbols[currentCurrency]}</th>
                        <th>Тепер. ціна, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Поточна біржова вартість акції. Якщо торги завершилися, відображається ціна закриття. *Дані оновлюются при оновленні сторінки, або змінах в таблиці. Для архівних (не торгованих) акцій поточна ціна завжди буде 0.
                                </div>
                            </Popup>
                        </th>
                        <th>Загальна сума позицій, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Це загальна сумма (кількіть * на ціну купівлі) вартості акцій. Відображає скільки загалом було витраченно на купівлю акції.
                                </div>
                            </Popup>
                        </th>
                        <th>Поточна вартість позиції, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Це загальна сумма (кількіть * на поточну вартість) акцій. Відображає актуальну ціну на даний момент.
                                </div>
                            </Popup>
                        </th>
                        <th>
                            Дохідність, {currencySymbols[currentCurrency]}
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Відображає сумму прибутку/збитку. Розраховуєтся сумарна поточна ціна від сумарної загальної ціни.
                                </div>
                            </Popup>
                        </th>
                        <th>Дохідність, %
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Відображає відсоток прибутку/збитку. Розраховуєтся сумарна поточна ціна поділена на сумарну загальну ціни і помножена на 100%.
                                </div>
                            </Popup>
                        </th>
                        <th>Частка від портфелю, %
                            <Popup
                                trigger={<InfoIcon className={styles.tooltipIcon} />}
                                position="bottom center"
                                on="hover"
                            >
                                <div className={styles.tooltipContent}>
                                    Частка паперу порахована до сумарної вартості активів, до якої належить папір. ВІдображає долю паперу від загального портфелю у %.
                                </div>
                            </Popup>
                        </th>
                        <th>Видалити</th>
                    </tr>
                </thead>
                <tbody className={styles.stocksTableTbody}>
                    {stocks.map(({ id, name, price, quantity }) => {
                        const {
                            totalPositionValue,
                            currentStockPrice,
                            currentTotalPositionValue,
                            profitabilityPercentage,
                        } = calculateRowValues(name, price, quantity);

                        const totalSumOfPositions = stocks.reduce((total, stock) => {
                            const { price, quantity } = stock;
                            return total + (price * quantity);
                        }, 0);

                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{quantity}</td>
                                <td>{(price * exchangeRate).toFixed(2)}</td>
                                <td>{currentStockPrice.toFixed(2)}</td>
                                <td>{(totalPositionValue * exchangeRate).toFixed(2)}</td>
                                <td>{(currentTotalPositionValue * exchangeRate).toFixed(2)}</td>
                                <td className={((currentTotalPositionValue - totalPositionValue) * exchangeRate) >= 0 ? styles.greenText : styles.redText}>
                                    {((currentTotalPositionValue - totalPositionValue) * exchangeRate).toFixed(2)}
                                </td>
                                <td className={profitabilityPercentage >= 0 ? styles.greenText : styles.redText}>
                                    {profitabilityPercentage}%
                                </td>
                                <td>{((totalPositionValue / totalSumOfPositions) * 100).toFixed(2)}%</td>
                                <td>
                                    <button className={styles.trashBtn} onClick={() => handleRemoveStock(id)}><TrashIcon className={styles.trashIcon} /></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }, [stocks, exchangeRate, currencySymbols, currentCurrency, calculateRowValues, handleRemoveStock]);

    const handleGetPrice = useCallback(async (symbol) => {
        try {
            const response = await dispatch(fetchStockPrice(symbol));
            const price = response.payload;
            if (price !== null) {
                setStockPrices((prevPrices) => ({
                    ...prevPrices,
                    [symbol]: price,
                }));
            }
        } catch (error) {
            console.log(`Error getting stock price for ${symbol}:`, error.message);
        }
    }, [dispatch, setStockPrices]);

    useEffect(() => {
        stocks.forEach(({ name }) => {
            handleGetPrice(name);
        });
    }, [stocks, handleGetPrice]);

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
