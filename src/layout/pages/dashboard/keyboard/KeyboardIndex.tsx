import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeyboard from './CreateKeyboard';
import DeleteKeyboard from './DeleteKeyboard';

const KeyboardIndex = () => {
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Keyboard ]]</h3>
      <Link to="/dashboard/keyboard/create"> Create</Link>
      <br />
      <Link to="/dashboard/keyboard/update"> Update</Link>
      <br />
      <Link to="/dashboard/keyboard/delete"> Delete</Link>
      <br />

      <Routes>
        <Route path="/create" element={<CreateKeyboard />} />
        <Route path="/delete" element={<DeleteKeyboard />} />
      </Routes>
    </div>
  );
};

export default KeyboardIndex;
