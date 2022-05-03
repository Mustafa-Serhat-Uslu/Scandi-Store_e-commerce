import SwitcherActionTypes from "./switcher.types";

export const toggleSwitcherHidden = () => ({
  type: SwitcherActionTypes.TOGGLE_SWITCHER_HIDDEN
});

export const setCurrency = (selectedCurrency) => ({
  type: SwitcherActionTypes.SET_CURRENCY,
  payload: selectedCurrency
});
