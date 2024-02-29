import React from 'react';
import DeleteKeyboard from '../delete/DeleteKeyboard';
import * as Styles from './ShowKeyboard.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../../../product.interface';
import ProductCard from '../../../../../components/productCard/ProductCard';

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
      <Container>
        <Row xs={2} md={4} className="keyboardCard">
          <ProductCard product={keyboardInfo} />
          <button className="keyboardUpdateBtn">Update</button>
          <DeleteKeyboard
            keyboardId={keyboardInfo.id}
            keyboardPath={keyboardInfo.imagePath}
            deletedKeyboard={deletedKeyboard}
          />
        </Row>
      </Container>
    </Styles.ShowKeyboard>
  );
};

export default ShowKeyboard;
