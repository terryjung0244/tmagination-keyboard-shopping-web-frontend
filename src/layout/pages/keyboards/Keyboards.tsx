/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './Keyboards.styled';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import { handleProductSort } from '../../../util/sortProduct';
import SortBox from '../../../components/sortBox/SortBox';

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

  const handleSort = (sortType: string) => {
    const tempKeyboards = [...keyboards];
    setKeyboards(handleProductSort(sortType, tempKeyboards));
  };

  return (
    <Styles.Keyboards>
      <div className="keyboardsText">Keyboards</div>
      <div className="collectionText">Keyboards Collection</div>
      <SortBox handleSort={handleSort} />
      <Row className="rowContainer">
        {keyboards.map((product: IProduct) => {
          return (
            <Col xs={12} md={4} key={product.id}>
              <Link to={`/keyboards/${product.id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Styles.Keyboards>
  );
};

export default Keyboards;
