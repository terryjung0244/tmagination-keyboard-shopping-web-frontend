import React from 'react';
// import { deleteObject, getStorage, ref } from 'firebase/storage';
import { useState } from 'react';

const DeleteKeyboard = () => {
  const [deleteKeyboardTitle, setDeleteKeyboardTitle] = useState<string>('');

  const handleDeleteKeyboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeleteKeyboardTitle(e.target.value);
  };

  const handleSearchKeyboard = async () => {
    if (!deleteKeyboardTitle) {
      alert('Please input keyboard Title');
      return;
    }

    try {
      await fetch(
        `http://localhost:8070/api/keyboard/searchKeyboards?category=keyboard&title=${deleteKeyboardTitle}`,
      );
    } catch (err) {
      console.log(err);
    }

    // Delete keyboard in mongoDB

    // Delete image in Firebase Storage
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
    </div>
  );
};

export default DeleteKeyboard;
