import React, { useEffect, useState } from 'react';
import * as Styles from './Keycap.styled';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCardComp from '../../../components/productCard/ProductCard';

const Keycaps = () => {
  const [keycaps, setKeycaps] = useState<IProduct[]>([]);
  useEffect(() => {
    const getAllKeycaps = async () => {
      const response = await fetch('http://localhost:8070/api/keycap/getAllKeycaps', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setKeycaps(result.result);
    };
    getAllKeycaps();
  });

  return (
    <Styles.Keycap>
      <Container>
        <Row className="rowContainer">
          {keycaps.map((keycap: IProduct) => {
            return (
              <Col xs={12} md={4} key={keycap.id}>
                <Link to={`/keyboards/${keycap.id}`}>
                  <ProductCardComp product={keycap} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.Keycap>
  );
};

export default Keycaps;
