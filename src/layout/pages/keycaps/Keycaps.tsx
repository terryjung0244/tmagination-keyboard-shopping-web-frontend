/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import * as Styles from './Keycap.styled';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import SortBox from '../../../components/sortBox/SortBox';
import { handleProductSort } from '../../../util/sortProduct';

const Keycaps = () => {
  const [keycaps, setKeycaps] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllKeycaps = async () => {
      const response = await fetch('http://localhost:8070/api/keycap/getAllKeycaps', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setKeycaps(result.result);
    };
    getAllKeycaps();
  }, []);

  const handleSort = (sortType: string) => {
    const tempKeycaps = [...keycaps];
    setKeycaps(handleProductSort(sortType, tempKeycaps));
  };

  console.log(keycaps);
  return (
    <Styles.Keycap>
      <div className="keycapsText">Keycaps</div>
      <div className="collectionText">Keycaps Collection</div>
      <SortBox handleSort={handleSort} />
      <Row className="rowContainer">
        {keycaps.map((product: IProduct) => {
          return (
            <Col xs={12} md={4} key={product.id}>
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

// props {}

// const student = {
//   id: 1,
//   name: 'hong',
// };

// const newStudent = student;
// newStudent.name = 'terry';

// newStudent.name => 'terry';
// student.name => 'terry';

//////////////////////////////////////////////////////////

// const newStudent = { ...student };
// newStudent.name = 'terry';

// newStudent.name => 'terry';
// student.name => 'hong';
