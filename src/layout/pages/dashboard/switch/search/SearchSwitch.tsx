import React, { useState } from 'react';

interface ISearchSwitchProps {
  searchInputSwitchValue: (searchInput: string) => void;
}

const SearchSwitch = ({ searchInputSwitchValue }: ISearchSwitchProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const onChangeSearchSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSwitch = () => {
    if (!searchInput) {
      alert('Please input search switches');
      return;
    }
    searchInputSwitchValue(searchInput);
  };

  return (
    <div>
      <input
        name="searchInput"
        value={searchInput}
        onChange={onChangeSearchSwitch}
        placeholder="Search Switches"
      />
      <button onClick={handleSearchSwitch}>Search</button>
    </div>
  );
};

export default SearchSwitch;
