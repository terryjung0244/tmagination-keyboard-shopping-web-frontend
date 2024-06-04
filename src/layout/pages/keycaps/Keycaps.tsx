import React, { useEffect, useState } from 'react';
import * as Styles from './Keycap.styled';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct, IProductResponse } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import SortBox from '../../../components/sortBox/SortBox';
import { handleProductSort } from '../../../util/sortProduct';
import { getAllKeycapsAPI } from '../../../service/api/keycaps';

const Keycaps = () => {
  const [keycaps, setKeycaps] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllKeycaps = async () => {
      const result: IProductResponse = await getAllKeycapsAPI();
      console.log(keycaps);
      setKeycaps(result.result);
    };
    getAllKeycaps();
  }, []);

  const handleSort = (sortType: string) => {
    const tempKeycaps = [...keycaps];
    setKeycaps(handleProductSort(sortType, tempKeycaps));
  };

  return (
    <Styles.Keycap>
      <div className="keycapsText">Keycaps</div>
      <div className="collectionText">Keycaps Collection</div>
      <SortBox handleSort={handleSort} />
      <Row className="rowContainer">
        {keycaps.map((product: IProduct) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`/keycaps/${product.id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Styles.Keycap>
  );
};

export default Keycaps;
