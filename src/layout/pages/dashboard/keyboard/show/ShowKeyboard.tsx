import React from 'react';
import { IKeyboardInputStateType } from '../create/CreateKeyboard.interface';
import DeleteKeyboard from '../delete/DeleteKeyboard';
import * as Styles from './ShowKeyboard.styled';
import Card from 'react-bootstrap/Card';

interface IKeyboardProps {
  keyboardInfo: IKeyboardInputStateType;
  deletedKeyboardFromKeyboard: () => void;
}

const ShowKeyboard = ({ keyboardInfo, deletedKeyboardFromKeyboard }: IKeyboardProps) => {
  const deletedKeyboard = () => {
    deletedKeyboardFromKeyboard();
  };

  return (
    <Styles.ShowKeyboard>
      <Card className="keyboardCard">
        <Card.Body>
          <img className="keyboardCardImage" src={keyboardInfo.keyboardImageUrl} alt="keyboard" />
          <Card.Title>
            <div className="keyboardCardNameFont">Name : {keyboardInfo.keyboardName}</div>
            <div className="keyboardCardDescFont">Desc : {keyboardInfo.keyboardDesc}</div>
          </Card.Title>
          <DeleteKeyboard
            keyboardId={keyboardInfo.keyboardId}
            keyboardPath={keyboardInfo.keyboardImagePath}
            deletedKeyboard={deletedKeyboard}
          />
          <button className="keyboardUpdateBtn">Update</button>
        </Card.Body>
      </Card>
    </Styles.ShowKeyboard>
  );
};

export default ShowKeyboard;
