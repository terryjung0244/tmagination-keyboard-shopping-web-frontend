import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      const parsedCartLocalStorage = JSON.parse(cartLocalStorage);
      console.log(parsedCartLocalStorage);
    }
  }, []);

  return <div>Home Page</div>;
};

export default Home;
