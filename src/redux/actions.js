// Записую чи відкритий SideBar щоб потім в компонентах налаштовувати стилі залежно від цього стану.
export const SIDE_BAR_OPEN = 'SIDE_BAR_OPEN';

export const setSideBarOpen = (isOpen) => ({
    type: SIDE_BAR_OPEN,
    payload: isOpen,
});

// Записую яка валюта вибрана
export const SET_SELECTED_CURRENCY = 'SET_SELECTED_CURRENCY';

export const setSelectedCurrency = (currency) => (dispatch) => {
    dispatch({
        type: SET_SELECTED_CURRENCY,
        payload: currency,
    });
};
