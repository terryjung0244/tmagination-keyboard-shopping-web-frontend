import React from 'react';
import DeleteKeyboard from '../delete/DeleteKeyboard';
import * as Styles from './ShowKeyboard.styled';
import Card from 'react-bootstrap/Card';
import { IProduct } from '../../../../../product.interface';

interface IKeyboardProps {
  keyboardInfo: IProduct;
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
          <img className="keyboardCardImage" src={keyboardInfo.imageUrl} alt="keyboard" />
          <Card.Title>
            <div className="keyboardCardNameFont">Name : {keyboardInfo.name}</div>
            <div className="keyboardCardDescFont">Desc : {keyboardInfo.desc}</div>
          </Card.Title>
          <DeleteKeyboard
            keyboardId={keyboardInfo.id}
            keyboardPath={keyboardInfo.imagePath}
            deletedKeyboard={deletedKeyboard}
          />
          <button className="keyboardUpdateBtn">Update</button>
        </Card.Body>
      </Card>
    </Styles.ShowKeyboard>
  );
};

export default ShowKeyboard;
