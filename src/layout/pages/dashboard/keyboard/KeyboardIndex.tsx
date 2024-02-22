/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as Styles from './KeyboardIndex.styled';
import CreateKeyboard from './create/CreateKeyboard';
import { IKeyboardInputStateType } from './create/CreateKeyboard.interface';
import SearchKeyboard from './search/SearchKeyboard';
import Keyboard from './show/ShowKeyboard';

const KeyboardIndex = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [showKeyboard, setShowKeyboard] = useState<IKeyboardInputStateType[]>([]);
  const [searchKeyboardInfo, setSearchKeyboardInfo] = useState<string>('');

  const handleSearchKeyboardInfo = async (keyboardInfo: string) => {
    setSearchKeyboardInfo(keyboardInfo);
    const response = await fetch(
      `http://localhost:8070/api/keyboard/searchKeyboards?keyboardInfo=${keyboardInfo}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const result = await response.json();
    setShowKeyboard(result.searchKeyboard);
  };

  const deletedKeyboardFromKeyboard = () => {
    handleSearchKeyboardInfo(searchKeyboardInfo);
  };

  return (
    <Styles.KeyboardIndex>
      <Link to="/dashboard/keyboard/create" className="createNewKeyboardBtn">
        Create New Keyboard
      </Link>
      <SearchKeyboard handleSearchKeyboardInfo={handleSearchKeyboardInfo} />
      {/* <DeleteKeyboard searchKeyboardInfo={searchKeyboardInfo} keyboardId={''} keyboardPath={''} /> */}

      <div>
        {showKeyboard.map((keyboardInfo) => {
          return (
            <Keyboard
              key={keyboardInfo.keyboardId}
              keyboardInfo={keyboardInfo}
              deletedKeyboardFromKeyboard={deletedKeyboardFromKeyboard}
            />
          );
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
    </Styles.KeyboardIndex>
  );
};

export default KeyboardIndex;
