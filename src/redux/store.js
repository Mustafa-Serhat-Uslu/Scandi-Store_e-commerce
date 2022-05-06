import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";


const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
