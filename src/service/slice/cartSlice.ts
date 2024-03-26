/* eslint-disable no-unused-expressions */
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
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    cartQuantityIncrease: (state, action) => {
      // console.log(action.payload);
      // const index = state.cart.findIndex((cart) => cart.id === action.payload.id);
      // (state.cart[index].quantity as string) += 1;
      // console.log(index);
      const newCart = state.cart.map((item: IProduct) => {
        if (action.payload.cartId === item.cartId) {
          return {
            ...item,
            quantity: (item.quantity as string) + 1,
          };
        }
        return { ...item };
      });
      state.cart = newCart;
    },
    cartQuantityDecrease: (state, action) => {
      const newCart = state.cart.map((item: IProduct) => {
        if (action.payload.cartId === item.cartId) {
          return {
            ...item,
            quantity: parseInt(item.quantity as string) - 1,
          };
        }
        return { ...item };
      });
      state.cart = newCart;
    },
    deleteCart: (state, action) => {
      const index = state.cart.findIndex((cartItem) => cartItem.cartId === action.payload);
      state.cart.splice(index, 1);
    },
  },

  // Saga == Thunk
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(updateCartRequest.pending, (state: CartState, action: any) => {
  //       console.log('1');
  //     })
  //     .addCase(updateCartRequest.rejected, (state: CartState, action: any) => {
  //       console.log('2');
  //     })
  //     .addCase(updateCartRequest.fulfilled, (state: CartState, action: any) => {
  //       console.log(action.payload);
  //       console.log('3');
  //     });
  // },
});

export const { loadInitialCart, addCart, cartQuantityIncrease, cartQuantityDecrease, deleteCart } =
  cartSlice.actions; // Destructoring For Actions...

export default cartSlice.reducer;
