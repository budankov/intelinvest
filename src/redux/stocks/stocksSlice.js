import { createSlice } from "@reduxjs/toolkit";
import { fetchStocks, addStock, removeStock } from "./opetations";

const stocksSlice = createSlice({
    name: 'stocks',
    initialState: {
        stocks: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStocks.pending, (state) => {
                // Обробка статусу "pending" для операції fetchStocks
                // Тут ви можете виконати необхідні дії, якщо операція ще не завершилась
            })
            .addCase(fetchStocks.fulfilled, (state, action) => {
                // Обробка статусу "fulfilled" для операції fetchStocks
                state.stocks = action.payload;
            })
            .addCase(fetchStocks.rejected, (state, action) => {
                // Обробка статусу "rejected" для операції fetchStocks
                // Тут ви можете виконати необхідні дії, якщо операція завершилась з помилкою
            })
            .addCase(addStock.fulfilled, (state, action) => {
                // Обробка статусу "fulfilled" для операції addStock
                state.stocks.push(action.payload);
            })
            .addCase(removeStock.fulfilled, (state, action) => {
                // Обробка статусу "fulfilled" для операції removeStock
                const idToRemove = action.payload;
                state.stocks = state.stocks.filter((stock) => stock.id !== idToRemove);
            });
    }
});

export default stocksSlice.reducer;
