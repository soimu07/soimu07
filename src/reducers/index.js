import { combineReducers } from "redux";
import filter from "./filter.reducer";
import shoppingCart from "./shopping-cart.reducer";

export default combineReducers({
  filter,
  shoppingCart,
});
