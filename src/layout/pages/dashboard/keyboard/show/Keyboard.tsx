import React from 'react';
import { IKeyboardInputStateType } from '../create/CreateKeyboard.interface';
import DeleteKeyboard from '../delete/DeleteKeyboard';

interface IKeyboardProps {
  keyboardInfo: IKeyboardInputStateType;
}

const Keyboard = ({ keyboardInfo }: IKeyboardProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
      <div>KeyboardName : {keyboardInfo.keyboardName}</div>
      <div>keyboardDesc : {keyboardInfo.keyboardDesc}</div>
      <img src={keyboardInfo.keyboardImageUrl} alt="keyboard" />
      <DeleteKeyboard
        keyboardId={keyboardInfo.keyboardId}
        keyboardPath={keyboardInfo.keyboardImagePath}
      />
      <button>Update</button>
    </div>
  );
};

export default Keyboard;
