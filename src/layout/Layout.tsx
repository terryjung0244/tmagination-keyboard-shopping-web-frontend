import React from 'react';
import * as Styles from './Layout.styled';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Keyboards from './pages/keyboards/Keyboards';
import KeyboardDetail from './pages/keyboards/KeyboardDetail';
import Switches from './pages/switches/Switches';
import Keycaps from './pages/keycaps/Keycaps';
import Footer from './footer/Footer';
import AllProducts from './pages/allProducts/AllProducts';
import Dashboard from './pages/dashboard/Dashboard';

const Layout = () => {
  return (
    <Styles.Layout>
      <div className="layout-section-max-width">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/keyboards/:id" element={<KeyboardDetail />} />
          <Route path="/switches" element={<Switches />} />
          <Route path="/switches/:id" element={<KeyboardDetail />} />
          <Route path="/keycaps" element={<Keycaps />} />
          <Route path="/keycaps/:id" element={<KeyboardDetail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Styles.Layout>
  );
};

export default Layout;
