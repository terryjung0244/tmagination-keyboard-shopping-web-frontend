/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteObject, getStorage, ref } from 'firebase/storage';
import { useState } from 'react';
// import React, { useEffect, useState } from 'react';

const DeleteKeyboard = () => {
  const [deleteKeyboardTitle, setDeleteKeyboardTitle] = useState<string>('');
  // useEffect(() => {
  //   const getAllKeyboards = async () => {
  //     const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const result = await response.json();

  //   };
  //   getAllKeyboards();
  // }, []);

  const handleDeleteKeyboard = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteKeyboardTitle(e.target.value);
  };

  const handleSearchKeyboard = async () => {
    if (!deleteKeyboardTitle) {
      alert('Please input keyboard Title');
      return;
    }
    const response = await fetch(
      `http://localhost:8070/api/keyboard/searchKeyboards?category=keyboard&title=${deleteKeyboardTitle}`,
    );
    console.log(deleteKeyboardTitle);
    // console.log('1');
  };
 
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
      console.log(); // delete을 눌렀을때 마다 해당 키보드가 선택되는거 확인.

      // Delete image in Firebase Storage
      const storage = getStorage();
      const desertRef = ref(storage)

      try {
        await deleteObject(desertRef);
      } catch (err) {
        console.log(err);
      }

      // Get All Keyboards List
      // setKeyboards();
    } catch (err) {
      JSON.stringify(err);
      console.log(err);
    }
  };

  return (
    <div>
      <hr />
      <h3 style={{ fontWeight: 'bold', margin: '15px 0' }}>[[ Delete Keyboard ]]</h3>
      <input
        name="a"
        value={deleteKeyboardTitle}
        placeholder="Keyboard Title"
        onChange={handleDeleteKeyboard}
      />
      <button onClick={handleSearchKeyboard}>Search Keyboard</button>
      {/* <button onClick={deleteKeyboard}>Delete</button> */}
    </div>
  );
};

export default DeleteKeyboard;
