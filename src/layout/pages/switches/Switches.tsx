import React, { useEffect, useState } from 'react';
import * as Styles from './Switches.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import { Link } from 'react-router-dom';
import SortBox from '../../../components/sortBox/SortBox';
import { handleProductSort } from '../../../util/sortProduct';

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

  const handleSort = (SortType: string) => {
    const tempSwitches = [...switches];
    setSwitches(handleProductSort(SortType, tempSwitches));
  };

  return (
    <Styles.Switches>
      <div className="switchesText">Switches</div>
      <Container>
        <SortBox handleSort={handleSort} />
        <Row className="rowContainer">
          {switches.map((product: IProduct) => {
            return (
              <Col xs={12} md={4} key={product.id}>
                <Link to={`/switches/${product.id}`} state={{ product }}>
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
