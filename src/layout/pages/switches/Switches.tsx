import React, { useEffect, useState } from 'react';
import * as Styles from './Switches.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import { Link } from 'react-router-dom';

const Switches = () => {
  const [switches, setSwitches] = useState<IProduct[]>([]);
  const [switchString, setSwitchString] = useState<string>('');

  useEffect(() => {
    const getAllSwitches = async () => {
      const response = await fetch('http://localhost:8070/api/switch/getAllSwitches', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(switches);
      setSwitches(result.result);
      setSwitchString('switches');
    };
    getAllSwitches();
  }, []);

  return (
    <Styles.Switches>
      <Container>
        <Row className="rowContainer">
          {switches.map((product: IProduct) => {
            return (
              <Col xs={12} md={3} key={product.id}>
                <Link to={`/switches/${product.id}`} state={{ product, switchString }}>
                  <ProductCard product={product} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.Switches>
  );
};

export default Switches;
