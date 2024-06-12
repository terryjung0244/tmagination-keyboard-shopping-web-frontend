import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import * as Styles from './DeleteSwitch.styled';
import { IProduct } from '../../../../../type/product.interface';
import { deleteSwitchesAPI } from '../../../../../service/api/switches';

export interface IDeleteSwitchProps {
  // switchId: string;
  // switchName: string;
  // switchImagePath: string;
  // handleShowSwitch: () => void;
  // closeModal: () => void;
  selectedSwitch: IProduct;
  handleShowSwitch: () => void;
  closeModal: () => void;
}

const DeleteSwitch = ({
  // switchId,
  // switchName,
  // switchImagePath,
  // handleShowSwitch,
  closeModal,
  selectedSwitch,
  handleShowSwitch,
}: IDeleteSwitchProps) => {
  console.log(selectedSwitch);
  // Delete
  const handleDeleteSwitch = async () => {
    // 1. Firebase
    const storage = getStorage();
    const desertRef = ref(storage, selectedSwitch.imagePath);
    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }

    // 2. MongoDB
    await deleteSwitchesAPI(selectedSwitch);
    handleShowSwitch();
    closeModal();
  };

  const handleCancelModal = () => {
    closeModal();
  };

  return (
    <Styles.DeleteSwitch>
      <div className="messageContainer">
        <h2>Delete this switch?</h2>
        <div className="btnMain">
          <button className="switchDeleteBtn" onClick={handleDeleteSwitch}>
            Delete
          </button>
          <button className="switchDeleteBtn" onClick={handleCancelModal}>
            Cancel
          </button>
        </div>
      </div>
    </Styles.DeleteSwitch>
  );
};

export default DeleteSwitch;
