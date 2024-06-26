import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SwitchIndex from './switch/switchIndex/SwitchIndex';
import * as Styles from './Dashboard.styled';
import KeyboardIndex from './keyboard/keyboardIndex/KeyboardIndex';
import KeycapIndex from './keycap/keycapIndex/KeycapIndex';
import AllProductsIndex from './allProducts/allProductsIndex/AllProductsIndex';

const Dashboard = () => {
  return (
    <Styles.Dashboard>
      <div className="dashboardText">Dashboard</div>
      <div className="linkContainer">
        <Link to="/dashboard/allproducts" className="btnMain">
          All Products
        </Link>
        <Link to="/dashboard/keyboard" className="btnMain">
          Keyboard
        </Link>
        <Link to="/dashboard/switch" className="btnMain">
          Switch
        </Link>
        <Link to="/dashboard/keycap" className="btnMain">
          Keycap
        </Link>
      </div>

      <Routes>
        <Route path="/allproducts/*" element={<AllProductsIndex />} />
        <Route path="/keyboard/*" element={<KeyboardIndex />} />
        <Route path="/switch/*" element={<SwitchIndex />} />
        <Route path="/keycap/*" element={<KeycapIndex />} />
      </Routes>
    </Styles.Dashboard>
  );
};

export default Dashboard;
