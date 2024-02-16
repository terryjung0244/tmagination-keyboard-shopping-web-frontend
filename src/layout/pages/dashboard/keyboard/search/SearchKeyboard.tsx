import React, { useState } from 'react';

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
