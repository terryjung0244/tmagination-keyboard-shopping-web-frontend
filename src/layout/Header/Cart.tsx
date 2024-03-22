import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../service/store';
import { loadInitialCart } from '../../service/slice/cartSlice';
import { Cart as CartICon } from 'react-bootstrap-icons';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);
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
        <CartICon size={35} />
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            width: '25px',
            height: '25px',
            fontSize: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'red',
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
