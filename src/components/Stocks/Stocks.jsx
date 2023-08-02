import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import { fetchStocks, addStock, removeStock } from 'redux/stocks/opetations';
import { selectExchangeRate } from 'redux/currencyConverter/currencyConverterSlice';
import { getStockSuggestions } from 'shared/api/finnhubApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import styles from './Stocks.module.scss';
import { selectCustomStyles } from './selectCustomStyles';

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
                        <th>Тепер. ціна, {currencySymbols[currentCurrency]}</th>
                        <th>Серед. ціна, {currencySymbols[currentCurrency]}</th>
                        <th>Тепер. дохід, %</th>
                        <th>Сум. дохід, {currencySymbols[currentCurrency]}</th>
                        <th>Дохідність, %</th>
                        <th>Доля</th>
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
