/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import * as Styles from './DeleteKeyboard.styled';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { deleteKeyboardAPI } from '../../../../../service/api/keyboards';

interface IDeleteKeyboardProps {
  keyboardId: string;
  keyboardPath: string;
  deletedKeyboard: () => void;
  closeDeleteModal: () => void;
}

const DeleteKeyboard = ({
  keyboardId,
  keyboardPath,
  deletedKeyboard,
  closeDeleteModal,
}: IDeleteKeyboardProps) => {
  const onClickDeleteKeyboard = async () => {
    // Delete images in Firebase storage
    const storage = getStorage();
    const desertRef = ref(storage, keyboardPath);
    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }

    try {
      await deleteKeyboardAPI(keyboardId); // Delete
    } catch (err) {
      console.log(err);
    }
    deletedKeyboard();
  };

  const handleCancelModal = () => {
    closeDeleteModal();
  };

  return (
    <Styles.DeleteKeyboard>
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
    </Styles.DeleteKeyboard>
  );
};

export default DeleteKeyboard;
