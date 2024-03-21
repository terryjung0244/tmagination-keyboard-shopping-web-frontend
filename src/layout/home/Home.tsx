import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../service/store';
import { loadInitialCart } from '../../service/slice/cartSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartSlice);
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      const parsedCartLocalStorage = JSON.parse(cartLocalStorage);
      dispatch(loadInitialCart(parsedCartLocalStorage));
    }
  }, []);
  console.log(cart);
  return <div>{cart && <>dd</>}</div>;
};

export default Home;
