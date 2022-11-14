import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productServices from '../services/productServices';
const initialState = {
  products: [],
};

export const getAllProduct = createAsyncThunk(
  'getAllProduct',
  async (thunkAPI) => {
    const res = await fetch('https://fakestoreapi.com/products').then((data) =>
      data.json()
    );
    return res;
  }
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async ({ id }) => {
    await productServices.delete(id);
    return { id };
  }
);

// export const singleProduct = createAsyncThunk('products/single', async (id) => {
//   console.log(id);
//   const res = await fetch('https://fakestoreapi.com/products/{id}').then(
//     (data) => data.json()
//   );
//   console.log(res);
//   return res;
// });
export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    [getAllProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
// export const {} = productSlice.actions;

export default productSlice.reducer;
