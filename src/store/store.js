import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = createLogger();
const composeEnhancer = compose(applyMiddleware(middleware));

export const store = createStore(rootReducer, undefined, composeEnhancer);
