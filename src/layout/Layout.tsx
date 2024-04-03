import React from 'react';
import * as Styles from './Layout.styled';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Keyboards from './pages/keyboards/Keyboards';
import ProductDetail from './pages/productDetail/ProductDetail';
import Switches from './pages/switches/Switches';
import Keycaps from './pages/keycaps/Keycaps';
import Footer from './footer/Footer';
import AllProducts from './pages/allProducts/AllProducts';
import Dashboard from './pages/dashboard/Dashboard';
import Cart from './pages/cart/Cart';
import Checkout from '../components/checkout/Checkout';

const Layout = () => {
  return (
    <Styles.Layout>
      <div className="layout-section-max-width">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/allproducts/:id" element={<ProductDetail />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/keyboards/:id" element={<ProductDetail />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/switches/:id" element={<ProductDetail />} />
          <Route path="/keycaps" element={<Keycaps />} />
          <Route path="/keycaps/:id" element={<ProductDetail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Styles.Layout>
  );
};

export default Layout;
