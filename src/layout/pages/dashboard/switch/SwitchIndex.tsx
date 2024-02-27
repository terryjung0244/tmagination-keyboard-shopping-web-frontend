import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as Styles from './SwitchIndex.styled';
import CreateSwitch from './create/CreateSwitch';
import SearchSwitch from './search/SearchSwitch';
import DeleteSwitch from './delete/DeleteSwitch';
import ModalComp from '../../../../components/ModalComp';
import UpdateSwitch from './update/UpdateSwitch';
import Card from 'react-bootstrap/Card';
import { IProduct } from '../../../../product.interface';

export interface UpdateSwitchModal {
  toggle: boolean;
  selectedSwitch: IProduct | null;
}

const SwitchIndex = () => {
  const [showSearchedSwitch, setShowSearchedSwitch] = useState<IProduct[]>([]);
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

  const showUpdateModal = (filteredSwitches: IProduct) => {
    setShow({ ...show, toggle: true, selectedSwitch: filteredSwitches });
  };

  const closeUpdateModal = () => {
    setShow({ ...show, toggle: false });
  };

  return (
    <Styles.SwitchIndex>
      <SearchSwitch searchInputSwitchValue={searchInputSwitchValue} />
      <div className="createBtnMain">
        <Link to="/dashboard/switch/create" className="createNewSwitchBtn">
          Create New Switch
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/create" element={<CreateSwitch />} />
        </Routes>

        <div style={{ display: 'flex' }}>
          {showSearchedSwitch.map((filteredSwitches: IProduct) => {
            return (
              <div key={filteredSwitches.id}>
                <Card className="switchCard">
                  <div>
                    <img src={filteredSwitches.imageUrl} className="switchCardImage" alt="Switch" />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <div className="switchCardNameFont ">Name : {filteredSwitches.name}</div>
                      <div className="switchCardDescFont ">Desc : {filteredSwitches.desc}</div>
                      <div className="switchCardColorFont ">
                        Color: {filteredSwitches.features.color}
                      </div>
                    </Card.Title>

                    <button
                      className="switchUpdateBtn"
                      onClick={() => showUpdateModal(filteredSwitches)}
                    >
                      Update
                    </button>
                    <DeleteSwitch
                      switchId={filteredSwitches.id}
                      switchName={filteredSwitches.name}
                      switchImagePath={filteredSwitches.imageUrl}
                      handleShowSwitch={handleShowSwitch}
                    />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <ModalComp show={show} closeModal={closeUpdateModal}>
        <UpdateSwitch
          selectedSwitch={show.selectedSwitch as IProduct}
          closeModal={closeUpdateModal}
          handleShowSwitch={handleShowSwitch}
        />
      </ModalComp>
    </Styles.SwitchIndex>
  );
};

export default SwitchIndex;
