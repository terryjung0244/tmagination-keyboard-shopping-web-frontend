/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import * as Styles from './DeleteKeyboard.styled';
import { deleteObject, getStorage, ref } from 'firebase/storage';

interface IDeleteKeyboardProps {
  keyboardId: string;
  keyboardPath: string;
  deletedKeyboard: () => void;
  // searchKeyboardInfo: string;
}

const DeleteKeyboard = ({ keyboardId, keyboardPath, deletedKeyboard }: IDeleteKeyboardProps) => {
  const onClickDeleteKeyboard = async () => {
    // Delete images in Firebase storage
    const storage = getStorage();
    const desertRef = ref(storage, keyboardPath);
    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }
    // mongoDB 지우기
    try {
      await fetch(`http://localhost:8070/api/keyboard/deleteKeyboard?keyboardId=${keyboardId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
    deletedKeyboard();
  };

  return (
    <Styles.DeleteKeyboard>
      <button onClick={onClickDeleteKeyboard}>Delete</button>
    </Styles.DeleteKeyboard>
  );
};

export default DeleteKeyboard;
