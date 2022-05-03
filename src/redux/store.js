import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";


const middlewares = [];

// Dont use the redux logger if in production environment to optimize
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
