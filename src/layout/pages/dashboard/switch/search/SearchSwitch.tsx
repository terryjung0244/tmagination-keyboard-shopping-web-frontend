import React, { useState } from 'react';
import * as Styles from './SearchSwitch.styled';

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
    <Styles.SearchSwitch>
      <input
        name="searchInput"
        value={searchInput}
        onChange={onChangeSearchSwitch}
        placeholder="Search Switches"
        className="searchInput"
      />

      <button onClick={handleSearchSwitch} className="searchBtn">
        Search
      </button>
    </Styles.SearchSwitch>
  );
};

export default SearchSwitch;
