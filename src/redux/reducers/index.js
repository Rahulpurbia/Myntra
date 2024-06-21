import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import toastReducer from "./toastReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  toasts: toastReducer,
});

export default rootReducer;
