/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './ProductCard.styled';
import { IProduct } from '../../type/product.interface';

interface IProductCardPropsType {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardPropsType) => {
  // useEffect(() => {
  //   handleGetAllInfo();
  // });

  // const handleGetAllInfo = async () => {
  //   const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const result = await response.json();
  //   console.log(result);
  // };
  return (
    <Styles.Createkeyboard>
      <div className="cardMain">
        {product.stock === '0' && <div className="cardOutOfStock">Out of Stock</div>}
        <img className="cardImageUrl" src={product.imageUrl} alt="SwitchImageError" />
        <div className="cardName">{product.name}</div>
        <div className="cardPrice">${product.price}</div>
      </div>
    </Styles.Createkeyboard>
  );
};

export default ProductCard;
