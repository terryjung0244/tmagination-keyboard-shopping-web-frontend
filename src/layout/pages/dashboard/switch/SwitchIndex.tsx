import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateSwitch from './create/CreateSwitch';
import SearchSwitch from './search/SearchSwitch';
import { ISwitch } from '../../switches/Switches.interface';
import DeleteSwitch from './delete/DeleteSwitch';
import ModalComp from '../../../../components/ModalComp';
import UpdateSwitch from './update/UpdateSwitch';

export interface UpdateSwitchModal {
  toggle: boolean;
  selectedSwitch: ISwitch | null;
}

const SwitchIndex = () => {
  const [showSearchedSwitch, setShowSearchedSwitch] = useState<ISwitch[]>([]);
  const [searchedInput, setSearchedInput] = useState<string>('');

  const [show, setShow] = useState<UpdateSwitchModal>({
    toggle: false,
    selectedSwitch: null,
  });

  // Search
  const searchInputSwitchValue = async (searchInput: string) => {
    const response = await fetch(
      `http://localhost:8070/api/switch/searchSwitches?searchInput=${searchInput}`,
    );

    const result = await response.json();
    console.log(result);

    setShowSearchedSwitch(result.filteredSwitches);
    setSearchedInput(searchInput);
  };

  const handleShowSwitch = () => {
    searchInputSwitchValue(searchedInput);
  };

  const showUpdateModal = (filteredSwitches: ISwitch) => {
    setShow({ ...show, toggle: true, selectedSwitch: filteredSwitches });
  };

  const closeUpdateModal = () => {
    setShow({ ...show, toggle: false });
  };

  return (
    <>
      <div>
        <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Switch ]]</h3>
        <Link to="/dashboard/switch/create" style={{ border: '1px solid black' }}>
          Create New Switch
        </Link>
        <Routes>
          <Route path="/create" element={<CreateSwitch />} />
        </Routes>
        <SearchSwitch searchInputSwitchValue={searchInputSwitchValue} />
        <div style={{ display: 'flex' }}>
          {showSearchedSwitch.map((filteredSwitches: ISwitch) => {
            return (
              <div
                key={filteredSwitches.switchId}
                style={{
                  marginTop: '20px',
                  border: '1px solid black',
                  padding: '10px',
                  width: '200px',
                }}
              >
                <div>Switch Name : {filteredSwitches.switchName}</div>
                <div>Switch Desc : {filteredSwitches.switchDesc}</div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <img src={filteredSwitches.switchImageUrl} alt="Switch" />
                  <DeleteSwitch
                    switchId={filteredSwitches.switchId}
                    switchName={filteredSwitches.switchName}
                    switchImagePath={filteredSwitches.switchImagePath}
                    handleShowSwitch={handleShowSwitch}
                  />
                  <button onClick={() => showUpdateModal(filteredSwitches)}>Update</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ModalComp show={show} closeModal={closeUpdateModal}>
        <UpdateSwitch selectedSwitch={show.selectedSwitch as ISwitch} />
      </ModalComp>
    </>
  );
};

export default SwitchIndex;
