import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const itemincart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemincart) {
        itemincart.qty++;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    incrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQty: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});
// const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addCart, incrementQty, decrementQty, removeItem } =
  cartSlice.actions;
// Export the reducer, either as a default or named export
export default cartSlice.reducer;
