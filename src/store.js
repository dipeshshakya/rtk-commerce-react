import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ProductReducer from './feature/productSlice';
import CartReducer from './feature/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

let rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
