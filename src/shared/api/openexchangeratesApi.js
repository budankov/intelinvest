import axios from 'axios';

const apiKey = process.env.REACT_APP_OPEN_EXCHANGE_RATES_API_KEY;

const getExchangeRate = async (baseCurrency, targetCurrency) => {
    try {
        const response = await axios.get(
            `https://open.er-api.com/v6/latest/${baseCurrency}?apikey=${apiKey}`
        );
        const exchangeRate = response.data.rates[targetCurrency];
        return exchangeRate;
    } catch (error) {
        console.log(error.message);
    }
};

export default getExchangeRate;