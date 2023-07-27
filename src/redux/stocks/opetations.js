import { createAsyncThunk } from '@reduxjs/toolkit';
import { colRef } from 'shared/api/firebaseApi';

// Отримання акцій з Firestore для поточного користувача
export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async (_, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        const querySnapshot = await colRef.doc(userId).collection('stocks').get();

        const stocks = querySnapshot.docs.map((doc) => doc.data());
        return stocks;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// Додавання акцій до Firestore для поточного користувача
export const addStock = createAsyncThunk('stocks/addStock', async (stock, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        await colRef.doc(userId).collection('stocks').add(stock);

        return stock;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// Видалення акцій з Firestore для поточного користувача
export const removeStock = createAsyncThunk('stocks/removeStock', async (stockId, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        await colRef.doc(userId).collection('stocks').doc(stockId).delete();

        return stockId;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
