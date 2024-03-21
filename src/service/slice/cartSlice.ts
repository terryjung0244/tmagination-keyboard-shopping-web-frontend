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
    loadInitialCart: (state, action) => {
      state.cart = action.payload;
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

export const { loadInitialCart } = cartSlice.actions; // Destructoring For Actions...

export default cartSlice.reducer;
