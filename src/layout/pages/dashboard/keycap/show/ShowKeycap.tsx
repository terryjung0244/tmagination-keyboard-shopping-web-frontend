import React, { useState } from 'react';
import * as Styles from './ShowKeycap.styled';

import { Card } from 'react-bootstrap';
import ModalComp from '../../../../../components/Modal/ModalComp';
import DeleteKeycap from '../delete/DeleteKeycap';
import { IModalStateType, IShowKeycapPropsType } from './ShowKeycap.interface';

const ShowKeycap = ({ keycap }: IShowKeycapPropsType) => {
  const [showModal, setShowModal] = useState<IModalStateType>({
    updateBtn: 'updateBtn',
    deleteBtn: 'deleteBtn',
    updateToggle: false,
    deleteToggle: false,
    selectedSwitch: null,
  });

  // Update Modal
  const showUpdateModal = () => {
    console.log('1');
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
      {/* <ModalComp>
        <UpdateKeycap />
      </ModalComp> */}
      <ModalComp show={showModal} closeModal={closeDeleteModal}>
        <DeleteKeycap closeDeleteModal={closeDeleteModal} keycap={keycap} />
      </ModalComp>
    </Styles.ShowKeycap>
  );
};

export default ShowKeycap;
