/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styled from './AllProductsIndex.Styled';
import { deleteAllProductsAPI, getAllProductsAPI } from '../../../../../service/api/allProducts';
import { Col, Row } from 'react-bootstrap';
import { IProduct } from '../../../../../type/product.interface';
import { Link } from 'react-router-dom';
import ProductCard from '../../../../../components/productCard/ProductCard';
import { deleteObject, getStorage, ref } from 'firebase/storage';
// import { IModalStateType } from '../../keycap/show/ShowKeycap.interface';
// import DeleteAllProducts from '../delete/DeleteAllProducts';
// import ModalComp from '../../../../../components/Modal/ModalComp';

const AllProductsIndex = () => {
  const [showAllProducts, setShowAllProducts] = useState<IProduct[]>([]);
  // const [showModal, setShowModal] = useState<IModalStateType>({
  //   deleteBtn: 'deleteBtn',
  //   deleteToggle: false,
  // });

  useEffect(() => {
    const getAllProducts = async () => {
      const allProducts = await getAllProductsAPI();
      setShowAllProducts(allProducts.result);
    };
    getAllProducts();
  }, []);

  console.log(showAllProducts);

  const handleDeleteAllProducts = async () => {
    const result = showAllProducts.map((product) => {
      return product.imagePath;
    });
    // Firebase
    const storage = getStorage();
    const desertRef = result.map((path) => {
      return ref(storage, path);
    });

    desertRef.map(async (ref) => {
      console.log(ref);
      await deleteObject(ref);
    });

    // MongoDB
    await deleteAllProductsAPI();
  };

  // const closeDeleteModal = () => {
  //   setShowModal({ ...showModal, deleteToggle: false });
  // };

  return (
    <Styled.AllProductsIndex>
      {showAllProducts.length > 0 ? (
        <div className="deleteAllProducts" onClick={handleDeleteAllProducts}>
          Delete All
        </div>
      ) : (
        <div className="noProductsText">No Products</div>
      )}
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
      {/* <ModalComp show={showModal} closeModal={closeDeleteModal}>
        <DeleteAllProducts closeDeleteModal={closeDeleteModal} />
      </ModalComp> */}
    </Styled.AllProductsIndex>
  );
};

export default AllProductsIndex;
