import React from 'react';
import * as Styles from './DeleteKeycap.styled';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { IProduct } from '../../../../../type/product.interface';

interface IDeleteKeycapProps {
  closeDeleteModal: () => void;
  keycap: IProduct;
  handleDeleteKeycap: () => void;
}

const DeleteKeycap = ({ closeDeleteModal, keycap, handleDeleteKeycap }: IDeleteKeycapProps) => {
  const onClickDeleteKeyboard = async () => {
    const storage = getStorage();
    const desertRef = ref(storage, keycap.imagePath);
    // Firebase
    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }
    // MongoDB
    try {
      await fetch(
        `http://localhost:8070/api/keycap/deleteKeycap?keycapId=${keycap.id}&keycapName=${keycap.name}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
    handleDeleteKeycap();
  };

  const handleCancelModal = () => {
    closeDeleteModal();
  };

  return (
    <Styles.DeleteKeycap>
      <div className="messageContainer">
        <h2>Delete this switch?</h2>
        <div className="btnMain">
          <button className="keyboardDeleteBtn" onClick={onClickDeleteKeyboard}>
            Delete
          </button>
          <button className="keyboardDeleteBtn" onClick={handleCancelModal}>
            Cancel
          </button>
        </div>
      </div>
    </Styles.DeleteKeycap>
  );
};

export default DeleteKeycap;
