import React, { useState } from 'react';
import * as Styles from './ShowKeycap.styled';
import { Card } from 'react-bootstrap';
import ModalComp from '../../../../../components/Modal/ModalComp';
import DeleteKeycap from '../delete/DeleteKeycap';
import { IModalStateType, IShowKeycapPropsType } from './ShowKeycap.interface';
import UpdateKeycap from '../update/UpdateKeycap';

const ShowKeycap = ({ keycap, handleSearchKeycap }: IShowKeycapPropsType) => {
  const [showModal, setShowModal] = useState<IModalStateType>({
    updateBtn: 'updateBtn',
    deleteBtn: 'deleteBtn',
    updateToggle: false,
    deleteToggle: false,
    selectedSwitch: null,
  });

  // Update Modal
  const showUpdateModal = () => {
    setShowModal({
      ...showModal,
      updateBtn: 'updateBtn',
      updateToggle: true,
      selectedSwitch: keycap,
    });
  };

  const closeUpdateModal = () => {
    setShowModal({ ...showModal, updateToggle: false });
  };

  // Delete Modal
  const showDeleteModal = () => {
    setShowModal({ ...showModal, deleteToggle: true });
  };

  const closeDeleteModal = () => {
    setShowModal({ ...showModal, deleteToggle: false });
  };

  return (
    <Styles.ShowKeycap>
      <div>
        <img className="keycapCardImage" src={keycap.imageUrl} alt="KeyboardImageError" />
      </div>
      <Card.Title className="cardTitleMain">
        <div className="keycapCardName">{keycap.name}</div>
        <div className="keycapCardDesc">{keycap.desc}</div>
        <div className="keycapCardColor">{keycap.features.color}</div>
        <div className="keycapBtnMain">
          <div className="keycapBtnSub">
            <button className="keycapUpdateBtn" onClick={showUpdateModal}>
              Update
            </button>
            <button className="keycapDeleteBtn" onClick={showDeleteModal}>
              Delete
            </button>
          </div>
        </div>
      </Card.Title>
      <ModalComp show={showModal} closeModal={closeDeleteModal}>
        <DeleteKeycap
          closeDeleteModal={closeDeleteModal}
          keycap={keycap}
          handleDeleteKeycap={handleSearchKeycap}
        />
      </ModalComp>
      <ModalComp show={showModal} updateBtn={showModal.updateBtn} closeModal={closeUpdateModal}>
        <UpdateKeycap
          closeUpdateModal={closeUpdateModal}
          selectedKeycapInfo={keycap}
          handleSearchKeycap={handleSearchKeycap}
        />
      </ModalComp>
    </Styles.ShowKeycap>
  );
};

export default ShowKeycap;
