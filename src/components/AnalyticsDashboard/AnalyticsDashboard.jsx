import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExchangeRate } from 'redux/currencyConverter/currencyConverterSlice';
import { fetchStockPrice } from 'redux/stockSuggestions/stockSuggestionsOperations';

import ChartWrapper from "components/ChartWrapper/ChartWrapper";

import styles from './AnalyticsDashboard.module.scss'

const AnalyticsDashboard = () => {
    const [stockPrices, setStockPrices] = useState({});

    const stocks = useSelector(state => state.stocks.stocks);
    const exchangeRate = useSelector(selectExchangeRate);
    const selectedCurrency = useSelector(state => state.selectedCurrency.value);
    const currentCurrency = selectedCurrency ? selectedCurrency : 'USD';

    const dispatch = useDispatch();

    const currencySymbols = useMemo(() => ({
        USD: '$',
        EUR: '€',
        GBP: '£',
        UAH: '₴'
    }), []);

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

        return {
            totalCurrentValue,
            totalProfitability,
            totalProfitabilityPercentage,
            bestStock,
        };
    }, [stocks, calculateRowValues]);

    const {
        totalCurrentValue,
        totalProfitability,
        totalProfitabilityPercentage,
        bestStock,
    } = calculateStocksSummary();

    return (
        <div className={styles.analyticsDashboard}>
            <ChartWrapper>
                <div>
                    <p className={styles.analyticsDashboard__title}>Вартість портфелю</p>
                    <p className={styles.analyticsDashboard__value}>{(totalCurrentValue * exchangeRate).toFixed(2)}{currencySymbols[currentCurrency]}</p>
                </div>
            </ChartWrapper>
            <ChartWrapper>
                <div>
                    <p className={styles.analyticsDashboard__title}>Сумарний прибуток</p>
                    <p className={styles.analyticsDashboard__value}>{(totalProfitability * exchangeRate).toFixed(2)}{currencySymbols[currentCurrency]}</p>
                </div>
            </ChartWrapper>
            <ChartWrapper>
                <div>
                    <p className={styles.analyticsDashboard__title}>Дохідність</p>
                    <p className={styles.analyticsDashboard__value}>{totalProfitabilityPercentage}%</p>
                </div>
            </ChartWrapper>
            <ChartWrapper>
                <div>
                    <p className={styles.analyticsDashboard__title}>Кращий актив</p>
                    <p className={styles.analyticsDashboard__value}>{bestStock.name}: {bestStock.percentage}%</p>
                </div>
            </ChartWrapper>
        </div>
    );
}

export default AnalyticsDashboard;
