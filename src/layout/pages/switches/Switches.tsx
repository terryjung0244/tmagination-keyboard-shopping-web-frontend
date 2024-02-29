import React, { useEffect, useState } from 'react';
import * as Styles from './Switches.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../product.interface';
import ProductCard from '../../../components/productCard/ProductCard';

const Switches = () => {
  const [switches, setSwitches] = useState<IProduct[]>([]);

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
    };
    getAllSwitches();
  }, []);

  return (
    <Styles.Switches>
      <Container>
        <Row xs={2} md={4} className="rowContainer">
          {switches.map((switchItem: IProduct) => {
            console.log(switchItem);
            return (
              <Col key={switchItem.id}>
                <ProductCard
                  switchItemName={switchItem.name}
                  switchItemDesc={switchItem.desc}
                  switchItemImageUrl={switchItem.imageUrl}
                  switchItemPrice={switchItem.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.Switches>
  );
};

export default Switches;
