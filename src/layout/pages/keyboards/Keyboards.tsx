/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteObject, getStorage, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState<any>([]);
  useEffect(() => {
    const getAllKeyboards = async () => {
      const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setKeyboards(result.result);
    };
    getAllKeyboards();
  }, [keyboards]);

  const deleteKeyboard = async (keyboard: any) => {
    try {
      // Delete keyboard in mongoDB
      await fetch(
        `http://localhost:8070/api/keyboard/deleteKeyboard?keyboardId=${keyboard.keyboardId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(keyboard); // delete을 눌렀을때 마다 해당 키보드가 선택되는거 확인.

      // Delete image in Firebase Storage
      const storage = getStorage();
      const desertRef = ref(storage, keyboard.keyboardImageUrl);

      try {
        await deleteObject(desertRef);
      } catch (err) {
        console.log(err);
      }

      // Get All Keyboards List
      setKeyboards([]);
    } catch (err) {
      JSON.stringify(err);
      console.log(err);
    }
  };

  return (
    <div>
      {keyboards.map((keyboard: any) => {
        return (
          <div key={keyboard.keyboardId}>
            <h3>{keyboard.keyboardName}</h3>
            <img
              src={keyboard.keyboardImageUrl}
              style={{ width: '200px', height: '100px' }}
              alt={keyboard.keyboardName}
            />
            <button onClick={() => deleteKeyboard(keyboard)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Keyboards;
