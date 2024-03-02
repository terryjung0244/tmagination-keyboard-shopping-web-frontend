import React from 'react';
import DeleteKeyboard from '../delete/DeleteKeyboard';
import * as Styles from './ShowKeyboard.styled';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../../../product.interface';
// import ProductCard from '../../../../../components/productCard/ProductCard';

interface IKeyboardProps {
  keyboardInfo: IProduct;
  deletedKeyboardFromKeyboard: () => void;
}

const ShowKeyboard = ({ keyboardInfo, deletedKeyboardFromKeyboard }: IKeyboardProps) => {
  console.log(keyboardInfo);
  const deletedKeyboard = () => {
    deletedKeyboardFromKeyboard();
  };

  return (
    <Styles.ShowKeyboard>
      <div>
        <img className="keyboardCardImage" src={keyboardInfo.imageUrl} alt="KeyboardImageError" />
      </div>

      <Card.Title className="cardTitleMain">
        <div className="keyboardCardName">{keyboardInfo.name}</div>
        <div className="keyboardCardDesc">{keyboardInfo.desc}</div>
        <div className="keyboardCardColor">{keyboardInfo.features.color}</div>
        <div className="keyboardCardSwitch">{keyboardInfo.features.switch}</div>
        <div className="keyboardBtnMain">
          <button className="keyboardUpdateBtn">Update</button>
          <DeleteKeyboard
            keyboardId={keyboardInfo.id}
            keyboardPath={keyboardInfo.imagePath}
            deletedKeyboard={deletedKeyboard}
          />
        </div>
      </Card.Title>
    </Styles.ShowKeyboard>
  );
};

export default ShowKeyboard;
