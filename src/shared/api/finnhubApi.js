import axios from 'axios';

axios.defaults.baseURL = 'https://6478c3f3362560649a2e6bb5.mockapi.io';

export const getAllUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const apiKey = 'ci9iro1r01qtqvvf2l20ci9iro1r01qtqvvf2l2g';
const stockSymbol = 'KO';

axios
  .get(`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${apiKey}`)
  .then(response => {
    const currentPrice = response.data.c;
    console.log(`Поточна ціна акцій Кока-Кола: ${currentPrice}`);
  })
  .catch(error => {
    console.error('Сталася помилка під час отримання даних:', error);
  });
