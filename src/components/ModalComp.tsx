import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import { ISwitch } from '../layout/pages/switches/Switches.interface';
import { UpdateSwitchModal } from '../layout/pages/dashboard/switch/SwitchIndex';

interface IModalCompProps {
  show: UpdateSwitchModal; // UpdateSwitchModal | UpdateSwitchModal 이런식으로 될 듯
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}

const ModalComp = ({ show, closeModal, children }: IModalCompProps) => {
  return (
    <>
      <Modal show={show.toggle} onHide={closeModal}>
        {children}
      </Modal>
    </>
  );
};

export default ModalComp;
