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
import SortBox from '../../../components/sortBox/SortBox';

const AllProducts = () => {
  const [showAllProducts, setShowAllProducts] = useState<IProduct[]>([]);

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

  const handleSort = (sortType: string) => {
    const tempAllProducts = [...showAllProducts];
    tempAllProducts.sort((a: IProduct, b: IProduct) => {
      if (sortType === 'name') {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      }
      if (sortType === 'price') {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
      }
      return 0;
    });
    setShowAllProducts(tempAllProducts);
  };

  return (
    <Styles.AllProducts>
      <Container>
        <SortBox handleSort={handleSort} />
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
