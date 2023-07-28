import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SIDE_BAR_OPEN, SET_SELECTED_CURRENCY } from './actions';

import authReducer from './auth/userSlice';
import stocksSlice from './stocks/stocksSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Записую чи відкритий SideBar щоб потім в компонентах налаштовувати стилі залежно від цього стану.
const openReducer = (state = false, action) => {
  switch (action.type) {
    case SIDE_BAR_OPEN:
      return action.payload;
    default:
      return state;
  }
};

// Записую яка валюта вибрана
const currencyReducer = (state = 'USD', action) => {
  switch (action.type) {
    case SET_SELECTED_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: persistedAuthReducer,
  open: openReducer,
  stocks: stocksSlice,
  selectedCurrency: currencyReducer,
});

export default rootReducer;
