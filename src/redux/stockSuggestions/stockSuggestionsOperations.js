import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStockSuggestions, getStockPrice } from "shared/api/finnhubApi";

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

export const fetchStockPrice = createAsyncThunk(
    'stockSuggestions/fetchStockPrice',
    async (symbol, thunkAPI) => {
        try {
            const response = await getStockPrice(symbol); // Ваша функція для отримання ціни акції
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
