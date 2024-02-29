/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './AllProducts.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../product.interface';
import ProductCardComp from '../../../components/productCard/ProductCard';

const AllProducts = () => {
  useEffect(() => {
    const getAllProductsFunc = async () => {
      const response = await fetch('http://localhost:8070/api/allProducts/getAllProducts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      setShowAllProducts(result.result);
    };
    getAllProductsFunc();
  }, []);

  const [showAllProducts, setShowAllProducts] = useState<IProduct[]>([]);

  return (
    <Styles.AllProducts>
      <Container>
        <Row xs={2} md={4} className="rowContainer">
          {showAllProducts.map((product: IProduct) => {
            return (
              <Col key={product.id}>
                <ProductCardComp
                  switchItemName={product.name}
                  switchItemDesc={product.desc}
                  switchItemImageUrl={product.imageUrl}
                  switchItemPrice={product.price}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.AllProducts>
  );
};

export default AllProducts;
