import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import KeyboardIndex from './keyboard/KeyboardIndex';
import SwitchIndex from './switch/SwitchIndex';

const Dashboard = () => {
  return (
    <>
      <Link to="/dashboard/keyboard"> Keyboard</Link>
      <br />
      <Link to="/dashboard/switch"> Switch</Link>
      <br />
      <Link to="/dashboard/keycap"> Keycap</Link>
      <br />
      <Link to="/dashboard/accessory"> Accessory</Link>
      <br />
      <Routes>
        <Route path="/keyboard/*" element={<KeyboardIndex />} />
        <Route path="/switch/*" element={<SwitchIndex />} />
      </Routes>
    </>
  );
};

export default Dashboard;
