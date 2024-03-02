/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { SwitchModal } from '../../layout/pages/dashboard/switch/switchIndex/SwitchIndex.interface';

// import {
//   DeleteSwitchModal,
//   UpdateSwitchModal,
// } from '../../layout/pages/dashboard/switch/switchIndex/SwitchIndex.interface';

interface IModalCompProps {
  updateBtn?: string;
  deleteBtn?: string;
  show: SwitchModal;
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}

const ModalComp = ({ show, updateBtn, deleteBtn, closeModal, children }: IModalCompProps) => {
  if (updateBtn === 'updateBtn') {
    return (
      <Modal show={show.updateToggle} onHide={closeModal}>
        {children}
      </Modal>
    );
  }

  return (
    <Modal size="sm" show={show.deleteToggle} onHide={closeModal}>
      {children}
    </Modal>
  );
};

export default ModalComp;
