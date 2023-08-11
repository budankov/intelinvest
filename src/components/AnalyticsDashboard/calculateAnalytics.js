const calculateAnalytics = (stocks, stockPrices, exchangeRate) => {
    let totalCurrentValue = 0;
    let totalProfitability = 0;
    let totalPositionValue = 0;
    let bestStock = {
        name: '',
        percentage: 0,
    };

    stocks.forEach(({ name, price, quantity }) => {
        const currentStockPrice = stockPrices[name] !== undefined ? stockPrices[name] : 0;
        const currentTotalPositionValue = (quantity * currentStockPrice * exchangeRate).toFixed(2);
        const profitability = (currentTotalPositionValue - totalPositionValue).toFixed(2);
        const profitabilityPercentage = ((profitability / totalPositionValue) * 100).toFixed(2);

        totalCurrentValue += parseFloat(currentTotalPositionValue);
        totalProfitability += parseFloat(profitability);

        if (parseFloat(profitabilityPercentage) > bestStock.percentage) {
            bestStock = {
                name,
                percentage: parseFloat(profitabilityPercentage),
            };
        }

        totalPositionValue += parseFloat(currentTotalPositionValue);
    });

    const totalProfitabilityPercentage = ((totalProfitability / totalPositionValue) * 100).toFixed(2);

    return {
        totalCurrentValue,
        totalProfitability,
        totalProfitabilityPercentage,
        bestStock,
    };
};

export default calculateAnalytics;
