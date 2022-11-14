import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartItem: [],
  cartQty: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartItem.push(action.payload);
      // eslint-disable-next-line no-unused-expressions
      state.cartQty++;
    },
  },
});
// const { actions, reducer } = cartSlice;
// Extract and export each action creator by name
export const { addCart } = cartSlice.actions;
// Export the reducer, either as a default or named export
export default cartSlice.reducer;
