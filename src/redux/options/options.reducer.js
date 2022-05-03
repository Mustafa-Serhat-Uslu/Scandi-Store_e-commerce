import OptionsActionsTypes from "./option.types";
import { addItemAttributeCount, updateOptions } from "./options.utils";

const INITIAL_STATE = {
  productOptions: []
};

const optionsReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case OptionsActionsTypes.SET_ATTRIBUTE:
      return {
        ...state,
        productOptions: updateOptions(state.productOptions, action.payload),
        // productOptions : [] // manually clear options
      };
      default:
        return state;
      }
};

export default optionsReducer;
