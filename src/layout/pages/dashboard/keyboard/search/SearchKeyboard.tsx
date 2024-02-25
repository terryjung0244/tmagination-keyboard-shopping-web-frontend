import React, { useState } from 'react';
import * as Styles from './SearchKeyboard.styled';

interface ISearchKeyboardProps {
  handleSearchKeyboardInfo: (searchKeyboardInfo: string) => void;
}

const SearchKeyboard = ({ handleSearchKeyboardInfo }: ISearchKeyboardProps) => {
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

    handleSearchKeyboardInfo(searchKeyboardInfo);
  };

  return (
    <Styles.SearchKeyboard>
      <input
        className="searchInput"
        name="keyboardInfo"
        value={searchKeyboardInfo}
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
