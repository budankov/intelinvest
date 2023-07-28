import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks, addStock, removeStock } from 'redux/stocks/opetations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import styles from './Stocks.module.scss';

const Stocks = () => {
    const dispatch = useDispatch();

    const stocks = useSelector(state => state.stocks.stocks);
    const currentCurrency = useSelector(state => state);
    console.log(currentCurrency.selectedCurrency)

    const [newStock, setNewStock] = useState({
        name: '',
        price: '',
        quantity: ''
    });

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
                name: newStock.name,
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
            console.log(id)
            const test = await dispatch(removeStock(id));
            console.log(test)

            Notify.success(`Акція успішно видалена з вашого портфелю!`);
        } catch (error) {
            Notify.info('Помилка при видаленні акції:', error.message);
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
                <input
                    type="text"
                    name="name"
                    value={newStock.name}
                    onChange={handleInputChange}
                    placeholder="Назва акції"
                    autoComplete="off"
                    className={styles.stocksInput}
                />
                <input
                    type="number"
                    name="price"
                    value={newStock.price}
                    onChange={handleInputChange}
                    placeholder="Ціна"
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
                        <th>Серед. ціна</th>
                        <th>Тепер. дохід, %</th>
                        <th>Сум. дохід</th>
                        <th>Дохідність, %</th>
                        <th>Доля</th>
                        <th>Видалити</th>
                    </tr>
                </thead>
                <tbody className={styles.stocksTableTbody}>
                    {stocks.map(({ id, name, price, quantity }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{price}</td>
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
