import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SIDE_BAR_OPEN } from './actions';

import authReducer from './auth/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const openReducer = (state = false, action) => {
  switch (action.type) {
    case SIDE_BAR_OPEN:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: persistedAuthReducer,
  open: openReducer,
});

export default rootReducer;
