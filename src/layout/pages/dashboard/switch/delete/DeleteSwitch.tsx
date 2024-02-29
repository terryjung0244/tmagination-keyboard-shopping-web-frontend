import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import * as Styles from './DeleteSwitch.styled';
import { IProduct } from '../../../../../product.interface';

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
  // closeModal,
  selectedSwitch,
  handleShowSwitch,
}: IDeleteSwitchProps) => {
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
    const response = await fetch(
      `http://localhost:8070/api/switch/deleteSwitch?selectedSwitchId=${selectedSwitch.id}&selectedSwitchName=${selectedSwitch.name}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const result = await response.json();
    console.log(result);
    handleShowSwitch();
  };

  return (
    <Styles.DeleteSwitch>
      <h3>Are you sure to delete?</h3>
      <button className="switchDeleteBtn" onClick={handleDeleteSwitch}>
        Delete
      </button>
    </Styles.DeleteSwitch>
  );
};

export default DeleteSwitch;
