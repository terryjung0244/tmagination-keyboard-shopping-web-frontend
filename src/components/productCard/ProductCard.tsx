/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './ProductCard.styled';
import { IProduct } from '../../type/product.interface';

interface IProductCardPropsType {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardPropsType) => {
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
