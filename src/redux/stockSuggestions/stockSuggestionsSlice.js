import { createSlice } from '@reduxjs/toolkit';
import { fetchStockSuggestions } from './stockSuggestionsOperations';

const stockSuggestionsSlice = createSlice({
    name: 'stockSuggestions',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStockSuggestions.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchStockSuggestions.rejected, (state, action) => {
                console.log('Error fetching stock suggestions:', action.payload);
                return [];
            });
    },
});

export default stockSuggestionsSlice.reducer;

