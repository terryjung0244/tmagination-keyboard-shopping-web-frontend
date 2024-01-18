import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Keyboards from './pages/keyboards/Keyboards';
import Switches from './pages/switches/Switches';
import Keycaps from './pages/keycaps/Keycaps';
import Accessories from './pages/accessories/Accessories';
import Footer from './footer/Footer';
import AllProducts from './pages/allProducts/AllProducts';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/keyboards" element={<Keyboards />} />
      <Route path="/switches" element={<Switches />} />
      <Route path="/keycaps" element={<Keycaps />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default Layout;
