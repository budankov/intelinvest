import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCurrentValue: 0,
    totalProfitability: 0,
    totalProfitabilityPercentage: 0,
    bestStock: {
        name: '',
        percentage: 0,
    },
};

const stocksDashboardSlice = createSlice({
    name: 'stocksDashboard',
    initialState,
    reducers: {
        updateTotalCurrentValue: (state, action) => {
            state.totalCurrentValue = action.payload;
        },
        updateTotalProfitability: (state, action) => {
            state.totalProfitability = action.payload;
        },
        updateTotalProfitabilityPercentage: (state, action) => {
            state.totalProfitabilityPercentage = action.payload;
        },
        updateBestStock: (state, action) => {
            state.bestStock = action.payload;
        },
    },
});

export const {
    updateTotalCurrentValue,
    updateTotalProfitability,
    updateTotalProfitabilityPercentage,
    updateBestStock,
} = stocksDashboardSlice.actions;

export const selectTotalCurrentValue = state => state.stocksDashboard.totalCurrentValue;
export const selectTotalProfitability = state => state.stocksDashboard.totalProfitability;
export const selectTotalProfitabilityPercentage = state => state.stocksDashboard.totalProfitabilityPercentage;
export const selectBestStock = state => state.stocksDashboard.bestStock;


export default stocksDashboardSlice.reducer;
