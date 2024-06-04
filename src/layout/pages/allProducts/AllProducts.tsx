/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './AllProducts.styled';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct, IProductResponse } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import SortBox from '../../../components/sortBox/SortBox';
import { Link } from 'react-router-dom';
import { handleProductSort } from '../../../util/sortProduct';
import { getAllProductsApi } from '../../../service/api/allProducts';

const AllProducts = () => {
  const [showAllProducts, setShowAllProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllProductsFunc = async () => {
      const allProducts: IProductResponse = await getAllProductsApi();
      setShowAllProducts(allProducts.result);
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
      <div className="collectionText">All Products Collection</div>
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
