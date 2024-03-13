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
      setSwitchString('switch');
    };
    getAllSwitches();
  }, []);

  return (
    <Styles.Switches>
      <Container>
        <Row xs={12} md={3} className="rowContainer">
          {switches.map((switchItem: IProduct) => {
            return (
              <Col xs={12} md={3} key={switchItem.id}>
                <Link to={`/switches/${switchItem.id}`} state={{ switchItem, switchString }}>
                  <ProductCard product={switchItem} />
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
