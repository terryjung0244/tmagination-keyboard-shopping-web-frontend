/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './AllProducts.styled';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import SortBox from '../../../components/sortBox/SortBox';
import { Link } from 'react-router-dom';
import { handleProductSort } from '../../../util/sortProduct';

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
    setShowAllProducts(handleProductSort(sortType, tempAllProducts));
  };

  return (
    <Styles.AllProducts>
      <div className="allProductsText">All Products</div>
      <div className="allProductsCollectionText">All Products Collection</div>

      <SortBox handleSort={handleSort} />
      <Row className="rowContainer">
        {showAllProducts.map((product: IProduct) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`/allproducts/${product.id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Styles.AllProducts>
  );
};

export default AllProducts;
