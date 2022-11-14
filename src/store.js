import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './feature/productSlice';
import CartReducer from './feature/cartSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});
