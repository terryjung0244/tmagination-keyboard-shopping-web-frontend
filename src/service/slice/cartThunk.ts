/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

// UPDATE

export const updateCartRequest = createAsyncThunk('cart/updateCartRequest', async (cart: any) => {
  console.log(cart);
  const response = await fetch('http://localhost:8070/api/cart/updateCart', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...cart }),
  });
  const result = await response.json();
  return result;
});
