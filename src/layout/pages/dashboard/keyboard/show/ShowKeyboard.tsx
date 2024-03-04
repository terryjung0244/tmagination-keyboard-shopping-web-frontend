/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import DeleteKeyboard from '../delete/DeleteKeyboard';
import * as Styles from './ShowKeyboard.styled';
import Card from 'react-bootstrap/Card';
import { IProduct } from '../../../../../type/product.interface';
import ModalComp from '../../../../../components/Modal/ModalComp';
import UpdateKeyboard from '../update/UpdateKeyboard';

interface IKeyboardProps {
  keyboardInfo: IProduct;
  deletedKeyboardFromKeyboard: () => void;
  updateModal?: string;
  handleShowKeyboard: () => void;
}

export interface IModalStateType {
  deleteBtn?: string;
  updateBtn?: string;
  updateToggle: boolean;
  deleteToggle: boolean;
  selectedKeyboard: IProduct | null;
}

const ShowKeyboard = ({
  keyboardInfo,
  deletedKeyboardFromKeyboard,
  handleShowKeyboard,
}: IKeyboardProps) => {
  console.log(keyboardInfo);
  // const [showSearchedKeyboard, setShowSearchedKeyboard] = useState<IProduct[]>([]);
  // const [searchedInput, setSearchedInput] = useState<string>('');

  const [showModal, setShowModal] = useState<IModalStateType>({
    deleteBtn: 'deleteBtn',
    updateBtn: 'updateBtn',
    updateToggle: false,
    deleteToggle: false,
    selectedKeyboard: null,
  });

  const deletedKeyboard = () => {
    deletedKeyboardFromKeyboard();
  };

  // UPDATE MODAL
  const showUpdateModal = () => {
    setShowModal({ ...showModal, updateToggle: true, selectedKeyboard: keyboardInfo });
  };

  const closeUpdateModal = () => {
    setShowModal({ ...showModal, updateToggle: false });
  };

  return (
    <Styles.ShowKeyboard>
      <div>
        <img className="keyboardCardImage" src={keyboardInfo.imageUrl} alt="KeyboardImageError" />
      </div>

      <Card.Title className="cardTitleMain">
        <div className="keyboardCardName">{keyboardInfo.name}</div>
        <div className="keyboardCardDesc">{keyboardInfo.desc}</div>
        <div className="keyboardCardColor">{keyboardInfo.features.color}</div>
        <div className="keyboardCardSwitch">{keyboardInfo.features.switch}</div>
        <div className="keyboardBtnMain">
          <button className="keyboardUpdateBtn" onClick={showUpdateModal}>
            Update
          </button>
          <DeleteKeyboard
            keyboardId={keyboardInfo.id}
            keyboardPath={keyboardInfo.imagePath}
            deletedKeyboard={deletedKeyboard}
          />
        </div>
      </Card.Title>

      <ModalComp
        show={showModal}
        updateBtn={showModal.updateBtn as string}
        closeModal={closeUpdateModal}
      >
        <UpdateKeyboard
          selectedKeyboard={showModal.selectedKeyboard as IProduct}
          closeModal={closeUpdateModal}
          handleShowKeyboard={handleShowKeyboard}
        />
      </ModalComp>
    </Styles.ShowKeyboard>
  );
};

export default ShowKeyboard;
