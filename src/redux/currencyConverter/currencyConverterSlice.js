import { createSlice } from "@reduxjs/toolkit";

const currencyConverterSlice = createSlice({
    name: 'currencyConverter',
    initialState: {
        baseCurrency: 'USD',
        targetCurrency: 'USD',
        exchangeRate: 1,
    },
    reducers: {
        setBaseCurrency(state, action) {
            state.baseCurrency = action.payload;
        },
        setTargetCurrency(state, action) {
            state.targetCurrency = action.payload;
        },
        setExchangeRate(state, action) {
            state.exchangeRate = action.payload;
        },
    },
});

export const { setBaseCurrency, setTargetCurrency, setExchangeRate } = currencyConverterSlice.actions;

export const selectExchangeRate = (state) => state.currencyConverter.exchangeRate;

export default currencyConverterSlice.reducer;