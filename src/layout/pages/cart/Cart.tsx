import React from 'react';
import { useAppSelector } from '../../../service/store';
import { IProduct } from '../../../type/product.interface';

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cartSlice);
  console.log(cart);
  return (
    <div>
      {cart.map((cartItem: IProduct, index: number) => {
        return <div key={index}>{cartItem.name}</div>;
      })}
    </div>
  );
};

export default Cart;
