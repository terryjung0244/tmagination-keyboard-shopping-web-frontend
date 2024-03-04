import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as Styles from './KeyboardIndex.styled';
import CreateKeyboard from '../create/CreateKeyboard';
import SearchKeyboard from '../search/SearchKeyboard';
import { IProduct } from '../../../../../type/product.interface';
import ShowKeyboard from '../show/ShowKeyboard';

const KeyboardIndex = () => {
  const [showKeyboard, setShowKeyboard] = useState<IProduct[]>([]);
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
    console.log(result);
    setShowKeyboard(result.searchKeyboard);
  };

  const deletedKeyboardFromKeyboard = () => {
    handleSearchKeyboardInfo(searchKeyboardInfo);
  };

  const handleShowKeyboard = () => {
    handleSearchKeyboardInfo(searchKeyboardInfo);
  };

  return (
    <Styles.KeyboardIndex>
      <SearchKeyboard handleSearchKeyboardInfo={handleSearchKeyboardInfo} />
      <div className="createBtnMain">
        <Link to="/dashboard/keyboard/create" className="createNewKeyboardBtn">
          Create New Keyboard
        </Link>
      </div>
      <Routes>
        <Route path="/create" element={<CreateKeyboard />} />
      </Routes>

      {showKeyboard.map((keyboardInfo: IProduct) => {
        return (
          <div key={keyboardInfo.id}>
            <ShowKeyboard
              // searchKeyboardInfo={searchKeyboardInfo}
              key={keyboardInfo.id}
              keyboardInfo={keyboardInfo}
              handleShowKeyboard={handleShowKeyboard}
              deletedKeyboardFromKeyboard={deletedKeyboardFromKeyboard}
            />
          </div>
        );
      })}
    </Styles.KeyboardIndex>
  );
};

export default KeyboardIndex;
