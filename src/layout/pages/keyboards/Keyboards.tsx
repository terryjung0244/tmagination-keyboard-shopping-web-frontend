/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import * as Styles from './Keyboards.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../product.interface';
import ProductCardComp from '../../../components/productCard/ProductCard';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState<IProduct[]>([]);
  useEffect(() => {
    const getAllKeyboards = async () => {
      const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      setKeyboards(result.result);
    };
    getAllKeyboards();
  }, []);

  return (
    <Styles.Keyboards>
      <Container>
        <Row xs={2} md={4} className="rowContainer">
          {keyboards.map((keyboard: IProduct) => {
            return (
              <Col key={keyboard.id}>
                <ProductCardComp product={keyboard} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.Keyboards>
  );
};

export default Keyboards;

// export const calculateDiscountRate = (price: string, discountRate: number) => {
//   return parseInt(price) - parseInt(price) * discountRate;
// };

// UI
// GetAllProducts
// 복습 겸 keycaps & accessories (CRUD)

// 재고
