/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeyboard from './create/CreateKeyboard';
import { IKeyboardInputStateType } from './create/CreateKeyboard.interface';
import SearchKeyboard from './search/SearchKeyboard';
import Keyboard from './show/Keyboard';

const KeyboardIndex = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [showKeyboard, setShowKeyboard] = useState<IKeyboardInputStateType[]>([]);

  const onClickDeleteKeyboard = async (keyboardId: string) => {};

  const handleShowKeyboard = (searchKeyboard: IKeyboardInputStateType[]) => {
    setShowKeyboard(searchKeyboard);
  };

  console.log(showKeyboard);
  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Keyboard ]]</h3>
      <Link to="/dashboard/keyboard/create" style={{ border: '1px solid black' }}>
        Create New Keyboard
      </Link>
      <SearchKeyboard handleShowKeyboard={handleShowKeyboard} />

      <div>
        {showKeyboard.map((keyboardInfo) => {
          return <Keyboard key={keyboardInfo.keyboardId} keyboardInfo={keyboardInfo} />;
        })}
      </div>

      {/* 
        // <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
        //   <div>KeyboardName : {showKeyboard.keyboardName}</div>
        //   <div>keyboardDesc : {showKeyboard.keyboardDesc}</div>
        //   <img src={showKeyboard.keyboardImageUrl} alt="keyboard" />
        //   <button>Delete</button>
        //   <button>Update</button>
        // </div> */}

      {/* <Link to="/dashboard/keyboard/update"> Update</Link>
      <br />
      <Link to="/dashboard/keyboard/delete"> Delete</Link>
      <br /> */}
      <Routes>
        <Route path="/create" element={<CreateKeyboard />} />
      </Routes>
    </div>
  );
};

export default KeyboardIndex;
