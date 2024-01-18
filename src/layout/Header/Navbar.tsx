import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <Logo />
      <div className="pr-2">
        <Link to="/allproducts">All Products</Link>
        <Link to="/keyboards">Keyboards</Link>
        <Link to="/switches">Switches</Link>
        <Link to="/keycaps">Keycaps</Link>
        <Link to="/accessories">accessories</Link>
      </div>
    </div>
  );
};

export default Navbar;
