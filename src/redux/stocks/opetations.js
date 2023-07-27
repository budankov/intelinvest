import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from 'shared/api/firebaseApi';

// Отримання акцій з Firestore для поточного користувача
export const fetchStocks = createAsyncThunk('stocks/fetchStocks', async (_, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        const querySnapshot = await getDocs(collection(db, 'users', userId, 'stocks'));
        const stocks = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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
        const docRef = await addDoc(collection(db, 'users', userId, 'stocks'), stock);
        return { id: docRef.id, ...stock };
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// Видалення акцій з Firestore для поточного користувача
export const removeStock = createAsyncThunk('stocks/removeStock', async (stockId, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        await deleteDoc(doc(db, 'users', userId, 'stocks', stockId));
        return stockId;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
