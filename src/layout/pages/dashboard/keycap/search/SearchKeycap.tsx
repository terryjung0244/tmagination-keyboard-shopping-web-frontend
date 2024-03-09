/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './SearchKeycap.styled';
import { ISearchKeycapCompPropsType } from './SearchKeycap.interface';

const SearchKeycap = ({
  handleSearchKeycap,
  setSearchInput,
  searchInput,
}: ISearchKeycapCompPropsType) => {
  const onChangeSearchSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
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
      <button className="searchBtn" onClick={() => handleSearchKeycap(searchInput)}>
        Search
      </button>
    </Styles.SearchKeycap>
  );
};

export default SearchKeycap;
