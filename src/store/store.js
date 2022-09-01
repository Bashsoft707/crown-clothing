import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const middleware =
  process.env.NODE_ENV !== "production" && [logger, thunk].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composer = composeEnhancer(applyMiddleware(...middleware));

const persistConfig = {
  key: "root",
  storage,
};

const persistEnhancer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistEnhancer, undefined, composer);

export const persistor = persistStore(store);
