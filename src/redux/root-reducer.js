import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import optionsReducer from "./options/options.reducer";
import switcherReducer from "./switcher/switcher.reducer";

const persistConfig = { // whitelist persist items
  key: "root",
  storage,
  whitelist: ["cart", "options", "switcher"]
};

const rootReducer = combineReducers({
  cart: cartReducer,
  options: optionsReducer,
  switcher: switcherReducer
});

export default persistReducer(persistConfig, rootReducer);
