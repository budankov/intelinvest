import getExchangeRate from "shared/api/openexchangeratesApi";
import { setExchangeRate } from "./currencyConverterSlice";

export const updateExchangeRate = (baseCurrency, targetCurrency) => async (dispatch) => {
    try {
        const exchangeRate = await getExchangeRate(baseCurrency, targetCurrency);
        dispatch(setExchangeRate(exchangeRate));
    } catch (error) {
        console.log(error.message);
    }
};
