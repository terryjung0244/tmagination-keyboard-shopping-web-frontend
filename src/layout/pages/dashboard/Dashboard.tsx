import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import KeyboardIndex from './keyboard/keyboardIndex/KeyboardIndex';
import SwitchIndex from './switch/switchIndex/SwitchIndex';
import * as Styles from './Dashboard.styled';

const Dashboard = () => {
  return (
    <Styles.Dashboard>
      <div className="linkContainer">
        <Link to="/dashboard/keyboard" className="btnMain">
          Keyboard
        </Link>
        <Link to="/dashboard/switch" className="btnMain">
          Switch
        </Link>
        <Link to="/dashboard/keycap" className="btnMain">
          Keycap
        </Link>
        <Link to="/dashboard/accessory" className="btnMain">
          Accessory
        </Link>
      </div>

      <Routes>
        <Route path="/keyboard/*" element={<KeyboardIndex />} />
        <Route path="/switch/*" element={<SwitchIndex />} />
      </Routes>
    </Styles.Dashboard>
  );
};

export default Dashboard;
