import React, { useEffect, useState } from 'react';
import * as Styles from './Switches.styled';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IProduct, IProductResponse } from '../../../type/product.interface';
import ProductCard from '../../../components/productCard/ProductCard';
import { Link } from 'react-router-dom';
import SortBox from '../../../components/sortBox/SortBox';
import { handleProductSort } from '../../../util/sortProduct';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getAllSwitchesAPI } from '../../../service/api/switches';

const Switches = () => {
  const [switches, setSwitches] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllSwitches = async () => {
      const result: IProductResponse = await getAllSwitchesAPI();
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
      <div className="collectionText">Switches Collection</div>
      <SortBox handleSort={handleSort} />
      <Row className="rowContainer">
        {switches.map((product: IProduct) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Link to={`/switches/${product.id}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Styles.Switches>
  );
};

export default Switches;
