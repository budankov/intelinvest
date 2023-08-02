import React, { useEffect, useState } from 'react';
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

    const currencySymbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        UAH: '₴'
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewStock({
            ...newStock,
            [name]: value
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

            Notify.success(`Акція ${newStock.name} успішно додана до вашого портфелю!`);
            setNewStock({
                name: '',
                price: '',
                quantity: ''
            });
        } catch (error) {
            Notify.info('Помилка при додаванні акції:', error.message);
        }
    };

    const handleRemoveStock = async (id) => {
        try {
            await dispatch(removeStock(id));
            Notify.success(`Акція успішно видалена з вашого портфелю!`);
        } catch (error) {
            Notify.info('Помилка при видаленні акції:', error.message);
        }
    };

    const loadStockOptions = async (inputValue, callback) => {
        if (inputValue.trim() === '') {
            callback([]);
            return;
        }

        try {
            const suggestions = await getStockSuggestions(inputValue);
            const options = suggestions.map((stock) => ({
                value: stock.symbol, // Вам, можливо, потрібно коректно підібрати значення
                label: `${stock.symbol} - ${stock.description}`,
            }));
            callback(options);
        } catch (error) {
            console.log('Error fetching stock suggestions:', error.message);
            callback([]);
        }
    };


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
                    placeholder="Кількість"
                    autoComplete="off"
                    className={styles.stocksInput}
                />
                <button onClick={handleAddStock} className={styles.stocksInputBtn}>Додати акцію</button>
            </div>
            <table className={styles.stocksTable}>
                <thead className={styles.stocksTableThead}>
                    <tr>
                        <th>Актив</th>
                        <th>Ціна купівлі</th>
                        <th>Кількість</th>
                        <th>Тепер. ціна</th>
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
        </div>
    );
};

export default Stocks;
