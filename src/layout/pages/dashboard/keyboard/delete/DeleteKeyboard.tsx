/* eslint-disable @typescript-eslint/no-unused-vars */
import { deleteObject, getStorage, ref } from 'firebase/storage';
import React from 'react';

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
    <div>
      <button onClick={onClickDeleteKeyboard}>Delete</button>
    </div>
  );
};

export default DeleteKeyboard;
