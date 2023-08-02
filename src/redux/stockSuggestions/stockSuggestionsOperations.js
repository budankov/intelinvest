import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStockSuggestions } from "shared/api/finnhubApi";

// Створюємо асинхронну операцію, яка викликає API та оновлює стан з підказками акцій
export const fetchStockSuggestions = createAsyncThunk(
    'stockSuggestions/fetchStockSuggestions',
    async (query, thunkAPI) => {
        try {
            const response = await getStockSuggestions(query);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
