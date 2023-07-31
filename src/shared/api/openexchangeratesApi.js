import axios from 'axios';

const apiKey = '91aceb06219d44fbb1f1ad9691d8e791';

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
