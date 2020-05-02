import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
