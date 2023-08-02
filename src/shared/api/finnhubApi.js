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

export { getStockSuggestions };
