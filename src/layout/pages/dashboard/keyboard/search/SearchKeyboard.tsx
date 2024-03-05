import React, { useState } from 'react';
import * as Styles from './SearchKeyboard.styled';

interface ISearchKeyboardProps {
  handleSearchKeyboardInfo: (searchKeyboardInfo: string) => void;
}

const SearchKeyboard = ({ handleSearchKeyboardInfo }: ISearchKeyboardProps) => {
  // Search Input State
  const [searchKeyboardInput, setSearchKeyboardInput] = useState<string>('');

  const handleSearchKeyboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setSearchKeyboardInput(e.target.value);
  };

  const onClickSearchKeyboard = async () => {
    if (!searchKeyboardInput) {
      alert('What you looking for?');
      return;
    }

    handleSearchKeyboardInfo(searchKeyboardInput);
  };

  return (
    <Styles.SearchKeyboard>
      <input
        className="searchInput"
        name="keyboardInfo"
        value={searchKeyboardInput}
        onChange={handleSearchKeyboard}
        placeholder="Search Products"
      />
      <button className="searchBtn" onClick={onClickSearchKeyboard}>
        Search
      </button>
    </Styles.SearchKeyboard>
  );
};

export default SearchKeyboard;
