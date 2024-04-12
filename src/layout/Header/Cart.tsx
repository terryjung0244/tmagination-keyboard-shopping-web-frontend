/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../service/store';
import { loadInitialCart } from '../../service/slice/cartSlice';
import { Cart as CartICon } from 'react-bootstrap-icons';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);
  console.log(cart);
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      const parsedCartLocalStorage = JSON.parse(cartLocalStorage);
      dispatch(loadInitialCart(parsedCartLocalStorage));
    }
  }, []);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <CartICon size={23} />
        <div
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            width: '17px',
            height: '17px',
            fontSize: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            backgroundColor: '#58FF33',
            borderRadius: '50%',
          }}
        >
          {cart.length}
        </div>
      </div>
    </>
  );
};

export default Cart;
