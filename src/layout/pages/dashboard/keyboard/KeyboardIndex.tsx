import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeyboard from './create/CreateKeyboard';
import DeleteKeyboard from './delete/DeleteKeyboard';
import { IKeyboardInputStateType } from './create/CreateKeyboard.interface';

const KeyboardIndex = () => {
  const [searchKeyboardInfo, setSearchKeyboardInfo] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [showKeyboard, setShowKeyboard] = useState<IKeyboardInputStateType>();

  const handleSearchKeyboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setSearchKeyboardInfo(e.target.value);
  };

  const onClickSearchKeyboard = async () => {
    if (!searchKeyboardInfo) {
      alert('What you looking for?');
      return;
    }

    const response = await fetch(
      `http://localhost:8070/api/keyboard/searchKeyboards?keyboardInfo=${searchKeyboardInfo}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const result = await response.json();
    setShowKeyboard(result);
  };

  console.log(showKeyboard);
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Keyboard ]]</h3>
      <Link to="/dashboard/keyboard/create" style={{ border: '1px solid black' }}>
        Create New Keyboard
      </Link>
      <br />
      <input
        name="keyboardInfo"
        value={searchKeyboardInfo}
        onChange={handleSearchKeyboard}
        placeholder="Search Product"
      />
      <button onClick={onClickSearchKeyboard}>Search</button>
      {showKeyboard ? (
        <div>
          {/* <div>{showKeyboard[0].keyboardName}</div> */}
          {/* <img src={showKeyboard[0].keyboardkeyboardImageUrl} alt="keyboard" /> */}
          {/* {showKeyboard.map((keyboardInfo) => {
            return <div key={keyboardInfo.keyboardId}>{keyboardInfo}</div>;
          })} */}
        </div>
      ) : null}
      {/* <Link to="/dashboard/keyboard/update"> Update</Link>
      <br />
      <Link to="/dashboard/keyboard/delete"> Delete</Link>
      <br /> */}
      <Routes>
        <Route path="/create" element={<CreateKeyboard />} />
        <Route path="/delete" element={<DeleteKeyboard />} />
      </Routes>
    </div>
  );
};

export default KeyboardIndex;
