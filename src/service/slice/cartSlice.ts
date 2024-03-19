/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../type/product.interface';

interface CartState {
  cart: IProduct[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadInitialCart: (state) => {
      // state.cart = parameter
    },
  },

  // Saga == Thunk
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(testThunkAPI.pending, (state, action) => {
  //       console.log('321');
  //     })
  //     .addCase(testThunkAPI.fulfilled, (state, action) => {
  //       console.log(action.payload);
  //     })
  //     .addCase(testThunkAPI.rejected, (state, action) => {
  //       console.log(action.payload);
  //     });
  // },
});

export const { loadInitialCart } = cartSlice.actions;

export default cartSlice.reducer;
