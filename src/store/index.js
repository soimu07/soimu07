import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const getEnhancer = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return process.env.NODE_ENV === "development"
    ? composeEnhancers(applyMiddleware(thunk))
    : applyMiddleware(thunk);
};

const initialState = {
  filter: {
    categoryName: [],
    manufacturer: [],
  },
  shoppingCart: {},
};

const configureAppStore = () =>
  createStore(rootReducer, { ...initialState }, getEnhancer());

export default configureAppStore;
