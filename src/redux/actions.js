export const SIDE_BAR_OPEN = 'SIDE_BAR_OPEN';

export const setSideBarOpen = (isOpen) => ({
    type: SIDE_BAR_OPEN,
    payload: isOpen,
});