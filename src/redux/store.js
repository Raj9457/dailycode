import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
