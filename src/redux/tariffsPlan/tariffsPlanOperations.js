import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, addDoc, setDoc, getDocs, collection } from 'firebase/firestore';
import { db } from 'shared/api/firebaseApi';

// Отримання тарифного плану з Firestore для поточного користувача
export const fetchTariffsPlan = createAsyncThunk('tariffsPlan/fetchTariffsPlan', async (_, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        const querySnapshot = await getDocs(collection(db, 'users', userId, 'tariffsPlan'));
        const tariffsPlan = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return tariffsPlan;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// Додавання тарифного до Firestore для поточного користувача
export const addTariffsPlan = createAsyncThunk('tariffsPlan/addTariffsPlan', async (defaultTariffPlan, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        const docRef = await addDoc(collection(db, 'users', userId, 'tariffsPlan'), defaultTariffPlan);
        return { id: docRef.id, ...defaultTariffPlan };

    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

// Зміна тарифного плану з Firestore для поточного користувача
export const changeTariffsPlan = createAsyncThunk('tariffsPlan/changeTariffsPlan', async (newPlanData, thunkAPI) => {
    try {
        const user = thunkAPI.getState().user;
        const userId = user.id;
        const docRef = doc(db, 'users', userId, 'tariffsPlan');

        // Оновлення документа з новими даними
        await setDoc(docRef, newPlanData);

        return newPlanData; // Повертаємо нові дані
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});
