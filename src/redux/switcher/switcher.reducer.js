import SwitcherActionTypes from "./switcher.types";

const INITIAL_STATE = {
  hidden: true,
  selectedCurrency: {
    label: "USD", // default currency is $ USD
    symbol: "$",
  },
};

const switcherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SwitcherActionTypes.TOGGLE_SWITCHER_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case SwitcherActionTypes.SET_CURRENCY:
      console.log(action);
      return {
        ...state,
        selectedCurrency: action.payload
      };
    default:
      return state;
  }
};

export default switcherReducer;
