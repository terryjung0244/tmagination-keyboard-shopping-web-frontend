import React, { useState } from 'react';
import { IKeyboardInputStateType } from '../create/CreateKeyboard.interface';

interface ISearchKeyboardProps {
  handleShowKeyboard: (searchKeyboard: IKeyboardInputStateType[]) => void;
}

const SearchKeyboard = ({ handleShowKeyboard }: ISearchKeyboardProps) => {
  const [searchKeyboardInfo, setSearchKeyboardInfo] = useState<string>('');

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
    console.log(result);
    handleShowKeyboard(result.searchKeyboard);
    // setShowKeyboard(result.searchKeyboard);
  };

  return (
    <div>
      <input
        name="keyboardInfo"
        value={searchKeyboardInfo}
        onChange={handleSearchKeyboard}
        placeholder="Search Product"
      />
      <button onClick={onClickSearchKeyboard}>Search</button>
    </div>
  );
};

export default SearchKeyboard;
