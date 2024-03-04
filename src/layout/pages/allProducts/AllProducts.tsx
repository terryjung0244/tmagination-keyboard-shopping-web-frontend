/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './AllProducts.styled';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import SortingBox from '../../../components/sortBox/SortBox';
import { ISortFilter } from '../../../type/sortFilter.interface';

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
  const [sortFilter, setSortFilter] = useState<ISortFilter>({
    nameSort: false,
    priceSort: false,
  });

  return (
    <Styles.AllProducts>
      <Container>
        <SortingBox sortFilter={sortFilter} />
        <Row className="rowContainer">
          {showAllProducts.map((product: IProduct) => {
            return (
              <Col xs={12} md={3} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Styles.AllProducts>
  );
};

export default AllProducts;
