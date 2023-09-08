import { createSlice } from "@reduxjs/toolkit";
import {
    fetchTariffsPlan,
    addTariffsPlan,
    changeTariffsPlan,
} from "./tariffsPlanOperations";

const tariffsPlanSlice = createSlice({
    name: "tariffsPlan",
    initialState: {
        tariffsPlan: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTariffsPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTariffsPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.tariffsPlan = action.payload;
            })
            .addCase(fetchTariffsPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addTariffsPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTariffsPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.tariffsPlan = action.payload;
            })
            .addCase(addTariffsPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(changeTariffsPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(changeTariffsPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.tariffsPlan = action.payload;
            })
            .addCase(changeTariffsPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default tariffsPlanSlice.reducer;
