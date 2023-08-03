import axios from 'axios';

const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
const baseURL = 'https://finnhub.io/api/v1';

const getStockSuggestions = async (query) => {
  try {
    const response = await axios.get(`${baseURL}/search`, {
      params: {
        q: query,
        token: apiKey,
      },
    });
    return response.data.result;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const getStockPrice = async (symbol) => {
  try {
    const response = await axios.get(`${baseURL}/quote`, {
      params: {
        symbol: symbol,
        token: apiKey,
      },
    });
    return response.data.c;
  } catch (error) {
    console.log('Error fetching stock price:', error.message);
    return null;
  }
};

export { getStockSuggestions, getStockPrice };