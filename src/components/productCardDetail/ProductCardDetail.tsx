/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import * as Styles from './ProductCardDetail.styled';
import { IProduct } from '../../type/product.interface';
import minus from './../../assets/minus.png';
import plus from './../../assets/plus.png';
import saleIcon from '../../assets/sale.png';
import { productDetailOptions } from './ProductDetailOptions';

interface IProductCardDetailProps {
  quantityState: number;
  productDetail: IProduct;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
  handleDisocuntPrice: () => number;
  handleAddToCart: (product: IProduct) => void;
}

const ProductCardDetail = ({
  quantityState,
  productDetail,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleDisocuntPrice,
  handleAddToCart,
}: IProductCardDetailProps) => {
  useEffect(() => {
    handleShowfFeatures();
  }, []);

  const handleShowfFeatures = () => {
    console.log('1');
  };

  return (
    <Styles.ProductCardDetail>
      <div className="imageMainBox">
        <img className="imageBox" src={productDetail.imageUrl} alt="productImage" />
        <div className="descBox">{productDetail.desc}</div>
      </div>
      <div className="rightSideMainBox">
        <div className="categoryBox">{productDetail.category}</div>
        <div className="namePriceBoxMain">
          <div className="nameBox">{productDetail.name}</div>
          {productDetail.discountRate !== '0' ? (
            <div className="priceBox">
              <span className="discountPriceBox">${handleDisocuntPrice()}</span>
              <span>
                <img className="saleImageBox" src={saleIcon} alt="saleImage" />
              </span>
              <span className="originalPriceBox">${productDetail.price}</span>
            </div>
          ) : (
            <div className="priceWithoutDiscountBox">${handleDisocuntPrice()}</div>
          )}
          <div className="instockBox">{productDetail.stock} In stock </div>
        </div>
        {Object.keys(productDetail.features).map((feature: any) => {
          return (
            <div className="switchSelectMainBox" key={feature}>
              <div className="switchesNameBox">{feature}</div>
              {productDetailOptions[feature].list.map((el: string) => {
                return (
                  <button className="switchSelectColorBox" key={el}>
                    {el}
                  </button>
                );
              })}
            </div>
          );
        })}
        <div className="quantityAndCartBox">
          <div className="quantityMainBox">
            <div className="quantityBox">
              <div className="quantityControlBox" onClick={handleDecreaseQuantity}>
                <img className="quantityImageBox" src={minus} alt="minusImage" />
              </div>
              <div className="quantityStockBox">{quantityState}</div>
              <div className="quantityControlBox" onClick={handleIncreaseQuantity}>
                <img className="quantityImageBox" src={plus} alt="plusImage" />
              </div>
            </div>
          </div>
          <div className="cartBox" onClick={() => handleAddToCart(productDetail)}>
            Add to Cart
          </div>
        </div>
        <div className="checkoutBtnMainBox">
          <div className="checkoutBtnBox">Proceed to Check out</div>
        </div>
      </div>
    </Styles.ProductCardDetail>
  );
};

export default ProductCardDetail;
