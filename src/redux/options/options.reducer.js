import OptionsActionsTypes from "./option.types";
import { updateOptions } from "./options.utils";

const INITIAL_STATE = {
  productOptions: [],
};

const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OptionsActionsTypes.SET_ATTRIBUTE:
      return {
        ...state,
        productOptions: updateOptions(state.productOptions, action.payload),
      };
    default:
      return state;
  }
};

export default optionsReducer;
