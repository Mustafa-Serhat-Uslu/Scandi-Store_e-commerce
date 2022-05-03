import OptionsActionsTypes from "./option.types";

export const setAttribute = (option) => ({
    type: OptionsActionsTypes.SET_ATTRIBUTE,
    payload: option
});