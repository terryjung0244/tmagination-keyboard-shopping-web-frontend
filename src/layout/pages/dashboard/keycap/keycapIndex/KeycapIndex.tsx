/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import * as Styles from './KeycapIndex.styled';
import SearchKeycap from '../search/SearchKeycap';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeycap from '../createKeycap/CreateKeycap';
import { IProduct } from '../../../../../type/product.interface';
import ShowKeycap from '../show/ShowKeycap';

const KeycapIndex = () => {
  const [searchedResult, setShowSearchedResult] = useState<IProduct[]>([]);
  const [searchInputFromSearchKeycap, setSearchInputFromSearchKeycap] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchKeycap = async (searchInput: string = searchInputFromSearchKeycap) => {
    // Search Api
    const response = await fetch(
      `http://localhost:8070/api/keycap/searchKeycaps?searchInput=${searchInput}`,
    );
    const result = await response.json();
    setShowSearchedResult(result.filteredResult);
    setSearchInputFromSearchKeycap(searchInput);
    setSearchInput('');
  };

  return (
    <Styles.KeycapIndex>
      <SearchKeycap
        handleSearchKeycap={handleSearchKeycap}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      <div className="createBtnMain">
        <Link to="/dashboard/keycap/create" className="createNewKeycapBtn">
          Create New Keycap
        </Link>
      </div>
      <Routes>
        <Route path="/create" element={<CreateKeycap />} />
      </Routes>

      {searchedResult.map((keycap: IProduct) => {
        return (
          <div key={keycap.id}>
            {keycap.name}
            <ShowKeycap
              keycap={keycap}
              handleDeleteKeycap={handleSearchKeycap}
              handleUpdateKeycap={handleSearchKeycap}
            />
          </div>
        );
      })}
    </Styles.KeycapIndex>
  );
};

export default KeycapIndex;
