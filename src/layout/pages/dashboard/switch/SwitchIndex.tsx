import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateSwitch from './create/CreateSwitch';
import SearchSwitch from './search/SearchSwitch';
import { ISwitch } from '../../switches/Switches.interface';

const SwitchIndex = () => {
  const [showSearchedSwitch, setShowSearchedSwitch] = useState<ISwitch[]>([]);
  const searchInputSwitchValue = async (searchInput: string) => {
    const response = await fetch(
      `http://localhost:8070/api/switch/searchSwitches?searchInput=${searchInput}`,
    );

    const result = await response.json();
    console.log(result);

    setShowSearchedSwitch(result.filteredSwitches);
  };

  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Switch ]]</h3>
      <Link to="/dashboard/switch/create" style={{ border: '1px solid black' }}>
        Create New Switch
      </Link>
      <SearchSwitch searchInputSwitchValue={searchInputSwitchValue} />
      {showSearchedSwitch.map((filteredSwitches: ISwitch) => {
        return <div key={filteredSwitches.switchId}>{filteredSwitches.switchDesc}</div>;
      })}
      <Routes>
        <Route path="/create" element={<CreateSwitch />} />
      </Routes>
    </div>
  );
};

export default SwitchIndex;
