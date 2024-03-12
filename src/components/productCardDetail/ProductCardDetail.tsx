import React from 'react';
import * as Styles from './ProductCardDetail.styled';
import { IProduct } from '../../type/product.interface';

interface IProductCardDetailProps {
  productDetail: IProduct;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
}

const ProductCardDetail = ({
  productDetail,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IProductCardDetailProps) => {
  console.log(productDetail);
  return (
    <Styles.ProductCardDetail>
      <div className="imageMain">
        <img className="imageContainer" src={productDetail.imageUrl} alt="productImage" />
      </div>
      <div>
        <div>{productDetail.category}</div>
        <div>
          <div>{productDetail.name}</div>
          <div>{productDetail.price}</div>
        </div>
        <div>
          <div>Switches</div>
          <button>Red</button>
          <button>Yellow</button>
          <button>Brown</button>
          <button>Blue</button>
          <button>Black</button>
        </div>
        <div>
          <button onClick={handleIncreaseQuantity}>-</button>
          <div>{productDetail.stock}</div>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <div>{productDetail.desc}</div>
      </div>
    </Styles.ProductCardDetail>
  );
};

export default ProductCardDetail;
