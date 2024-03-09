/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './Keyboards.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
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
        <Row className="rowContainer">
          {keyboards.map((keyboard: IProduct) => {
            return (
              <Col xs={12} md={4} key={keyboard.id}>
                <Link to={`/keyboards/${keyboard.id}`}>
                  <ProductCardComp product={keyboard} />
                </Link>
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
