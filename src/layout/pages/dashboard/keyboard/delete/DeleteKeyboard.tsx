/* eslint-disable @typescript-eslint/no-unused-vars */
import { deleteObject, getStorage, ref } from 'firebase/storage';
import React from 'react';

interface IDeleteKeyboardProps {
  keyboardId: string;
  keyboardPath: string;
}

const DeleteKeyboard = ({ keyboardId, keyboardPath }: IDeleteKeyboardProps) => {
  const onClickDeleteKeyboard = async () => {
    console.log(keyboardId);
    console.log(keyboardPath);
    // // storage 지우기

    const storage = getStorage();
    const desertRef = ref(storage, keyboardPath);

    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }

    // mongoDB 지우기
    // a1 꺼 다시 부르고 위로 올리기 (a1 여기로 보내야 함.)
  };

  return (
    <div>
      <button onClick={onClickDeleteKeyboard}>Delete</button>
    </div>
  );
};

export default DeleteKeyboard;
