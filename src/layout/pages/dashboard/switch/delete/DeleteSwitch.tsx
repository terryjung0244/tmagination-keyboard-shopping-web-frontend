import React from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import Button from 'react-bootstrap/Button';

interface IDeleteSwitchProps {
  switchId: string;
  switchName: string;
  switchImagePath: string;
  handleShowSwitch: () => void;
}

const DeleteSwitch = ({
  switchId,
  switchName,
  switchImagePath,
  handleShowSwitch,
}: IDeleteSwitchProps) => {
  // Delete
  const handleDeleteSwitch = async () => {
    // 1. Firebase
    const storage = getStorage();
    const desertRef = ref(storage, switchImagePath);
    try {
      await deleteObject(desertRef);
    } catch (err) {
      console.log(err);
    }

    // 2. MongoDB
    const response = await fetch(
      `http://localhost:8070/api/switch/deleteSwitch?selectedSwitchId=${switchId}&selectedSwitchName=${switchName}`,
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
    <div>
      <Button onClick={handleDeleteSwitch}>Delete</Button>
    </div>
  );
};

export default DeleteSwitch;
