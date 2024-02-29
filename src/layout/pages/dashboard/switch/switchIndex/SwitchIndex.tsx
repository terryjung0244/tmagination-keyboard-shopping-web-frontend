import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as Styles from './SwitchIndex.styled';
import CreateSwitch from '../create/CreateSwitch';
import SearchSwitch from '../search/SearchSwitch';
import ModalComp from '../../../../../components/Modal/ModalComp';
import UpdateSwitch from '../update/UpdateSwitch';
import Card from 'react-bootstrap/Card';
import { IProduct } from '../../../../../product.interface';

import DeleteSwitch from '../delete/DeleteSwitch';
import { SwitchModal } from './SwitchIndex.interface';

const SwitchIndex = () => {
  const [showSearchedSwitch, setShowSearchedSwitch] = useState<IProduct[]>([]);
  const [searchedInput, setSearchedInput] = useState<string>('');

  // Modal
  const [show, setShow] = useState<SwitchModal>({
    deleteBtn: 'deleteBtn',
    updateBtn: 'updateBtn',
    updateToggle: false,
    deleteToggle: false,
    selectedSwitch: null,
  });

  // Delete Modal
  // const [deleteModal, setDeleteModal] = useState<DeleteSwitchModal>({
  //   toggle: false,
  //   selectedSwitch: null,
  // });

  // Search API
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

  // UPDATE MODAL
  const showUpdateModal = (filteredSwitches: IProduct) => {
    setShow({ ...show, updateToggle: true, selectedSwitch: filteredSwitches });
  };

  const closeUpdateModal = () => {
    console.log('1');
    setShow({ ...show, updateToggle: false });
  };

  // DELETE MODAL
  const showDeleteModal = (filteredSwitches: IProduct) => {
    setShow({ ...show, deleteToggle: true, selectedSwitch: filteredSwitches });
  };

  const closeDeleteModal = () => {
    setShow({ ...show, deleteToggle: false });
  };

  console.log(show.selectedSwitch?.category);
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
                    <div className="switchBtnMain">
                      <button
                        className="switchUpdateBtn"
                        onClick={() => showUpdateModal(filteredSwitches)}
                      >
                        Update
                      </button>
                      <button
                        className="switchDeleteBtn"
                        onClick={() => showDeleteModal(filteredSwitches)}
                      >
                        Delete
                      </button>
                    </div>
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
      <ModalComp show={show} closeModal={closeDeleteModal}>
        <DeleteSwitch
          selectedSwitch={show.selectedSwitch as IProduct}
          closeModal={closeDeleteModal}
          handleShowSwitch={handleShowSwitch}
        />
      </ModalComp>

      {/* <DeleteSwitch
        closeModal={closeUpdateModal}
        switchId={filteredSwitches.id}
        switchName={filteredSwitches.name}
        switchImagePath={filteredSwitches.imageUrl}
        handleShowSwitch={handleShowSwitch}
      /> */}
    </Styles.SwitchIndex>
  );
};

export default SwitchIndex;
