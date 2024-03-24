/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../type/product.interface';
import { updateCartRequest } from './cartThunk';

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
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },

  // Saga == Thunk
  extraReducers: (builder) => {
    builder
      .addCase(updateCartRequest.pending, (state: CartState, action: any) => {
        console.log('1');
      })
      .addCase(updateCartRequest.rejected, (state: CartState, action: any) => {
        console.log('2');
      })
      .addCase(updateCartRequest.fulfilled, (state: CartState, action: any) => {
        console.log(action.payload);
        console.log('3');
      });
  },
});

export const { loadInitialCart, addCart } = cartSlice.actions; // Destructoring For Actions...

export default cartSlice.reducer;
