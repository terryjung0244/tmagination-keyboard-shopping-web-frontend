/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import * as Styles from './KeycapIndex.styled';
import SearchKeycap from '../search/SearchKeycap';
import { Link, Route, Routes } from 'react-router-dom';
import CreateKeycap from '../createKeycap/CreateKeycap';
import { IProduct } from '../../../../../type/product.interface';
import ShowKeycap from '../show/ShowKeycap';
import { searchKeycapAPI } from '../../../../../service/api/keycaps';

const KeycapIndex = () => {
  const [searchedResult, setShowSearchedResult] = useState<IProduct[]>([]);
  const [searchInputFromSearchKeycap, setSearchInputFromSearchKeycap] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchKeycap = async (searchInput: string = searchInputFromSearchKeycap) => {
    // Search Api
    const result = await searchKeycapAPI(searchInput);
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
            <ShowKeycap keycap={keycap} handleSearchKeycap={handleSearchKeycap} />
          </div>
        );
      })}
    </Styles.KeycapIndex>
  );
};

export default KeycapIndex;
