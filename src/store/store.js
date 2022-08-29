import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = createLogger();
const composeEnhancer = compose(applyMiddleware(middleware));

const persistConfig = {
  key: "root",
  storage,
};

const persistEnhancer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistEnhancer, undefined, composeEnhancer);

export const persistor = persistStore(store);
