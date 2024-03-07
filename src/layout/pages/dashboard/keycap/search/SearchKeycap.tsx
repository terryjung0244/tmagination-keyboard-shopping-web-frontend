/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import * as Styles from './SearchKeycap.styled';
import { ISearchKeycapCompPropsType } from './SearchKeycap.interface';

const SearchKeycap = ({ setShowSearchedResult }: ISearchKeycapCompPropsType) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const onChangeSearchSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchKeycap = async () => {
    // Search Api
    const response = await fetch(
      `http://localhost:8070/api/keycap/searchKeycaps?searchInput=${searchInput}`,
    );
    const result = await response.json();
    setShowSearchedResult(result.filteredResult);
  };

  return (
    <Styles.SearchKeycap>
      <input
        className="searchInput"
        name="searchInput"
        value={searchInput}
        onChange={onChangeSearchSwitch}
        placeholder="Search Keycaps"
      />
      <button className="searchBtn" onClick={() => handleSearchKeycap}>
        Search
      </button>
    </Styles.SearchKeycap>
  );
};

export default SearchKeycap;
