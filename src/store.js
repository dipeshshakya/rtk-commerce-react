import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './feature/productSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
