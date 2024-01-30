import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import UpdateSwitch from './UpdateSwitch';

const SwitchIndex = () => {
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Switch ]]</h3>
      <Link to="/dashboard/switch/create"> Create</Link>
      <br />
      <Link to="/dashboard/switch/update"> Update</Link>
      <br />
      <Link to="/dashboard/switch/delete"> Delete</Link>
      <br />

      <Routes>
        <Route path="/update" element={<UpdateSwitch />} />
      </Routes>
    </div>
  );
};

export default SwitchIndex;
